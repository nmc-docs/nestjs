---
sidebar_position: 2
---

# Tạo WebSocket Gateway

- Như ở mục trước ta đã đề cập, mỗi **WebSocket Gateway sẽ ứng với một namespace riêng biệt**, giúp ta tổ chức, quản lý chúng được tinh gọn hơn. Dưới đây là cách tạo một **Chat Gateway** (namespace là: `/chat`)
- Tạo file **chat.gateway.ts**:

```ts
import { Logger } from "@nestjs/common";
import {
  WebSocketGateway,
  WebSocketServer,
  WsResponse,
  SubscribeMessage,
  OnGatewayInit,
  OnGatewayConnection,
  OnGatewayDisconnect,
} from "@nestjs/websockets";
import { Server, Socket } from "socket.io";

@WebSocketGateway({ namespace: "/chat", cors: { origin: "*" } })
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
    // this.server.emit("receiveMessage", payload);
    // client.emit("receiveMessage", payload)
    return {
      event: "toClientEvent",
      data: "Done",
    };
  }
}
```

:::info[Các Lifecycle Hooks]

- Ở ví dụ trên, ta thấy 3 lifecycle hooks:
  - `afterInit(server: Server)` - Gọi sau khi WebSocket server khởi tạo.
  - `handleConnection(client: Socket)` - Khi client kết nối.
  - `handleDisconnect(client: Socket)` - Khi client ngắt kết nối.

:::

:::info[Decorators]

- `@WebSocketGateway(port?: number, options?: GatewayOptions)` – đánh dấu class là gateway.
- `@WebSocketServer()` – lấy đối tượng server gốc (socket.io hoặc ws).
- `@SubscribeMessage(event: string)` – lắng nghe sự kiện client gửi lên.

:::

## `WsResponse<T>`

- Trong **NestJS WebSocket** , `WsResponse` là một **wrapper object** dùng để định nghĩa **phản hồi có cấu trúc** trong các `@SubscribeMessage()` handler.
- 🔍 Ý nghĩa của `WsResponse`:

  - `WsResponse<T>` là một **interface** với cấu trúc:

    ```ts
    interface WsResponse<T = any> {
      event: string;
      data: T;
    }
    ```

  - Nó cho phép ta trả về:

    - `event`: tên sự kiện phía client sẽ nhận
    - `data`: dữ liệu ta muốn gửi lại

- 💡 Khi nào nên dùng `WsResponse`:

| Tình huống                                               | Có nên dùng `WsResponse`?      |
| -------------------------------------------------------- | ------------------------------ |
| Ta muốn gửi **phản hồi có cấu trúc** về một event cụ thể | ✅ Nên                         |
| Ta chỉ dùng `this.server.emit()`để bắn dữ liệu           | ❌ Không cần                   |
| Ta dùng `client.emit()`thủ công trong handler            | ❌ Không cần dùng `WsResponse` |

## Sự khác biệt giữa `this.server.emit(...)` , `this.server.to().emit()` và `client.emit(...)`

| Câu lệnh                                         | Gửi đến ai                                                       | Mô tả                                                                                                  |
| ------------------------------------------------ | ---------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------ |
| `client.emit(...)`                               | **Chỉ gửi đến chính client** đang gọi sự kiện `markSeenMessage`. | Đây là cách gửi phản hồi riêng biệt cho một client cụ thể (tức là một **socket connection duy nhất**). |
| `this.server.emit(...)`                          | **Broadcast toàn bộ** mọi client đang kết nối trong namespace.   | Tức là **tất cả** người dùng đang kết nối vào namespaceđều nhận được sự kiện.                          |
| `this.server.to([...clientsSocketId]).emit(...)` | Gửi đến các client được chỉ định thông qua socket ID của chúng   | Các client đang kết nối với namespace mà được chỉ định sẽ nhận được sự kiện                            |

- Ví dụ thực tế: Giả sử 5 client đang kết nối vào namespace `/chat`:
  - `clientA` (gửi sự kiện `USER_MARK_SEEN_MESSAGE`)
  - `clientB`
  - `clientC`
  - `clientD`
  - `clientE`

```ts
client.emit("test", { userId }); // Chỉ A nhận được
this.server.emit("test", { userId }); // Cả A, B, C, D, E đều nhận được
this.server.to([clientIdB, clientIdE]); // Chỉ B, E nhận được
```
