---
sidebar_position: 7
---

# Serve static file trong NestJS

## Cài đặt thư viện

```bash
npm install @nestjs/serve-static
```

## Cấu hình

:::note

- Giả sử ta đặt hết tất cả các file/folder tĩnh bên trong thư mục có đường dẫn: **src/common/assets/static**

:::

- Vào file **nest-cli.json**:

```json title="nest-cli.json"
{
  "$schema": "https://json.schemastore.org/nest-cli",
  "collection": "@nestjs/schematics",
  "sourceRoot": "src",
  "compilerOptions": {
    "deleteOutDir": true,
    "assets": ["common/assets/**/*"], // Add this line
    "watchAssets": true
  },
  "generateOptions": {
    "spec": false
  }
}
```

- Ở file **app.module.ts**:

```ts title="app.module.ts"
import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { ServeStaticModule } from "@nestjs/serve-static";
import { join } from "path";

@Module({
  imports: [
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, "common/assets/static"),
      serveRoot: "/public/static",
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
```

## Test kết quả

- Giả sử server đang chạy ở localhost với cổng 8080:

| Đường dẫn file trong project                | Đường dẫn serve file ở API                             |
| ------------------------------------------- | ------------------------------------------------------ |
| src/common/assets/static/app-logo.png       | http://localhost:8080/public/static/app-logo.svg       |
| src/common/assets/static/image/app-logo.png | http://localhost:8080/public/static/image/app-logo.svg |
