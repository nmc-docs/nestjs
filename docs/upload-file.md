---
sidebar_position: 4
---

# Upload và validate file

:::info

- Trong NestJS, có một pipe là **ParseFilePipe** và một số built-in validator hỗ trợ ta trong việc upload và validate file. Trong bài viết này, ta tập trung chủ yếu vào việc tự tạo ra custom pipe và custom validator cho việc xử lý upload file và validate nó.

:::

## Cài đặt dependency

```bash
npm install file-type-mime
```

:::info

- Thư viện trên để validate đúng kiểu file được upload lên (giả sử nếu người dùng đổi tên file mp4 thành jpg thì khi validate sẽ phát hiện ra được).

:::

```bash
npm install -D @types/multer
```

## Tạo validator

- Sau đây, ta sẽ tạo 4 validator để:
  - Validate bắt buộc phải upload file
  - Validate kích cỡ tối đa của file cần upload
  - Validate số lượng file tối đa được upload
  - Validate kiểu file được upload lên
- Để tạo một custom validator, ta tạo một class và `extends` từ abstract class `FileValidator<T>`. Abstract class này có thuộc tính và phương thức sau và ta bắt buộc phải định nghĩa nó:
  - Thuộc tính `validationOptions`: có kiểu generic là T
  - Phương thức `isValid(files: Express.Multer.File | Express.Multer.File[] | undefined)`: trả về true nếu validate thành công.
  - Phương thức `buildErrorMessage()`: trả về một string là error message khi validate thất bại.

### File required validator

```ts
import { FileValidator } from "@nestjs/common";

interface IFileRequiredValidatorOptions {
  message?: string;
}

export class FileRequiredValidator extends FileValidator<IFileRequiredValidatorOptions> {
  constructor(
    validationOptions: IFileRequiredValidatorOptions = {
      message: "File is required",
    }
  ) {
    super(validationOptions);
  }

  public buildErrorMessage() {
    return this.validationOptions.message || "File is required";
  }

  isValid(files: Express.Multer.File | Express.Multer.File[] | undefined) {
    if (!files) return false;
    if (Array.isArray(files)) return files.length > 0;
    return true;
  }
}
```

### File type validator

```ts
import { FileValidator } from "@nestjs/common";
import * as FileType from "file-type-mime";

interface IFileTypeValidatorOptions {
  fileType: string[];
  message?: string;
}

export class FileTypeValidator extends FileValidator<IFileTypeValidatorOptions> {
  constructor(validationOptions: IFileTypeValidatorOptions) {
    super(validationOptions);
  }

  public buildErrorMessage() {
    return (
      this.validationOptions.message ||
      `File type is not allowed, supported types: ${this.validationOptions.fileType.join(
        ", "
      )}`
    );
  }

  isValid(files: Express.Multer.File | Express.Multer.File[] | undefined) {
    if (this.validationOptions.fileType.length > 0 && files) {
      if (Array.isArray(files)) {
        return files.every((file) => this.validateFileType(file));
      }
      return this.validateFileType(files);
    }
    return true;
  }

  private validateFileType(file: Express.Multer.File) {
    const actualFileType = FileType.parse(file.buffer)?.mime || "";
    console.log("Actual File Type: ", actualFileType);

    return this.validationOptions.fileType.includes(actualFileType);
  }
}
```

### File size validator

```ts
import { FileValidator } from "@nestjs/common";

interface IFileSizeValidatorOptions {
  maxSize: number;
  message?: string;
}

export class FileSizeValidator extends FileValidator<IFileSizeValidatorOptions> {
  constructor(validationOptions: IFileSizeValidatorOptions) {
    super(validationOptions);
  }

  public buildErrorMessage() {
    return (
      this.validationOptions.message ||
      `File size is too large, max size: ${
        this.validationOptions.maxSize / 1024 / 1024
      }MB`
    );
  }

  isValid(files: Express.Multer.File | Express.Multer.File[] | undefined) {
    if (files) {
      if (Array.isArray(files)) {
        return files.every((file) => this.validateFileSize(file));
      }
      return this.validateFileSize(files);
    }
    return true;
  }

  private validateFileSize(file: Express.Multer.File) {
    return file.size <= this.validationOptions.maxSize;
  }
}
```

### File count validator

```ts
import { FileValidator } from "@nestjs/common";

interface IFileCountValidatorOptions {
  maxCount: number;
  message?: string;
}

export class FileCountValidator extends FileValidator<IFileCountValidatorOptions> {
  constructor(validationOptions: IFileCountValidatorOptions) {
    super(validationOptions);
  }

  public buildErrorMessage() {
    return (
      this.validationOptions.message ||
      `You can only upload a maximum of ${this.validationOptions.maxCount} files.`
    );
  }

  isValid(files: Express.Multer.File | Express.Multer.File[] | undefined) {
    if (files) {
      if (Array.isArray(files)) {
        return files.length <= this.validationOptions.maxCount;
      }
      return true;
    }
    return true;
  }
}
```

## Tạo pipe

- Giờ ta sẽ tạo pipe để validate file của từng field trong request bằng các validator ta đã tạo ở trên:

```ts
import { FileValidator } from "@nestjs/common";
import { IFile } from "@nestjs/common/pipes/file/interfaces";

export type TFileValidators = {
  validators: FileValidator<Record<string, any>, IFile>[];
};
```

```ts
import {
  ArgumentMetadata,
  BadRequestException,
  Injectable,
  PipeTransform,
} from "@nestjs/common";

import { TFileValidators } from "src/common/types/pipe.type";

@Injectable()
export class ParseFileFieldsPipe<T> implements PipeTransform {
  constructor(
    private readonly validationSchemas: { [P in keyof T]: TFileValidators }
  ) {}

  transform(
    fileFields: { [K in keyof T]: Express.Multer.File[] },
    metadata: ArgumentMetadata
  ) {
    const fields = Object.keys(this.validationSchemas);
    fields.forEach((field) => {
      const schema = this.validationSchemas[field as keyof T];
      const files = fileFields[field as keyof T];
      schema.validators.forEach((validator) => {
        if (!validator.isValid(files)) {
          throw new BadRequestException((validator as any).buildErrorMessage());
        }
      });
    });
    return fileFields;
  }
}
```

## Tạo decorator

- Tiếp theo, ta sẽ tạo định nghĩa request DTO và tạo decorator:

```ts
import { applyDecorators, UploadedFiles } from "@nestjs/common";
import { IsEmail, IsNotEmpty, IsString } from "class-validator";

import { ParseFileFieldsPipe } from "src/common/pipes/parse-files-fields.pipe";
import { FileCountValidator } from "src/common/validators/file-count.validator";
import { FileRequiredValidator } from "src/common/validators/file-required.validator";
import { FileSizeValidator } from "src/common/validators/file-size.validator";
import { FileTypeValidator } from "src/common/validators/file-type.validator";

export class CreateCustomerDto {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  @IsString()
  @IsEmail()
  email: string;

  @IsNotEmpty()
  password: string;
}

export class CreateCustomerUploadFilesDto {
  avatar: Express.Multer.File[];
  background?: Express.Multer.File[];
}

export const CreateCustomerUploadFiles = () => {
  return applyDecorators(
    UploadedFiles(
      new ParseFileFieldsPipe<CreateCustomerUploadFilesDto>({
        avatar: {
          validators: [
            new FileRequiredValidator({
              message: "Avatar is required",
            }),
            new FileCountValidator({
              maxCount: 1,
              message: "Avatar must be only one",
            }),
            new FileSizeValidator({
              maxSize: 1024 * 1024,
              message: "Avatar file size is too large",
            }),
            new FileTypeValidator({
              fileType: ["image/png", "image/jpg", "image/jpeg"],
              message: "Avatar file type is not allowed",
            }),
          ],
        },
        background: {
          validators: [
            new FileCountValidator({
              maxCount: 1,
              message: "Background must be only one",
            }),
            new FileSizeValidator({
              maxSize: 1024 * 1024,
              message: "Background file size is too large",
            }),
            new FileTypeValidator({
              fileType: ["image/jpg", "image/jpeg"],
              message: "Background file type is not allowed",
            }),
          ],
        },
      })
    ) as PropertyDecorator
  ) as ParameterDecorator;
};
```

## Sử dụng ở trong controller

```ts
import { Body, Controller, Post, UseInterceptors } from "@nestjs/common";
import { FileFieldsInterceptor } from "@nestjs/platform-express";

import { CustomersService } from "src/modules/customers/customers.service";
import {
  CreateCustomerDto,
  CreateCustomerUploadFiles,
  CreateCustomerUploadFilesDto,
} from "src/modules/customers/dto/create-customer.dto";

@Controller("customers")
export class CustomersController {
  constructor(private customerService: CustomersService) {}

  @Post("/create")
  @UseInterceptors(
    FileFieldsInterceptor([{ name: "avatar" }, { name: "background" }])
  )
  async createCustomer(
    @Body()
    body: CreateCustomerDto,

    @CreateCustomerUploadFiles() // Use decorator that we have just created above here
    files: CreateCustomerUploadFilesDto
  ) {
    console.log("File:", files);
    return this.customerService.create(body);
  }
}
```
