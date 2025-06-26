---
sidebar_position: 11
---

# Tạo Logging cho app

:::info

- Trong mục này, ta sẽ tạo logging cho server của chúng ta bằng cách sử dụng [interceptor](./nestjs-fundamentals/interceptors).
- Trong ứng dụng của ta, ta sẽ log:
  - Các lỗi unhandled (mã lỗi 500) ở HTTP Request, WebSocket.
- Hãy đảm bảo bạn đã cấu hình logger sử dụng **winston** như đã hướng dẫn ở bài [Logger](./logger)

:::

- Tạo file `logging.interceptor.ts`:

```ts title="logging.interceptor.ts"
import {
  CallHandler,
  ExecutionContext,
  HttpException,
  Injectable,
  InternalServerErrorException,
  Logger,
  NestInterceptor,
} from "@nestjs/common";
import { WsException } from "@nestjs/websockets";
import { Request } from "express";
import { catchError } from "rxjs";

@Injectable()
export class LoggingInterceptor implements NestInterceptor {
  private readonly logger = new Logger(LoggingInterceptor.name);

  intercept(context: ExecutionContext, next: CallHandler) {
    const contextType = context.getType();

    const logContext = () => {
      if (contextType === "http") {
        const request = context.switchToHttp().getRequest<Request>();
        return `\n👉 Context type: ${contextType.toUpperCase()}\n👉 Method: ${
          request.method
        }\n👉 Path: ${request.url}`;
      }
      if (contextType === "ws") {
        const wsCtx = context.switchToWs();
        const pattern = wsCtx.getPattern();
        return `\n👉 Context type: ${contextType.toUpperCase()}\n👉 Pattern: ${pattern}`;
      }
    };

    return next.handle().pipe(
      catchError((error) => {
        const isLoggable =
          (!(error instanceof WsException) &&
            !(error instanceof HttpException)) ||
          error instanceof InternalServerErrorException;
        if (isLoggable) {
          this.logger.error(
            `${logContext()}\n👉 Details: ${error.stack?.toString()}`
          );
        }
        throw error;
      })
    );
  }
}
```

- Sau đó, ở file `app.module.ts`:

```ts title="app.module.ts"
import { Logger, Module } from "@nestjs/common";
import { APP_INTERCEPTOR } from "@nestjs/core";

import { LoggingInterceptor } from "src/common/interceptors/logging.interceptor";

@Module({
  imports: [
    /* Import your modules here */
  ],
  providers: [
    /* ...other providers */
    { provide: APP_INTERCEPTOR, useClass: LoggingInterceptor }, // Cấu hình để nó làm global interceptor
    Logger,
  ],
})
export class AppModule {}
```

:::caution[Lưu ý]

- Đối với **WebSocket**, ta phải chỉ định lại `@UseInterceptors(LoggingInterceptor)` ở đầu gateway thì logging mới hoạt động (chỉ định với `provide: APP_INTERCEPTOR` sẽ chỉ hoạt động đối với HTTP). Xem chi tiết [tại đây](./websockets/websocket-pipe-exfilter-interceptor-guard#ví-dụ)

:::
