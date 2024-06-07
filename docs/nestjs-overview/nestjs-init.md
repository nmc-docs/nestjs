---
sidebar_position: 1
slug: /
---

# Khởi tạo NestJS

- Trước khi khởi tạo project NestJS, ta sẽ cài đặt NestJS CLI:

```bash
npm i -g @nestjs/cli
```

- Sau đó, ta dùng lệnh sau để khởi tạo project:

```bash
nest new project-name
```

- Cấu trúc thư mục sau khi khởi tạo:

![1717767386566](image/nestjs-init/1717767386566.png)

| Tên file               | Mô tả                                                                                          |
| ---------------------- | ---------------------------------------------------------------------------------------------- |
| app.controller.ts      | File controller định nghĩa các route                                                           |
| app.controller.spec.ts | File unit tests cho controller                                                                 |
| app.module.ts          | File module gốc của project                                                                    |
| app.service.ts         | File service của module app. Có nhiệm vụ tương tác với database, trả về dữ liệu cho controller |
| main.ts                | Entry file để chạy ứng dụng                                                                    |

## Thiết lập lại ESLint và Prettier

- Cài đặt các devDependencies:

```bash
npm install -D eslint prettier eslint-config-prettier eslint-plugin-prettier @typescript-eslint/parser @typescript-eslint/eslint-plugin eslint-plugin-import eslint-import-resolver-typescript eslint-plugin-simple-import-sort
```

- File **tsconfig.json**:

```json
{
  "compilerOptions": {
    "strict": true,
    "module": "commonjs",
    "moduleResolution": "Node",
    "declaration": true,
    "emitDecoratorMetadata": true,
    "experimentalDecorators": true,
    "target": "ES2021",
    "sourceMap": true,
    "outDir": "./dist",
    "incremental": true,
    "noFallthroughCasesInSwitch": true,
    "resolveJsonModule": true,
    "importHelpers": true,
    "skipLibCheck": true,
    "removeComments": true,
    "allowSyntheticDefaultImports": true,
    "esModuleInterop": true,
    "noUncheckedIndexedAccess": true,
    "forceConsistentCasingInFileNames": true,
    "strictPropertyInitialization": false,
    "baseUrl": ".",
    "paths": {
      "src/*": ["./src/*"],
      "test/*": ["./test/*"]
    }
  }
}
```

- File **.eslintrc.js**:

```js
module.exports = {
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: "tsconfig.json",
    tsconfigRootDir: __dirname,
    sourceType: "module",
  },
  plugins: ["simple-import-sort"],
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "prettier",
    "plugin:import/recommended",
    "plugin:import/typescript",
    "plugin:prettier/recommended",
  ],
  root: true,
  settings: {
    "import/resolver": {
      node: {
        paths: ["./src"],
        extensions: [".js", ".ts"],
      },
      typescript: {
        project: "./tsconfig.json",
      },
    },
  },
  env: {
    node: true,
    jest: true,
  },
  rules: {
    "prettier/prettier": "error",
    "no-unused-vars": "off",
    "no-empty": "off",
    "no-console": "off",
    "@typescript-eslint/no-unused-vars": "off",
    "@typescript-eslint/consistent-type-exports": "error",
    "@typescript-eslint/no-explicit-any": "off",
    "@typescript-eslint/no-restricted-imports": [
      "error",
      { patterns: ["../*"] },
    ],
    "simple-import-sort/imports": [
      "error",
      {
        groups: [["^(?!\\.)"], ["^\\u0000", "^\\.", "^src/"]],
      },
    ],
    "simple-import-sort/exports": "error",
    "import/newline-after-import": "error",
  },
};
```

- File **.prettierrc.json**:

```json
{
  "printWidth": 80,
  "tabWidth": 2,
  "useTabs": false,
  "semi": true,
  "singleQuote": true,
  "quoteProps": "as-needed",
  "jsxSingleQuote": false,
  "trailingComma": "none",
  "bracketSameLine": false,
  "arrowParens": "always",
  "insertPragma": false,
  "proseWrap": "preserve",
  "htmlWhitespaceSensitivity": "css",
  "embeddedLanguageFormatting": "auto",
  "bracketSpacing": true,
  "requirePragma": false,
  "endOfLine": "auto"
}
```

- File **.eslintignore**:

```plaintext
node_modules
package-lock.json
.eslintrc.js
```

- File **.prettierignore**:

```plaintext
node_modules
build
dist
package-lock.json
```

## Câu lệnh chạy

- Chạy ở môi trường dev:

```bash
npm run start:dev
```

- Câu lệnh chạy ESLint + Prettier:

```bash
npm run lint
npm run format
```
