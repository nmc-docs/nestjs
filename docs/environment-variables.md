---
sidebar_position: 3
---

# Sử dụng biến môi trường

## Cài đặt thư viện

```bash
npm i @nestjs/config joi
```

## Cấu hình

- Sau đó ở file **app.module.ts**:

```ts
@Module({
  imports: [
    CustomersModule,
    ConfigModule.forRoot({
      isGlobal: true,
      validationSchema: Joi.object<IEnvironmentVariables>({
        NODE_ENV: Joi.string()
          .valid("development", "production", "staging")
          .default("development"),
        NEST_SERVER_PORT: Joi.number().port().required().default(8080),
        CLIENT_URL: Joi.string().required().default("http://localhost:3000"),
      }),
      envFilePath: [".env"],
      expandVariables: true,
    }),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
```

- File định nghĩa type cho các biến môi trường:

```ts
export type IEnvironmentVariables = {
  NODE_ENV: "development" | "production" | "staging";
  NEST_SERVER_PORT: number;
  CLIENT_URL: string;
};
```

| Options          | Mô tả                                                                                                                                    |
| ---------------- | ---------------------------------------------------------------------------------------------------------------------------------------- |
| isGlobal         | Nếu là "true", ta có thể inject ConfigService vào service, controller, provider khác ở toàn bộ app mà không cần phải import ConfigModule |
| validationSchema | Sử dụng Joi để validate cho các biến môi trường trước khi chạy ứng dụng. Nếu validate thất bại, sẽ throw ra lỗi                          |
| envFilePath      | Cấu hình path cho file env                                                                                                               |
| expandVariables  | Cho phép sử dụng biến trong file env                                                                                                     |

## Sử dụng

- Và giờ ta có thể lấy giá trị của biến môi trường thông qua phương thức **get()** của **ConfigService**:

```ts
@Controller("customers")
export class CustomersController {
  constructor(
    private customerService: CustomersService,
    private configService: ConfigService<IEnvironmentVariables>
  ) {}

  @Post("/create")
  async createCustomer(
    @Body()
    body: CreateCustomerDto
  ) {
    const nodeEnv = this.configService.get("NODE_ENV", { infer: true });
    console.log(nodeEnv);
    return this.customerService.create(body);
  }
}
```

:::note

- Dùng tùy chọn **infer: true** để typescript có thể tự suy ra kiểu của biến môi trường dựa trên type **IEnvironmentVariables**. Nếu không, mặc định nó là kiểu **any**.

:::
