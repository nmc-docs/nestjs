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

## 4

:::note

❌KHÔNG NÊN VIẾT KIỂU NÀY:

```ts title="redis.service.ts"
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

- Khi sử dụng các class của thư viện, ta nên tạo provider riêng và `extends` từ class của thư viện đó.
- Nếu class của thư viện có tham số khởi tạo mà các tham số này ta chỉ sử dụng một lần duy nhất cho toàn app, ta truyền luôn cấu hình như sau:

```ts title="redis.provider.ts"
import { Injectable, Logger, OnModuleInit } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { Redis } from "ioredis";

import { IEnvironmentVariables } from "src/common/types/env.type";

@Injectable()
export class RedisProvider extends Redis implements OnModuleInit {
  private readonly logger = new Logger(RedisProvider.name);

  constructor(private configService: ConfigService<IEnvironmentVariables>) {
    super({
      host: configService.get<string>("REDIS_HOST"),
      port: configService.get<number>("REDIS_PORT"),
      password: configService.get<string>("REDIS_PASSWORD"),
    });
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

```ts title="redis.service.ts"
import { Injectable } from "@nestjs/common";

import { ETokenExpiration } from "src/common/constants/common.enum";
import { RedisProvider } from "src/modules/libs/redis/redis.provider";

@Injectable()
export class RedisService {
  constructor(private redis: RedisProvider) {}

  setFilePublicId = async (encodeURL: string, publicId: string) => {
    await this.redis.set(`file_public_id:${encodeURL}`, publicId);
  };

  getFilePublicId = async (encodeURL: string) => {
    const publicId = await this.redis.get(`file_public_id:${encodeURL}`);
    return publicId;
  };

  deleteFilePublicId = async (encodeURL: string) => {
    await this.redis.del(`file_public_id:${encodeURL}`);
  };
}
```

```ts title="redis.module.ts"
import { Module } from "@nestjs/common";

import { RedisProvider } from "src/modules/libs/redis/redis.provider";
import { RedisService } from "src/modules/libs/redis/redis.service";

@Module({
  providers: [RedisProvider, RedisService],
  exports: [RedisService],
})
export class RedisModule {}
```

- Nếu class của thư viện có tham số khởi tạo mà các tham số này ta sử dụng mỗi module một khác, hãy tạo dynamic module như ở [ví dụ này](./nestjs-fundamentals/modules#ví-dụ-dynamic-module-redismodule)

:::
