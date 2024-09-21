---
sidebar_position: 10
---

# Custom decorator

:::info

- Ở các mục trước, ta đã tạo một decorator @Roles() để tạo metadata là quyền truy cập như "user" hay "admin".
- Ở bài này, ta sẽ tìm hiểu cách tạo 1 decorator, cho phép truy cập vào request object,...

:::

## Tạo decorator

### Ví dụ 1

- Ở ví dụ dưới đây, ta sẽ tạo decorator @User để truy cập thông tin user ở trong request:

```ts title="user.decorator.ts"
import { createParamDecorator, ExecutionContext } from "@nestjs/common";

export const User = createParamDecorator(
  (data: unknown, ctx: ExecutionContext) => {
    const request = ctx.switchToHttp().getRequest();
    return request.user;
  }
);
```

:::info

- Ở bên trên, phương thức createParamDecorator() nhận vào 2 tham số là: data (tham số truyền vào khi gọi decorator), tham số thứ hai là [ExecutionContext ](./execution-context#executioncontext-class)để có thể truy cập vào request object.

:::

- Và giờ ta có thể lấy user thông qua decorator **@User** như sau:

```ts
@Get()
async findOne(@User() user: UserEntity) {
  console.log(user);
}
```

### Ví dụ 2

- Ở dưới đây, ta tạo decorator nhận vào 1 tham số là key của object cần lấy ra, nếu không truyền key vào, trả về toàn bộ object:

```ts title="user.decorator.ts"
import { createParamDecorator, ExecutionContext } from "@nestjs/common";

export const User = createParamDecorator(
  (data: string, ctx: ExecutionContext) => {
    const request = ctx.switchToHttp().getRequest();
    const user = request.user;

    return data ? user?.[data] : user;
  }
);
```

```ts
@Get()
async findOne(@User('firstName') firstName: string) {
  console.log(`Hello ${firstName}`);
}
```

## Combine decorator

- Ta có thể tạo một decorator trong đó gộp nhiều decorator khác lại với nhau thông qua **applyDecorators()** như sau:

```ts title="auth.decorator.ts"
import { applyDecorators } from "@nestjs/common";

export function Auth(...roles: Role[]) {
  return applyDecorators(
    SetMetadata("roles", roles),
    UseGuards(AuthGuard, RolesGuard),
    ApiBearerAuth(),
    ApiUnauthorizedResponse({ description: "Unauthorized" })
  );
}
```
