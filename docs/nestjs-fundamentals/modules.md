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

:::note

- Một module sẽ không resolve những provider nằm ngoài phạm vi của nó.
- Ví dụ như class ControllerA gán với ModuleA mà ControllerA sử dụng các provider nào đó thì provider này hoặc là nó phải được đưa vào mảng các providers của ModuleA, hoặc nếu nó thuộc module khác thì phải import module chứa nó vào ModuleA.

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

## Chia sẻ giữa các module

- Đôi khi, chúng ta cần sử dụng một provider của một module khác bên trong module hiện tại, ví dụ như service B của module B cần sử dụng phương thức của server A của module A.
- Để có thể sử dụng provider của một module khác, ta sử dụng **import** và **export**.
- Ví dụ sau đây mô tả cách sử dụng provider của AuthModule bên trong UserModule:

1. Tạo AuthService:

```ts
// auth.service.ts
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

```ts
// auth.module.ts
import { Module } from "@nestjs/common";
import { AuthService } from "./auth.service";

@Module({
  providers: [AuthService],
  exports: [AuthService],
})
export class AuthModule {}
```

3. Sau đó import AuthModule vào bên trong UserModule:

```ts
// user.module.ts
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

```ts
// user.service.ts
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

:::note

- Lưu ý rằng, khi ta import một module thì chỉ sử dụng được các provider mà được export ra ở module đó.
- Chỉ export ra được những provider mà nằm trong mảng providers của module.

:::

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

:::

### Ví dụ 1

- Sau đây ta sẽ tạo một dynamic module tên DatabaseModule:

```ts
import { Module, DynamicModule, Provider } from "@nestjs/common";
import {
  createConnection,
  Connection,
  Repository,
  EntitySchema,
} from "typeorm";
import { TypeOrmModuleOptions } from "@nestjs/typeorm";

@Module({})
export class DatabaseModule {
  static forRoot(options: TypeOrmModuleOptions): DynamicModule {
    const connectionProvider = {
      provide: "DATABASE_CONNECTION",
      useFactory: async () => await createConnection(options),
    };

    return {
      module: DatabaseModule,
      providers: [connectionProvider],
      exports: [connectionProvider],
    };
  }

  static forFeature(entities: Function[] | EntitySchema<any>[]): DynamicModule {
    const repositories = entities.map((entity) => ({
      provide: `${entity.name}Repository`,
      useFactory: (connection: Connection) => connection.getRepository(entity),
      inject: ["DATABASE_CONNECTION"],
    }));

    return {
      module: DatabaseModule,
      providers: repositories,
      exports: repositories,
    };
  }
}
```

- Tiếp theo, ta sẽ sử dụng `DatabaseModule.forRoot()` và truyền cấu hình database vào nó ở file **app.module.ts**:

```ts
import { Module } from "@nestjs/common";
import { DatabaseModule } from "./database.module";

@Module({
  imports: [
    DatabaseModule.forRoot({
      type: "postgres",
      host: "localhost",
      port: 5432,
      username: "test",
      password: "test",
      database: "test",
    }),
  ],
})
export class AppModule {}
```

- Tiếp theo, tại UserModule, vì module này ta chỉ muốn sử dụng repository với model là User cho nên ta chỉ cần truyền User vào `DatabaseModule.forFeature([User])`. Tương tự đối với các module khác, sử dụng repository của model nào, chỉ cần truyền model đó vào hàm forFeature(), đó gọi là dynamic module.

```ts
import { Module } from "@nestjs/common";
import { DatabaseModule } from "./database.module";
import { User } from "./user.entity";
import { UserService } from "./user.service.ts";

@Module({
  imports: [DatabaseModule.forFeature([User])],
  providers: [UserService],
})
export class UserModule {}
```

```ts
import { Injectable, Inject } from "@nestjs/common";
import { Repository } from "typeorm";
import { User } from "./user.entity";

@Injectable()
export class UserService {
  constructor(
    @Inject("UserRepository") private readonly userRepository: Repository<User>
  ) {}

  // Implement your service methods here
}
```

### Ví dụ 2

- Sau đây ta sẽ tạo dynamic module có service chứa phương thức lấy giá trị biến môi trường (Variables Environment):

```ts
export interface ConfigModuleOptions {
  folder: string;
}

@Module({})
export class ConfigModule {
  static register(options: ConfigModuleOptions): DynamicModule {
    return {
      module: ConfigModule,
      providers: [
        {
          provide: "CONFIG_OPTIONS",
          useValue: options,
        },
        ConfigService,
      ],
      exports: [ConfigService],
    };
  }
}

import * as dotenv from "dotenv";
import * as fs from "fs";
import { Injectable, Inject } from "@nestjs/common";
import { EnvConfig } from "./interfaces";

@Injectable()
export class ConfigService {
  private readonly envConfig: EnvConfig;

  constructor(@Inject("CONFIG_OPTIONS") private options) {
    const filePath = `${process.env.NODE_ENV || "development"}.env`;
    const envFile = path.resolve(__dirname, "../../", options.folder, filePath);
    this.envConfig = dotenv.parse(fs.readFileSync(envFile));
  }

  get(key: string): string {
    return this.envConfig[key];
  }
}
```

- Sau đó, gọi hàm register ở file **app.module.ts:**

```ts
import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { ConfigModule } from "./config/config.module";

@Module({
  imports: [ConfigModule.register({ folder: "./config" })],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
```

- Tiếp theo, import vào module muốn sử dụng, chẳng hạn như AuthModule:

```ts
// auth.module.ts
import { Module } from "@nestjs/common";
import { AuthService } from "./auth.service";

@Module({
  imports: [ConfigModule],
  providers: [AuthService],
  exports: [AuthService],
})
export class AuthModule {}
```

- Sử dụng ConfigService ở AuthService:

```ts
// auth.service.ts

@Injectable()
export class AuthService {
  constructor(private configService: ConfigService) {}
  async validateUser(username: string, password: string): Promise<any> {
    const secretKey = this.configService.get("SECRET_KEY");
    return { userId: 1, username: "john_doe" };
  }
}
```

## Global module

- Như đã nói bên trên, để sử dụng một service, hay một provider của một module (gọi là ModuleA), ta phải import ModuleA đó vào. Nhưng nếu service, hay provider đó được sử dụng ở rất nhiều nơi, thì mỗi lần dùng ta lại phải import ModuleA đó vào, điều này có thể gây bất tiện. Để giải quyết điều này, hãy đánh dấu ModuleA bởi decorator **@Global()**. Sau đó, ta có thể sử dụng trực tiếp các service, provider mà không cần phải import ModuleA.
- Ví dụ:

```ts
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
