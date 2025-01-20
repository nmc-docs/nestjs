---
sidebar_position: 7
---

# Nestjs Swagger

## Cài đặt thư viện

```bash
npm install @nestjs/swagger
```

## Cấu hình Swagger Plugin

:::info

Plugin Swagger sẽ tự động:

- Tự động đọc object của request như **body**, **param**, **query**, **header** và response ở các file mà ta định nghĩa DTO.
- Thiết lập thuộc tính `required` tùy thuộc vào dấu "?" ở property (ví dụ: `name?: string` sẽ đặt `required: false`)
- Thiết lập `type` hoặc `enum` tùy thuộc vào kiểu ta định nghĩa (hỗ trợ kiểu mảng)
- Thiết lập giá trị `default` dựa trên giá trị mặc định được gán
- Thiết lập một số quy tắc xác thực dựa trên các trình trang trí class-validator

:::

- Để thiết lập Swagger Plugin, vào file **nest-cli.json** và thêm plugin như sau:

```json title="nest-cli.json"
{
  "collection": "@nestjs/schematics",
  "sourceRoot": "src",
  "compilerOptions": {
    "plugins": ["@nestjs/swagger"]
  }
}
```

- Ta có thể thêm các cấu hình cho plugin:

```json
"plugins": [
  {
    "name": "@nestjs/swagger",
    "options": {
      "classValidatorShim": false,
      "introspectComments": true
    }
  }
]
```

| Tùy chọn          | Giá trị mặc định            | Mô tả                          |
| ----------------- | --------------------------- | ------------------------------ |
| dtoFileNameSuffix | `['.dto.ts', '.entity.ts']` | Đuôi file mà plugin sẽ đọc DTO |

- Dưới đây là so sánh khi ta không dùng và dùng Swagger Plugin:

```ts title="create-user.dto.ts"
export class CreateUserDto {
  @ApiProperty()
  email: string;

  @ApiProperty()
  password: string;

  @ApiProperty({ enum: RoleEnum, default: [], isArray: true })
  roles: RoleEnum[] = [];

  @ApiProperty({ required: false, default: true })
  isEnabled?: boolean = true;
}
```

```ts title="create-user.dto.ts"
export class CreateUserDto {
  email: string;
  password: string;
  roles: RoleEnum[] = [];
  isEnabled?: boolean = true;
}
```

:::note

- Hãy luôn chỉ định kiểu trả về cho hàm controller để NestJS Swagger Plugin có thể tự động tạo ra docs định nghĩa các thuộc tính cho response trả về.

:::

## Cấu hình Swagger

- Tạo file **swagger.config.ts**:

```ts title="swagger.config.ts"
import { DocumentBuilder, SwaggerCustomOptions } from "@nestjs/swagger";

export const swaggerConfig = new DocumentBuilder()
  .setTitle("Task Management APIs")
  .setDescription("The Task Management API description")
  .setVersion("1.0")
  .addBearerAuth({
    type: "http",
    scheme: "Bearer",
    description: "Enter your access token here",
  })
  .build();

export const swaggerOptions: SwaggerCustomOptions = {
  customSiteTitle: "Task Management API",
  customCss: ".swagger-ui section.models { display: none}",
  customfavIcon: "/public/static/app-logo.svg",
};
```

:::note

- Xem cách cấu hình để serve file tĩnh favIcon [tại đây](./serve-static-file)

:::

- Cuối cùng, ở file **main.ts**:

```ts title="main.ts"
import { Logger } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { NestFactory } from "@nestjs/core";
import { SwaggerModule } from "@nestjs/swagger";
import { WinstonModule } from "nest-winston";

import { AppModule } from "./app.module";
import { winstonLogger } from "src/common/logger/logger.config";
import {
  swaggerConfig,
  swaggerOptions,
} from "src/common/swagger/swagger.config";
import { IEnvironmentVariables } from "src/common/types/env.type";

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    logger: WinstonModule.createLogger({ instance: winstonLogger }),
  });
  const configService = app.get(ConfigService<IEnvironmentVariables>);
  const nestServerPort = configService.get<number>("NEST_SERVER_PORT")!;

  app.setGlobalPrefix("api/v1");
  app.enableCors({ origin: "*" });

  const document = SwaggerModule.createDocument(app, swaggerConfig);
  SwaggerModule.setup("/", app, document, swaggerOptions);

  await app.listen(nestServerPort);
  Logger.log(
    `Server is running on: http://localhost:${nestServerPort}`,
    bootstrap.name
  );
}
bootstrap();
```

- Và giờ mở URL: **http://localhost:8080/** và Swagger API Document đã được thiết lập.

## Swagger Decorator

### `@ApiTags()`

- Được sử dụng để gắn thẻ (tag) các endpoints của API nhằm mục đích tổ chức và phân loại chúng trong tài liệu Swagger.
- Cú pháp:

```ts
import { ApiTags } from '@nestjs/swagger';

// Phạm vi sử dụng: đầu "controller"
@ApiTags(name: string)
```

### `@ApiResponse()`

- Được sử dụng để mô tả các phản hồi (response) của một API endpoint. Nó giúp tạo tài liệu API rõ ràng và chi tiết hơn bằng cách xác định những loại phản hồi khác nhau mà một endpoint có thể trả về, bao gồm mã trạng thái HTTP và thông tin về kiểu dữ liệu của phản hồi.
- Cú pháp:

```ts
import { ApiResponse } from '@nestjs/swagger';

// Phạm vi sử dụng: đầu "controller" hoặc đầu mỗi "method"
@ApiResponse(options: ApiResponseOptions)
```

| ApiResponseOptions | Kiểu dữ liệu                                                      | Mô tả                                                 |
| ------------------ | ----------------------------------------------------------------- | ----------------------------------------------------- |
| `status`           | `number\| 'default' \| '1XX' \| '2XX' \| '3XX' \| '4XX' \| '5XX'` | Mã phản hồi                                           |
| `type`             | Object, Class                                                     | Kiểu dữ liệu của phản hồi, được định nghĩa bằng class |
| `description`      | `string`                                                          | Mô tả                                                 |

- Ví dụ:

```ts
@ApiResponse({ status: 200, description: 'Thành công.', type: SomeDtoClass })
@ApiResponse({ status: 404, description: 'Không tìm thấy dữ liệu.' })
@ApiResponse({ status: '4XX', description: 'Error', type: ExceptionResponse })
```

- Ngoài việc sử dụng `@ApiResponse()`, NestJS Swagger cung cấp cho ta các decorator tương ứng với các mã phản hồi cụ thể dưới đây. Những decorator này đều nhận các options như bên trên:

```ts
@ApiOkResponse()
@ApiCreatedResponse()
@ApiAcceptedResponse()
@ApiNoContentResponse()
@ApiMovedPermanentlyResponse()
@ApiFoundResponse()
@ApiBadRequestResponse()
@ApiUnauthorizedResponse()
@ApiNotFoundResponse()
@ApiForbiddenResponse()
@ApiMethodNotAllowedResponse()
@ApiNotAcceptableResponse()
@ApiRequestTimeoutResponse()
@ApiConflictResponse()
@ApiPreconditionFailedResponse()
@ApiTooManyRequestsResponse()
@ApiGoneResponse()
@ApiPayloadTooLargeResponse()
@ApiUnsupportedMediaTypeResponse()
@ApiUnprocessableEntityResponse()
@ApiInternalServerErrorResponse()
@ApiNotImplementedResponse()
@ApiBadGatewayResponse()
@ApiServiceUnavailableResponse()
@ApiGatewayTimeoutResponse()
@ApiDefaultResponse()
```

### `@ApiBody()`

- Được sử dụng để mô tả dữ liệu thân (body) của một yêu cầu HTTP đối với các endpoint sử dụng phương thức `POST`, `PUT`, hoặc `PATCH`. Nó giúp tài liệu hóa phần dữ liệu đầu vào của yêu cầu HTTP, bao gồm kiểu dữ liệu và mô tả chi tiết về các trường trong body request.
- Cú pháp:

```ts
import { ApiBody } from '@nestjs/swagger';

// Phạm vi sử dụng: đầu mỗi "method"
@ApiBody(options: ApiBodyOptions)
```

| ApiBodyOptions | Kiểu dữ liệu | Mô tả                                     |
| -------------- | ------------ | ----------------------------------------- |
| `type`         | DTO Class    | Lớp DTO hoặc kiểu dữ liệu cụ thể của body |
| `description`  | `string`     | Mô tả chi tiết nội dung body request      |
| `required`     | `boolean`    | Xác định body có bắt buộc hay không       |

```ts
import { ApiBody } from '@nestjs/swagger';

class CreateUserDto {
  name: string;
  email: string;
  password: string;
}

@ApiBody({
  description: 'Dữ liệu tạo mới người dùng',
  type: CreateUserDto,
})
@Post('create-user')
createUser(@Body() createUserDto: CreateUserDto) {
  return this.userService.createUser(createUserDto);
}
```

### `@ApiParam()`

- Được sử dụng để mô tả và tài liệu hóa các tham số (parameters) đường dẫn (path parameters) cho các endpoint trong API. Khi một endpoint có các tham số được định nghĩa trong URL (ví dụ: `/users/:id`), `@ApiParam()` giúp hiển thị rõ ràng cách sử dụng tham số đó trong tài liệu Swagger.
- Cú pháp:

```ts
import { ApiParam } from '@nestjs/swagger';

// Phạm vi áp dụng: ở đầu mỗi "method"
@ApiParam(option: ApiParamOptions)
```

| ApiParamOptions   | Kiểu dữ liệu | Mô tả                                                        |
| ----------------- | ------------ | ------------------------------------------------------------ |
| `name`            | `string`     | Tên param                                                    |
| `type`            | `string`     | Kiểu dữ liệu param (`"string"`, `"number"`, `"boolean"`,...) |
| `description`     | `string`     | Mô tả cho param                                              |
| `required`        | `boolean`    | Xác định param có bắt buộc hay không                         |
| `allowEmptyValue` | `boolean`    | Xác định có cho phép param nhận giá trị rỗng hay không       |
| `enum`            | `enum`       | Định nghĩa enum cho giá trị của param                        |
| `example`         | `any`        | Mô tả giá trị ví dụ cụ thể cho param                         |

- Ví dụ:

```ts
@ApiParam({
  name: 'userId',
  description: 'ID của người dùng',
  type: 'string'
})
@ApiParam({
  name: 'postId',
  description: 'ID của bài viết của người dùng',
  type: 'number'
})
@Get(':userId/posts/:postId')
getUserPost(@Param('userId') userId: string, @Param('postId') postId: number) {
  return `Thông tin bài viết có ID: ${postId} của người dùng có ID: ${userId}`;
}
```

- Ví dụ về sử dụng enum:

```ts
import { ApiParam } from "@nestjs/swagger";
import { Controller, Get, Param } from "@nestjs/common";

enum UserRole {
  ADMIN = "admin",
  USER = "user",
  GUEST = "guest",
}

@Controller("users")
export class UserController {
  @Get(":role")
  @ApiParam({
    name: "role",
    description: "Vai trò của người dùng (admin, user, guest)",
    enum: UserRole, // Chỉ định enum
  })
  getUserByRole(@Param("role") role: UserRole) {
    return `Thông tin người dùng có vai trò: ${role}`;
  }
}
```

### `@ApiQuery()`

- Được sử dụng để mô tả các **tham số truy vấn** (query parameters) của một API endpoint. Tham số truy vấn là các thông số được gửi kèm theo URL dưới dạng cặp key-value sau dấu `?` (ví dụ: `/users?age=25`). `@ApiQuery()` giúp tạo tài liệu rõ ràng cho các query parameters này trong Swagger.
- Cú pháp:

```ts
import { ApiQuery } from '@nestjs/swagger';

// Phạm vi áp dụng: ở đầu mỗi "method"
@ApiQuery(option: ApiQueryOptions)
```

| ApiQueryOptions   | Kiểu dữ liệu | Mô tả                                                                |
| ----------------- | ------------ | -------------------------------------------------------------------- |
| `name`            | `string`     | Tên key của query                                                    |
| `type`            | `string`     | Kiểu dữ liệu của key query (`"string"`, `"number"`, `"boolean"`,...) |
| `description`     | `string`     | Mô tả cho key query                                                  |
| `allowEmptyValue` | `boolean`    | Xác định có cho phép key query nhận giá trị rỗng hay không           |
| `required`        | `boolean`    | Xác định key query có bắt buộc hay không                             |
| `enum`            | `enum`       | Định nghĩa enum cho giá trị của key query                            |
| `example`         | `any`        | Mô tả giá trị ví dụ cụ thể cho key query                             |
| `isArray`         | `boolean`    | Xác định key query có nhận giá trị là mảng hay không                 |

- Ví dụ:

```ts
@Controller("products")
export class ProductController {
  @Get()
  @ApiQuery({
    name: "category",
    description: "Danh mục sản phẩm",
    required: true,
    enum: ["electronics", "clothing", "books"], // Các giá trị hợp lệ
  })
  getProductsByCategory(@Query("category") category: string) {
    return `Danh sách sản phẩm trong danh mục: ${category}`;
  }
}
```

- Ví dụ với `isArray: true`:

```ts
@Controller("items")
export class ItemController {
  @Get()
  @ApiQuery({
    name: "ids",
    description: "Danh sách ID của các item",
    required: false,
    isArray: true, // Tham số là một mảng
    type: "number",
  })
  getItemsByIds(@Query("ids") ids: number[]) {
    return `Danh sách các item có ID: ${ids.join(", ")}`;
  }
}
```

### `@ApiHeader()` / `@ApiHeaders()`

- Được sử dụng để mô tả các **header parameters** (tham số trong phần header) mà một API endpoint yêu cầu. Những tham số này có thể bao gồm các giá trị như token, API key, hoặc các thông tin khác được gửi trong phần header của yêu cầu HTTP.
- Cú pháp:

```ts
import { ApiHeader, ApiHeaders } from '@nestjs/swagger';

// Phạm vi áp dụng: ở đầu "controller" hoặc đầu mỗi "method"
@ApiHeader(option: ApiHeaderOptions)
@ApiHeader(option: ApiHeaderOptions[])
```

| ApiHeaderOptions  | Kiểu dữ liệu | Mô tả                                                       |
| ----------------- | ------------ | ----------------------------------------------------------- |
| `name`            | `string`     | Tên key header                                              |
| `description`     | `string`     | Mô tả cho key header                                        |
| `required`        | `boolean`    | Xác định key header có bắt buộc hay không                   |
| `allowEmptyValue` | `boolean`    | Xác định có cho phép key header nhận giá trị rỗng hay không |
| `enum`            | `enum`       | Định nghĩa enum cho giá trị của key header                  |
| `example`         | `any`        | Mô tả giá trị ví dụ cụ thể cho key header                   |

- Ví dụ về `@ApiHeader()`:

```ts
@Controller("orders")
export class OrderController {
  @Get()
  @ApiHeader({
    name: "Authorization",
    description: "Token xác thực người dùng",
    required: true,
  })
  @ApiHeader({
    name: "Client-Id",
    description: "ID của client thực hiện yêu cầu",
    required: true,
  })
  getOrders(
    @Headers("Authorization") authToken: string,
    @Headers("Client-Id") clientId: string
  ) {
    return `Danh sách đơn hàng cho client ${clientId} với token: ${authToken}`;
  }
}
```

- Ví dụ về `@ApiHeaders()`:

```ts
@Controller("orders")
export class OrderController {
  @Get()
  @ApiHeaders([
    {
      name: "Authorization",
      description: "Token xác thực người dùng",
      required: true,
    },
    {
      name: "Client-Id",
      description: "ID của client thực hiện yêu cầu",
      required: true,
    },
  ])
  getOrders(
    @Headers("Authorization") authToken: string,
    @Headers("Client-Id") clientId: string
  ) {
    return `Danh sách đơn hàng cho client ${clientId} với token: ${authToken}`;
  }
}
```

### `@ApiBearerAuth()`

- Được sử dụng để định nghĩa và mô tả phương thức xác thực **Bearer Authentication** cho một hoặc nhiều API endpoints. Bearer Authentication là một phương thức xác thực mà trong đó, một **token** (thường là JWT - JSON Web Token) được gửi trong header của các yêu cầu HTTP, cụ thể trong header `Authorization` dưới dạng:

```plaintext
Authorization: Bearer <token>
```

- Cú pháp:

```ts
import { ApiBearerAuth } from '@nestjs/swagger';

// Phạm vi sử dụng: ở đầu "controller" hoặc đầu mỗi "method"
@ApiBearerAuth()
```

- Ví dụ:

```ts
@ApiBearerAuth()
@Controller("cats")
export class CatsController {}
```

:::caution

- Nhớ thêm `.addBearerAuth()` khi cấu hình Swagger:

```ts
export const swaggerConfig = new DocumentBuilder()
  .setTitle("Task Management APIs")
  .setDescription("The Task Management API description")
  .setVersion("1.0")
  .addBearerAuth({
    type: "http",
    scheme: "Bearer",
    description: "Enter your access token here",
  }) // Add this
  .build();
```

:::

### `@ApiProperty()`

- Được sử dụng để định nghĩa các thuộc tính của DTO.
- Cú pháp:

```ts
import { ApiProperty } from '@nestjs/swagger';

// Phạm vi sử dụng: ở đầu của thuộc tính trong class DTO
@ApiProperty(options?: ApiPropertyOptions)
```

| ApiPropertyOptions | Kiểu dữ liệu | Mô tả                                                                                                                                                     |
| ------------------ | ------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `name`             | `string`     | Tên thuộc tính                                                                                                                                            |
| `description`      | `string`     | Mô tả về thuộc tính                                                                                                                                       |
| `required`         | `boolean`    | Xác định thuộc tính có bắt buộc hay không                                                                                                                 |
| `nullable`         | `boolean`    | Xác định thuộc tính có nhận giá trị null hay không                                                                                                        |
| `isArray`          | `boolean`    | Xác định thuộc tính có là mảng hay không                                                                                                                  |
| `uniqueItems`      | `boolean`    | Xác định thuộc tính có là mảng chứa các phần tử riêng biệt hay không                                                                                      |
| `type`             | `string`     | Kiểu dữ liệu của thuộc tính (`"string"`, `"number"`, `"boolean"`,...)                                                                                     |
| `enum`             | `enum`       | Định nghĩa giá trị enum cho thuộc tính                                                                                                                    |
| `example`          | `any`        | Định nghĩa ví dụ giá trị cho thuộc tính                                                                                                                   |
| `format`           | `string`     | Chỉ định định dạng của giá trị thuộc tính. Các giá trị có thể nhận của format: "date", "date-time", "binary", "email", "uuid", "hostname", "ipv4", "ipv6" |
| `minimum`          | `number`     | Giá trị tối thiểu (nếu có `type: "number"`)                                                                                                               |
| `maximum`          | `number`     | Giá trị tối đa (nếu có `type: "number"`)                                                                                                                  |
| `minItems`         | `number`     | Số lượng phần tử tối thiểu trong mảng (áp dụng nếu `isArray: true`)                                                                                       |
| `maxItems`         | `number`     | Số lượng phần tử tối đa trong mảng (áp dụng nếu `isArray: true`)                                                                                          |
| `minLength`        | `number`     | Độ dài tối thiểu cho chuỗi (áp dụng nếu `type: "string"`)                                                                                                 |
| `maxLength`        | `number`     | Độ dài tối đa cho chuỗi (áp dụng nếu `type: "string"`)                                                                                                    |

### `@ApiConsumes()`

- Được sử dụng để chỉ định các loại MIME (Content-Type) mà một endpoint API có thể xử lý. Nó thường được sử dụng trong bối cảnh của các phương thức HTTP POST hoặc PUT để chỉ rõ rằng server mong đợi nhận dữ liệu theo định dạng cụ thể.
- Cú pháp:

```ts
import { ApiConsumes } from '@nestjs/swagger';

// Phạm vi sử dụng: ở đầu "controller" hoặc đầu mỗi "method"
@ApiConsumes('application/json')
@ApiConsumes('multipart/form-data') // Áp dụng cho form data được gửi lên từ client
```

- Dưới đây là ví dụ về cách sử dụng `@ApiConsumes('multipart/form-data')` và `@ApiProperty({ format: 'binary' })` trong NestJS với Swagger hỗ trợ việc upload file:

```ts
import {
  Controller,
  Post,
  UseInterceptors,
  UploadedFile,
  Body,
} from "@nestjs/common";
import { ApiConsumes, ApiResponse, ApiProperty } from "@nestjs/swagger";
import { FileInterceptor } from "@nestjs/platform-express";

class UploadFileDto {
  // Định nghĩa một thuộc tính nhận 1 File
  @ApiProperty({
    type: "string",
    format: "binary", // chỉ định định dạng nhị phân
    description: "The file to upload",
  })
  file: Express.Multer.File;

  // Định nghĩa một thuộc tính nhận nhiều File
  @ApiProperty({
    type: "string",
    format: "binary", // chỉ định định dạng nhị phân
    isArray: true,
    description: "The files to upload",
  })
  files: Express.Multer.File;
}

@Controller("upload")
export class UploadController {
  @Post()
  @ApiConsumes("multipart/form-data") // chỉ định loại MIME
  uploadFile(
    @Body() uploadFileDto: UploadFileDto // thông tin bổ sung
  ) {
    // Logic để xử lý tệp và thông tin
  }
}
```

:::tip

- Như đã nói ở trên, do ta vừa cấu hình NestJS Swagger Plugin nên nó sẽ tự động đọc object của request như **body**, **param**, **query**, **header** và response ở các [request object decorator](./nestjs-fundamentals/controllers#request-object) do NestJS cung cấp, ở các file .dto.ts mà ta định nghĩa các DTO. Vì vậy, ta không cần sử dụng những decorator như `@ApiBody(), @ApiQuery(), @ApiHeader(), @ApiProperty()`. Nhưng nếu ta cần cấu hình thêm như description, enum,... ta vẫn có thể sử dụng các decorator đó để định nghĩa thêm.

:::
