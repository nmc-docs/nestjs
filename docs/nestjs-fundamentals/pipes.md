---
sidebar_position: 4
---

# Pipes

## Pipe là gì?

:::info

- Trong NestJS, Pipes là một tính năng rất hữu ích. Pipes là một cơ chế để kiểm tra, chuyển đổi và xác thực dữ liệu trước khi đi vào ứng dụng.
- Một số chức năng chính của Pipes trong NestJS:

1. **Validation** : Pipes có thể được sử dụng để xác thực dữ liệu đầu vào của các endpoint, đảm bảo rằng dữ liệu nhận được là hợp lệ và phù hợp với các quy tắc định sẵn.
2. **Transformation** : Pipes có thể được sử dụng để chuyển đổi dữ liệu đầu vào thành định dạng mong muốn trước khi nó được xử lý bởi controller.
3. **Error Handling** : Pipes có thể bắt và xử lý các lỗi xảy ra trong quá trình xác thực hoặc chuyển đổi dữ liệu, và trả về các thông báo lỗi phù hợp.

- Pipes được sử dụng ở nhiều cấp độ trong NestJS, chẳng hạn như ở cấp độ global, ở cấp độ controller hoặc ở cấp độ method. Ta có thể tạo ra các Pipes custom để đáp ứng các yêu cầu cụ thể của ứng dụng.
- Việc sử dụng Pipes giúp tăng tính đảm bảo và tính nhất quán trong ứng dụng NestJS, đồng thời cũng làm cho code trở nên dễ đọc và bảo trì hơn.

:::

:::note

- Khi ta sử dụng pipe sẵn có hoặc 1 custom pipe do ta tạo ra, mặc dù chúng là 1 service có thể được quản lý bởi hệ thống dependency injection của NestJS (vì có decorator **@Injectable()**), nhưng ta không cần phải cho nó vào mảng provider trong file module, nó sẽ tự động được resolve bởi module.

:::

## Built-in pipes

- Dưới đây là một số pipe được NestJS dựng sẵn:

| Pipe             | Mô tả                                |
| ---------------- | ------------------------------------ |
| ParseIntPipe     | Parse và validate cho kiểu số nguyên |
| ParseFloatPipe   | Parse và validate cho kiểu số thực   |
| ParseBoolPipe    | Parse và validate cho kiểu boolean   |
| ParseArrayPipe   | Parse và validate cho array          |
| ParseUUIDPipe    | Parse và validate cho kiểu UUID      |
| ParseEnumPipe    | Parse và validate cho kiểu enum      |
| ParseFilePipe    | Parse và validate cho kiểu file      |
| DefaultValuePipe | Thiết lập giá trị mặc định           |
| ValidationPipe   | Parse và validate cho object         |

## Ví dụ về Pipe

- Dưới đây là một ví dụ về sử dụng **ParseIntPipe** để validate cũng như transform param "id" về number:

```ts title="customers.controller.ts"
import { Controller, Get, Param, ParseIntPipe } from "@nestjs/common";

import { CustomersService } from "src/modules/customers/customers.service";

@Controller("customers")
export class CustomersController {
  constructor(private customerService: CustomersService) {}

  @Get("/:id")
  getCustomerById(@Param("id", ParseIntPipe) userId: number) {
    console.log("Typeof id: ", typeof userId); // "number"
    return this.customerService.getCustomerById(userId);
  }
}
```

- Trong ví dụ trên, nếu ta gửi request đến endpoint: "/customers/15a", sẽ nhận lại lỗi:

```json
{
  "message": "Validation failed (numeric string is expected)",
  "error": "Bad Request",
  "statusCode": 400
}
```

- Còn khi gửi request đến endpoint: "/customers/15" thì sẽ trả về response, và **userId** sẽ có kiểu là number thay vì string như mặc định do **ParseIntPipe** sẽ tự động chuyển về number.
- Để custom message hay response status code, ta làm như sau:

```ts title="customers.controller.ts"
import {,
  Controller,
  ForbiddenException,
  Get,
  HttpStatus,
  Param,
  ParseIntPipe,
} from '@nestjs/common';

import { CustomersService } from 'src/modules/customers/customers.service';
import CreateCustomerDto from 'src/modules/customers/dto/create-customer.dto';

@Controller('customers')
export class CustomersController {
  constructor(private customerService: CustomersService) {}

  @Get('/:id')
  getCustomerById(
    @Param(
      'id',
      new ParseIntPipe({
        errorHttpStatusCode: HttpStatus.FORBIDDEN,
        exceptionFactory: () => {
          throw new ForbiddenException('Invalid ID');
        }
      })
    )
    userId: number
  ) {
    console.log('Typeof id: ', typeof userId); // "number"
    return this.customerService.getCustomerById(userId);
  }
}

```

- Ví dụ sau đây sử dụng **DefaultValuePipe** để thiết lập giá trị mặc định nếu không truyền vào:

```ts title="customers.controller.ts"
import {
  Controller,
  DefaultValuePipe,
  Get,
  ParseIntPipe,
  Query,
} from "@nestjs/common";

import { CustomersService } from "src/modules/customers/customers.service";

@Controller("customers")
export class CustomersController {
  constructor(private customerService: CustomersService) {}

  @Get("/")
  getCustomers(
    @Query("page", new DefaultValuePipe(1), ParseIntPipe) page: number,
    @Query("limit", new DefaultValuePipe(10), ParseIntPipe) limit: number
  ) {
    return { page, limit };
  }
}
```

## ValidationPipe cho object validation

- Ở mục trước, ta đã biết một số built-in pipes mà NestJS cung cấp sẵn. Một số pipe như **ParseIntPipe**, **ParseFloatPipe**, **ParseBoolPipe** để parse cũng như validate các type nguyên thủy như number, boolean,...Trong thực tế, ta làm việc với **ValidationPipe** để validate object của body hay query nhiều hơn.
- ValidationPipe sử dụng 2 thư viện sau để transform và validate:

```bash
npm install class-transformer class-validator
```

- Ta tạo một class "CreateCustomerDTO" định nghĩa các trường dữ liệu cho body, sử dụng các validation decorator của thư viện trên để validate:

```ts title="create-customer.dto.ts"
import { IsEmail, IsNotEmpty, IsString } from "class-validator";

class CreateCustomerDto {
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

export default CreateCustomerDto;
```

- Sau đó gọi đến pipe **ValidationPipe**:

```ts title="customers.controller.ts"
import { Body, Controller, Post, ValidationPipe } from "@nestjs/common";

import { CustomersService } from "src/modules/customers/customers.service";
import CreateCustomerDto from "src/modules/customers/dto/create-customer.dto";

@Controller("customers")
export class CustomersController {
  constructor(private customerService: CustomersService) {}

  @Post("/create")
  createCustomer(
    @Body(new ValidationPipe({ whitelist: true }))
    body: CreateCustomerDto
  ) {
    console.log("Data: ", body);

    const createdCustomer = this.customerService.create(body);
    return createdCustomer;
  }
}
```

- Dưới đây là một số options khi khởi tạo **ValidationPipe**:

| Option              | Kiểu dữ liệu | Mô tả                                                                                                                                         |
| ------------------- | ------------ | --------------------------------------------------------------------------------------------------------------------------------------------- |
| whitelist           | boolean      | Nếu là "true", các thuộc tính không được đính decorator của class-validator sẽ bị loại bỏ. Giá trị mặc định là "false"                        |
| errorHttpStatusCode | number       | Response HTTP Status Code. Giá trị mặc định là 400                                                                                            |
| exceptionFactory    | Function     | Là một hàm nhận tham số là một validation errors và return một exception. Dùng khi ta muốn custom lỗi trả vè cho client khi validate thất bại |
| stopAtFirstError    | boolean      | Nếu là "true", sẽ dừng lại khi validate thất bại ở thuộc tính đầu tiên. Mặc định là "false"                                                   |

## Các cấp độ sử dụng Pipe

- Có 4 cấp độ mà Pipe được áp dụng:
  - Cấp độ global: Xác thực dữ liệu đầu vào cho tất cả các endpoint trong ứng dụng.
  - Cấp độ controller: Xác thực dữ liệu đầu vào của tất cả các endpoint trong controller.
  - Cấp độ method: Xác thực dữ liệu đầu vào của một endpoint nhất định trong controller.
  - Cấp độ parameter: Xác thực dữ liệu theo params ở trong 1 method cụ thể trong controller, nếu chỉ định ở body, chỉ validate ở body, tương tự với query.
- Trong 4 cấp độ trên, 3 cấp độ đầu sẽ validate dữ liệu cho cả BODY + QUERY nếu chúng được định nghĩa bằng class và sử dụng các decorator của thư viện class validator.
- Ví dụ cho 4 cấp độ:

### Cấp độ Global

```ts title="main.ts"
import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";
import { ValidationPipe } from "@nestjs/common";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe());
  await app.listen(3000);
}
bootstrap();
```

- Hoặc cấu hình global trong AppModule:

```ts title="app.module.ts"
@Module({
  controllers: [],
  providers: [
    {
      provide: APP_PIPE,
      useClass: RequestValidationPipe,
    },
  ],
})
export class AppModule {}
```

### Cấp độ Controller

```ts title="customers.controller.ts"
import {
  Body,
  Controller,
  Post,
  UsePipes,
  ValidationPipe,
} from "@nestjs/common";

import { CustomersService } from "src/modules/customers/customers.service";
import CreateCustomerDto from "src/modules/customers/dto/create-customer.dto";

@Controller("customers")
@UsePipes(ValidationPipe) // Use for controller
export class CustomersController {
  constructor(private customerService: CustomersService) {}

  @Post("/create")
  createCustomer(@Body() body: CreateCustomerDto) {
    const createdCustomer = this.customerService.create(body);
    return createdCustomer;
  }

  @Post("/login")
  loginCustomer(@Body() body: CreateCustomerDto) {
    const loginCustomer = this.customerService.create(body);
    return loginCustomer;
  }
}
```

### Cấp độ method

```ts title="customers.controller.ts"
import {
  Body,
  Controller,
  Post,
  UsePipes,
  ValidationPipe,
} from "@nestjs/common";

import { CustomersService } from "src/modules/customers/customers.service";
import CreateCustomerDto from "src/modules/customers/dto/create-customer.dto";

@Controller("customers")
export class CustomersController {
  constructor(private customerService: CustomersService) {}

  @UsePipes(ValidationPipe) // Use for specific endpoint, validate both "body" and "query"
  @Post("/create")
  createCustomer(
    @Body() body: CreateCustomerDto,
    @Query() query: CreateCustomerDto
  ) {
    const createdCustomer = this.customerService.create(body);
    return createdCustomer;
  }

  @Post("/login")
  loginCustomer(@Body() body: CreateCustomerDto) {
    const loginCustomer = this.customerService.create(body);
    return loginCustomer;
  }
}
```

### Cấp độ parameter

```ts title="customers.controller.ts"
import { Body, Controller, Post, Query, ValidationPipe } from "@nestjs/common";

import { CustomersService } from "src/modules/customers/customers.service";
import CreateCustomerDto from "src/modules/customers/dto/create-customer.dto";

@Controller("customers")
export class CustomersController {
  constructor(private customerService: CustomersService) {}

  @Post("/create")
  createCustomer(
    @Body(ValidationPipe) body: CreateCustomerDto, // Only validate "body", not include "query"
    @Query() query: CreateCustomerDto
  ) {
    const createdCustomer = this.customerService.create(body);
    return createdCustomer;
  }
}
```

## Tạo custom pipe

- Để tạo một pipe mới, ta phải implements **PipeTransform< T, U >**. Với **T** là kiểu dữ liệu đầu vào, **U** là kiểu dữ liệu đầu ra sau khi transform.
- Ví dụ dưới đây ta sẽ tạo một pipe đơn giản giống **ParseIntPipe**:

```ts title="parse-int.pipe.ts"
import {
  ArgumentMetadata,
  BadRequestException,
  Injectable,
  PipeTransform,
} from "@nestjs/common";

@Injectable()
export class ParseIntPipe implements PipeTransform<string, number> {
  transform(value: string, metadata: ArgumentMetadata): number {
    const val = parseInt(value, 10);
    if (isNaN(val)) {
      throw new BadRequestException("Validation failed");
    }
    return val;
  }
}
```

- Ví dụ tiếp là tạo 1 pipe tương tự **ValidationPipe**:

```ts title="validation.pipe.ts"
import {
  PipeTransform,
  Injectable,
  ArgumentMetadata,
  BadRequestException,
} from "@nestjs/common";
import { validate } from "class-validator";
import { plainToInstance } from "class-transformer";

@Injectable()
export class ValidationPipe implements PipeTransform<any> {
  async transform(value: any, { metatype }: ArgumentMetadata) {
    if (!metatype || !this.toValidate(metatype)) {
      return value;
    }
    const object = plainToInstance(metatype, value);
    const errors = await validate(object);
    if (errors.length > 0) {
      throw new BadRequestException("Validation failed");
    }
    return value;
  }

  private toValidate(metatype: Function): boolean {
    const types: Function[] = [String, Boolean, Number, Array, Object];
    return !types.includes(metatype);
  }
}
```

:::note

- Giống như controller, ta có thể **inject dependencies** khác vào pipe thông qua **constructor()**

:::
