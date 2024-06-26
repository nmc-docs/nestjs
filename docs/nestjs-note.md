---
sidebar_position: 99
---

# Note về NestJS

:::note

- Trong NestJS, decorator `@Injectable()` được sử dụng để đánh dấu một lớp là một provider. Các provider trong NestJS là các đối tượng mà có thể được NestJS quản lý và inject (tiêm) vào các phần khác của ứng dụng (như controller hoặc các provider khác) thông qua cơ chế dependency injection.
- Tại sao cần sử dụng `@Injectable()`?
  Dependency Injection: `@Injectable()` giúp NestJS biết rằng lớp này có thể được tiêm vào các lớp khác. Điều này giúp quản lý sự phụ thuộc giữa các lớp dễ dàng hơn và thúc đẩy việc sử dụng lại mã nguồn.
  Quản lý lifecycle: NestJS quản lý vòng đời của các provider và đảm bảo rằng chúng được khởi tạo và hủy đúng cách.

:::

:::note

- Khi tạo một service mà được quản lý bởi Dependency Injection Container (được đánh dấu bởi `@Injectable()`), ngoại trừ các [Guard](./nestjs-fundamentals/guards), [Exception filter](./nestjs-fundamentals/exception-filters), [Pipe](./nestjs-fundamentals/pipes), [Interceptor](./nestjs-fundamentals/interceptors), [Middleware](./nestjs-fundamentals/middleware) thì nên cho chúng vào một module. Khi sử dụng các service này thì import module đó vào.

:::
