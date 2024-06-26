---
sidebar_position: 5
---

# Exception Filters

:::info

- NestJS cung cấp cho ta một lớp gọi là **HttpException** và các lớp con kế thừa từ nó để xử lý exception được throw ra từ ứng dụng.
- Một số built-in exception trong NestJS:
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

:::

## Ví dụ khi throw một exception

- Ta có thể throw một exception ở hàm controller, hoặc service:

```ts
@Post('register')
async register() {
  throw new BadRequestException('Email already exists');
}
```

Khi đó, lỗi trả về cho client sẽ có dạng:

```json
{
  "message": "Something bad happened",
  "error": "Bad request",
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
- Để tạo một custom exception filter, ta **implements ExceptionFilter**

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

## Catch All Exception

- Trong nhiều trường hợp, có những exception được throw ra không thuộc hoặc không được kế thừa từ **HttpException** của NestJS, ví dụ như exception được throw ra từ **Error**. Do đó, ta phải bắt tất cả các exception này, nếu không, ứng dụng sẽ bị crash.
- Để bắt tất cả các exception như vậy, ta không truyền gì vào **@Catch()**

```ts
import {
  ArgumentsHost,
  Catch,
  ExceptionFilter,
  HttpException,
  HttpStatus,
} from "@nestjs/common";
import { Response } from "express";

import { ExceptionResponse } from "src/common/dto/ExceptionResponse.dto";

@Catch()
export class AllExceptionsFilter implements ExceptionFilter {
  catch(exception: any, host: ArgumentsHost): void {
    /* Logic of AllExceptionsFilter */
  }
}
```

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
