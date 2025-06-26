---
sidebar_position: 3
---

# Sử dụng Pipe, Exception Filter, Interceptor, Guard trong WebSocket Gateway

:::info

- Tương tự như HTTP, ở WebSocket Gateway ta cũng có thể sử dụng:
  - `@UsePipes`: validate dữ liệu gửi đến từ client.
  - `@UseFilters`: xử lý lỗi được throw ra từ WebSocket
  - `@UseInterceptors`: dùng cho các nhiệm vụ như ghi log,...
  - `@UseGuards`: xác thực user trước khi xử lý event được gửi lên từ client,...
- Ta cũng có thể dùng chúng ở 2 cấp độ:
  - Cho toàn bộ event
  - Cho từng event cụ thể

:::

:::note[Lưu ý]

- Mặc dù ta đã cấu hình `APP_FILTER`, `APP_PIPE`, `APP_GUARD`, `APP_INTERCEPTOR` ở file **app.module.ts**, nhưng mình không hiểu lý do gì nó chỉ đang hoạt động đối với HTTP, còn **WebSocket thì phải chỉ định lại toàn bộ ở đầu Gateway** (mục ví dụ dưới):

```ts
@Module({
  providers: [
    { provide: APP_FILTER, useClass: AllExceptionsFilter },
    { provide: APP_FILTER, useClass: HttpExceptionFilter },
    { provide: APP_FILTER, useClass: WsExceptionFilter },
    { provide: APP_PIPE, useClass: AppValidationPipe },
    { provide: APP_GUARD, useClass: AuthGuard },
    { provide: APP_INTERCEPTOR, useClass: AppClassSerializerInterceptor },
    { provide: APP_INTERCEPTOR, useClass: LoggingInterceptor },
  ],
})
export class AppModule {}
```

:::

## Ví dụ

```ts
@WebSocketGateway({ namespace: "/chat", cors: { origin: "*" } })
@UseFilters(AllExceptionsFilter, WsExceptionFilter)
@UseInterceptors(LoggingInterceptor)
@UseGuards(AuthGuard)
@UsePipes(
  new ValidationPipe({
    exceptionFactory: (errors) =>
      new WsException({ message: "Invalid message data", errors }),
  })
)
export class ChatGateway
  implements OnGatewayInit, OnGatewayConnection, OnGatewayDisconnect
{
  @WebSocketServer() server: Server;
  private readonly logger = new Logger(ChatGateway.name);

  afterInit(server: Server) {
    this.logger.log("🚀 ChatGateway was established succesfully!");
  }

  handleConnection(client: Socket) {
    console.log(`Client connected: ${client.id}`);
  }

  handleDisconnect(client: Socket) {
    console.log(`Client disconnected: ${client.id}`);
  }

  @SubscribeMessage("sendMessage")
  handleMessage(
    client: Socket,
    payload: { sender: string; message: string }
  ): WsResponse<string> {
    this.server.emit("receiveMessage", data);
    return {
      event: "toClientEvent",
      data: "Done",
    };
  }
}
```

:::tip

- Ở ví dụ trên, ta sử dụng:
  - `@UseFilters(AllExceptionsFilter, WsExceptionFilter)`: Xem [tại đây](../custom-exception-filter)
  - `@UseInterceptors(LoggingInterceptor)`: Xem [tại đây](../custom-app-logging)

:::
