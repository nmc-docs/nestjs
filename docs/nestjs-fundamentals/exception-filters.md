---
sidebar_position: 5
---

# Exception Filters

:::info

- NestJS cung cấp cho ta một lớp gọi là **HttpException** và các lớp con kế thừa từ nó để xử lý exception được throw ra từ ứng dụng.

:::

## Ví dụ khi throw một exception

- Ta có thể throw một exception ở hàm controller, hoặc service:

```ts
@Get()
async findAll() {
  throw new HttpException('Forbidden', HttpStatus.FORBIDDEN);
}
```

Khi đó, lỗi trả về cho client sẽ có dạng:

```json
{
  "statusCode": 403,
  "message": "Forbidden"
}
```

- Lớp **HttpException** nhận một tham số thứ 3 (optional) dùng để cung cấp error cause. Error cause này sẽ không trả về cho client, mà nó cung cấp các thông tin chi tiết về lỗi (thích hợp cho việc logging).

```ts
@Get()
async findAll() {
  try {
    await this.service.findAll()
  } catch (error) {
    throw new HttpException({
      status: HttpStatus.FORBIDDEN,
      error: 'This is a custom message',
    }, HttpStatus.FORBIDDEN, {
      cause: error
    });
  }
}
```

Khi đó, lỗi trả về cho client sẽ là:

```json
{
  "status": 403,
  "error": "This is a custom message"
}
```

## Custom exception

- Trong nhiều trường hợp, ta muốn tạo một custom exeption để tùy chỉnh lỗi (thêm các trường thông tin về error để trả về cho response). Để làm điều này, hãy tạo một class exception và extends từ **HttpExeption**.

```ts
import { HttpException, HttpStatus } from "@nestjs/common";

type TRequestValitionErrorDetail = {
  field: string;
  error: string;
};

export class RequestValidationException extends HttpException {
  constructor(errors: TRequestValitionErrorDetail[]) {
    super(
      { message: "Request validation failed", errorsDetail: errors },
      HttpStatus.BAD_REQUEST
    );
  }
}
```

## Built-in HTTP Exceptions

- Dưới đây là các class exception mà NestJS cung cấp sẵn cho ta:

  - BadRequestException
  - UnauthorizedException
  - NotFoundException
  - ForbiddenException
  - NotAcceptableException
  - RequestTimeoutException
  - ConflictException
  - GoneException
  - HttpVersionNotSupportedException
  - PayloadTooLargeException
  - UnsupportedMediaTypeException
  - UnprocessableEntityException
  - InternalServerErrorException
  - NotImplementedException
  - ImATeapotException
  - MethodNotAllowedException
  - BadGatewayException
  - ServiceUnavailableException
  - GatewayTimeoutException
  - PreconditionFailedException

- Tất cả các class trên đều nhận **cause** và **description** làm tham số đầu vào (tùy chọn)

```ts
throw new BadRequestException("Something bad happened", {
  cause: new Error(),
  description: "Some error description",
});
```

```json
{
  "message": "Something bad happened",
  "error": "Some error description",
  "statusCode": 400
}
```

:::note

- Nếu ta truyền vào một string làm tham số thứ nhất thì theo mặc định NestJS sẽ trả về error response bao gồm 3 trường là **message**, **error**, **statusCode**.
- Nếu ta truyền 1 object vào tham số thứ nhất thì NestJS sẽ trả về error response là object được truyền vào này.
- Để custom response trả về cho client, hãy xem mục kế tiếp ở bên dưới.

:::

## Exception filters

:::info

- Throw exception ➡️ Exception filter ➡️ Client.
- Exception filter (bộ lọc exception) là cơ chế xử lý exception được throw ra trong ứng dụng. Nó đảm nhận nhiệm vụ xử lý các exception được throw ra trong ứng dụng. Ở đây ta có thể thực hiện việc log ra lỗi, custom lại response lỗi trả về cho người dùng,...
- Có 3 cấp độ để ta sử dụng exception filter:
  - Cấp độ global
  - Cấp độ controller
  - Cấp độ method
- Để tạo một custom exception filter, ta **implements ExceptionFilter< T >** với T là type của exception.

:::

### Ví dụ

- Trong ví dụ sau, ta tạo 1 custom exception filter để xử lý những **HttpException** và trả về error response cho client bao gồm 3 trường là: **statusCode**, **timestamp** và **path**.

```ts
//http-exception.filter.ts
import {
  ExceptionFilter,
  Catch,
  ArgumentsHost,
  HttpException,
} from "@nestjs/common";
import { Request, Response } from "express";

@Catch(HttpException)
export class HttpExceptionFilter implements ExceptionFilter {
  catch(exception: HttpException, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();
    const request = ctx.getRequest<Request>();
    const status = exception.getStatus();

    response.status(status).json({
      statusCode: status,
      timestamp: new Date().toISOString(),
      path: request.url,
    });
  }
}
```

:::note

- Trong ví dụ trên, tất cả các exception là **HttpException** hoặc được kế thừa từ **HttpExeption** đều được xử lý bởi **HttpExceptionFilter**. Nếu ta muốn tạo exception filter để chỉ xử lý một exception cụ thể nào đó, hãy truyền exception đó vào **@Catch()**.
- Ví dụ exception filter dưới đây chỉ xử lý cho **UnauthorizedException**:

```ts
//http-exception.filter.ts
import {
  ExceptionFilter,
  Catch,
  ArgumentsHost,
  UnauthorizedException,
} from "@nestjs/common";
import { Request, Response } from "express";

@Catch(UnauthorizedException)
export class UnauthorizedExceptionFilter implements ExceptionFilter {
  catch(exception: UnauthorizedException, host: ArgumentsHost) {
    /* Logic of the exception filter */
  }
}
```

:::

### Ví dụ về Catch All Exception

- Trong nhiều trường hợp, có những exception được throw ra không thuộc hoặc không được kế thừa từ **HttpException** của NestJS, ví dụ như exception được throw ra từ **Error**. Những exception này mặc định NestJS trả về response là:

```json
{
  "statusCode": 500,
  "message": "Internal server error"
}
```

- Nếu ra muốn bắt tất cả các exception như vậy và muốn custom lại response trả về cho client, hãy tạo 1 filter và sử dụng **@Catch()**.

```ts
import {
  ArgumentsHost,
  Catch,
  ExceptionFilter,
  HttpException,
  HttpStatus,
} from "@nestjs/common";
import { Response } from "express";

@Catch()
export class AllExceptionsFilter implements ExceptionFilter {
  catch(exception: any, host: ArgumentsHost): void {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();
    const isInstanceOfHttpException = exception instanceof HttpException;

    const httpStatus = isInstanceOfHttpException
      ? exception.getStatus()
      : HttpStatus.INTERNAL_SERVER_ERROR;

    const exceptionResponse = isInstanceOfHttpException
      ? (exception.getResponse() as object)
      : { message: exception.message };

    const responseBody = {
      ...exceptionResponse,
      statusCode: httpStatus,
      timestamp: new Date().toISOString(),
      path: ctx.getRequest().url,
      error: undefined,
    };

    response.status(httpStatus).json(responseBody);
  }
}
```

:::info

- Với exception filter ta vừa tạo bên trên, bất kỳ exception nào được throw ra từ ứng dụng, response trả về sẽ bao gồm các trường **statusCode**, **timestamp**, **path** và các thuộc tính khác của object error response mà ta truyền vào khi throw exception (như message,...).

:::

## Ví dụ về các cấp độ sử dụng Exception Filters

### Cấp độ Global

```ts
import { NestFactory } from "@nestjs/core";

import { AppModule } from "./app.module";
import { AllExceptionsFilter } from "src/common/filters/request-validation-exception.filter";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalFilters(new AllExceptionsFilter());
  await app.listen(3000);
}
bootstrap();
```

- Hoặc cấu hình global trong AppModule:

```ts
@Module({
  controllers: [],
  providers: [
    {
      provide: APP_FILTER,
      useClass: AllExceptionsFilter,
    },
  ],
})
export class AppModule {}
```

### Cấp độ controller

```ts
import { Body, Controller, Get, Post, UseFilters } from "@nestjs/common";

import { AllExceptionsFilter } from "src/common/filters/request-validation-exception.filter";
import { CustomersService } from "src/modules/customers/customers.service";
import CreateCustomerDto from "src/modules/customers/dto/create-customer.dto";

@Controller("customers")
@UseFilters(AllExceptionsFilter)
export class CustomersController {
  constructor(private customerService: CustomersService) {}

  @Post("/create")
  createCustomer(
    @Body()
    body: CreateCustomerDto
  ) {
    const createdCustomer = this.customerService.create(body);
    return createdCustomer;
  }
}
```

### Cấp độ method

```ts
import { Body, Controller, Get, Post, UseFilters } from "@nestjs/common";

import { AllExceptionsFilter } from "src/common/filters/request-validation-exception.filter";
import { CustomersService } from "src/modules/customers/customers.service";
import CreateCustomerDto from "src/modules/customers/dto/create-customer.dto";

@Controller("customers")
export class CustomersController {
  constructor(private customerService: CustomersService) {}

  @UseFilters(AllExceptionsFilter)
  @Post("/create")
  createCustomer(
    @Body()
    body: CreateCustomerDto
  ) {
    const createdCustomer = this.customerService.create(body);
    return createdCustomer;
  }
}
```
