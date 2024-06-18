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

## Các loại Provider thường dùng trong NestJS

### useClass

:::info

- **useClass** provider trong NestJS là một cách để cung cấp một class như một provider cho một module. Nó cho phép bạn chỉ định một class sẽ được sử dụng khi một provider được yêu cầu.

:::

- Ví dụ ở bên trên là một minh họa cho việc sử dụng **useClass**, nếu viết rõ ra thì là:

```ts
import { Module } from "@nestjs/common";
import { CatsController } from "./cats/cats.controller";
import { CatsService } from "./cats/cats.service";

@Module({
  controllers: [CatsController],
  providers: [
    {
      provide: CatsService,
      useClass: CatsService,
    },
  ],
})
export class CatsModule {}
```

- Ở thuộc tính `provide`, ta có thể chỉ định một key (kiểu string) cho nó thay vì để cả một class service như vậy, và nếu muốn sử dụng provider này, ta sử dụng **@Inject(TOKEN_NAME)**:

```ts
@Module({
  controllers: [CustomersController],
  providers: [
    {
      provide: "CUSTOMERS_SERVICE",
      useClass: CustomersService,
    },
  ],
})
export class CustomersModule {}
```

```ts
@Controller("customers")
export class CustomersController {
  constructor(
    @Inject("CUSTOMERS_SERVICE") private customerService: CustomersService
  ) {}
  @Get("")
  getAllCustomers() {
    const customers = this.customerService.findAll();
    return customers;
  }
}
```

### useValue

:::info

- **useValue** provider trong NestJS cho phép bạn cung cấp một giá trị cụ thể (literal value) cho một provider. Điều này rất hữu ích khi bạn muốn cung cấp một cấu hình, một constant, hoặc một mock object cho các unit test.

:::

- Ví dụ:

```ts
export interface IExampleUseValue {
  apiUrl: string;
  host: number;
}

@Module({
  controllers: [CustomersController],
  providers: [
    {
      provide: "EXAMPLE_USE_VALUE",
      useValue: {
        apiUrl: "http://example.com",
        host: 3000,
      } as IExampleUseValue,
    },
  ],
})
export class CustomersModule {}
```

```ts
@Controller("customers")
export class CustomersController {
  constructor(
    @Inject("EXAMPLE_USE_VALUE") private exampleUseValue: IExampleUseValue
  ) {}
  @Get("")
  getAllCustomers() {
    console.log(this.exampleUseValue);
  }
}
```

### useFactory

:::info

- **useFactory** provider trong NestJS là một cách rất mạnh mẽ để cung cấp các provider động. Nó cho phép viết một hàm factory để tạo ra instance của provider, có thể sử dụng các dependencies khác và các tham số cấu hình làm tham số.
- Provider chính là giá trị được trả về từ hàm factory (có thể là một instance)
- Hàm factory có thể nhận tham số đầu vào, và chúng **PHẢI LÀ PROVIDER**, phải được truyền vào mảng property **inject** và quan trọng nó phải được [module resolve](./modules#một-provider-được-resolve-bởi-module-khi-nào).

:::

- Ví dụ:

```ts
const connectionProvider = {
  provide: "CONNECTION",
  useFactory: (optionsProvider: OptionsProvider, optionalProvider?: string) => {
    const options = optionsProvider.get();
    return new DatabaseConnection(options);
  },
  inject: [OptionsProvider, { token: "SomeOptionalProvider", optional: true }],
  //       \_____________/            \__________________/
  //        This provider              The provider with this
  //        is mandatory.              token can resolve to `undefined`.
};

@Module({
  providers: [
    connectionProvider,
    OptionsProvider,
    { provide: "SomeOptionalProvider", useValue: "anything" },
  ],
})
export class AppModule {}
```

- Ví dụ tiếp:

```ts
import { DataSource } from "typeorm";
import { Module } from "@nestjs/common";

const databaseProviders = [
  {
    provide: "DATA_SOURCE",
    useFactory: async () => {
      const dataSource = new DataSource({
        type: "mysql",
        host: "localhost",
        port: 3306,
        username: "root",
        password: "root",
        database: "test",
        entities: [__dirname + "/../**/*.entity{.ts,.js}"],
        synchronize: true,
      });

      return dataSource.initialize();
    },
  },
];

@Module({
  providers: [...databaseProviders],
  exports: [...databaseProviders],
})
export class DatabaseModule {}
```

```ts
import { Module } from "@nestjs/common";
import { DatabaseModule } from "../database/database.module";
import { photoProviders } from "./photo.providers";
import { PhotoService } from "./photo.service";

@Module({
  imports: [DatabaseModule],
  providers: [
    {
      provide: "PHOTO_REPOSITORY",
      useFactory: (dataSource: DataSource) => dataSource.getRepository(Photo),
      inject: ["DATA_SOURCE"], // Inject provider theo tên token
    },
    ,
    PhotoService,
  ],
})
export class PhotoModule {}
```

```ts
import { Injectable, Inject } from "@nestjs/common";
import { Repository } from "typeorm";
import { Photo } from "./photo.entity";

@Injectable()
export class PhotoService {
  constructor(
    @Inject("PHOTO_REPOSITORY")
    private photoRepository: Repository<Photo>
  ) {}

  async findAll(): Promise<Photo[]> {
    return this.photoRepository.find();
  }
}
```

## So sánh cách tạo provider

- Như ở bên trên giới thiệu, ta có thể dùng **useFactory** để tạo một provider, ví dụ như:

```ts
@Module({
  imports: [],
  controllers: [],
  providers: [
    {
      provide: APP_INTERCEPTOR,
      useFactory: (reflector: Reflector) => {
        return new ClassSerializerInterceptor(reflector, {
          strategy: "excludeAll",
          excludeExtraneousValues: true,
        });
      },
      inject: [Reflector],
    },
  ],
})
export class AppModule {}
```

- Ta cũng có thể tạo riêng provider này ra một file khác:

```ts
import {
  ClassSerializerInterceptor,
  Injectable,
  NestInterceptor,
} from "@nestjs/common";
import { Reflector } from "@nestjs/core";

@Injectable()
export class CustomClassSerializerInterceptor
  extends ClassSerializerInterceptor
  implements NestInterceptor
{
  constructor(public reflector: Reflector) {
    super(reflector, { strategy: "excludeAll", excludeExtraneousValues: true });
  }
}
```

- Và sau đó dùng **useClass**:

```ts
@Module({
  imports: [],
  controllers: [],
  providers: [
    {
      provide: APP_INTERCEPTOR,
      useClass: CustomClassSerializerInterceptor,
    },
  ],
})
export class AppModule {}
```
