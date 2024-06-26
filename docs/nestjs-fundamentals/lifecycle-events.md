---
sidebar_position: 11
---

# Vòng đời của events

## Lifecycle trong NestJS

- NestJS cũng giống các ứng dụng khác, đều có vòng đời. NestJS cung cấp các lifecycle hooks cho chúng ta điều khiển các event trong vòng đời.
- Sơ đồ sau đây mô tả các chuỗi event quan trọng trong vòng đời của ứng dụng, từ khi ứng dụng được khởi động cho đến khi ứng dụng được ngắt.
- Ta có thể chia vòng đời tổng thể thành 3 giai đoạn: initializing (khởi tạo), running (chạy) và terminating (kết thúc). Sử dụng vòng đời này, ta có thể thực hiện lập kế hoạch khởi tạo module và các service một cách phù hợp, quản lý các kết nối đang hoạt động và ngắt ứng dụng một cách phù hợp.

![1718291885188](image/lifecycle-events/1718291885188.png)

| Lifecycle hook              | Mô tả                                                                                                                                                                                                                                       |
| --------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| onModuleInit()              | Được gọi MỘT LẦN sau khi một module được khởi tạo.                                                                                                                                                                                          |
| onApplicationBootstrap()    | Được gọi MỘT LẦN sau khi tất cả các module được khởi tạo xong và trước khi lắng nghe kết nối (**app.listen()**). Thường được sử dụng để thực hiện các tác vụ sau khi ứng dụng đã sẵn sàng, như đăng ký các lịch trình, khởi tạo cache, v.v. |
| onModuleDestroy()           | Được gọi khi một module sắp bị hủy. Thường được sử dụng để thực hiện các tác vụ dọn dẹp, như giải phóng tài nguyên, hủy đăng ký các dịch vụ, v.v.                                                                                           |
| beforeApplicationShutdown() | Được gọi sau khi**onModuleDestroy()** thực thi xong (bất kể là resolved hay rejected). Sau đó, tất cả các kết nối sẽ được đóng lại (**app.close()** được gọi)                                                                               |
| onApplicationShutdown()     | Được gọi sau khi tất cả kết nối được đóng (**app.close()** được resolved)                                                                                                                                                                   |

## Ví dụ

- Sau đây là một ví dụ với **onModuleInit()**:

```ts
import { Injectable, OnModuleInit } from "@nestjs/common";

@Injectable()
export class UsersService implements OnModuleInit {
  onModuleInit() {
    console.log(`The module has been initialized.`);
  }
}
```
