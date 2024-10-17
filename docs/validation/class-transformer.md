---
sidebar_position: 2
---

# Class transformer

:::note

- Class transformer giúp ta biến đổi dữ liệu trước khi được validate bởi class validator.

:::

## `@Type()`

- Khi ta sử dụng `@Type()`, ta có thể xác định kiểu dữ liệu mà thuộc tính sẽ được chuyển đổi. Ví dụ, nếu ta có một thuộc tính là một mảng các đối tượng hoặc một lớp khác, ta có thể chỉ định kiểu của nó để đảm bảo rằng quá trình chuyển đổi diễn ra đúng cách.
- Ví dụ với kiểu dữ liệu nguyên thủy:

```ts
import { Type } from "class-transformer";
import { IsNotEmpty, IsNumber } from "class-validator";

export class ChangeUserInformationDTO {
  @Type(() => Number)
  @IsNumber()
  @IsNotEmpty()
  userId: number;
}
```

:::note

- Ở ví dụ trên, class transformer sẽ cố gắng biến đổi về kiểu number trước khi validate. Ví dụ, ta truyền `"userId": "123"` thì sau khi biến đổi sẽ được `"userId": 123`, và sau đó validate

:::

- Ví dụ với kiểu dữ liệu là một object:

```ts
import { Type } from "class-transformer";
import { IsNotEmpty, IsString, ValidateNested, IsArray } from "class-validator";

class AddressDTO {
  @IsString()
  @IsNotEmpty()
  street: string;

  @IsString()
  @IsNotEmpty()
  city: string;
}

export class UserDTO {
  @IsString()
  @IsNotEmpty()
  name: string;

  @Type(() => AddressDTO)
  @ValidateNested({ each: true })
  @IsArray()
  address: AddressDTO[];
}
```

## `@Transform()`

- Khi ta sử dụng `@Transform`, ta có thể chỉ định một hàm nhận đầu vào và trả về giá trị đã được chuyển đổi. Điều này rất hữu ích khi ta muốn thay đổi định dạng của dữ liệu hoặc thực hiện một số thao tác trên dữ liệu trước khi gán nó cho thuộc tính.
- Ví dụ:

```ts
import { Transform } from "class-transformer";
import { IsArray, IsNotEmpty, IsString } from "class-validator";

export class UserDTO {
  @IsString()
  @IsNotEmpty()
  name: string;

  @Transform(({ value, obj }) =>
    obj.name === "John" ? ["New York"] : ["Los Angeles"]
  )
  @IsString({ each: true })
  @IsArray()
  @IsNotEmpty({ each: true })
  address: string[];

  @IsString({ each: true })
  @IsArray()
  @IsNotEmpty({ each: true })
  @Transform(({ value }) => value.map((v: string) => v.toUpperCase()))
  hobbies: string[];
}
```

- Ở ví dụ trên, nếu ta gửi dữ liệu:

```json
{
  "name": "John",
  "address": ["string"],
  "hobbies": ["Badminton"]
}
```

sau khi biến đổi, sẽ nhận được:

```js
UserDTO {
  name: 'John',
  address: [ 'New York' ],
  hobbies: [ 'BADMINTON' ]
}
```

## `@Expose()`

- Decorator này thích hợp sử dụng khi ta gửi dữ liệu response về cho client. Chỉ những thuộc tính đính decorator này sẽ được gửi đến client, loại bỏ những thuộc tính dư thừa không mong muốn.
- Ví dụ:

```ts title="LoginResponse.dto.ts"
import { Expose, Type } from "class-transformer";

class UserResponseDTO {
  @Expose()
  id: string;

  @Expose()
  fullName: string;

  @Expose()
  email: string;

  @Expose()
  avatar: string;

  @Expose()
  isEnableTwoFactorAuth: boolean;
}

export class LoginResponseDTO {
  @Expose()
  @Type(() => UserResponseDTO)
  user: UserResponseDTO;

  @Expose()
  accessToken: string;

  @Expose()
  refreshToken: string;

  @Expose()
  expiresIn: number;
}
```

## Custom transform decorator

- Để tạo custom transform decorator, ta đơn giản tạo một hàm rồi sử dụng hàm `Transform()` do **class-transformer** cung cấp.
- Dưới đây là 2 ví dụ custom transform decorator: **trim** với **to-boolean**

```ts title="trim.transform.ts"
import { Transform } from "class-transformer";

interface ITrimOptions {
  each?: boolean;
}

export const Trim = (options?: ITrimOptions) => {
  return Transform(({ value }) => {
    if (typeof value === "string") {
      return value.trim();
    }
    if (Array.isArray(value) && options?.each) {
      return value.map((item) => {
        if (typeof item === "string") {
          return item.trim();
        }
        return item;
      });
    }
    return value;
  });
};
```

```ts title="to-boolean.transform.ts"
import { Transform } from "class-transformer";

interface IToBooleanOptions {
  each?: boolean;
}

const acceptedParseToBoolean = [true, false, "true", "false", 0, 1];

export const ToBoolean = (options?: IToBooleanOptions) => {
  return Transform(({ value }) => {
    if (Array.isArray(value) && options?.each) {
      return value.map((item) => {
        if (acceptedParseToBoolean.includes(item)) {
          return item === "false" ? false : Boolean(item);
        }
        return item;
      });
    }
    if (acceptedParseToBoolean.includes(value)) {
      return value === "false" ? false : Boolean(value);
    }
    return value;
  });
};
```

- Cuối cùng, sử dụng các custom transform decorator này:

```ts title="User.dto.ts"
import { IsBoolean, IsNotEmpty, IsString } from "class-validator";

import { ToBoolean } from "src/common/decorators/sanitizer/to-boolean.sanitizer";
import { Trim } from "src/common/decorators/sanitizer/trim.sanitizer";

export class UserDTO {
  @Trim()
  @IsString()
  @IsNotEmpty()
  name: string;

  @ToBoolean()
  @IsNotEmpty()
  @IsBoolean()
  isVerified: boolean;
}
```

- Dữ liệu gửi lên:

```json
{
  "name": "   Nguyễn Minh Chí            ",
  "isVerified": 1
}
```

- Dữ liệu sau khi transform:

```js
UserDTO { name: 'Nguyễn Minh Chí', isVerified: true }
```
