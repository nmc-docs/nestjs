---
sidebar_position: 2
---

# Modules

## Module là gì?

:::info

- Trong NestJS, một module là một class được trang bị các metadata. Nó được sử dụng để tổ chức và nhóm các thành phần liên quan với nhau.
- Mỗi ứng dụng NestJS bao gồm ít nhất một module - gọi là `AppModule`, đây là module gốc của ứng dụng. Tuy nhiên, khi ứng dụng của bạn bắt đầu lớn lên, bạn sẽ muốn chia nhỏ nó thành các module nhỏ hơn, có thể tái sử dụng ở nhiều nơi.
- Một module trong NestJS thường bao gồm:

1. **Providers** : Các service, repository, factories, helpers, v.v. là provider được chia sẻ giữa các component trong cùng một module.
2. **Controllers** : Các controller xử lý các request HTTP.
3. **Imports** : Các modules khác cần được import để sử dụng các providers và controllers.
4. **Exports** : Các providers và controllers được chia sẻ với các modules khác.

:::

## Một provider được resolve bởi module khi nào?

:::info

- Một module sẽ không resolve những provider nằm ngoài phạm vi của nó.
- Một provider được module resolve nếu:
  - Nó được truyền vào mảng **providers** khi cấu hình module,
  - Nó được export từ một module khác và module khác này phải được import vào module hiện tại. [Xem chi tiết](#importexport)
  - Nó thuộc một [Global module](#global-module)
- Khi một service được truyền vào mảng **providers** của một module mà service này sử dụng các thành phần phụ thuộc khác (tham số truyền vào constructor) thì các thành phần phụ thuộc đó cũng phải được resolve bởi module

:::

## Lệnh CLI để tạo module

- Để tạo 1 folder module trong NestJS, ta sử dụng lệnh:

```bash
nest g module [MODULE_NAME]
```

- Mặc định, folder [MODULE_NAME] sẽ được tạo ngay bên trong thư mục "src". Nếu ta muốn tạo bên trong thư mục "src/modules":

```bash
nest g module modules/customer
```

## Các cách đăng ký Provider trong Module

:::note

- Ngoài cách tạo provider thông qua decorator `@Injectable()`, và đăng ký bằng cách truyền class provider vào mảng các providers trong module (Xem [tại đây](./providers#định-nghĩa-provider)), NestJS cung cấp cho ta 3 hook để tạo và đăng ký một provider trong module.

:::

### useClass

:::info

- **useClass** provider trong NestJS là một cách để cung cấp một class như một provider cho một module. Nó cho phép bạn chỉ định một class sẽ được sử dụng khi một provider được yêu cầu.

:::

```ts title="cats.module.ts"
import { Module } from "@nestjs/common";
import { CatsController } from "./cats/cats.controller";
import { CatsService } from "./cats/cats.service";

@Module({
  controllers: [CatsController],
  providers: [
    {
      provide: "CatsService",
      useClass: CatsService,
    },
  ],
})
export class CatsModule {}
```

### useValue

:::info

- **useValue** provider trong NestJS cho phép bạn cung cấp một giá trị cụ thể (literal value) cho một provider. Điều này rất hữu ích khi bạn muốn cung cấp một cấu hình, một constant, hoặc một mock object cho các unit test.

:::

```ts title="customer.module.ts"
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

### useFactory

:::info

- **useFactory()** được sử dụng để chỉ định một hàm sẽ được gọi để tạo ra giá trị của provider. Hàm này có thể nhận các phụ thuộc khác như là tham số.
- Provider chính là giá trị được trả về từ hàm factory (có thể là một instance hoặc một giá trị)
- Hàm **useFactory()** có thể nhận tham số đầu vào, và chúng **PHẢI LÀ PROVIDER**, phải được truyền vào mảng property **inject** và quan trọng nó phải được [module resolve](./modules#một-provider-được-resolve-bởi-module-khi-nào).

:::

- Ví dụ 1:

```ts title="app.module.ts"
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

## Cách inject provider trong provider khác

:::info

- Vì khi sử dụng `useClass()`, `useValue()`, `useFactory()` để tạo và đăng ký provider cho module. Mỗi provider sẽ có một ID riêng (chính là giá trị chuỗi mà ta cung cấp ở thuộc tính `provide`). Do đó, để inject chúng ở các provider khác, ta sẽ sử dụng decorator `@Inject()`

:::

```ts title="cat.module.ts"
@Module({
  controllers: [CatsController],
  providers: [
    {
      provide: "CatsService",
      useClass: CatsService,
    },
    MeowService,
  ],
})
export class CatsModule {}
```

```ts title="meow.service.ts"
@Injectable()
export class MeowService {
  constructor(@Inject("CatsService") private catsService: CatsService) {}
}
```

:::tip

- Ta thường tạo file mới để định nghĩa key cho các provider thông qua enum

:::

## Import/export

:::info

- Ta có thể chia sẻ các provider của một module cho các module khác bằng cách sử dụng **import** và **export**.
- Lưu ý rằng, khi ta import một module thì chỉ sử dụng được các provider mà được **export** ra ở module đó.
- Chỉ **export** ra được những provider mà nằm trong mảng **providers** của module.

:::

- Ví dụ sau đây mô tả cách sử dụng provider của AuthModule bên trong UserModule:

1. Tạo AuthService:

```ts title="auth.service.ts"
import { Injectable } from "@nestjs/common";

@Injectable()
export class AuthService {
  async validateUser(username: string, password: string): Promise<any> {
    // Logic to validate user credentials
    return { userId: 1, username: "john_doe" };
  }
}
```

2. Tạo AuthModule, có provider là AuthService và export nó ra để cho module khác sử dụng:

```ts title="auth.module.ts"
import { Module } from "@nestjs/common";
import { AuthService } from "./auth.service";

@Module({
  providers: [AuthService],
  exports: [AuthService],
})
export class AuthModule {}
```

3. Sau đó import AuthModule vào bên trong UserModule:

```ts title="user.module.ts"
import { Module } from "@nestjs/common";
import { UserService } from "./user.service";
import { AuthModule } from "../auth/auth.module";

@Module({
  imports: [AuthModule], // Import AuthModule
  providers: [UserService],
  exports: [UserService],
})
export class UserModule {}
```

4. Và giờ có thể sử dụng các phương thức của provider AuthService bên trong UserService:

```ts title="user.service.ts"
import { Injectable } from "@nestjs/common";
import { AuthService } from "../auth/auth.service";

@Injectable()
export class UserService {
  constructor(private authService: AuthService) {}

  async login(username: string, password: string): Promise<any> {
    const user = await this.authService.validateUser(username, password);
    // Additional logic to handle user login
    return user;
  }
}
```

## Dynamic module

:::info

- Trong NestJS, một dynamic module là một module có thể được cấu hình một cách linh hoạt và tùy chỉnh trong thời gian chạy (runtime) thay vì thời gian biên dịch (compile-time). Điều này rất hữu ích khi ta cần cấu hình một module dựa trên các thông số động hoặc dữ liệu đến từ các nguồn khác nhau như biến môi trường, cơ sở dữ liệu, hoặc thông tin từ các service khác.
- Các bước để tạo một dynamic module trong NestJS:

1. **Tạo module với một method static** :
   Tạo một module có một phương thức static, để nhận các cấu hình và trả về một module được cấu hình.
2. **Sử dụng `DynamicModule` interface** :
   Phương thức static sẽ trả về một đối tượng theo interface `DynamicModule`, bao gồm các providers, imports, và exports cần thiết.

- Có 3 phương thức chính thường được dùng để đặt tên cho static method:
  - **register()**: Dùng khi ta muốn cấu hình dynamic module với 1 cấu hình cụ thể và chỉ dành riêng cho module gọi dynamic module này. Ví dụ với `@nestjs/axios`: `HttpModule.register({ baseUrl: 'someUrl' })` và nếu module khác ta cấu hình `HttpModule.register({ baseUrl: 'somewhere else' })`, nó sẽ có một cấu hình khác. Ta có thể cấu hình cho bao nhiêu module tùy thích.
  - **forRoot()**: Phương thức này được sử dụng để cấu hình và khởi tạo các thiết lập chung, chỉ thực hiện một lần duy nhất và thường áp dụng cho toàn bộ ứng dụng. Đây thường là nơi bạn cấu hình các thiết lập chung cho toàn bộ ứng dụng và thường được gọi trong module gốc (root module). Ví dụ như `TypeOrmModule.forRoot()`
  - **forFeature()**: Phương thức này vẫn dùng cấu hình chung ở forRoot nhưng lại được sử dụng trong các module con để cấu hình và đăng ký các tính năng hoặc cấu hình riêng cho module đó. Nó thường được dùng trong các module liên quan đến ORM (Object-Relational Mapping) như TypeORM hay Mongoose để đăng ký các entity hoặc schema cụ thể cho module.
  - **registerAsync()**, **forRootAsync()**: Cũng giống như **register()**, **forRoot()** nhưng cho phép ta cấu hình module với các thiết lập bất đồng bộ hoặc sử dụng các dependency injection trong đó.

:::

### Ví dụ dynamic module RedisModule

- Tạo type cho options:

```ts title="redis-module.type.ts"
import { RedisOptions } from "ioredis";

export interface IRedisModuleAsyncOptions {
  imports?: any[];
  useFactory?: (...args: any[]) => Promise<RedisOptions> | RedisOptions;
  inject?: any[];
  isGlobal?: boolean;
}

export interface IRedisModuleOptions extends RedisOptions {
  isGlobal?: boolean;
}
```

- Tạo dynamic module:

```ts title="redis.module.ts"
import { DynamicModule, Module } from "@nestjs/common";

import { EProviderKey } from "src/common/constants/enum";
import { RedisService } from "src/modules/libs/redis/redis.service";
import {
  IRedisModuleAsyncOptions,
  IRedisModuleOptions,
} from "src/modules/libs/redis/types/redis-module.type";

@Module({})
export class RedisModule {
  static registerAsync(options: IRedisModuleAsyncOptions): DynamicModule {
    const defaultFactory = (...args: any[]) => null;
    return {
      module: RedisModule,
      imports: options.imports || [],
      providers: [
        RedisService,
        {
          provide: EProviderKey.REDIS_OPTIONS,
          useFactory: options.useFactory || defaultFactory,
          inject: options.inject || [],
        },
      ],
      exports: [RedisService],
      global: options.isGlobal ?? false,
    };
  }

  static register(options: IRedisModuleOptions): DynamicModule {
    return {
      module: RedisModule,
      providers: [
        RedisService,
        { provide: EProviderKey.REDIS_OPTIONS, useValue: options },
      ],
      exports: [RedisService],
      global: options.isGlobal ?? false,
    };
  }
}
```

- Tạo RedisService:

```ts title="redis.service.ts"
import { Inject, Injectable, Logger, OnModuleInit } from "@nestjs/common";
import { Redis, RedisOptions } from "ioredis";

import { EProviderKey } from "src/common/constants/enum";

@Injectable()
export class RedisService extends Redis implements OnModuleInit {
  private readonly logger = new Logger(RedisService.name);

  constructor(
    @Inject(EProviderKey.REDIS_OPTIONS)
    options: RedisOptions
  ) {
    super(options);
  }

  async onModuleInit() {
    try {
      const redisInfo = await this.info();
      await this.config("SET", "notify-keyspace-events", "KEA");
      this.logger.log("🚀 Connect to Redis successfully!");
    } catch (error) {
      this.disconnect();
      throw new Error(
        `❌ Connect to Redis failed: ${(error as Error).message}`
      );
    }
  }
}
```

- Sau đó, ở các module mà ta muốn sử dụng RedisModule:

```ts title="auth.module.ts"
@Module({
  imports: [
    RedisModule.register({
      host: "localhost",
      port: 6379,
      password: "ptit_150920022",
    }),
  ],
})
export class AuthModule {}
```

```ts title="orders.module.ts"
@Module({
  imports: [
    RedisModule.registerAsync({
      imports: [ConfigModule],
      useFactory: (configService: ConfigService<IEnvironmentVariables>) => ({
        host: configService.get<string>("REDIS_HOST"),
        port: configService.get<number>("REDIS_PORT"),
        password: configService.get<string>("REDIS_PASSWORD"),
      }),
      inject: [ConfigService],
    }),
  ],
})
export class OrdersModule {}
```

## Global module

- Như đã nói bên trên, để sử dụng một service, hay một provider của một module (gọi là ModuleA), ta phải import ModuleA đó vào. Nhưng nếu service, hay provider đó được sử dụng ở rất nhiều nơi, thì mỗi lần dùng ta lại phải import ModuleA đó vào, điều này có thể gây bất tiện. Để giải quyết điều này, hãy đánh dấu ModuleA bởi decorator **@Global()**. Sau đó, ta có thể sử dụng trực tiếp các service, provider mà không cần phải import ModuleA.
- Ví dụ:

```ts title="cats.module.ts"
import { Module, Global } from "@nestjs/common";
import { CatsController } from "./cats.controller";
import { CatsService } from "./cats.service";

@Global()
@Module({
  controllers: [CatsController],
  providers: [CatsService],
  exports: [CatsService],
})
export class CatsModule {}
```

:::note

- Ta không nên quá lạm dụng decorator **@Global()** này.

:::
