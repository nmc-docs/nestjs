---
sidebar_position: 10
---

# Circular dependency

## Circular dependency là gì?

- Circular dependency (phụ thuộc vòng tròn) trong NestJS xảy ra khi hai hoặc nhiều module/service phụ thuộc vào nhau theo vòng lặp, dẫn đến lỗi hoặc hành vi không mong muốn trong ứng dụng.
- Ví dụ đơn giản về circular dependency:

  - `ServiceA` phụ thuộc vào `ServiceB`
  - `ServiceB` lại phụ thuộc ngược lại vào `ServiceA`

- Điều này tạo ra một vòng lặp và NestJS sẽ không thể khởi tạo các service một cách đúng đắn.

## Ví dụ về Circular Dependency trong NestJS

- Giả sử ta có hai service: `UsersService` và `AuthService`:

```ts
import { Injectable } from "@nestjs/common";
import { AuthService } from "../auth/auth.service";

@Injectable()
export class UsersService {
  constructor(private readonly authService: AuthService) {}

  getUser() {
    return "User data";
  }

  validateUser() {
    return this.authService.validateUser();
  }
}
```

```ts
import { Injectable } from "@nestjs/common";
import { UsersService } from "../users/users.service";

@Injectable()
export class AuthService {
  constructor(private readonly usersService: UsersService) {}

  validateUser() {
    return this.usersService.getUser();
  }
}
```

:::note

- Cả hai service đều phụ thuộc vào nhau, dẫn đến circular dependency.

:::

## Cách khắc phục Circular Dependency trong NestJS

:::info

- Ta sẽ sử dụng `forwardRef()` để giải quyết Circular Dependency.

:::

- Cập nhật `UserService`:

```ts
import { Injectable, forwardRef, Inject } from "@nestjs/common";
import { AuthService } from "../auth/auth.service";

@Injectable()
export class UsersService {
  constructor(
    @Inject(forwardRef(() => AuthService))
    private readonly authService: AuthService
  ) {}

  getUser() {
    return "User data";
  }

  validateUser() {
    return this.authService.validateUser();
  }
}
```

- Cập nhật `AuthService`:

```ts
import { Injectable, forwardRef, Inject } from "@nestjs/common";
import { UsersService } from "../users/users.service";

@Injectable()
export class AuthService {
  constructor(
    @Inject(forwardRef(() => UsersService))
    private readonly usersService: UsersService
  ) {}

  validateUser() {
    return this.usersService.getUser();
  }
}
```

- Sau đó, trong `AuthModule` và `UsersModule`, sử dụng `forwardRef` khi import:

```ts
import { Module, forwardRef } from "@nestjs/common";
import { UsersService } from "./users.service";
import { AuthModule } from "../auth/auth.module";

@Module({
  providers: [UsersService],
  exports: [UsersService],
  imports: [forwardRef(() => AuthModule)],
})
export class UsersModule {}
```

```ts
import { Module, forwardRef } from "@nestjs/common";
import { AuthService } from "./auth.service";
import { UsersModule } from "../users/users.module";

@Module({
  providers: [AuthService],
  exports: [AuthService],
  imports: [forwardRef(() => UsersModule)],
})
export class AuthModule {}
```
