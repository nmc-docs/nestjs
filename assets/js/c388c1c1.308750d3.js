"use strict";(self.webpackChunkreactjs=self.webpackChunkreactjs||[]).push([[532],{3905:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>h});var o=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,o,r=function(e,n){if(null==e)return{};var t,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=o.createContext({}),c=function(e){var n=o.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},u=function(e){var n=c(e.components);return o.createElement(s.Provider,{value:n},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},p=o.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),m=c(t),p=r,h=m["".concat(s,".").concat(p)]||m[p]||d[p]||a;return t?o.createElement(h,l(l({ref:n},u),{},{components:t})):o.createElement(h,l({ref:n},u))}));function h(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,l=new Array(a);l[0]=p;var i={};for(var s in n)hasOwnProperty.call(n,s)&&(i[s]=n[s]);i.originalType=e,i[m]="string"==typeof e?e:r,l[1]=i;for(var c=2;c<a;c++)l[c]=t[c];return o.createElement.apply(null,l)}return o.createElement.apply(null,t)}p.displayName="MDXCreateElement"},3424:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>l,default:()=>d,frontMatter:()=>a,metadata:()=>i,toc:()=>c});var o=t(7462),r=(t(7294),t(3905));const a={sidebar_position:2},l="Modules",i={unversionedId:"nestjs-fundamentals/modules",id:"nestjs-fundamentals/modules",title:"Modules",description:"Module l\xe0 g\xec?",source:"@site/docs/nestjs-fundamentals/modules.md",sourceDirName:"nestjs-fundamentals",slug:"/nestjs-fundamentals/modules",permalink:"/nestjs/nestjs-fundamentals/modules",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Providers",permalink:"/nestjs/nestjs-fundamentals/providers"},next:{title:"Controllers",permalink:"/nestjs/nestjs-fundamentals/controllers"}},s={},c=[{value:"Module l\xe0 g\xec?",id:"module-l\xe0-g\xec",level:2},{value:"L\u1ec7nh CLI \u0111\u1ec3 t\u1ea1o module",id:"l\u1ec7nh-cli-\u0111\u1ec3-t\u1ea1o-module",level:2},{value:"Chia s\u1ebb gi\u1eefa c\xe1c module",id:"chia-s\u1ebb-gi\u1eefa-c\xe1c-module",level:2},{value:"Dynamic module",id:"dynamic-module",level:2},{value:"V\xed d\u1ee5 1",id:"v\xed-d\u1ee5-1",level:3},{value:"V\xed d\u1ee5 2",id:"v\xed-d\u1ee5-2",level:3}],u={toc:c},m="wrapper";function d(e){let{components:n,...t}=e;return(0,r.kt)(m,(0,o.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"modules"},"Modules"),(0,r.kt)("h2",{id:"module-l\xe0-g\xec"},"Module l\xe0 g\xec?"),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},"Trong NestJS, m\u1ed9t module l\xe0 m\u1ed9t class \u0111\u01b0\u1ee3c trang b\u1ecb c\xe1c metadata. N\xf3 \u0111\u01b0\u1ee3c s\u1eed d\u1ee5ng \u0111\u1ec3 t\u1ed5 ch\u1ee9c v\xe0 nh\xf3m c\xe1c th\xe0nh ph\u1ea7n li\xean quan v\u1edbi nhau."),(0,r.kt)("li",{parentName:"ul"},"M\u1ed7i \u1ee9ng d\u1ee5ng NestJS bao g\u1ed3m \xedt nh\u1ea5t m\u1ed9t module - g\u1ecdi l\xe0 ",(0,r.kt)("inlineCode",{parentName:"li"},"AppModule"),", \u0111\xe2y l\xe0 module g\u1ed1c c\u1ee7a \u1ee9ng d\u1ee5ng. Tuy nhi\xean, khi \u1ee9ng d\u1ee5ng c\u1ee7a b\u1ea1n b\u1eaft \u0111\u1ea7u l\u1edbn l\xean, b\u1ea1n s\u1ebd mu\u1ed1n chia nh\u1ecf n\xf3 th\xe0nh c\xe1c module nh\u1ecf h\u01a1n, c\xf3 th\u1ec3 t\xe1i s\u1eed d\u1ee5ng \u1edf nhi\u1ec1u n\u01a1i."),(0,r.kt)("li",{parentName:"ul"},"M\u1ed9t module trong NestJS th\u01b0\u1eddng bao g\u1ed3m:")),(0,r.kt)("ol",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"Providers")," : C\xe1c service, repository, factories, helpers, v.v. \u0111\u01b0\u1ee3c chia s\u1ebb gi\u1eefa c\xe1c component trong c\xf9ng m\u1ed9t module."),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"Controllers")," : C\xe1c controller x\u1eed l\xfd c\xe1c request HTTP."),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"Imports")," : C\xe1c modules kh\xe1c c\u1ea7n \u0111\u01b0\u1ee3c nh\u1eadp \u0111\u1ec3 s\u1eed d\u1ee5ng c\xe1c providers v\xe0 controllers."),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"Exports")," : C\xe1c providers v\xe0 controllers \u0111\u01b0\u1ee3c chia s\u1ebb v\u1edbi c\xe1c modules kh\xe1c."))),(0,r.kt)("h2",{id:"l\u1ec7nh-cli-\u0111\u1ec3-t\u1ea1o-module"},"L\u1ec7nh CLI \u0111\u1ec3 t\u1ea1o module"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u0110\u1ec3 t\u1ea1o 1 folder module trong NestJS, ta s\u1eed d\u1ee5ng l\u1ec7nh:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"nest g module [MODULE_NAME]\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"M\u1eb7c \u0111\u1ecbnh, folder ","[MODULE_NAME]",' s\u1ebd \u0111\u01b0\u1ee3c t\u1ea1o ngay b\xean trong th\u01b0 m\u1ee5c "src". N\u1ebfu ta mu\u1ed1n t\u1ea1o b\xean trong th\u01b0 m\u1ee5c "src/modules":')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"nest g module modules/customer\n")),(0,r.kt)("h2",{id:"chia-s\u1ebb-gi\u1eefa-c\xe1c-module"},"Chia s\u1ebb gi\u1eefa c\xe1c module"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u0110\xf4i khi, ch\xfang ta c\u1ea7n s\u1eed d\u1ee5ng m\u1ed9t provider c\u1ee7a m\u1ed9t module kh\xe1c b\xean trong module hi\u1ec7n t\u1ea1i, v\xed d\u1ee5 nh\u01b0 service B c\u1ee7a module B c\u1ea7n s\u1eed d\u1ee5ng ph\u01b0\u01a1ng th\u1ee9c c\u1ee7a server A c\u1ee7a module A."),(0,r.kt)("li",{parentName:"ul"},"\u0110\u1ec3 c\xf3 th\u1ec3 s\u1eed d\u1ee5ng provider c\u1ee7a m\u1ed9t module kh\xe1c, ta s\u1eed d\u1ee5ng ",(0,r.kt)("strong",{parentName:"li"},"import")," v\xe0 ",(0,r.kt)("strong",{parentName:"li"},"export"),"."),(0,r.kt)("li",{parentName:"ul"},"V\xed d\u1ee5 sau \u0111\xe2y m\xf4 t\u1ea3 c\xe1ch s\u1eed d\u1ee5ng provider c\u1ee7a AuthModule b\xean trong UserModule:")),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"T\u1ea1o AuthService:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},'// auth.service.ts\nimport { Injectable } from "@nestjs/common";\n\n@Injectable()\nexport class AuthService {\n  async validateUser(username: string, password: string): Promise<any> {\n    // Logic to validate user credentials\n    return { userId: 1, username: "john_doe" };\n  }\n}\n')),(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},"T\u1ea1o AuthModule, c\xf3 provider l\xe0 AuthService v\xe0 export n\xf3 ra \u0111\u1ec3 cho module kh\xe1c s\u1eed d\u1ee5ng:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},'// auth.module.ts\nimport { Module } from "@nestjs/common";\nimport { AuthService } from "./auth.service";\n\n@Module({\n  providers: [AuthService],\n  exports: [AuthService],\n})\nexport class AuthModule {}\n')),(0,r.kt)("ol",{start:3},(0,r.kt)("li",{parentName:"ol"},"Sau \u0111\xf3 import AuthModule v\xe0o b\xean trong UserModule:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},'// user.module.ts\nimport { Module } from "@nestjs/common";\nimport { UserService } from "./user.service";\nimport { AuthModule } from "../auth/auth.module";\n\n@Module({\n  imports: [AuthModule], // Import AuthModule\n  providers: [UserService],\n  exports: [UserService],\n})\nexport class UserModule {}\n')),(0,r.kt)("ol",{start:4},(0,r.kt)("li",{parentName:"ol"},"V\xe0 gi\u1edd c\xf3 th\u1ec3 s\u1eed d\u1ee5ng c\xe1c ph\u01b0\u01a1ng th\u1ee9c c\u1ee7a provider AuthService b\xean trong UserService:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},'// user.service.ts\nimport { Injectable } from "@nestjs/common";\nimport { AuthService } from "../auth/auth.service";\n\n@Injectable()\nexport class UserService {\n  constructor(private authService: AuthService) {}\n\n  async login(username: string, password: string): Promise<any> {\n    const user = await this.authService.validateUser(username, password);\n    // Additional logic to handle user login\n    return user;\n  }\n}\n')),(0,r.kt)("h2",{id:"dynamic-module"},"Dynamic module"),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},"Trong NestJS, m\u1ed9t dynamic module l\xe0 m\u1ed9t module c\xf3 th\u1ec3 \u0111\u01b0\u1ee3c c\u1ea5u h\xecnh m\u1ed9t c\xe1ch linh ho\u1ea1t v\xe0 t\xf9y ch\u1ec9nh trong th\u1eddi gian ch\u1ea1y (runtime) thay v\xec th\u1eddi gian bi\xean d\u1ecbch (compile-time). \u0110i\u1ec1u n\xe0y r\u1ea5t h\u1eefu \xedch khi ta c\u1ea7n c\u1ea5u h\xecnh m\u1ed9t module d\u1ef1a tr\xean c\xe1c th\xf4ng s\u1ed1 \u0111\u1ed9ng ho\u1eb7c d\u1eef li\u1ec7u \u0111\u1ebfn t\u1eeb c\xe1c ngu\u1ed3n kh\xe1c nhau nh\u01b0 bi\u1ebfn m\xf4i tr\u01b0\u1eddng, c\u01a1 s\u1edf d\u1eef li\u1ec7u, ho\u1eb7c th\xf4ng tin t\u1eeb c\xe1c service kh\xe1c."),(0,r.kt)("li",{parentName:"ul"},"C\xe1c b\u01b0\u1edbc \u0111\u1ec3 t\u1ea1o m\u1ed9t dynamic module trong NestJS:")),(0,r.kt)("ol",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"T\u1ea1o module v\u1edbi m\u1ed9t method static")," :\nT\u1ea1o m\u1ed9t module c\xf3 m\u1ed9t ph\u01b0\u01a1ng th\u1ee9c static, \u0111\u1ec3 nh\u1eadn c\xe1c c\u1ea5u h\xecnh v\xe0 tr\u1ea3 v\u1ec1 m\u1ed9t module \u0111\u01b0\u1ee3c c\u1ea5u h\xecnh."),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"S\u1eed d\u1ee5ng ",(0,r.kt)("inlineCode",{parentName:"strong"},"DynamicModule")," interface")," :\nPh\u01b0\u01a1ng th\u1ee9c static s\u1ebd tr\u1ea3 v\u1ec1 m\u1ed9t \u0111\u1ed1i t\u01b0\u1ee3ng theo interface ",(0,r.kt)("inlineCode",{parentName:"li"},"DynamicModule"),", bao g\u1ed3m c\xe1c providers, imports, v\xe0 exports c\u1ea7n thi\u1ebft.")),(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},"C\xf3 3 ph\u01b0\u01a1ng th\u1ee9c ch\xednh th\u01b0\u1eddng \u0111\u01b0\u1ee3c d\xf9ng \u0111\u1ec3 \u0111\u1eb7t t\xean cho static method:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"register()"),": D\xf9ng khi ta mu\u1ed1n c\u1ea5u h\xecnh dynamic module v\u1edbi 1 c\u1ea5u h\xecnh c\u1ee5 th\u1ec3 v\xe0 ch\u1ec9\xa0d\xe0nh ri\xeang cho module g\u1ecdi dynamic module n\xe0y. V\xed d\u1ee5 v\u1edbi ",(0,r.kt)("inlineCode",{parentName:"li"},"@nestjs/axios"),": ",(0,r.kt)("inlineCode",{parentName:"li"},"HttpModule.register({ baseUrl: 'someUrl' })")," v\xe0 n\u1ebfu module kh\xe1c ta c\u1ea5u h\xecnh ",(0,r.kt)("inlineCode",{parentName:"li"},"HttpModule.register({ baseUrl: 'somewhere else' })"),", n\xf3 s\u1ebd c\xf3 m\u1ed9t c\u1ea5u h\xecnh kh\xe1c. Ta c\xf3 th\u1ec3 c\u1ea5u h\xecnh cho bao nhi\xeau module t\xf9y th\xedch."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"forRoot()"),": Ph\u01b0\u01a1ng th\u1ee9c n\xe0y \u0111\u01b0\u1ee3c s\u1eed d\u1ee5ng \u0111\u1ec3 c\u1ea5u h\xecnh v\xe0 kh\u1edfi t\u1ea1o c\xe1c thi\u1ebft l\u1eadp chung, ch\u1ec9 th\u1ef1c hi\u1ec7n m\u1ed9t l\u1ea7n duy nh\u1ea5t v\xe0 th\u01b0\u1eddng \xe1p d\u1ee5ng cho to\xe0n b\u1ed9 \u1ee9ng d\u1ee5ng. \u0110\xe2y th\u01b0\u1eddng l\xe0 n\u01a1i b\u1ea1n c\u1ea5u h\xecnh c\xe1c thi\u1ebft l\u1eadp chung cho to\xe0n b\u1ed9 \u1ee9ng d\u1ee5ng v\xe0 th\u01b0\u1eddng \u0111\u01b0\u1ee3c g\u1ecdi trong module g\u1ed1c (root module). V\xed d\u1ee5 nh\u01b0 ",(0,r.kt)("inlineCode",{parentName:"li"},"TypeOrmModule.forRoot()")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"forFeature()"),": Ph\u01b0\u01a1ng th\u1ee9c n\xe0y v\u1eabn d\xf9ng c\u1ea5u h\xecnh chung \u1edf forRoot nh\u01b0ng l\u1ea1i \u0111\u01b0\u1ee3c s\u1eed d\u1ee5ng trong c\xe1c module con \u0111\u1ec3 c\u1ea5u h\xecnh v\xe0 \u0111\u0103ng k\xfd c\xe1c t\xednh n\u0103ng ho\u1eb7c c\u1ea5u h\xecnh ri\xeang cho module \u0111\xf3. N\xf3 th\u01b0\u1eddng \u0111\u01b0\u1ee3c d\xf9ng trong c\xe1c module li\xean quan \u0111\u1ebfn ORM (Object-Relational Mapping) nh\u01b0 TypeORM hay Mongoose \u0111\u1ec3 \u0111\u0103ng k\xfd c\xe1c entity ho\u1eb7c schema c\u1ee5 th\u1ec3 cho module."))))),(0,r.kt)("h3",{id:"v\xed-d\u1ee5-1"},"V\xed d\u1ee5 1"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Sau \u0111\xe2y ta s\u1ebd t\u1ea1o m\u1ed9t dynamic module t\xean DatabaseModule:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},'import { Module, DynamicModule, Provider } from "@nestjs/common";\nimport {\n  createConnection,\n  Connection,\n  Repository,\n  EntitySchema,\n} from "typeorm";\nimport { TypeOrmModuleOptions } from "@nestjs/typeorm";\n\n@Module({})\nexport class DatabaseModule {\n  static forRoot(options: TypeOrmModuleOptions): DynamicModule {\n    const connectionProvider = {\n      provide: "DATABASE_CONNECTION",\n      useFactory: async () => await createConnection(options),\n    };\n\n    return {\n      module: DatabaseModule,\n      providers: [connectionProvider],\n      exports: [connectionProvider],\n    };\n  }\n\n  static forFeature(entities: Function[] | EntitySchema<any>[]): DynamicModule {\n    const repositories = entities.map((entity) => ({\n      provide: `${entity.name}Repository`,\n      useFactory: (connection: Connection) => connection.getRepository(entity),\n      inject: ["DATABASE_CONNECTION"],\n    }));\n\n    return {\n      module: DatabaseModule,\n      providers: repositories,\n      exports: repositories,\n    };\n  }\n}\n')),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Ti\u1ebfp theo, ta s\u1ebd s\u1eed d\u1ee5ng ",(0,r.kt)("inlineCode",{parentName:"li"},"DatabaseModule.forRoot()")," v\xe0 truy\u1ec1n c\u1ea5u h\xecnh database v\xe0o n\xf3 \u1edf file ",(0,r.kt)("strong",{parentName:"li"},"app.module.ts"),":")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},'import { Module } from "@nestjs/common";\nimport { DatabaseModule } from "./database.module";\n\n@Module({\n  imports: [\n    DatabaseModule.forRoot({\n      type: "postgres",\n      host: "localhost",\n      port: 5432,\n      username: "test",\n      password: "test",\n      database: "test",\n    }),\n  ],\n})\nexport class AppModule {}\n')),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Ti\u1ebfp theo, t\u1ea1i UserModule, v\xec module n\xe0y ta ch\u1ec9 mu\u1ed1n s\u1eed d\u1ee5ng repository v\u1edbi model l\xe0 User cho n\xean ta ch\u1ec9 c\u1ea7n truy\u1ec1n User v\xe0o ",(0,r.kt)("inlineCode",{parentName:"li"},"DatabaseModule.forFeature([User])"),". T\u01b0\u01a1ng t\u1ef1 \u0111\u1ed1i v\u1edbi c\xe1c module kh\xe1c, s\u1eed d\u1ee5ng repository c\u1ee7a model n\xe0o, ch\u1ec9 c\u1ea7n truy\u1ec1n model \u0111\xf3 v\xe0o h\xe0m forFeature(), \u0111\xf3 g\u1ecdi l\xe0 dynamic module.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},'import { Module } from "@nestjs/common";\nimport { DatabaseModule } from "./database.module";\nimport { User } from "./user.entity";\nimport { UserService } from "./user.service.ts";\n\n@Module({\n  imports: [DatabaseModule.forFeature([User])],\n  providers: [UserService],\n})\nexport class UserModule {}\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},'import { Injectable, Inject } from "@nestjs/common";\nimport { Repository } from "typeorm";\nimport { User } from "./user.entity";\n\n@Injectable()\nexport class UserService {\n  constructor(\n    @Inject("UserRepository") private readonly userRepository: Repository<User>\n  ) {}\n\n  // Implement your service methods here\n}\n')),(0,r.kt)("h3",{id:"v\xed-d\u1ee5-2"},"V\xed d\u1ee5 2"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Sau \u0111\xe2y ta s\u1ebd t\u1ea1o dynamic module c\xf3 service ch\u1ee9a ph\u01b0\u01a1ng th\u1ee9c l\u1ea5y gi\xe1 tr\u1ecb bi\u1ebfn m\xf4i tr\u01b0\u1eddng (Variables Environment):")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},'export interface ConfigModuleOptions {\n  folder: string;\n}\n\n@Module({})\nexport class ConfigModule {\n  static register(options: ConfigModuleOptions): DynamicModule {\n    return {\n      module: ConfigModule,\n      providers: [\n        {\n          provide: "CONFIG_OPTIONS",\n          useValue: options,\n        },\n        ConfigService,\n      ],\n      exports: [ConfigService],\n    };\n  }\n}\n\nimport * as dotenv from "dotenv";\nimport * as fs from "fs";\nimport { Injectable, Inject } from "@nestjs/common";\nimport { EnvConfig } from "./interfaces";\n\n@Injectable()\nexport class ConfigService {\n  private readonly envConfig: EnvConfig;\n\n  constructor(@Inject("CONFIG_OPTIONS") private options) {\n    const filePath = `${process.env.NODE_ENV || "development"}.env`;\n    const envFile = path.resolve(__dirname, "../../", options.folder, filePath);\n    this.envConfig = dotenv.parse(fs.readFileSync(envFile));\n  }\n\n  get(key: string): string {\n    return this.envConfig[key];\n  }\n}\n')),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Sau \u0111\xf3, g\u1ecdi h\xe0m register \u1edf file ",(0,r.kt)("strong",{parentName:"li"},"app.module.ts:"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},'import { Module } from "@nestjs/common";\nimport { AppController } from "./app.controller";\nimport { AppService } from "./app.service";\nimport { ConfigModule } from "./config/config.module";\n\n@Module({\n  imports: [ConfigModule.register({ folder: "./config" })],\n  controllers: [AppController],\n  providers: [AppService],\n})\nexport class AppModule {}\n')),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Ti\u1ebfp theo, import v\xe0o module mu\u1ed1n s\u1eed d\u1ee5ng, ch\u1eb3ng h\u1ea1n nh\u01b0 AuthModule:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},'// auth.module.ts\nimport { Module } from "@nestjs/common";\nimport { AuthService } from "./auth.service";\n\n@Module({\n  imports: [ConfigModule],\n  providers: [AuthService],\n  exports: [AuthService],\n})\nexport class AuthModule {}\n')),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"S\u1eed d\u1ee5ng ConfigService \u1edf AuthService:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},'// auth.service.ts\n\n@Injectable()\nexport class AuthService {\n  constructor(private configService: ConfigService) {}\n  async validateUser(username: string, password: string): Promise<any> {\n    const secretKey = this.configService.get("SECRET_KEY");\n    return { userId: 1, username: "john_doe" };\n  }\n}\n')))}d.isMDXComponent=!0}}]);