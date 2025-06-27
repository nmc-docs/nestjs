---
sidebar_position: 4
---

# Sử dụng middleware trong WebSocket

:::info[Giới thiệu]

Trong NestJS, **middleware** trong WebSocket được sử dụng để xử lý các yêu cầu hoặc sự kiện WebSocket trước khi chúng được chuyển đến các handler (bộ xử lý) hoặc để thực hiện các tác vụ như xác thực, ghi log, hoặc xử lý dữ liệu đầu vào/đầu ra. Middleware trong WebSocket thường được áp dụng để:

1. **Xác thực (Authentication/Authorization):** Kiểm tra xem client kết nối WebSocket có quyền truy cập hay không (ví dụ: kiểm tra token JWT).
2. **Ghi log (Logging):** Ghi lại thông tin về kết nối, ngắt kết nối, hoặc các sự kiện WebSocket.
3. **Xử lý dữ liệu (Data Processing):** Biến đổi hoặc xác thực dữ liệu trước khi chuyển đến handler hoặc từ server đến client.
4. **Quản lý kết nối:** Kiểm soát trạng thái kết nối, như từ chối kết nối không hợp lệ hoặc giới hạn số lượng kết nối.

:::

## Cách hoạt động

- Trong NestJS, middleware WebSocket thường được áp dụng thông qua các **Gateway** hoặc sử dụng các decorator như `@WebSocketGateway`. Middleware có thể được gắn vào toàn bộ gateway hoặc các sự kiện cụ thể (message events).

## Ví dụ sử dụng middleware để xác thực JWT

- Dưới đây là một ví dụ về việc sử dụng middleware trong WebSocket để xác thực token JWT trước khi cho phép client kết nối.

```typescript
import {
  WebSocketGateway,
  WebSocketServer,
  OnGatewayConnection,
  OnGatewayDisconnect,
} from "@nestjs/websockets";
import { Server, Socket, ExtendedError } from "socket.io";
import { Injectable, Logger } from "@nestjs/common";
import { verify } from "jsonwebtoken";

import { TokenService } from "src/modules/libs/token/token.service";

// Middleware để xác thực token
@Injectable()
export class AuthMiddleware {
  constructor(private tokenService: TokenService) {}

  async verifyClient(client: Socket, next: (err?: ExtendedError) => void) {
    const [type, token] =
      client.handshake.headers.authorization?.split(" ") ?? [];
    const accessToken = type === "Bearer" && token ? token : undefined;
    if (!accessToken) {
      next(new Error("Token is required"));
      return;
    }
    const accessTokenPayload = await this.tokenService.verifyAccessToken(
      accessToken
    );
    if (!accessTokenPayload) {
      next(new Error("Invalid token"));
      return;
    }
    client.handshake.auth = accessTokenPayload;
    next();
  }
}

// WebSocket Gateway
@WebSocketGateway()
export class ChatGateway implements OnGatewayConnection, OnGatewayDisconnect {
  @WebSocketServer()
  server: Server;

  private readonly logger = new Logger(ChatGateway.name);

  constructor(private authMiddleware: AuthMiddleware) {}

  // Áp dụng middleware cho toàn bộ gateway
  afterInit(server: Server) {
    this.server.use((client, next) => {
      this.websocketMiddleware.verifyClient(client, next);
    });
  }

  handleConnection(client: Socket) {
    this.logger.log(`Client connected: ${client.id}`);
    this.server.emit("message", `Welcome ${client.id}`);
  }

  handleDisconnect(client: Socket) {
    this.logger.log(`Client disconnected: ${client.id}`);
  }

  @SubscribeMessage("message")
  handleMessage(client: Socket, payload: string): void {
    this.logger.log(`Message from ${client.id}: ${payload}`);
    this.server.emit("message", `${client.id}: ${payload}`);
  }
}
```

:::note[Giải thích]

- Kiểm tra token JWT trong header của client (`client.handshake.headers.authorization`).
- Nếu token hợp lệ, gọi `next()` để cho phép kết nối.
- Nếu token không hợp lệ hoặc không tồn tại, ngắt kết nối client bằng `client.disconnect()`.

:::

:::caution[Lưu ý]

- Xác thực JWT ở **middleware** khác so với **guard** ở chỗ:
  - **Middleware**: xác thực trước rồi mới cho client kết nối tới websocket
  - **Guard**: client kết nối tới websocket thành công -> xác thực JWT -> xử lý event client gửi đến

:::

## Ví dụ sử dụng middleware để để giới hạn số lượng kết nối

- Dưới đây là một ví dụ về middleware trong NestJS WebSocket để giới hạn số lượng kết nối đồng thời đến một WebSocket Gateway. Middleware này sẽ kiểm tra số lượng client hiện tại và từ chối kết nối mới nếu vượt quá giới hạn.

```typescript
import {
  WebSocketGateway,
  WebSocketServer,
  OnGatewayConnection,
  OnGatewayDisconnect,
  SubscribeMessage,
} from "@nestjs/websockets";
import { Injectable, Logger } from "@nestjs/common";
import { Socket, Server } from "socket.io";

// Middleware để giới hạn số lượng kết nối
@Injectable()
export class ConnectionLimitMiddleware {
  private readonly logger = new Logger(ConnectionLimitMiddleware.name);
  private readonly MAX_CONNECTIONS = 5; // Giới hạn số lượng kết nối đồng thời

  constructor() {}

  use(server: Server, client: Socket, next: () => void) {
    const currentConnections = server.sockets.sockets.size;

    if (currentConnections >= this.MAX_CONNECTIONS) {
      this.logger.error(
        `Connection limit reached. Rejecting client: ${client.id}`
      );
      client.emit("error", "Server is at maximum capacity");
      client.disconnect(true);
      return;
    }

    this.logger.log(
      `New connection accepted: ${client.id}. Current connections: ${
        currentConnections + 1
      }`
    );
    next(); // Cho phép kết nối
  }
}

@WebSocketGateway()
export class ChatGateway implements OnGatewayConnection, OnGatewayDisconnect {
  @WebSocketServer()
  server: Server;

  private readonly logger = new Logger(ChatGateway.name);

  constructor(
    private readonly connectionLimitMiddleware: ConnectionLimitMiddleware
  ) {}

  // Áp dụng middleware để giới hạn số lượng kết nối
  afterInit(server: Server) {
    server.use((socket, next) =>
      this.connectionLimitMiddleware.use(server, socket, next)
    );
  }

  handleConnection(client: Socket) {
    this.logger.log(`Client connected: ${client.id}`);
    this.server.emit("message", `Welcome ${client.id}`);
  }

  handleDisconnect(client: Socket) {
    this.logger.log(`Client disconnected: ${client.id}`);
  }

  @SubscribeMessage("message")
  handleMessage(client: Socket, payload: string): void {
    this.logger.log(`Message from ${client.id}: ${payload}`);
    this.server.emit("message", `${client.id}: ${payload}`);
  }
}
```
