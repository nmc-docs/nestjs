---
sidebar_position: 3
---

# Controllers

## Controller là gì?

:::info

- Trong NestJS, một controller là một lớp được sử dụng để định nghĩa các endpoint (điểm cuối) của ứng dụng và xử lý các yêu cầu HTTP đến các endpoint này.
- Một controller trong NestJS thường có các đặc điểm sau:

1. **Định nghĩa các endpoint** : Controller sẽ định nghĩa các endpoint mà ứng dụng sẽ đáp ứng, chẳng hạn như `/users`, `/products`, v.v.
2. **Xử lý các yêu cầu HTTP** : Controller sẽ xử lý các yêu cầu HTTP (GET, POST, PUT, DELETE, v.v.) được gửi đến các endpoint được định nghĩa.
3. **Tương tác với các dịch vụ** : Controller sẽ tương tác với các dịch vụ (service) để thực hiện các tác vụ cần thiết.
4. **Trả về phản hồi** : Controller sẽ trả về phản hồi HTTP thích hợp (như mã trạng thái, dữ liệu JSON, v.v.) cho client.

- Để định nghĩa một controller trong NestJS, ta sử dụng decorator `@Controller()` và đặt các phương thức xử lý các yêu cầu HTTP như `@Get()`, `@Post()`, `@Put()`, `@Delete()`, v.v.

:::

- Ví dụ về 1 file controller:

```ts
import { Body, Controller, Get, Post } from "@nestjs/common";

import { CustomersService } from "src/modules/customers/customers.service";
import CreateCustomerDto from "src/modules/customers/dto/create-customer.dto";

@Controller("customers")
export class CustomersController {
  constructor(private customerService: CustomersService) {}

  @Post("/create")
  createCustomer(@Body() body: CreateCustomerDto) {
    const createdCustomer = this.customerService.create(body);
    return createdCustomer;
  }

  @Get("/list")
  getCustomers() {
    return this.customerService.getCustomers();
  }
}
```

:::note

- Trong ví dụ trên, ta tạo 2 endpoint:
  - **/customers/create**: tạo mới 1 customer với method **POST**
  - **/customers/list**: lấy danh sách các customers với method **GET**

:::

- Sau khi tạo xong controller, ta import nó vào module:

```ts
@Module({
  controllers: [CustomersController],
  providers: [CustomersService],
})
export class CustomersModule {}
```

## Lệnh CLI để tạo file controller

```bash
nest g controller [MODULE_NAME]
```

- Ví dụ câu lệnh sau sẽ tạo file "customer.controller.ts" bên trong thư mục "src/modules/customer":

```bash
nest g controller modules/customer
```

## Request Method

- Dưới đây là các decorator biểu thị các phương thức HTTP:

| Decorator | Mô tả                             |
| --------- | --------------------------------- |
| @Get()    | Phương thức GET                   |
| @Post()   | Phương thức POST                  |
| @Put()    | Phương thức PUT                   |
| @Delete() | Phương thức DELETE                |
| @All()    | Xử lý tất cả các phương thức trên |

## Request Object

- Trong mỗi hàm controller, ta đều có thể truy xuất các thông tin của request như body, params, query, header,... thông qua các decorator mà NestJS cung cấp sẵn như ở dưới đây:

| Decorator               | Mô tả                           |
| ----------------------- | ------------------------------- |
| @Request(), @Req()      | req                             |
| @Response(), @Res()     | res                             |
| @Next()                 | next                            |
| @Session()              | req.session                     |
| @Param(key?: string)    | req.params / req.params[key]    |
| @Body(key?: string)     | req.body / req.body[key]        |
| @Query(key?: string)    | req.query / req.query[key]      |
| @Headers(name?: string) | req.headers / req.headers[name] |
| @Ip()                   | req.ip                          |
| @HostParam()            | req.hosts                       |

:::note

- Ta có thể lấy tất cả các thuộc tính của body, params hoặc query với cách viết như @Body() body: CreateCustomerDTO. Sau đó truy xuất các thuộc tính thông qua body.fullName, body.email,...
- Nếu body, query hoặc params truyền vào mà có 1 thuộc tính thì ta có thể lấy qua key của nó thay vì phải định nghĩa type cho object. Ví dụ như @Param("id") userId: string.

:::

- Ví dụ:

```ts
import { Body, Controller, Get, Headers, Param, Post } from "@nestjs/common";

import { CustomersService } from "src/modules/customers/customers.service";
import CreateCustomerDto from "src/modules/customers/dto/create-customer.dto";

@Controller("customers")
export class CustomersController {
  constructor(private customerService: CustomersService) {}

  @Post("/create")
  createCustomer(
    @Body() body: CreateCustomerDto,
    @Headers("authorization") auth: string
  ) {
    const createdCustomer = this.customerService.create(body);
    console.log("Auth:", auth); // In ra giá trị của "authorization" ở header
    return createdCustomer;
  }

  @Get("/:id")
  getCustomerById(@Param("id") userId: string) {
    return this.customerService.getCustomerById(userId);
  }
}
```

## Status code

- Ta có thể custom HTTP Response Status Code thông qua decorator **@HttpCode()**
- Ví dụ:

```ts
import {
  Body,
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Post,
} from "@nestjs/common";

import { CustomersService } from "src/modules/customers/customers.service";
import CreateCustomerDto from "src/modules/customers/dto/create-customer.dto";

@Controller("customers")
export class CustomersController {
  constructor(private customerService: CustomersService) {}

  @Post("/create")
  @HttpCode(HttpStatus.NOT_FOUND)
  createCustomer(@Body() body: CreateCustomerDto) {
    const createdCustomer = this.customerService.create(body);
    return createdCustomer;
  }
}
```

## Header Response

- Ta có thể thêm các key - value trong response trả về của header thông qua decorator **@Header()**
- Ví dụ:

```ts
import { Body, Controller, Get, Header, Param, Post } from "@nestjs/common";

import { CustomersService } from "src/modules/customers/customers.service";
import CreateCustomerDto from "src/modules/customers/dto/create-customer.dto";

@Controller("customers")
export class CustomersController {
  constructor(private customerService: CustomersService) {}

  @Header("Message", "Customer created successfully")
  @Header("Status", "Thanh cong")
  @Post("/create")
  createCustomer(@Body() body: CreateCustomerDto) {
    const createdCustomer = this.customerService.create(body);
    return createdCustomer;
  }
}
```
