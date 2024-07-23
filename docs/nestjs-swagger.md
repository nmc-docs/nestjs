---
sidebar_position: 8
---
# Nestjs Swagger

## Cài đặt thư viện

```bash
npm install @nestjs/swagger
```

## Cấu hình Swagger Plugin

:::info

Plugin Swagger sẽ tự động:

- Tự động đọc các thuộc tính body request và response ở các file mà ta định nghĩa DTO.
- Thiết lập thuộc tính `required` tùy thuộc vào dấu "?" ở property (ví dụ: `name?: string` sẽ đặt `required: false`)
- Thiết lập `type `hoặc `enum `tùy thuộc vào kiểu ta định nghĩa (hỗ trợ kiểu mảng)
- Thiết lập giá trị `default` dựa trên giá trị mặc định được gán
- Thiết lập một số quy tắc xác thực dựa trên các trình trang trí class-validator

:::

- Để thiết lập Swagger Plugin, vào file **nest-cli.json** và thêm plugin như sau:

```json
{
  "collection": "@nestjs/schematics",
  "sourceRoot": "src",
  "compilerOptions": {
    "plugins": ["@nestjs/swagger"]
  }
}
```

- Ta có thể thêm các cấu hình cho plugin:

```json
"plugins": [
  {
    "name": "@nestjs/swagger",
    "options": {
      "classValidatorShim": false,
      "introspectComments": true
    }
  }
]
```

| Tùy chọn        | Giá trị mặc định         | Mô tả                              |
| ----------------- | ----------------------------- | ------------------------------------ |
| dtoFileNameSuffix | `['.dto.ts', '.entity.ts']` | Đuôi file mà plugin sẽ đọc DTO |

- Dưới đây là so sánh khi ta không dùng và dùng Swagger Plugin:

```ts
export class CreateUserDto {
  @ApiProperty()
  email: string;

  @ApiProperty()
  password: string;

  @ApiProperty({ enum: RoleEnum, default: [], isArray: true })
  roles: RoleEnum[] = [];

  @ApiProperty({ required: false, default: true })
  isEnabled?: boolean = true;
}
```

```ts
export class CreateUserDto {
  email: string;
  password: string;
  roles: RoleEnum[] = [];
  isEnabled?: boolean = true;
}
```

## Cấu hình Swagger

- Tạo file **swagger.config.ts**:

```ts
import { DocumentBuilder, SwaggerCustomOptions } from '@nestjs/swagger';

export const swaggerConfig = new DocumentBuilder()
  .setTitle('Task Management APIs')
  .setDescription('The Task Management API description')
  .setVersion('1.0')
  .addBearerAuth({
    type: 'http',
    scheme: 'Bearer',
    description: 'Enter your access token here'
  })
  .build();

export const swaggerOptions: SwaggerCustomOptions = {
  customSiteTitle: 'Task Management API',
  customCss: '.swagger-ui section.models { display: none}',
  customfavIcon: '/public/static/app-logo.svg'
};
```

:::note

- Xem cách cấu hình để serve file tĩnh favIcon [tại đây](./serve-static-file)

:::

- Cuối cùng, ở file **main.ts**:

```ts
import { Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { NestFactory } from '@nestjs/core';
import { SwaggerModule } from '@nestjs/swagger';
import { WinstonModule } from 'nest-winston';

import { AppModule } from './app.module';
import { winstonLogger } from 'src/common/logger/logger.config';
import {
  swaggerConfig,
  swaggerOptions
} from 'src/common/swagger/swagger.config';
import { IEnvironmentVariables } from 'src/common/types/env.type';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    logger: WinstonModule.createLogger({ instance: winstonLogger })
  });
  const configService = app.get(ConfigService<IEnvironmentVariables>);
  const nestServerPort = configService.get<number>('NEST_SERVER_PORT')!;

  app.setGlobalPrefix('api/v1');
  app.enableCors({ origin: '*' });

  const document = SwaggerModule.createDocument(app, swaggerConfig);
  SwaggerModule.setup('/', app, document, swaggerOptions);

  await app.listen(nestServerPort);
  Logger.log(
    `Server is running on: http://localhost:${nestServerPort}`,
    bootstrap.name
  );
}
bootstrap();
```

- Và giờ mở URL: **http://localhost:8080/** và Swagger API Document đã được thiết lập.
