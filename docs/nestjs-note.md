---
sidebar_position: 99
---

# Note về NestJS

## 1

:::note

- Trong NestJS, decorator `@Injectable()` được sử dụng để đánh dấu một lớp là một provider. Các provider trong NestJS là các đối tượng mà có thể được NestJS quản lý và inject (tiêm) vào các phần khác của ứng dụng (như controller hoặc các provider khác) thông qua cơ chế dependency injection.
- Tại sao cần sử dụng `@Injectable()`?
  Dependency Injection: `@Injectable()` giúp NestJS biết rằng lớp này có thể được tiêm vào các lớp khác. Điều này giúp quản lý sự phụ thuộc giữa các lớp dễ dàng hơn và thúc đẩy việc sử dụng lại mã nguồn.
  Quản lý lifecycle: NestJS quản lý vòng đời của các provider và đảm bảo rằng chúng được khởi tạo và hủy đúng cách.

:::

## 2

:::note

- Khi tạo một service mà được quản lý bởi Dependency Injection Container (được đánh dấu bởi `@Injectable()`), ngoại trừ các [Guard](./nestjs-fundamentals/guards), [Exception filter](./nestjs-fundamentals/exception-filters), [Pipe](./nestjs-fundamentals/pipes), [Interceptor](./nestjs-fundamentals/interceptors), [Middleware](./nestjs-fundamentals/middleware) thì nên cho chúng vào một module. Khi sử dụng các service này thì import module đó vào.

:::

## 3

:::note

❌KHÔNG NÊN VIẾT KIỂU NÀY:

```ts
import { Injectable } from "@nestjs/common";
import { Redis } from "ioredis";

@Injectable()
export class RedisService {
  private redis: Redis;

  constructor() {
    this.redis = new Redis();
  }
}
```

✅NÊN VIẾT NHƯ NÀY: tạo thành một service mới để dễ quản lý, sau đó bỏ hết vào một module.

```ts
import { Inject, Injectable, Logger, OnModuleInit } from "@nestjs/common";
import { Redis, RedisOptions } from "ioredis";

import { EProviderKey } from "src/common/constants/provider-key.constant";

@Injectable()
export class RedisProvider extends Redis {
  //Ta được viết như này bởi vì logger này là một constant và chỉ áp dụng cho riêng service RedisProvider
  private readonly logger = new Logger(RedisProvider.name);

  constructor(@Inject(EProviderKey.REDIS_OPTIONS) options: RedisOptions) {
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

```ts
import { Injectable } from "@nestjs/common";
import { Redis } from "ioredis";

@Injectable()
export class RedisService {
  constructor(private redis: RedisProvider) {}
}
```

:::

## 4

:::note

```ts
import { Injectable } from "@nestjs/common";

@Injectable()
export class ExampleService {
  private property1;
  private property2;
  private constants1 = "EXAMPLE VALUE";

  constructor(
    private serviceA: ServiceA,
    private serviceB: ServiceB,
    private serviceC: ServiceC
  ) {
    property1 = X;
    property2 = Y;
  }
}
```

- Các tham số truyền vào `constructor()` phải là các **PROVIDER**.
- Các thuộc tính khác của class không phải là **PROVIDER** thì khai báo ra ngoài, khi khởi tạo thì thực hiện bên trong hàm `constructor()`
- Các thuộc tính là hằng số thì khai báo và gán luôn giá trị.

:::

## 5

:::note

- Khi sử dụng các class của thư viện, ta nên tạo provider riêng và `extends` từ class của thư viện đó.
- Nếu class của thư viện có tham số khởi tạo thì ta nên tạo dynamic module, tạo các hàm static như `forRoot`, `register`,... để nhận cấu hình. Sau đó, tạo thêm provider sử dụng `useValue` hoặc `useFactory` để nhận giá trị cấu hình này. Việc còn lại là từ class extends kia, ta inject provider chứa tham số cấu hình vào và sử dụng `super()` để khởi tạo.

```ts
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

```ts
@Module({})
export class RedisModule {
  static forRootAsync(options: IRedisModuleAsyncOptions): DynamicModule {
    const defaultFactory = (...args: any[]) => null;
    return {
      module: RedisModule,
      imports: options.imports || [],
      providers: [
        RedisProvider,
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

  static forRoot(options: IRedisModuleOptions): DynamicModule {
    return {
      module: RedisModule,
      providers: [
        RedisProvider,
        RedisService,
        { provide: EProviderKey.REDIS_OPTIONS, useValue: options },
      ],
      exports: [RedisService],
      global: options.isGlobal ?? false,
    };
  }
}
```

```ts
@Injectable()
export class RedisProvider extends Redis {
  constructor(@Inject(EProviderKey.REDIS_OPTIONS) options: RedisOptions) {
    super(options);
  }
}
```

:::
