---
sidebar_position: 4
---

# Note về NestJS

:::note

- Khi tạo một service mà được quản lý bởi Dependency Injection Container (được đánh dấu bởi **@Injectable()**), ngoại trừ các [Guard](./nestjs-fundamentals/guards), [Exception filter](./nestjs-fundamentals/exception-filters), [Pipe](./nestjs-fundamentals/pipes), [Interceptor](./nestjs-fundamentals/interceptors), [Middleware](./nestjs-fundamentals/middleware) thì nên cho chúng vào một module. Khi sử dụng các service này thì import module đó vào.

:::
