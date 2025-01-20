---
sidebar_position: 10
---

# Tạo exception filter cho app

- Trước đó, ta đã biết tạo 1 [Catch All Exception Filter](./nestjs-fundamentals/exception-filters#catch-all-exception), giờ ta sẽ tạo nó để xử lý tất cả các exception được throw ra trong app một cách có hiệu quả.
- Exception filter ta sẽ tạo dưới đây sẽ:
  - Trả về error cho client gồm 3 trường cố định: **statusCode**, **message**, **path**, **details** (có thể `null`), và có thể có thêm các trường tùy chỉnh khác.
  - Nếu mã lỗi trả về là 500, thì sẽ trả về cho client có dạng sau, và ở server sẽ log ra chi tiết lỗi đó:

```json
{
  "statusCode": 500,
  "message": "Internal server error",
  "path": "/api/v1/auth/upload"
}
```

- Đầu tiên, tạo **BaseExceptionResponse.dto.ts**:

```ts title="BaseExceptionResponse.dto.ts"
import { Expose } from "class-transformer";

export class BaseExceptionResponse {
  @Expose()
  statusCode: number;

  @Expose()
  message: string;

  @Expose()
  details: any | null;

  @Expose()
  path: string;
}
```

- Tạo **all-exception-filter.ts**:

```ts title="all-exception-filter.ts"
import {
  ArgumentsHost,
  Catch,
  ExceptionFilter,
  HttpException,
  HttpStatus,
  Logger,
} from "@nestjs/common";
import { WsException } from "@nestjs/websockets";
import { Request, Response } from "express";
import { Socket } from "socket.io";

import { BaseExceptionResponse } from "src/common/dto/BaseExceptionResponse.dto";

@Catch()
export class AllExceptionsFilter implements ExceptionFilter {
  private readonly logger = new Logger(AllExceptionsFilter.name);

  catch(
    exception: WsException | HttpException | Error,
    host: ArgumentsHost
  ): void {
    const contextType = host.getType();

    if (contextType === "http") {
      this.handleHttpException(exception, host);
    } else if (contextType === "ws") {
      this.handleWsException(exception, host);
    }

    const isLoggableException =
      !(exception instanceof WsException) &&
      !(exception instanceof HttpException);

    if (isLoggableException) {
      this.logUnhandledException(exception, host);
    }
  }

  private handleWsException(
    exception: WsException | Error,
    host: ArgumentsHost
  ) {
    const socketClient = host.switchToWs().getClient<Socket>();
    const wsData = host.switchToWs().getData();
    const pattern = host.switchToWs().getPattern();
    const wsError = !(exception instanceof WsException)
      ? "Internal server error"
      : exception.getError();

    const errorDetails =
      wsError instanceof Object ? { ...wsError } : { message: wsError };
    socketClient.emit("ws_exception", {
      ...errorDetails,
      id: socketClient.id,
      pattern,
      data: wsData,
    });
  }

  private handleHttpException(
    exception: HttpException | Error,
    host: ArgumentsHost
  ): void {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();
    const request = ctx.getRequest<Request>();

    let statusCode: number = HttpStatus.INTERNAL_SERVER_ERROR;
    let message: string = "Internal server error";
    let responseBody: BaseExceptionResponse = {
      statusCode,
      message,
      path: request.url,
      details: null,
    };

    if (exception instanceof HttpException) {
      statusCode = exception.getStatus();
      if (statusCode !== HttpStatus.INTERNAL_SERVER_ERROR) {
        const exceptionResponseMessage: string | undefined = (
          exception.getResponse() as any
        ).message;
        message = exceptionResponseMessage || "Unknown error message";

        /* 
          - Lấy ra các error fields khác mà ta đã thêm vào khi throw exception
          - Ví dụ: khi ta throw new BadRequestException({ errorType: 'INVALID_CREDENTIALS', message: 'Invalid email' }) thì extraErrorFields = { errorType: 'INVALID_CREDENTIALS', message: 'Invalid email' }
        */
        const { error, ...extraErrorFields } = exception.getResponse() as any;

        responseBody = {
          ...responseBody,
          ...extraErrorFields,
          message,
          statusCode,
        };
      }
    }

    response.status(statusCode).json(responseBody);
  }

  private logUnhandledException(exception: Error, host: ArgumentsHost) {
    const contextType = host.getType();

    if (contextType === "http") {
      const httpCtx = host.switchToHttp();
      const request = httpCtx.getRequest<Request>();
      this.logger.error(
        `\n👉 Context type: ${contextType.toUpperCase()}\n👉 Method: ${
          request.method
        }\n👉 Path: ${request.url}\n👉 Details: ${exception.stack?.toString()}`
      );
    } else if (contextType === "ws") {
      const wsCtx = host.switchToWs();
      const pattern = wsCtx.getPattern();
      this.logger.error(
        `\n👉 Context type: ${contextType.toUpperCase()}\n👉 Pattern: ${pattern}\n👉 Details: ${exception.stack?.toString()}`
      );
    }
  }
}
```

- Cuối cùng, ở file **app.module.ts**:

```ts title="app.module.ts"
import { APP_FILTER } from "@nestjs/core";

@Module({
  providers: [{ provide: APP_FILTER, useClass: AllExceptionsFilter }],
})
export class AppModule {}
```

:::caution

- Nếu truyền 1 object khi throw exception (hoặc custom exception). Hãy nhớ luôn thêm trường "message". Điều này là bắt buộc.

```ts
// ❌ Không hợp lệ
throw new BadRequestException({
  errorType: ELoginExceptionErrorType.INVALID_2FA_OTP,
});

// ✅ Hợp lệ
throw new BadRequestException({
  message: "Two factor authenticator code is invalid",
  errorType: ELoginExceptionErrorType.INVALID_2FA_OTP,
});

// ✅ Hợp lệ bởi vì truyền 1 string thì NestJS tự gán nó là thuộc tính "message"
throw new BadRequestException("Two factor authenticator code is invalid");
```

:::
