---
sidebar_position: 10
---

# Tạo exception filter cho app

:::info[Mục tiêu]

- Trong bài này, ta sẽ tạo 3 loại exception filter:
  - **Http Exception Filter** (Xử lý lỗi HTTP)
  - **Websocket Exception Filter** (Xử lý lỗi Websocket)
  - **Catch all Exception Filter** (Xử lý các unhandled errors)
- Dữ liệu trả về lỗi của HTTP bao gồm các trường chính:
  - `statusCode`: Mã lỗi HTTP
  - `message`: Thông báo lỗi
  - `errors`: Chi tiết lỗi (có thể có hoặc không)
  - `path`: Endpoint của API
- Dữ liệu trả về lỗi của Websocket bao gồm các trường chính:

  - `clientId`: ID của client kết nối tới server socket
  - `pattern`: Subscribe message
  - `payload`: Dữ liệu client gửi đến
  - `message`: Thông báo lỗi
  - `errors`: Chi tiết lỗi (có thể có hoặc không)

:::

- Đầu tiên, tạo **BaseExceptionResponse.dto.ts**:

```ts title="BaseExceptionResponse.dto.ts"
import { Expose } from "class-transformer";

export class BaseExceptionResponse {
  @Expose()
  statusCode: number;

  @Expose()
  message: string;

  @Expose()
  errors: any | null;

  @Expose()
  path: string;
}
```

- Tạo **http-exception-filter.ts**:

```ts title="http-exception-filter.ts"
import {
  ArgumentsHost,
  Catch,
  ExceptionFilter,
  HttpException,
  HttpStatus,
} from "@nestjs/common";
import { Request, Response } from "express";

import { BaseExceptionResponse } from "src/common/dto/BaseExceptionResponse.dto";

@Catch(HttpException)
export class HttpExceptionFilter implements ExceptionFilter {
  catch(exception: HttpException, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();
    const request = ctx.getRequest<Request>();

    let statusCode: number = HttpStatus.INTERNAL_SERVER_ERROR;
    let message: string =
      "An unexpected error occurred. Please contact admin to resolve this issue.";
    let responseBody: BaseExceptionResponse = {
      statusCode,
      message,
      path: request.url,
      errors: null,
    };

    statusCode = exception.getStatus();
    if (statusCode !== HttpStatus.INTERNAL_SERVER_ERROR) {
      const exceptionResponseMessage: string | undefined = (
        exception.getResponse() as any
      ).message;
      message = exceptionResponseMessage || "Unknown error message";

      const { error, ...extraErrorFields } = exception.getResponse() as any;

      responseBody = {
        ...responseBody,
        ...extraErrorFields,
        message,
        statusCode,
      };
    }

    response.status(statusCode).json(responseBody);
  }
}
```

- Tạo **ws-exception-filter.ts**:

```ts title="ws-exception-filter.ts"
import { ArgumentsHost, Catch, ExceptionFilter } from "@nestjs/common";
import { WsException } from "@nestjs/websockets";
import { Socket } from "socket.io";

@Catch(WsException)
export class WsExceptionFilter implements ExceptionFilter {
  catch(exception: WsException, host: ArgumentsHost) {
    const wsContext = host.switchToWs();
    const socketClient = wsContext.getClient<Socket>();
    const wsData = wsContext.getData();
    const pattern = wsContext.getPattern();
    const wsError = exception.getError();

    const errorMessage =
      (wsError instanceof Object ? (wsError as any)?.message : wsError) ||
      "Unknown error message";

    const errorResponse = {
      ...(wsError instanceof Object ? wsError : {}),
      clientId: socketClient.id,
      pattern,
      payload: wsData,
      message: errorMessage,
    };

    socketClient.emit("ws_exception", errorResponse);
  }
}
```

- Tạo **all-exception.filter.ts**:

```ts title="all-exception.filter.ts"
import {
  ArgumentsHost,
  Catch,
  ExceptionFilter,
  HttpStatus,
} from "@nestjs/common";
import { Request, Response } from "express";
import { Socket } from "socket.io";

import { BaseExceptionResponse } from "src/common/dto/BaseExceptionResponse.dto";

@Catch()
export class AllExceptionsFilter implements ExceptionFilter {
  catch(exception: Error, host: ArgumentsHost): void {
    const contextType = host.getType();

    if (contextType === "http") {
      this.handleHttpException(exception, host);
    } else if (contextType === "ws") {
      this.handleWsException(exception, host);
    }
  }

  private handleWsException(_exception: Error, host: ArgumentsHost) {
    const socketClient = host.switchToWs().getClient<Socket>();
    const wsData = host.switchToWs().getData();
    const pattern = host.switchToWs().getPattern();

    const responseBody = {
      clientId: socketClient.id,
      pattern,
      payload: wsData,
      message:
        "An unexpected error occurred. Please contact admin to resolve this issue.",
      errors: "Internal server error",
    };

    socketClient.emit("ws_exception", responseBody);
  }

  private handleHttpException(_exception: Error, host: ArgumentsHost): void {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();
    const request = ctx.getRequest<Request>();

    const responseBody: BaseExceptionResponse = {
      statusCode: HttpStatus.INTERNAL_SERVER_ERROR,
      message:
        "An unexpected error occurred. Please contact admin to resolve this issue.",
      path: request.url,
      errors: "Internal server error",
    };

    response.status(HttpStatus.INTERNAL_SERVER_ERROR).json(responseBody);
  }
}
```

- Cuối cùng, ở file **app.module.ts**:

```ts title="app.module.ts"
import { APP_FILTER } from "@nestjs/core";

@Module({
  providers: [
    { provide: APP_FILTER, useClass: AllExceptionsFilter },
    { provide: APP_FILTER, useClass: HttpExceptionFilter },
    { provide: APP_FILTER, useClass: WsExceptionFilter },
  ],
})
export class AppModule {}
```

:::caution[Chú ý]

- Lưu ý rằng phải đặt `HttpExceptionFilter`, `WsExceptionFilter` sau `AllExceptionsFilter`, điều này là rất quan trọng vì:
  - NestJS sẽ duyệt qua từng filter theo thứ tự đăng ký (từ cuối lên đầu), và nếu một filter xử lý được lỗi (`catch` xong không throw tiếp), thì NestJS **không chuyển lỗi cho filter tiếp theo nữa**.
  - Do đó, **filter nào khai báo sau sẽ có cơ hội xử lý lỗi trước**.

:::

:::tip[✅ Gợi ý sử dụng]

- Đặt các **filter chuyên biệt hơn** ở **sau cùng** (được ưu tiên xử lý trước).
- Đặt các **filter tổng quát (catch-all)** như `AllExceptionsFilter` ở **trước** (vì nó sẽ nằm dưới cùng, được gọi cuối cùng như một "lưới an toàn").

:::

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
