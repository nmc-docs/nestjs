---
sidebar_position: 6
---

# Execution context

:::info

- Execution context cung cấp thông tin về yêu cầu hiện tại, cho phép truy cập vào các đối tượng như yêu cầu (request), phản hồi (response), và các thông tin khác liên quan đến chuỗi xử lý yêu cầu.
- Các loại Execution Context trong NestJS:

  - **HTTP Context**: Chứa các thông tin về HTTP request và response.
  - **WebSocket Context**: Chứa các thông tin liên quan đến kết nối WebSocket và các thông điệp.
  - **RPC Context**: Được sử dụng cho các ứng dụng microservices. Chứa các thông tin liên quan đến các yêu cầu RPC (Remote Procedure Call).

:::

## ArgumentsHost class

- Trong NestJS, **ArgumentsHost** là một lớp cung cấp các phương thức để truy cập vào các đối số (arguments) của phương thức xử lý (handler) hiện tại. **ArgumentsHost** được sử dụng chủ yếu trong các thành phần như[ exception filters](./exception-filters), guards, và interceptors để trích xuất và xử lý các thông tin liên quan đến yêu cầu (request) hiện tại.
- Các phương thức chính của **ArgumentsHost**:

| Phương thức                  | Mô tả                                                                                                                      |
| ---------------------------- | -------------------------------------------------------------------------------------------------------------------------- |
| switchToHttp()               | Trả về một đối tượng**HttpArgumentsHost** cho phép truy cập vào các đối tượng của ngữ cảnh HTTP (request, response, next). |
| switchToRpc()                | Trả về một đối tượng**RpcArgumentsHost** cho phép truy cập vào các đối tượng của ngữ cảnh RPC.                             |
| switchToWs()                 | Trả về một đối tượng**WsArgumentsHost** cho phép truy cập vào các đối tượng của ngữ cảnh WebSocket.                        |
| getArgs()                    | Trả về một mảng chứa tất cả các đối số của handler                                                                         |
| getArgByIndex(index: number) | Trả về đối số tại vị trí chỉ định                                                                                          |
| getType()                    | Trả về loại ngữ cảnh hiện tại (http, rpc, ws)                                                                              |

- Dưới đây là một ví dụ về việc sử dụng **ArgumentsHost** trong một exception filter để xử lý lỗi HTTP:

```ts
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
    const request = ctx.getRequest<Request>();
    const response = ctx.getResponse<Response>();
    const status = exception.getStatus();

    response.status(status).json({
      statusCode: status,
      timestamp: new Date().toISOString(),
      path: request.url,
    });
  }
}
```

✏️Trong ví dụ này, **ArgumentsHost** được sử dụng để chuyển đổi ngữ cảnh hiện tại sang ngữ cảnh HTTP và truy cập vào các đối tượng request và response.

## ExecutionContext class

- Trong NestJS, **ExecutionContext** là một lớp mở rộng của **ArgumentsHost** và cung cấp các phương thức mạnh mẽ hơn để quản lý ngữ cảnh thực thi của một yêu cầu. **ExecutionContext** không chỉ cung cấp các phương thức truy cập vào các đối số của handler, mà còn cho phép bạn lấy thông tin về class và handler hiện tại đang được xử lý.
- Các phương thức của **ExecutionContext** cũng tương tự như **ArgumentsHost** nhưng có thêm 2 phương thức sau:

| Phương thức  | Mô tả                                                   |
| ------------ | ------------------------------------------------------- |
| getClass()   | Trả về type của class mà controller đó thuộc về         |
| getHandler() | Trả về tham chiếu đến hàm handler (controller) được gọi |

- Ví dụ:

```ts
const methodKey = ctx.getHandler().name; // "create"
const className = ctx.getClass().name; // "CatsController"
```

- Ngoài ra, **ExecutionContext** còn cho ta truy cập vào metadata được set bởi **Reflector.createDecorator()** hoặc decorator **@SetMetadata()** trong guard hoặc interceptors. Xem tiếp ở phần dưới.

## Reflection và metadata

:::info

- NestJS cung cấp khả năng đính kèm metadata tùy chỉnh vào trình xử lý route (route handler) thông qua phương thức **Reflector.createDecorator()** hoặc decorator **@SetMetadata()**

:::

### Reflector.createDecorator()

- Ví dụ dưới đây, ta sẽ tạo một decorator "Roles" nhận vào 1 tham số là mảng string:

```ts
//roles.decorator.ts
import { Reflector } from "@nestjs/core";

export const Roles = Reflector.createDecorator<string[]>();
```

- Và giờ ta có thể sử dụng chúng ở trong controller:

```ts
// cats.controller.ts
@Post()
@Roles(['admin'])
async create(@Body() createCatDto: CreateCatDto) {
  this.catsService.create(createCatDto);
}
```

💡Ở bên trên, ta đã đính kèm decorator "Roles" vào phương thức `create()`, cho biết rằng chỉ những người dùng có vai trò quản trị viên mới được truy cập vào route này.

- Để có thể truy cập vào role của route trên, ta sẽ sử dụng **Reflector** class ở trong file guard.

```ts
//roles.guard.ts
@Injectable()
export class RolesGuard {
  constructor(private reflector: Reflector) {}
}
```

#### Lấy giá trị metadata khi chỉ định decorator ở cấp độ method:

- Để lấy giá trị của role ở cấp độ method, ta dùng phương thức `get()` với tham số thứ hai là `context.getHandler()`:

```ts
// roles.guard.ts
const roles = this.reflector.get(Roles, context.getHandler());
```

#### Lấy giá trị metadata khi chỉ định decorator ở cấp độ controller:

- Ở bên trên, ta dùng decorator "Roles" ở cấp độ method, còn nếu dùng ở cấp độ controller như sau, hãy dùng `context.getClass()`:

```ts
//cats.controller.ts
@Roles(["admin"])
@Controller("cats")
export class CatsController {}
```

```ts
//roles.guard.ts;
const roles = this.reflector.get(Roles, context.getClass());
```

#### Lấy giá trị metadata khi chỉ định decorator ở cả 2 cấp độ controller + method:

- Nếu ta dùng decorator "Roles" ở cả cấp độ controller lẫn method như sau:

```ts
@Roles(["user"])
@Controller("cats")
export class CatsController {
  @Post()
  @Roles(["admin"])
  async create(@Body() createCatDto: CreateCatDto) {
    this.catsService.create(createCatDto);
  }
}
```

✏️Trong ví dụ trên, ta muốn role có giá trị "user" là mặc định cho toàn bộ các method trong controller, nhưng với method `create()` thì muốn role là "admin". Lúc này, để lấy giá trị của role, ta dùng:

```ts
const roles = this.reflector.getAllAndOverride(Roles, [
  context.getHandler(),
  context.getClass(),
]); // ["admin"]
```

✏️Còn trong trường hợp ta muốn hợp nhất roles ở cả 2 cấp độ:

```ts
const roles = this.reflector.getAllAndMerge(Roles, [
  context.getHandler(),
  context.getClass(),
]); // ["user", "admin"]
```

### SetMetadata()

:::info

- Ngoài việc sử dụng **Reflector.createDecorator()** để tạo metadata, ta có thể dùng hàm **SetMetadata()**. Nó cũng có chức năng tương tự.

:::

- Ví dụ: tạo decorator "Roles" nhận vào tham số là 1 mảng các string

```ts
import { SetMetadata } from "@nestjs/common";

export const Roles = (...roles: string[]) => SetMetadata("roles", roles);
```

Sử dụng decorator "Roles" ở bên trong controller:

```ts
@Post()
@Roles('admin')
async create(@Body() createCatDto: CreateCatDto) {
  this.catsService.create(createCatDto);
}
```

Cuối cùng, ta có thể lấy giá trị của nó ra trong Guard:

```ts
const roles = this.reflector.get<string[]>("roles", context.getHandler());
```
