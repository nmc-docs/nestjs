---
sidebar_position: 1
---

# Class validator

:::info

- Ở mục về NestJS Pipe (xem [tại đây](../nestjs-fundamentals/pipes#validationpipe-cho-object-validation)), ta đã biết thư viện **class-validator** để validate dữ liệu của body, query thông qua các decorator do nó cung cấp. Ở phần này, ta sẽ tìm hiểu chi tiết về nó.

:::

## Các decorator sẵn có

- Dưới đây là các validation decorator sẵn có do thư viện cung cấp:

| Decorator                                              | Description                                                                                                                                                                                           |
| ------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Common validation decorators**                       |                                                                                                                                                                                                       |
| `@IsDefined(value: any)`                               | Checks if value is defined (!== undefined, !== null). This is the only decorator that ignores skipMissingProperties option.                                                                           |
| `@IsOptional()`                                        | Checks if given value is empty (=== null, === undefined) and if so, ignores all the validators on the property.                                                                                       |
| `@Equals(comparison: any)`                             | Checks if value equals ("===") comparison.                                                                                                                                                            |
| `@NotEquals(comparison: any)`                          | Checks if value not equal ("!==") comparison.                                                                                                                                                         |
| `@IsEmpty()`                                           | Checks if given value is empty (=== '', === null, === undefined).                                                                                                                                     |
| `@IsNotEmpty()`                                        | Checks if given value is not empty (!== '', !== null, !== undefined).                                                                                                                                 |
| `@IsIn(values: any[])`                                 | Checks if value is in an array of allowed values.                                                                                                                                                     |
| `@IsNotIn(values: any[])`                              | Checks if value is not in an array of disallowed values.                                                                                                                                              |
| **Type validation decorators**                         |                                                                                                                                                                                                       |
| `@IsBoolean()`                                         | Checks if a value is a boolean.                                                                                                                                                                       |
| `@IsDate()`                                            | Checks if the value is a date.                                                                                                                                                                        |
| `@IsString()`                                          | Checks if the value is a string.                                                                                                                                                                      |
| `@IsNumber(options: IsNumberOptions)`                  | Checks if the value is a number.                                                                                                                                                                      |
| `@IsInt()`                                             | Checks if the value is an integer number.                                                                                                                                                             |
| `@IsArray()`                                           | Checks if the value is an array                                                                                                                                                                       |
| `@IsEnum(entity: object)`                              | Checks if the value is a valid enum                                                                                                                                                                   |
| **Number validation decorators**                       |                                                                                                                                                                                                       |
| `@IsDivisibleBy(num: number)`                          | Checks if the value is a number that's divisible by another.                                                                                                                                          |
| `@IsPositive()`                                        | Checks if the value is a positive number greater than zero.                                                                                                                                           |
| `@IsNegative()`                                        | Checks if the value is a negative number smaller than zero.                                                                                                                                           |
| `@Min(min: number)`                                    | Checks if the given number is greater than or equal to given number.                                                                                                                                  |
| `@Max(max: number)`                                    | Checks if the given number is less than or equal to given number.                                                                                                                                     |
| **Date validation decorators**                         |                                                                                                                                                                                                       |
| `@MinDate(date: Date \| (() => Date))`                 | Checks if the value is a date that's after the specified date.                                                                                                                                        |
| `@MaxDate(date: Date \| (() => Date))`                 | Checks if the value is a date that's before the specified date.                                                                                                                                       |
| **String-type validation decorators**                  |                                                                                                                                                                                                       |
| `@IsBooleanString()`                                   | Checks if a string is a boolean (e.g. is "true" or "false" or "1", "0").                                                                                                                              |
| `@IsDateString()`                                      | Alias for `@IsISO8601()`.                                                                                                                                                                             |
| `@IsNumberString(options?: IsNumericOptions)`          | Checks if a string is a number.                                                                                                                                                                       |
| **String validation decorators**                       |                                                                                                                                                                                                       |
| `@Contains(seed: string)`                              | Checks if the string contains the seed.                                                                                                                                                               |
| `@NotContains(seed: string)`                           | Checks if the string not contains the seed.                                                                                                                                                           |
| `@IsAlpha()`                                           | Checks if the string contains only letters (a-zA-Z).                                                                                                                                                  |
| `@IsAlphanumeric()`                                    | Checks if the string contains only letters and numbers.                                                                                                                                               |
| `@IsDecimal(options?: IsDecimalOptions)`               | Checks if the string is a valid decimal value. Default IsDecimalOptions are `force_decimal=False`, `decimal_digits: '1,'`, `locale: 'en-US'`                                                          |
| `@IsAscii()`                                           | Checks if the string contains ASCII chars only.                                                                                                                                                       |
| `@IsBase32()`                                          | Checks if a string is base32 encoded.                                                                                                                                                                 |
| `@IsBase58()`                                          | Checks if a string is base58 encoded.                                                                                                                                                                 |
| `@IsBase64(options?: IsBase64Options)`                 | Checks if a string is base64 encoded.                                                                                                                                                                 |
| `@IsIBAN()`                                            | Checks if a string is a IBAN (International Bank Account Number).                                                                                                                                     |
| `@IsBIC()`                                             | Checks if a string is a BIC (Bank Identification Code) or SWIFT code.                                                                                                                                 |
| `@IsByteLength(min: number, max?: number)`             | Checks if the string's length (in bytes) falls in a range.                                                                                                                                            |
| `@IsCreditCard()`                                      | Checks if the string is a credit card.                                                                                                                                                                |
| `@IsCurrency(options?: IsCurrencyOptions)`             | Checks if the string is a valid currency amount.                                                                                                                                                      |
| `@IsISO4217CurrencyCode()`                             | Checks if the string is an ISO 4217 currency code.                                                                                                                                                    |
| `@IsEthereumAddress()`                                 | Checks if the string is an Ethereum address using basic regex. Does not validate address checksums.                                                                                                   |
| `@IsBtcAddress()`                                      | Checks if the string is a valid BTC address.                                                                                                                                                          |
| `@IsDataURI()`                                         | Checks if the string is a data uri format.                                                                                                                                                            |
| `@IsEmail(options?: IsEmailOptions)`                   | Checks if the string is an email.                                                                                                                                                                     |
| `@IsFQDN(options?: IsFQDNOptions)`                     | Checks if the string is a fully qualified domain name (e.g. domain.com).                                                                                                                              |
| `@IsFullWidth()`                                       | Checks if the string contains any full-width chars.                                                                                                                                                   |
| `@IsHalfWidth()`                                       | Checks if the string contains any half-width chars.                                                                                                                                                   |
| `@IsVariableWidth()`                                   | Checks if the string contains a mixture of full and half-width chars.                                                                                                                                 |
| `@IsHexColor()`                                        | Checks if the string is a hexadecimal color.                                                                                                                                                          |
| `@IsHSL()`                                             | Checks if the string is an HSL color based on[CSS Colors Level 4 specification](https://developer.mozilla.org/en-US/docs/Web/CSS/color_value).                                                        |
| `@IsRgbColor(options?: IsRgbOptions)`                  | Checks if the string is a rgb or rgba color.                                                                                                                                                          |
| `@IsIdentityCard(locale?: string)`                     | Checks if the string is a valid identity card code.                                                                                                                                                   |
| `@IsPassportNumber(countryCode?: string)`              | Checks if the string is a valid passport number relative to a specific country code.                                                                                                                  |
| `@IsPostalCode(locale?: string)`                       | Checks if the string is a postal code.                                                                                                                                                                |
| `@IsHexadecimal()`                                     | Checks if the string is a hexadecimal number.                                                                                                                                                         |
| `@IsOctal()`                                           | Checks if the string is a octal number.                                                                                                                                                               |
| `@IsMACAddress(options?: IsMACAddressOptions)`         | Checks if the string is a MAC Address.                                                                                                                                                                |
| `@IsIP(version?: "4"\|"6")`                            | Checks if the string is an IP (version 4 or 6).                                                                                                                                                       |
| `@IsPort()`                                            | Checks if the string is a valid port number.                                                                                                                                                          |
| `@IsISBN(version?: "10"\|"13")`                        | Checks if the string is an ISBN (version 10 or 13).                                                                                                                                                   |
| `@IsEAN()`                                             | Checks if the string is an if the string is an EAN (European Article Number).                                                                                                                         |
| `@IsISIN()`                                            | Checks if the string is an ISIN (stock/security identifier).                                                                                                                                          |
| `@IsISO8601(options?: IsISO8601Options)`               | Checks if the string is a valid ISO 8601 date format. Use the option strict = true for additional checks for a valid date.                                                                            |
| `@IsJSON()`                                            | Checks if the string is valid JSON.                                                                                                                                                                   |
| `@IsJWT()`                                             | Checks if the string is valid JWT.                                                                                                                                                                    |
| `@IsObject()`                                          | Checks if the object is valid Object (null, functions, arrays will return false).                                                                                                                     |
| `@IsNotEmptyObject()`                                  | Checks if the object is not empty.                                                                                                                                                                    |
| `@IsLowercase()`                                       | Checks if the string is lowercase.                                                                                                                                                                    |
| `@IsLatLong()`                                         | Checks if the string is a valid latitude-longitude coordinate in the format lat, long.                                                                                                                |
| `@IsLatitude()`                                        | Checks if the string or number is a valid latitude coordinate.                                                                                                                                        |
| `@IsLongitude()`                                       | Checks if the string or number is a valid longitude coordinate.                                                                                                                                       |
| `@IsMobilePhone(locale: string)`                       | Checks if the string is a mobile phone number.                                                                                                                                                        |
| `@IsISO31661Alpha2()`                                  | Checks if the string is a valid ISO 3166-1 alpha-2 officially assigned country code.                                                                                                                  |
| `@IsISO31661Alpha3()`                                  | Checks if the string is a valid ISO 3166-1 alpha-3 officially assigned country code.                                                                                                                  |
| `@IsLocale()`                                          | Checks if the string is a locale.                                                                                                                                                                     |
| `@IsPhoneNumber(region: string)`                       | Checks if the string is a valid phone number using libphonenumber-js.                                                                                                                                 |
| `@IsMongoId()`                                         | Checks if the string is a valid hex-encoded representation of a MongoDB ObjectId.                                                                                                                     |
| `@IsMultibyte()`                                       | Checks if the string contains one or more multibyte chars.                                                                                                                                            |
| `@IsNumberString(options?: IsNumericOptions)`          | Checks if the string is numeric.                                                                                                                                                                      |
| `@IsSurrogatePair()`                                   | Checks if the string contains any surrogate pairs chars.                                                                                                                                              |
| `@IsTaxId()`                                           | Checks if the string is a valid tax ID. Default locale is `en-US`.                                                                                                                                    |
| `@IsUrl(options?: IsURLOptions)`                       | Checks if the string is a URL.                                                                                                                                                                        |
| `@IsMagnetURI()`                                       | Checks if the string is a[magnet uri format](https://en.wikipedia.org/wiki/Magnet_URI_scheme).                                                                                                        |
| `@IsUUID(version?: UUIDVersion)`                       | Checks if the string is a UUID (version 3, 4, 5 or all ).                                                                                                                                             |
| `@IsFirebasePushId()`                                  | Checks if the string is a[Firebase Push ID](https://firebase.googleblog.com/2015/02/the-2120-ways-to-ensure-unique_68.html)                                                                           |
| `@IsUppercase()`                                       | Checks if the string is uppercase.                                                                                                                                                                    |
| `@Length(min: number, max?: number)`                   | Checks if the string's length falls in a range.                                                                                                                                                       |
| `@MinLength(min: number)`                              | Checks if the string's length is not less than given number.                                                                                                                                          |
| `@MaxLength(max: number)`                              | Checks if the string's length is not more than given number.                                                                                                                                          |
| `@Matches(pattern: RegExp, modifiers?: string)`        | Checks if string matches the pattern. Either matches('foo', /foo/i) or matches('foo', 'foo', 'i').                                                                                                    |
| `@IsMilitaryTime()`                                    | Checks if the string is a valid representation of military time in the format HH:MM.                                                                                                                  |
| `@IsTimeZone()`                                        | Checks if the string represents a valid IANA time-zone.                                                                                                                                               |
| `@IsHash(algorithm: string)`                           | Checks if the string is a hash The following types are supported:`md4`, `md5`, `sha1`, `sha256`, `sha384`, `sha512`, `ripemd128`, `ripemd160`, `tiger128`, `tiger160`, `tiger192`, `crc32`, `crc32b`. |
| `@IsMimeType()`                                        | Checks if the string matches to a valid[MIME type](https://en.wikipedia.org/wiki/Media_type) format                                                                                                   |
| `@IsSemVer()`                                          | Checks if the string is a Semantic Versioning Specification (SemVer).                                                                                                                                 |
| `@IsISSN(options?: IsISSNOptions)`                     | Checks if the string is a ISSN.                                                                                                                                                                       |
| `@IsISRC()`                                            | Checks if the string is a[ISRC](https://en.wikipedia.org/wiki/International_Standard_Recording_Code).                                                                                                 |
| `@IsRFC3339()`                                         | Checks if the string is a valid[RFC 3339](https://tools.ietf.org/html/rfc3339) date.                                                                                                                  |
| `@IsStrongPassword(options?: IsStrongPasswordOptions)` | Checks if the string is a strong password.                                                                                                                                                            |
| **Array validation decorators**                        |                                                                                                                                                                                                       |
| `@ArrayContains(values: any[])`                        | Checks if array contains all values from the given array of values.                                                                                                                                   |
| `@ArrayNotContains(values: any[])`                     | Checks if array does not contain any of the given values.                                                                                                                                             |
| `@ArrayNotEmpty()`                                     | Checks if given array is not empty.                                                                                                                                                                   |
| `@ArrayMinSize(min: number)`                           | Checks if the array's length is greater than or equal to the specified number.                                                                                                                        |
| `@ArrayMaxSize(max: number)`                           | Checks if the array's length is less or equal to the specified number.                                                                                                                                |
| `@ArrayUnique(identifier?: (o) => any)`                | Checks if all array's values are unique. Comparison for objects is reference-based. Optional function can be speciefied which return value will be used for the comparsion.                           |
| **Object validation decorators**                       |                                                                                                                                                                                                       |
| `@IsInstance(value: any)`                              | Checks if the property is an instance of the passed value.                                                                                                                                            |
| **Other decorators**                                   |                                                                                                                                                                                                       |
| `@Allow()`                                             | Prevent stripping off the property when no other constraint is specified for it.                                                                                                                      |

## Array validation

- Để validate các phần tử trong một array, ta sử dụng `each: true` khi sử dụng decorator, ví dụ:

```ts title="CreateUser.dto.ts"
import { IsNotEmpty, IsString, IsArray } from "class-validator";

export class CreateUserDTO {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString({ each: true })
  @IsNotEmpty({ each: true })
  @IsArray()
  address: string[];
}
```

## Validating nested objects

- Nếu thuộc tính là một object và ta muốn validate từng field trong object đó, ta sử dụng decorator `@ValidateNested()`, ví dụ:

```ts
import { ValidateNested } from "class-validator";

export class Post {
  @ValidateNested()
  user: User;
}
```

:::note

- Khi sử dụng decorator `@ValidateNested()` hãy kết hợp với decorator [@Type()](./class-transformer#type) của thư viện class-transformer.

:::

## Conditional validation

- Ta sử dụng decorator `@ValidateIf()` để validate 1 field dựa theo điều kiện được chỉ định, ví dụ:

```ts
import { ValidateIf, IsNotEmpty } from "class-validator";

export class Post {
  otherProperty: string;

  @ValidateIf((o) => o.otherProperty === "value")
  @IsNotEmpty()
  example: string;
}
```

- Trong ví dụ trên, chỉ khi nào field **otherProperty** có giá trị là "value" thì nó mới validate field **example**

## Inheriting Validation decorators

- Class validator cho phép ta validate dựa trên kế thừa, ví dụ:

```ts
import { validate } from "class-validator";

class BaseContent {
  @IsEmail()
  email: string;

  @IsString()
  password: string;
}

class User extends BaseContent {
  @MinLength(10)
  @MaxLength(20)
  name: string;

  @Contains("hello")
  welcome: string;

  @MinLength(20)
  password: string;
}

let user = new User();

user.email = "invalid email"; // inherited property
user.password = "too short"; // password wil be validated not only against IsString, but against MinLength as well
user.name = "not valid";
user.welcome = "helo";

validate(user).then((errors) => {
  // ...
}); // it will return errors for email, password, name and welcome properties
```

## Custom validation decorator

:::note

- Để tự tạo một validation decorator, ta tạo một class và `implements ValidatorConstraintInterface`
- Để hiểu cụ thể hơn, xem các ví dụ bên dưới.

:::

### Ví dụ 1

- Ở ví dụ sau, ta tạo custom decorator `@IsDateTimeAfter()` để validate một trường có giá trị DateTime xem giá trị của nó có sau một giá trị DateTime của trường khác trong object hay không.
- Tạo validation decorator:

```ts title="IsDateTimeAfter.validator.ts"
import {
  registerDecorator,
  ValidationArguments,
  ValidationOptions,
  ValidatorConstraint,
  ValidatorConstraintInterface,
} from "class-validator";
import dayjs from "dayjs";

@ValidatorConstraint({ name: "IsDateTimeAfter", async: false })
class IsDateTimeAfterConstraint implements ValidatorConstraintInterface {
  validate(value: string | Date, validationArguments: ValidationArguments) {
    /*
       validationArguments.constraints: lấy giá trị của (1)
    */
    const [relatedPropertyName] = validationArguments.constraints;
    const relatedValue = (validationArguments.object as any)[
      relatedPropertyName
    ];
    return dayjs(value).isAfter(dayjs(relatedValue));
  }

  defaultMessage(validationArguments: ValidationArguments) {
    const [relatedPropertyName] = validationArguments.constraints;
    const { property } = validationArguments;
    return `${property} must be after ${relatedPropertyName}`;
  }
}

export function IsDateTimeAfter<O>(
  property: keyof O,
  validationOptions?: ValidationOptions
) {
  return function (object: object, propertyName: string) {
    registerDecorator({
      target: object.constructor,
      propertyName: propertyName,
      options: validationOptions,
      constraints: [property], // (1)
      validator: IsDateTimeAfterConstraint,
    });
  };
}
```

- Sử dụng decorator đó bên trong DTO:

```ts title="CreateSchedule.dto.ts"
import { IsDateString, IsNotEmpty } from "class-validator";

import { IsDateTimeAfter } from "src/common/decorators/class-validator/IsDateTimeAfter.validator";

export class CreateScheduleDTO {
  @IsDateString()
  @IsNotEmpty()
  startDate: Date;

  @IsDateTimeAfter<CreateScheduleDTO>("startDate")
  @IsDateString()
  @IsNotEmpty()
  endDate: Date;
}
```

:::info

- Ta hãy xem giá trị của `validationArguments`:

```plaintext
validationArguments: {
  targetName: 'CreateScheduleDTO',
  property: 'endDate',
  object: CreateScheduleDTO {
    startDate: '2024-10-17T07:03:30.751Z',
    endDate: '2024-10-17T07:03:05.589Z'
  },
  value: '2024-10-17T07:03:05.589Z',
  constraints: [ 'startDate' ]
}
```

:::

### Ví dụ 2

- Vẫn giống ví dụ 1 nhưng linh hoạt hơn, ta có thể truyền giá trị cụ thể hoặc related field thay vì chỉ chỉ định mỗi related field như ở ví dụ 1:

```ts title="IsDateTimeAfter.validator.ts"
import {
  registerDecorator,
  ValidationArguments,
  ValidationOptions,
  ValidatorConstraint,
  ValidatorConstraintInterface,
} from "class-validator";
import dayjs, { Dayjs } from "dayjs";

@ValidatorConstraint({ name: "IsDateTimeAfter", async: false })
class IsDateTimeAfterConstraint implements ValidatorConstraintInterface {
  validate(
    value: Dayjs | Date | string,
    validationArguments: ValidationArguments
  ) {
    const { object } = validationArguments;
    const compareValue: Date | string = validationArguments.constraints[0](
      object,
      value
    );
    return dayjs(value).isAfter(dayjs(compareValue));
  }

  defaultMessage(validationArguments: ValidationArguments) {
    const { object, value } = validationArguments;
    const compareValue: Date | string = validationArguments.constraints[0](
      object,
      value
    );
    const { property } = validationArguments;
    return `${property} must be after ${compareValue}`;
  }
}

export function IsDateTimeAfter<O, V = any>(
  callback: (object: O, value: V) => Dayjs | Date | string,
  validationOptions?: ValidationOptions
) {
  return function (object: object, propertyName: string) {
    registerDecorator({
      target: object.constructor,
      propertyName: propertyName,
      options: validationOptions,
      constraints: [callback],
      validator: IsDateTimeAfterConstraint,
    });
  };
}
```

- Và giờ ta có thể truyền 1 giá trị cụ thể hoặc 1 related field trong DTO:

```ts title="CreateSchedule.dto.ts"
import { IsDateString, IsNotEmpty } from "class-validator";
import dayjs from "dayjs";

import { IsDateTimeAfter } from "src/common/decorators/class-validator/IsDateTimeAfter.validator";

export class CreateScheduleDTO {
  @IsDateString()
  @IsNotEmpty()
  startDate: Date;

  // @IsDateTimeAfter<CreateScheduleDTO>((o) => o.startDate)
  // @IsDateTimeAfter(() => dayjs('2021-01-01'))
  @IsDateString()
  @IsNotEmpty()
  endDate: Date;
}
```

### Ví dụ 3

- Ở ví dụ này, ta sẽ tạo custom decorator có sử dụng dependency. Cụ thể, ta sẽ validate liệu một user có tồn tại hay không dựa trên id.
- Tạo class validator decorator:

```ts title="IsUserExist.validator.ts"
import { Injectable } from "@nestjs/common";
import {
  registerDecorator,
  ValidationArguments,
  ValidationOptions,
  ValidatorConstraint,
  ValidatorConstraintInterface,
} from "class-validator";

import { PrismaService } from "src/modules/libs/prisma/prisma.service";

@Injectable()
@ValidatorConstraint({ name: "IsUserExist", async: true }) // Đặt "async: true" để cho thư viện biết hàm "validate" là bất đồng bộ
export class IsUserExistConstraint implements ValidatorConstraintInterface {
  constructor(private readonly prisma: PrismaService) {}

  async validate(value: string, args: ValidationArguments) {
    const user = await this.prisma.user.findUnique({ where: { id: value } });
    return !!user;
  }

  defaultMessage(args: ValidationArguments) {
    return "User does not exist";
  }
}

export function IsUserExist(validationOptions?: ValidationOptions) {
  return function (object: object, propertyName: string) {
    registerDecorator({
      target: object.constructor,
      propertyName: propertyName,
      options: validationOptions,
      constraints: [],
      validator: IsUserExistConstraint,
    });
  };
}
```

- Sử dụng custom decorator trong DTO:

```ts title="ChangeUserInformation.dto.ts"
import { IsNotEmpty, IsUUID } from "class-validator";

import { IsUserExist } from "src/common/decorators/class-validator/IsUserExist.validator";

export class ChangeUserInformationDTO {
  @IsUserExist()
  @IsUUID()
  @IsNotEmpty()
  userId: string;
}
```

- Trong file **main.ts**, ta thêm dòng sau:

```ts title="main.ts"
import { Logger } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { NestFactory } from "@nestjs/core";
import { useContainer } from "class-validator";
import { WinstonModule } from "nest-winston";

import { AppModule } from "./app.module";
import { winstonLogger } from "src/common/configs/logger.config";
import { IEnvironmentVariables } from "src/common/types/env.type";

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    logger: WinstonModule.createLogger({ instance: winstonLogger }),
  });
  const configService = app.get(ConfigService<IEnvironmentVariables>);
  const nestServerPort = configService.get<number>("NEST_SERVER_PORT")!;

  app.setGlobalPrefix("api/v1");
  app.enableCors({ origin: "*" });
  useContainer(app.select(AppModule), { fallbackOnErrors: true }); // Add this line

  await app.listen(nestServerPort);
  Logger.log(
    `Server is running on: http://localhost:${nestServerPort}`,
    bootstrap.name
  );
}
bootstrap();
```

:::note

- Đừng quên thêm `IsUserExistConstraint` vào mảng các providers ở module ta sử dụng nó:

```ts title="user.module.ts"
import { Module } from "@nestjs/common";

@Module({
  controllers: [UserController],
  providers: [UserService, IsUserExistConstraint],
})
export class UserModule {}
```

:::

:::tip

- Ta nên tạo một module tên `ClassValidatorModule` để cấu hình tất cả các custom class validator làm provider, sau đó chỉ cần import `ClassValidatorModule` vào các module cần sử dụng là được, ví dụ:

```ts title="class-validator.module.ts"
import { Module } from "@nestjs/common";

@Module({
  providers: [IsUserExistConstraint, IsTaskExistConstraint],
  exports: [IsUserExistConstraint, IsTaskExistConstraint],
})
export class ClassValidatorModule {}
```

:::
