"use strict";(self.webpackChunkreactjs=self.webpackChunkreactjs||[]).push([[607],{9559:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>l,default:()=>p,frontMatter:()=>i,metadata:()=>c,toc:()=>d});var s=t(4848),r=t(8453);const i={sidebar_position:1,slug:"/"},l="Kh\u1edfi t\u1ea1o NestJS",c={id:"nestjs-init",title:"Kh\u1edfi t\u1ea1o NestJS",description:"- Tr\u01b0\u1edbc khi kh\u1edfi t\u1ea1o project NestJS, ta s\u1ebd c\xe0i \u0111\u1eb7t NestJS CLI:",source:"@site/docs/nestjs-init.md",sourceDirName:".",slug:"/",permalink:"/nestjs/",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,slug:"/"},sidebar:"tutorialSidebar",next:{title:"NestJS Fundamentals",permalink:"/nestjs/category/nestjs-fundamentals"}},o={},d=[{value:"Thi\u1ebft l\u1eadp l\u1ea1i ESLint v\xe0 Prettier",id:"thi\u1ebft-l\u1eadp-l\u1ea1i-eslint-v\xe0-prettier",level:2},{value:"C\xe2u l\u1ec7nh ch\u1ea1y",id:"c\xe2u-l\u1ec7nh-ch\u1ea1y",level:2}];function a(e){const n={code:"code",h1:"h1",h2:"h2",header:"header",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.header,{children:(0,s.jsx)(n.h1,{id:"kh\u1edfi-t\u1ea1o-nestjs",children:"Kh\u1edfi t\u1ea1o NestJS"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Tr\u01b0\u1edbc khi kh\u1edfi t\u1ea1o project NestJS, ta s\u1ebd c\xe0i \u0111\u1eb7t NestJS CLI:"}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"npm i -g @nestjs/cli\n"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Sau \u0111\xf3, ta d\xf9ng l\u1ec7nh sau \u0111\u1ec3 kh\u1edfi t\u1ea1o project:"}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"nest new project-name\n"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"C\u1ea5u tr\xfac th\u01b0 m\u1ee5c sau khi kh\u1edfi t\u1ea1o:"}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"1718265085832",src:t(9591).A+"",width:"329",height:"291"})}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"T\xean file"}),(0,s.jsx)(n.th,{children:"M\xf4 t\u1ea3"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"app.controller.ts"}),(0,s.jsx)(n.td,{children:"File controller \u0111\u1ecbnh ngh\u0129a c\xe1c route"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"app.controller.spec.ts"}),(0,s.jsx)(n.td,{children:"File unit tests cho controller"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"app.module.ts"}),(0,s.jsx)(n.td,{children:"File module g\u1ed1c c\u1ee7a project"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"app.service.ts"}),(0,s.jsx)(n.td,{children:"File service c\u1ee7a module app. C\xf3 nhi\u1ec7m v\u1ee5 t\u01b0\u01a1ng t\xe1c v\u1edbi database, tr\u1ea3 v\u1ec1 d\u1eef li\u1ec7u cho controller"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"main.ts"}),(0,s.jsx)(n.td,{children:"Entry file \u0111\u1ec3 ch\u1ea1y \u1ee9ng d\u1ee5ng"})]})]})]}),"\n",(0,s.jsx)(n.h2,{id:"thi\u1ebft-l\u1eadp-l\u1ea1i-eslint-v\xe0-prettier",children:"Thi\u1ebft l\u1eadp l\u1ea1i ESLint v\xe0 Prettier"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"C\xe0i \u0111\u1eb7t c\xe1c devDependencies:"}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"npm install -D eslint prettier eslint-config-prettier eslint-plugin-prettier @typescript-eslint/parser @typescript-eslint/eslint-plugin eslint-plugin-import eslint-import-resolver-typescript eslint-plugin-simple-import-sort\n"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["File ",(0,s.jsx)(n.strong,{children:"tsconfig.json"}),":"]}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",children:'{\n  "compilerOptions": {\n    "strict": true,\n    "module": "commonjs",\n    "moduleResolution": "Node",\n    "declaration": true,\n    "emitDecoratorMetadata": true,\n    "experimentalDecorators": true,\n    "target": "ES2021",\n    "sourceMap": true,\n    "outDir": "./dist",\n    "incremental": true,\n    "noFallthroughCasesInSwitch": true,\n    "resolveJsonModule": true,\n    "importHelpers": true,\n    "skipLibCheck": true,\n    "removeComments": true,\n    "allowSyntheticDefaultImports": true,\n    "esModuleInterop": true,\n    "noUncheckedIndexedAccess": true,\n    "forceConsistentCasingInFileNames": true,\n    "strictPropertyInitialization": false,\n    "baseUrl": ".",\n    "paths": {\n      "src/*": ["./src/*"],\n      "test/*": ["./test/*"]\n    }\n  }\n}\n'})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["File ",(0,s.jsx)(n.strong,{children:".eslintrc.js"}),":"]}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:'module.exports = {\n  parser: "@typescript-eslint/parser",\n  parserOptions: {\n    project: "tsconfig.json",\n    tsconfigRootDir: __dirname,\n    sourceType: "module",\n  },\n  plugins: ["simple-import-sort"],\n  extends: [\n    "eslint:recommended",\n    "plugin:@typescript-eslint/recommended",\n    "prettier",\n    "plugin:import/recommended",\n    "plugin:import/typescript",\n    "plugin:prettier/recommended",\n  ],\n  root: true,\n  settings: {\n    "import/resolver": {\n      node: {\n        paths: ["./src"],\n        extensions: [".js", ".ts"],\n      },\n      typescript: {\n        project: "./tsconfig.json",\n      },\n    },\n  },\n  env: {\n    node: true,\n    jest: true,\n  },\n  rules: {\n    "prettier/prettier": "error",\n    "no-unused-vars": "off",\n    "no-empty": "off",\n    "no-console": "off",\n    "@typescript-eslint/no-unused-vars": "off",\n    "@typescript-eslint/consistent-type-exports": "error",\n    "@typescript-eslint/no-explicit-any": "off",\n    "@typescript-eslint/no-restricted-imports": [\n      "error",\n      { patterns: ["../*"] },\n    ],\n    "simple-import-sort/imports": [\n      "error",\n      {\n        groups: [["^(?!\\\\.)"], ["^\\\\u0000", "^\\\\.", "^src/"]],\n      },\n    ],\n    "simple-import-sort/exports": "error",\n    "import/newline-after-import": "error",\n  },\n};\n'})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["File ",(0,s.jsx)(n.strong,{children:".prettierrc.json"}),":"]}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",children:'{\n  "printWidth": 80,\n  "tabWidth": 2,\n  "useTabs": false,\n  "semi": true,\n  "singleQuote": true,\n  "quoteProps": "as-needed",\n  "jsxSingleQuote": false,\n  "trailingComma": "none",\n  "bracketSameLine": false,\n  "arrowParens": "always",\n  "insertPragma": false,\n  "proseWrap": "preserve",\n  "htmlWhitespaceSensitivity": "css",\n  "embeddedLanguageFormatting": "auto",\n  "bracketSpacing": true,\n  "requirePragma": false,\n  "endOfLine": "auto"\n}\n'})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["File ",(0,s.jsx)(n.strong,{children:".eslintignore"}),":"]}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-plaintext",children:"node_modules\npackage-lock.json\n.eslintrc.js\n"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["File ",(0,s.jsx)(n.strong,{children:".prettierignore"}),":"]}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-plaintext",children:"node_modules\nbuild\ndist\npackage-lock.json\n"})}),"\n",(0,s.jsx)(n.h2,{id:"c\xe2u-l\u1ec7nh-ch\u1ea1y",children:"C\xe2u l\u1ec7nh ch\u1ea1y"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Ch\u1ea1y \u1edf m\xf4i tr\u01b0\u1eddng dev:"}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"npm run start:dev\n"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"C\xe2u l\u1ec7nh ch\u1ea1y ESLint + Prettier:"}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"npm run lint\nnpm run format\n"})})]})}function p(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(a,{...e})}):a(e)}},9591:(e,n,t)=>{t.d(n,{A:()=>s});const s=t.p+"assets/images/1718265085832-02ff5df4c085aadd7cc4b46365e04bd9.png"},8453:(e,n,t)=>{t.d(n,{R:()=>l,x:()=>c});var s=t(6540);const r={},i=s.createContext(r);function l(e){const n=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:l(e.components),s.createElement(i.Provider,{value:n},e.children)}}}]);