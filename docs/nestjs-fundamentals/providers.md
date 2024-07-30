---
sidebar_position: 1
---

# Providers

## Dependency Injection (DI) là gì?

- Ta có ví dụ sau:

```ts
class UserService {
  private authService: AuthService;

  constructor(authService: AuthService) {
    this.authService = authService;
  }

  async login(username: string, password: string): Promise<User> {
    const token = await this.authService.authenticate(username, password);
    const user = await this.getUser(token);
    return user;
  }
}
```

```ts
class AuthService {
  private databaseService: DatabaseService;

  constructor(databaseService: DatabaseService) {
    this.databaseService = databaseService;
  }

  async authenticate(username: string, password: string): Promise<string> {
    const isValid = await this.databaseService.verifyCredentials(
      username,
      password
    );
    if (isValid) {
      return this.generateToken(username);
    } else {
      throw new Error("Invalid credentials");
    }
  }

  private generateToken(username: string): string {
    // Logic to generate an authentication token
    return "ABC123";
  }
}
```

```ts
class DatabaseService {
  async verifyCredentials(
    username: string,
    password: string
  ): Promise<boolean> {
    // Logic to check the database for valid credentials
    return username === "admin" && password === "password";
  }
}
```

:::note

- Trong ví dụ trên, ta thấy UserService phụ thuộc vào AuthService, AuthService sau đó phụ thuộc vào DatabaseService, do đó khi khởi tạo sẽ như sau:

```ts
new UserService(new AuthService(new DatabaseService()));
```

- Vấn đề là khi 1 service có quá nhiều sự phụ thuộc vào các service khác, việc quản lý cũng như tổ chức code gặp khó khăn, vì vậy kỹ thuật Dependency Injection là giải pháp.

:::

:::info

- Dependency Injection (DI) là một mô hình thiết kế phần mềm trong đó các đối tượng nhận được các đối tượng phụ thuộc của chúng thông qua một cơ chế bên ngoài thay vì tự tạo ra chúng.
- Trong DI, thay vì tạo ra các đối tượng phụ thuộc trong bản thân đối tượng sử dụng chúng, các đối tượng phụ thuộc này được cung cấp bởi một "Injector" hoặc "Container" bên ngoài (Trong NestJS nó gọi là Nest IoC Container). Điều này giúp giảm sự kết dính giữa các thành phần trong ứng dụng.
- Các thành phần được đánh dấu là đối tượng phụ thuộc gọi là một **Provider**

:::

## Định nghĩa Provider

:::info

- Trong NestJS, ta có thể đánh dấu một service là một provider thông qua **@Injectable()**
- Khi ta đánh dấu một class bằng decorator `@Injectable()`, NestJS biết rằng class này cần được xử lý bởi container dependency injection. Điều này cho phép ta inject class này vào class khác làm làm đối tượng phụ thuộc mà không cần khởi tạo chúng.

:::

- Ví dụ:

```ts
import { Injectable } from "@nestjs/common";
import { Cat } from "./interfaces/cat.interface";

@Injectable()
export class CatsService {
  private readonly cats: Cat[] = [];

  findAll(): Cat[] {
    return this.cats;
  }
}
```

- Và ta sử dụng CatsService này ở trong CatsController:

```ts
import { Controller, Get } from "@nestjs/common";
import { CatsService } from "./cats.service";
import { Cat } from "./interfaces/cat.interface";

@Controller("cats")
export class CatsController {
  constructor(private catsService: CatsService) {}

  @Get()
  async findAll(): Promise<Cat[]> {
    return this.catsService.findAll();
  }
}
```

- Cuối cùng, ta phải "đăng ký" (register) provider CatsService này với Nest IoC Container thông qua providers trong CatsModule:

```ts
import { Module } from "@nestjs/common";
import { CatsController } from "./cats/cats.controller";
import { CatsService } from "./cats/cats.service";

@Module({
  controllers: [CatsController],
  providers: [CatsService],
})
export class CatsModule {}
```
