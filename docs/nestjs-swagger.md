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
import { DocumentBuilder, SwaggerCustomOptions } from "@nestjs/swagger";

export const swaggerConfig = new DocumentBuilder()
  .setTitle("Task Management APIs")
  .setDescription("The Task Management API description")
  .setVersion("1.0")
  .addBearerAuth({
    type: "http",
    scheme: "Bearer",
    description: "Enter your access token here",
  })
  .build();

export const swaggerOptions: SwaggerCustomOptions = {
  customSiteTitle: "Task Management API",
  customCss: ".swagger-ui section.models { display: none}",
  customfavIcon: "/public/static/app-logo.svg",
};
```

:::note

- Xem cách cấu hình để serve file tĩnh favIcon [tại đây](./serve-static-file)

:::

- Cuối cùng, ở file **main.ts**:

```ts
import { Logger } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { NestFactory } from "@nestjs/core";
import { SwaggerModule } from "@nestjs/swagger";
import { WinstonModule } from "nest-winston";

import { AppModule } from "./app.module";
import { winstonLogger } from "src/common/logger/logger.config";
import {
  swaggerConfig,
  swaggerOptions,
} from "src/common/swagger/swagger.config";
import { IEnvironmentVariables } from "src/common/types/env.type";

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    logger: WinstonModule.createLogger({ instance: winstonLogger }),
  });
  const configService = app.get(ConfigService<IEnvironmentVariables>);
  const nestServerPort = configService.get<number>("NEST_SERVER_PORT")!;

  app.setGlobalPrefix("api/v1");
  app.enableCors({ origin: "*" });

  const document = SwaggerModule.createDocument(app, swaggerConfig);
  SwaggerModule.setup("/", app, document, swaggerOptions);

  await app.listen(nestServerPort);
  Logger.log(
    `Server is running on: http://localhost:${nestServerPort}`,
    bootstrap.name
  );
}
bootstrap();
```

- Và giờ mở URL: **http://localhost:8080/** và Swagger API Document đã được thiết lập.

## Sử dụng NestJS Swagger decorator bên trong controller

:::info

- Các decorator của NestJS Swagger thường hay được sử dụng:
  - `@ApiTags(name: string)`: Được sử dụng để gắn thẻ (tag) các endpoints của API nhằm mục đích tổ chức và phân loại chúng trong tài liệu Swagger.
  - `@ApiResponse({ type: ExceptionResponse, status: '4XX', description: 'Error' })`: Chỉ định lỗi trả về cho client với status trong khoảng từ 400 đến 499, chi tiết các thuộc tính lỗi được mô tả thông qua class `ExceptionResponse`.
  - `@ApiBearerAuth()`: Được sử dụng để chỉ định rằng một endpoint yêu cầu xác thực bằng cách sử dụng Bearer Token. Khi được sử dụng, nó sẽ thêm thông tin về Bearer Auth vào tài liệu Swagger, giúp người dùng API biết rằng họ cần cung cấp một Bearer Token để truy cập vào endpoint đó.
  - `@ApiConsumes('multipart/form-data')`: Chỉ định rằng một endpoint chấp nhận các dữ liệu được gửi với loại MIME multipart/form-data. Đây thường là loại MIME được sử dụng khi gửi các tệp (file).

:::

```ts
import {
  Body,
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Post,
  UseGuards
} from '@nestjs/common';
import { ApiBearerAuth, ApiResponse, ApiTags } from '@nestjs/swagger';

@ApiTags("Room")
@ApiResponse({ type: ExceptionResponse, status: '4XX', description: 'Error' })
@ApiBearerAuth()
@Controller("room")
@UseGuards(RoomGuard)
export class RoomController {
  constructor(private roomService: RoomService) {}

  @Post("create")
  async createRoom(
    @Body() body: CreateRoomBodyDTO,
    @UserId() userId: string
  ): Promise<CreateRoomResponseDTO> {
    const response = await this.roomService.createRoom(body, userId);
    return plainToInstance(CreateRoomResponseDTO, response);
  }

  @Post("join/:roomId")
  @HttpCode(HttpStatus.OK)
  async joinRoom(
    @Param("roomId") roomId: string,
    @UserId() userId: string
  ): Promise<JoinRoomResponseDTO> {
    const response = await this.roomService.joinRoom(roomId, userId);
    return plainToInstance(JoinRoomResponseDTO, response);
  }

  @Get("joined")
  async getJoinedRooms(
    @UserId() userId: string
  ): Promise<GetAllJoinedRoomResponseDTO> {
    const response = await this.roomService.getJoinedRooms(userId);
    return plainToInstance(GetAllJoinedRoomResponseDTO, response);
  }

  @Get(":roomId/members")
  @CheckPermission(GetRoomMemberPermissionHandler)
  async getRoomMembers(
    @Param("roomId") roomId: string
  ): Promise<GetRoomMembersResponseDTO> {
    const response = await this.roomService.getRoomMembers(roomId);
    return plainToInstance(GetRoomMembersResponseDTO, response);
  }
}
```

:::caution

- Hãy luôn chỉ định kiểu trả về cho hàm controller để NestJS Swagger Plugin có thể tự động tạo ra docs định nghĩa các thuộc tính cho response trả về.

:::

## Sử dụng NestJS Swagger decorator để định nghĩa DTO

:::note

- Mặc dù NestJS Swagger tự động định nghĩa docs cho các thuộc tính của object body, query ở các file DTO thông qua plugin, nhưng đôi khi ta vẫn cần định nghĩa thêm như description, hoặc định nghĩa 1 trường cho upload file. Để làm điều đó, ta sử dụng decorator:

```ts
@ApiProperty(options?: ApiPropertyOptions)
```

:::

- Một số ví dụ:

```ts
// Định nghĩa description cho thuộc tính
@ApiProperty({ description: 'Your password' })
```

```ts
/* 
- Định nghĩa format cho giá trị của thuộc tính, cho phép ta chỉ định định dạng của dữ liệu cho thuộc tính đó, giúp Swagger hiểu rõ hơn về kiểu dữ liệu và cách hiển thị nó trong tài liệu.
- Các giá trị có thể nhận của format: "date", "date-time", "binary", "email", "uuid", "hostname", "ipv4", "ipv6"
*/
@ApiProperty({ format: 'ipv4' })

// Định nghĩa một thuộc tính nhận 1 File
@ApiProperty({ type: 'string', format: 'binary' })

// Định nghĩa một thuộc tính nhận nhiều File
@ApiProperty({ type: 'string', format: 'binary', isArray: true })
```

```ts
// Thiết lập ví dụ của giá trị của thuộc tính
@ApiProperty({ example: 'abc@gmail.com' })
@ApiProperty({ default: 'abc@gmail.com' })
```
