"use strict";(self.webpackChunkreactjs=self.webpackChunkreactjs||[]).push([[785],{9075:(n,e,r)=>{r.r(e),r.d(e,{assets:()=>l,contentTitle:()=>i,default:()=>a,frontMatter:()=>t,metadata:()=>c,toc:()=>d});var o=r(4848),s=r(8453);const t={sidebar_position:2},i="Modules",c={id:"nestjs-fundamentals/modules",title:"Modules",description:"Module l\xe0 g\xec?",source:"@site/docs/nestjs-fundamentals/modules.md",sourceDirName:"nestjs-fundamentals",slug:"/nestjs-fundamentals/modules",permalink:"/nestjs/nestjs-fundamentals/modules",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Providers",permalink:"/nestjs/nestjs-fundamentals/providers"},next:{title:"Controllers",permalink:"/nestjs/nestjs-fundamentals/controllers"}},l={},d=[{value:"Module l\xe0 g\xec?",id:"module-l\xe0-g\xec",level:2},{value:"M\u1ed9t provider \u0111\u01b0\u1ee3c resolve b\u1edfi module khi n\xe0o?",id:"m\u1ed9t-provider-\u0111\u01b0\u1ee3c-resolve-b\u1edfi-module-khi-n\xe0o",level:2},{value:"L\u1ec7nh CLI \u0111\u1ec3 t\u1ea1o module",id:"l\u1ec7nh-cli-\u0111\u1ec3-t\u1ea1o-module",level:2},{value:"C\xe1c c\xe1ch \u0111\u0103ng k\xfd Provider trong Module",id:"c\xe1c-c\xe1ch-\u0111\u0103ng-k\xfd-provider-trong-module",level:2},{value:"useClass",id:"useclass",level:3},{value:"useValue",id:"usevalue",level:3},{value:"useFactory",id:"usefactory",level:3},{value:"C\xe1ch inject provider trong provider kh\xe1c",id:"c\xe1ch-inject-provider-trong-provider-kh\xe1c",level:2},{value:"Import/export",id:"importexport",level:2},{value:"Dynamic module",id:"dynamic-module",level:2},{value:"V\xed d\u1ee5 dynamic module RedisModule",id:"v\xed-d\u1ee5-dynamic-module-redismodule",level:3},{value:"Global module",id:"global-module",level:2}];function h(n){const e={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",ol:"ol",pre:"pre",strong:"strong",ul:"ul",...(0,s.R)(),...n.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(e.header,{children:(0,o.jsx)(e.h1,{id:"modules",children:"Modules"})}),"\n",(0,o.jsx)(e.h2,{id:"module-l\xe0-g\xec",children:"Module l\xe0 g\xec?"}),"\n",(0,o.jsxs)(e.admonition,{type:"info",children:[(0,o.jsxs)(e.ul,{children:["\n",(0,o.jsx)(e.li,{children:"Trong NestJS, m\u1ed9t module l\xe0 m\u1ed9t class \u0111\u01b0\u1ee3c trang b\u1ecb c\xe1c metadata. N\xf3 \u0111\u01b0\u1ee3c s\u1eed d\u1ee5ng \u0111\u1ec3 t\u1ed5 ch\u1ee9c v\xe0 nh\xf3m c\xe1c th\xe0nh ph\u1ea7n li\xean quan v\u1edbi nhau."}),"\n",(0,o.jsxs)(e.li,{children:["M\u1ed7i \u1ee9ng d\u1ee5ng NestJS bao g\u1ed3m \xedt nh\u1ea5t m\u1ed9t module - g\u1ecdi l\xe0 ",(0,o.jsx)(e.code,{children:"AppModule"}),", \u0111\xe2y l\xe0 module g\u1ed1c c\u1ee7a \u1ee9ng d\u1ee5ng. Tuy nhi\xean, khi \u1ee9ng d\u1ee5ng c\u1ee7a b\u1ea1n b\u1eaft \u0111\u1ea7u l\u1edbn l\xean, b\u1ea1n s\u1ebd mu\u1ed1n chia nh\u1ecf n\xf3 th\xe0nh c\xe1c module nh\u1ecf h\u01a1n, c\xf3 th\u1ec3 t\xe1i s\u1eed d\u1ee5ng \u1edf nhi\u1ec1u n\u01a1i."]}),"\n",(0,o.jsx)(e.li,{children:"M\u1ed9t module trong NestJS th\u01b0\u1eddng bao g\u1ed3m:"}),"\n"]}),(0,o.jsxs)(e.ol,{children:["\n",(0,o.jsxs)(e.li,{children:[(0,o.jsx)(e.strong,{children:"Providers"})," : C\xe1c service, repository, factories, helpers, v.v. l\xe0 provider \u0111\u01b0\u1ee3c chia s\u1ebb gi\u1eefa c\xe1c component trong c\xf9ng m\u1ed9t module."]}),"\n",(0,o.jsxs)(e.li,{children:[(0,o.jsx)(e.strong,{children:"Controllers"})," : C\xe1c controller x\u1eed l\xfd c\xe1c request HTTP."]}),"\n",(0,o.jsxs)(e.li,{children:[(0,o.jsx)(e.strong,{children:"Imports"})," : C\xe1c modules kh\xe1c c\u1ea7n \u0111\u01b0\u1ee3c import \u0111\u1ec3 s\u1eed d\u1ee5ng c\xe1c providers v\xe0 controllers."]}),"\n",(0,o.jsxs)(e.li,{children:[(0,o.jsx)(e.strong,{children:"Exports"})," : C\xe1c providers v\xe0 controllers \u0111\u01b0\u1ee3c chia s\u1ebb v\u1edbi c\xe1c modules kh\xe1c."]}),"\n"]})]}),"\n",(0,o.jsx)(e.h2,{id:"m\u1ed9t-provider-\u0111\u01b0\u1ee3c-resolve-b\u1edfi-module-khi-n\xe0o",children:"M\u1ed9t provider \u0111\u01b0\u1ee3c resolve b\u1edfi module khi n\xe0o?"}),"\n",(0,o.jsx)(e.admonition,{type:"info",children:(0,o.jsxs)(e.ul,{children:["\n",(0,o.jsx)(e.li,{children:"M\u1ed9t module s\u1ebd kh\xf4ng resolve nh\u1eefng provider n\u1eb1m ngo\xe0i ph\u1ea1m vi c\u1ee7a n\xf3."}),"\n",(0,o.jsxs)(e.li,{children:["M\u1ed9t provider \u0111\u01b0\u1ee3c module resolve n\u1ebfu:","\n",(0,o.jsxs)(e.ul,{children:["\n",(0,o.jsxs)(e.li,{children:["N\xf3 \u0111\u01b0\u1ee3c truy\u1ec1n v\xe0o m\u1ea3ng ",(0,o.jsx)(e.strong,{children:"providers"})," khi c\u1ea5u h\xecnh module,"]}),"\n",(0,o.jsxs)(e.li,{children:["N\xf3 \u0111\u01b0\u1ee3c export t\u1eeb m\u1ed9t module kh\xe1c v\xe0 module kh\xe1c n\xe0y ph\u1ea3i \u0111\u01b0\u1ee3c import v\xe0o module hi\u1ec7n t\u1ea1i. ",(0,o.jsx)(e.a,{href:"#importexport",children:"Xem chi ti\u1ebft"})]}),"\n",(0,o.jsxs)(e.li,{children:["N\xf3 thu\u1ed9c m\u1ed9t ",(0,o.jsx)(e.a,{href:"#global-module",children:"Global module"})]}),"\n"]}),"\n"]}),"\n",(0,o.jsxs)(e.li,{children:["Khi m\u1ed9t service \u0111\u01b0\u1ee3c truy\u1ec1n v\xe0o m\u1ea3ng ",(0,o.jsx)(e.strong,{children:"providers"})," c\u1ee7a m\u1ed9t module m\xe0 service n\xe0y s\u1eed d\u1ee5ng c\xe1c th\xe0nh ph\u1ea7n ph\u1ee5 thu\u1ed9c kh\xe1c (tham s\u1ed1 truy\u1ec1n v\xe0o constructor) th\xec c\xe1c th\xe0nh ph\u1ea7n ph\u1ee5 thu\u1ed9c \u0111\xf3 c\u0169ng ph\u1ea3i \u0111\u01b0\u1ee3c resolve b\u1edfi module"]}),"\n"]})}),"\n",(0,o.jsx)(e.h2,{id:"l\u1ec7nh-cli-\u0111\u1ec3-t\u1ea1o-module",children:"L\u1ec7nh CLI \u0111\u1ec3 t\u1ea1o module"}),"\n",(0,o.jsxs)(e.ul,{children:["\n",(0,o.jsx)(e.li,{children:"\u0110\u1ec3 t\u1ea1o 1 folder module trong NestJS, ta s\u1eed d\u1ee5ng l\u1ec7nh:"}),"\n"]}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-bash",children:"nest g module [MODULE_NAME]\n"})}),"\n",(0,o.jsxs)(e.ul,{children:["\n",(0,o.jsx)(e.li,{children:'M\u1eb7c \u0111\u1ecbnh, folder [MODULE_NAME] s\u1ebd \u0111\u01b0\u1ee3c t\u1ea1o ngay b\xean trong th\u01b0 m\u1ee5c "src". N\u1ebfu ta mu\u1ed1n t\u1ea1o b\xean trong th\u01b0 m\u1ee5c "src/modules":'}),"\n"]}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-bash",children:"nest g module modules/customer\n"})}),"\n",(0,o.jsx)(e.h2,{id:"c\xe1c-c\xe1ch-\u0111\u0103ng-k\xfd-provider-trong-module",children:"C\xe1c c\xe1ch \u0111\u0103ng k\xfd Provider trong Module"}),"\n",(0,o.jsx)(e.admonition,{type:"note",children:(0,o.jsxs)(e.ul,{children:["\n",(0,o.jsxs)(e.li,{children:["Ngo\xe0i c\xe1ch t\u1ea1o provider th\xf4ng qua decorator ",(0,o.jsx)(e.code,{children:"@Injectable()"}),", v\xe0 \u0111\u0103ng k\xfd b\u1eb1ng c\xe1ch truy\u1ec1n class provider v\xe0o m\u1ea3ng c\xe1c providers trong module (Xem ",(0,o.jsx)(e.a,{href:"./providers#%C4%91%E1%BB%8Bnh-ngh%C4%A9a-provider",children:"t\u1ea1i \u0111\xe2y"}),"), NestJS cung c\u1ea5p cho ta 3 hook \u0111\u1ec3 t\u1ea1o v\xe0 \u0111\u0103ng k\xfd m\u1ed9t provider trong module."]}),"\n"]})}),"\n",(0,o.jsx)(e.h3,{id:"useclass",children:"useClass"}),"\n",(0,o.jsx)(e.admonition,{type:"info",children:(0,o.jsxs)(e.ul,{children:["\n",(0,o.jsxs)(e.li,{children:[(0,o.jsx)(e.strong,{children:"useClass"})," provider trong NestJS l\xe0 m\u1ed9t c\xe1ch \u0111\u1ec3 cung c\u1ea5p m\u1ed9t class nh\u01b0 m\u1ed9t provider cho m\u1ed9t module. N\xf3 cho ph\xe9p b\u1ea1n ch\u1ec9 \u0111\u1ecbnh m\u1ed9t class s\u1ebd \u0111\u01b0\u1ee3c s\u1eed d\u1ee5ng khi m\u1ed9t provider \u0111\u01b0\u1ee3c y\xeau c\u1ea7u."]}),"\n"]})}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-ts",metastring:'title="cats.module.ts"',children:'import { Module } from "@nestjs/common";\nimport { CatsController } from "./cats/cats.controller";\nimport { CatsService } from "./cats/cats.service";\n\n@Module({\n  controllers: [CatsController],\n  providers: [\n    {\n      provide: "CatsService",\n      useClass: CatsService,\n    },\n  ],\n})\nexport class CatsModule {}\n'})}),"\n",(0,o.jsx)(e.h3,{id:"usevalue",children:"useValue"}),"\n",(0,o.jsx)(e.admonition,{type:"info",children:(0,o.jsxs)(e.ul,{children:["\n",(0,o.jsxs)(e.li,{children:[(0,o.jsx)(e.strong,{children:"useValue"})," provider trong NestJS cho ph\xe9p b\u1ea1n cung c\u1ea5p m\u1ed9t gi\xe1 tr\u1ecb c\u1ee5 th\u1ec3 (literal value) cho m\u1ed9t provider. \u0110i\u1ec1u n\xe0y r\u1ea5t h\u1eefu \xedch khi b\u1ea1n mu\u1ed1n cung c\u1ea5p m\u1ed9t c\u1ea5u h\xecnh, m\u1ed9t constant, ho\u1eb7c m\u1ed9t mock object cho c\xe1c unit test."]}),"\n"]})}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-ts",metastring:'title="customer.module.ts"',children:'export interface IExampleUseValue {\n  apiUrl: string;\n  host: number;\n}\n\n@Module({\n  controllers: [CustomersController],\n  providers: [\n    {\n      provide: "EXAMPLE_USE_VALUE",\n      useValue: {\n        apiUrl: "http://example.com",\n        host: 3000,\n      } as IExampleUseValue,\n    },\n  ],\n})\nexport class CustomersModule {}\n'})}),"\n",(0,o.jsx)(e.h3,{id:"usefactory",children:"useFactory"}),"\n",(0,o.jsx)(e.admonition,{type:"info",children:(0,o.jsxs)(e.ul,{children:["\n",(0,o.jsxs)(e.li,{children:[(0,o.jsx)(e.strong,{children:"useFactory()"})," \u0111\u01b0\u1ee3c s\u1eed d\u1ee5ng \u0111\u1ec3 ch\u1ec9 \u0111\u1ecbnh m\u1ed9t h\xe0m s\u1ebd \u0111\u01b0\u1ee3c g\u1ecdi \u0111\u1ec3 t\u1ea1o ra gi\xe1 tr\u1ecb c\u1ee7a provider. H\xe0m n\xe0y c\xf3 th\u1ec3 nh\u1eadn c\xe1c ph\u1ee5 thu\u1ed9c kh\xe1c nh\u01b0 l\xe0 tham s\u1ed1."]}),"\n",(0,o.jsx)(e.li,{children:"Provider ch\xednh l\xe0 gi\xe1 tr\u1ecb \u0111\u01b0\u1ee3c tr\u1ea3 v\u1ec1 t\u1eeb h\xe0m factory (c\xf3 th\u1ec3 l\xe0 m\u1ed9t instance ho\u1eb7c m\u1ed9t gi\xe1 tr\u1ecb)"}),"\n",(0,o.jsxs)(e.li,{children:["H\xe0m ",(0,o.jsx)(e.strong,{children:"useFactory()"})," c\xf3 th\u1ec3 nh\u1eadn tham s\u1ed1 \u0111\u1ea7u v\xe0o, v\xe0 ch\xfang ",(0,o.jsx)(e.strong,{children:"PH\u1ea2I L\xc0 PROVIDER"}),", ph\u1ea3i \u0111\u01b0\u1ee3c truy\u1ec1n v\xe0o m\u1ea3ng property ",(0,o.jsx)(e.strong,{children:"inject"})," v\xe0 quan tr\u1ecdng n\xf3 ph\u1ea3i \u0111\u01b0\u1ee3c ",(0,o.jsx)(e.a,{href:"./modules#m%E1%BB%99t-provider-%C4%91%C6%B0%E1%BB%A3c-resolve-b%E1%BB%9Fi-module-khi-n%C3%A0o",children:"module resolve"}),"."]}),"\n"]})}),"\n",(0,o.jsxs)(e.ul,{children:["\n",(0,o.jsx)(e.li,{children:"V\xed d\u1ee5 1:"}),"\n"]}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-ts",metastring:'title="app.module.ts"',children:'const connectionProvider = {\n  provide: "CONNECTION",\n  useFactory: (optionsProvider: OptionsProvider, optionalProvider?: string) => {\n    const options = optionsProvider.get();\n    return new DatabaseConnection(options);\n  },\n  inject: [OptionsProvider, { token: "SomeOptionalProvider", optional: true }],\n  //       \\_____________/            \\__________________/\n  //        This provider              The provider with this\n  //        is mandatory.              token can resolve to `undefined`.\n};\n\n@Module({\n  providers: [\n    connectionProvider,\n    OptionsProvider,\n    { provide: "SomeOptionalProvider", useValue: "anything" },\n  ],\n})\nexport class AppModule {}\n'})}),"\n",(0,o.jsx)(e.h2,{id:"c\xe1ch-inject-provider-trong-provider-kh\xe1c",children:"C\xe1ch inject provider trong provider kh\xe1c"}),"\n",(0,o.jsx)(e.admonition,{type:"info",children:(0,o.jsxs)(e.ul,{children:["\n",(0,o.jsxs)(e.li,{children:["V\xec khi s\u1eed d\u1ee5ng ",(0,o.jsx)(e.code,{children:"useClass()"}),", ",(0,o.jsx)(e.code,{children:"useValue()"}),", ",(0,o.jsx)(e.code,{children:"useFactory()"})," \u0111\u1ec3 t\u1ea1o v\xe0 \u0111\u0103ng k\xfd provider cho module. M\u1ed7i provider s\u1ebd c\xf3 m\u1ed9t ID ri\xeang (ch\xednh l\xe0 gi\xe1 tr\u1ecb chu\u1ed7i m\xe0 ta cung c\u1ea5p \u1edf thu\u1ed9c t\xednh ",(0,o.jsx)(e.code,{children:"provide"}),"). Do \u0111\xf3, \u0111\u1ec3 inject ch\xfang \u1edf c\xe1c provider kh\xe1c, ta s\u1ebd s\u1eed d\u1ee5ng decorator ",(0,o.jsx)(e.code,{children:"@Inject()"})]}),"\n"]})}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-ts",metastring:'title="cat.module.ts"',children:'@Module({\n  controllers: [CatsController],\n  providers: [\n    {\n      provide: "CatsService",\n      useClass: CatsService,\n    },\n    MeowService,\n  ],\n})\nexport class CatsModule {}\n'})}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-ts",metastring:'title="meow.service.ts"',children:'@Injectable()\nexport class MeowService {\n  constructor(@Inject("CatsService") private catsService: CatsService) {}\n}\n'})}),"\n",(0,o.jsx)(e.admonition,{type:"tip",children:(0,o.jsxs)(e.ul,{children:["\n",(0,o.jsx)(e.li,{children:"Ta th\u01b0\u1eddng t\u1ea1o file m\u1edbi \u0111\u1ec3 \u0111\u1ecbnh ngh\u0129a key cho c\xe1c provider th\xf4ng qua enum"}),"\n"]})}),"\n",(0,o.jsx)(e.h2,{id:"importexport",children:"Import/export"}),"\n",(0,o.jsx)(e.admonition,{type:"info",children:(0,o.jsxs)(e.ul,{children:["\n",(0,o.jsxs)(e.li,{children:["Ta c\xf3 th\u1ec3 chia s\u1ebb c\xe1c provider c\u1ee7a m\u1ed9t module cho c\xe1c module kh\xe1c b\u1eb1ng c\xe1ch s\u1eed d\u1ee5ng ",(0,o.jsx)(e.strong,{children:"import"})," v\xe0 ",(0,o.jsx)(e.strong,{children:"export"}),"."]}),"\n",(0,o.jsxs)(e.li,{children:["L\u01b0u \xfd r\u1eb1ng, khi ta import m\u1ed9t module th\xec ch\u1ec9 s\u1eed d\u1ee5ng \u0111\u01b0\u1ee3c c\xe1c provider m\xe0 \u0111\u01b0\u1ee3c ",(0,o.jsx)(e.strong,{children:"export"})," ra \u1edf module \u0111\xf3."]}),"\n",(0,o.jsxs)(e.li,{children:["Ch\u1ec9 ",(0,o.jsx)(e.strong,{children:"export"})," ra \u0111\u01b0\u1ee3c nh\u1eefng provider m\xe0 n\u1eb1m trong m\u1ea3ng ",(0,o.jsx)(e.strong,{children:"providers"})," c\u1ee7a module."]}),"\n"]})}),"\n",(0,o.jsxs)(e.ul,{children:["\n",(0,o.jsx)(e.li,{children:"V\xed d\u1ee5 sau \u0111\xe2y m\xf4 t\u1ea3 c\xe1ch s\u1eed d\u1ee5ng provider c\u1ee7a AuthModule b\xean trong UserModule:"}),"\n"]}),"\n",(0,o.jsxs)(e.ol,{children:["\n",(0,o.jsx)(e.li,{children:"T\u1ea1o AuthService:"}),"\n"]}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-ts",metastring:'title="auth.service.ts"',children:'import { Injectable } from "@nestjs/common";\n\n@Injectable()\nexport class AuthService {\n  async validateUser(username: string, password: string): Promise<any> {\n    // Logic to validate user credentials\n    return { userId: 1, username: "john_doe" };\n  }\n}\n'})}),"\n",(0,o.jsxs)(e.ol,{start:"2",children:["\n",(0,o.jsx)(e.li,{children:"T\u1ea1o AuthModule, c\xf3 provider l\xe0 AuthService v\xe0 export n\xf3 ra \u0111\u1ec3 cho module kh\xe1c s\u1eed d\u1ee5ng:"}),"\n"]}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-ts",metastring:'title="auth.module.ts"',children:'import { Module } from "@nestjs/common";\nimport { AuthService } from "./auth.service";\n\n@Module({\n  providers: [AuthService],\n  exports: [AuthService],\n})\nexport class AuthModule {}\n'})}),"\n",(0,o.jsxs)(e.ol,{start:"3",children:["\n",(0,o.jsx)(e.li,{children:"Sau \u0111\xf3 import AuthModule v\xe0o b\xean trong UserModule:"}),"\n"]}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-ts",metastring:'title="user.module.ts"',children:'import { Module } from "@nestjs/common";\nimport { UserService } from "./user.service";\nimport { AuthModule } from "../auth/auth.module";\n\n@Module({\n  imports: [AuthModule], // Import AuthModule\n  providers: [UserService],\n  exports: [UserService],\n})\nexport class UserModule {}\n'})}),"\n",(0,o.jsxs)(e.ol,{start:"4",children:["\n",(0,o.jsx)(e.li,{children:"V\xe0 gi\u1edd c\xf3 th\u1ec3 s\u1eed d\u1ee5ng c\xe1c ph\u01b0\u01a1ng th\u1ee9c c\u1ee7a provider AuthService b\xean trong UserService:"}),"\n"]}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-ts",metastring:'title="user.service.ts"',children:'import { Injectable } from "@nestjs/common";\nimport { AuthService } from "../auth/auth.service";\n\n@Injectable()\nexport class UserService {\n  constructor(private authService: AuthService) {}\n\n  async login(username: string, password: string): Promise<any> {\n    const user = await this.authService.validateUser(username, password);\n    // Additional logic to handle user login\n    return user;\n  }\n}\n'})}),"\n",(0,o.jsx)(e.h2,{id:"dynamic-module",children:"Dynamic module"}),"\n",(0,o.jsxs)(e.admonition,{type:"info",children:[(0,o.jsxs)(e.ul,{children:["\n",(0,o.jsx)(e.li,{children:"Trong NestJS, m\u1ed9t dynamic module l\xe0 m\u1ed9t module c\xf3 th\u1ec3 \u0111\u01b0\u1ee3c c\u1ea5u h\xecnh m\u1ed9t c\xe1ch linh ho\u1ea1t v\xe0 t\xf9y ch\u1ec9nh trong th\u1eddi gian ch\u1ea1y (runtime) thay v\xec th\u1eddi gian bi\xean d\u1ecbch (compile-time). \u0110i\u1ec1u n\xe0y r\u1ea5t h\u1eefu \xedch khi ta c\u1ea7n c\u1ea5u h\xecnh m\u1ed9t module d\u1ef1a tr\xean c\xe1c th\xf4ng s\u1ed1 \u0111\u1ed9ng ho\u1eb7c d\u1eef li\u1ec7u \u0111\u1ebfn t\u1eeb c\xe1c ngu\u1ed3n kh\xe1c nhau nh\u01b0 bi\u1ebfn m\xf4i tr\u01b0\u1eddng, c\u01a1 s\u1edf d\u1eef li\u1ec7u, ho\u1eb7c th\xf4ng tin t\u1eeb c\xe1c service kh\xe1c."}),"\n",(0,o.jsx)(e.li,{children:"C\xe1c b\u01b0\u1edbc \u0111\u1ec3 t\u1ea1o m\u1ed9t dynamic module trong NestJS:"}),"\n"]}),(0,o.jsxs)(e.ol,{children:["\n",(0,o.jsxs)(e.li,{children:[(0,o.jsx)(e.strong,{children:"T\u1ea1o module v\u1edbi m\u1ed9t method static"})," :\nT\u1ea1o m\u1ed9t module c\xf3 m\u1ed9t ph\u01b0\u01a1ng th\u1ee9c static, \u0111\u1ec3 nh\u1eadn c\xe1c c\u1ea5u h\xecnh v\xe0 tr\u1ea3 v\u1ec1 m\u1ed9t module \u0111\u01b0\u1ee3c c\u1ea5u h\xecnh."]}),"\n",(0,o.jsxs)(e.li,{children:[(0,o.jsxs)(e.strong,{children:["S\u1eed d\u1ee5ng ",(0,o.jsx)(e.code,{children:"DynamicModule"})," interface"]})," :\nPh\u01b0\u01a1ng th\u1ee9c static s\u1ebd tr\u1ea3 v\u1ec1 m\u1ed9t \u0111\u1ed1i t\u01b0\u1ee3ng theo interface ",(0,o.jsx)(e.code,{children:"DynamicModule"}),", bao g\u1ed3m c\xe1c providers, imports, v\xe0 exports c\u1ea7n thi\u1ebft."]}),"\n"]}),(0,o.jsxs)(e.ul,{children:["\n",(0,o.jsxs)(e.li,{children:["C\xf3 3 ph\u01b0\u01a1ng th\u1ee9c ch\xednh th\u01b0\u1eddng \u0111\u01b0\u1ee3c d\xf9ng \u0111\u1ec3 \u0111\u1eb7t t\xean cho static method:","\n",(0,o.jsxs)(e.ul,{children:["\n",(0,o.jsxs)(e.li,{children:[(0,o.jsx)(e.strong,{children:"register()"}),": D\xf9ng khi ta mu\u1ed1n c\u1ea5u h\xecnh dynamic module v\u1edbi 1 c\u1ea5u h\xecnh c\u1ee5 th\u1ec3 v\xe0 ch\u1ec9\xa0d\xe0nh ri\xeang cho module g\u1ecdi dynamic module n\xe0y. V\xed d\u1ee5 v\u1edbi ",(0,o.jsx)(e.code,{children:"@nestjs/axios"}),": ",(0,o.jsx)(e.code,{children:"HttpModule.register({ baseUrl: 'someUrl' })"})," v\xe0 n\u1ebfu module kh\xe1c ta c\u1ea5u h\xecnh ",(0,o.jsx)(e.code,{children:"HttpModule.register({ baseUrl: 'somewhere else' })"}),", n\xf3 s\u1ebd c\xf3 m\u1ed9t c\u1ea5u h\xecnh kh\xe1c. Ta c\xf3 th\u1ec3 c\u1ea5u h\xecnh cho bao nhi\xeau module t\xf9y th\xedch."]}),"\n",(0,o.jsxs)(e.li,{children:[(0,o.jsx)(e.strong,{children:"forRoot()"}),": Ph\u01b0\u01a1ng th\u1ee9c n\xe0y \u0111\u01b0\u1ee3c s\u1eed d\u1ee5ng \u0111\u1ec3 c\u1ea5u h\xecnh v\xe0 kh\u1edfi t\u1ea1o c\xe1c thi\u1ebft l\u1eadp chung, ch\u1ec9 th\u1ef1c hi\u1ec7n m\u1ed9t l\u1ea7n duy nh\u1ea5t v\xe0 th\u01b0\u1eddng \xe1p d\u1ee5ng cho to\xe0n b\u1ed9 \u1ee9ng d\u1ee5ng. \u0110\xe2y th\u01b0\u1eddng l\xe0 n\u01a1i b\u1ea1n c\u1ea5u h\xecnh c\xe1c thi\u1ebft l\u1eadp chung cho to\xe0n b\u1ed9 \u1ee9ng d\u1ee5ng v\xe0 th\u01b0\u1eddng \u0111\u01b0\u1ee3c g\u1ecdi trong module g\u1ed1c (root module). V\xed d\u1ee5 nh\u01b0 ",(0,o.jsx)(e.code,{children:"TypeOrmModule.forRoot()"})]}),"\n",(0,o.jsxs)(e.li,{children:[(0,o.jsx)(e.strong,{children:"forFeature()"}),": Ph\u01b0\u01a1ng th\u1ee9c n\xe0y v\u1eabn d\xf9ng c\u1ea5u h\xecnh chung \u1edf forRoot nh\u01b0ng l\u1ea1i \u0111\u01b0\u1ee3c s\u1eed d\u1ee5ng trong c\xe1c module con \u0111\u1ec3 c\u1ea5u h\xecnh v\xe0 \u0111\u0103ng k\xfd c\xe1c t\xednh n\u0103ng ho\u1eb7c c\u1ea5u h\xecnh ri\xeang cho module \u0111\xf3. N\xf3 th\u01b0\u1eddng \u0111\u01b0\u1ee3c d\xf9ng trong c\xe1c module li\xean quan \u0111\u1ebfn ORM (Object-Relational Mapping) nh\u01b0 TypeORM hay Mongoose \u0111\u1ec3 \u0111\u0103ng k\xfd c\xe1c entity ho\u1eb7c schema c\u1ee5 th\u1ec3 cho module."]}),"\n",(0,o.jsxs)(e.li,{children:[(0,o.jsx)(e.strong,{children:"registerAsync()"}),", ",(0,o.jsx)(e.strong,{children:"forRootAsync()"}),": C\u0169ng gi\u1ed1ng nh\u01b0 ",(0,o.jsx)(e.strong,{children:"register()"}),", ",(0,o.jsx)(e.strong,{children:"forRoot()"})," nh\u01b0ng cho ph\xe9p ta c\u1ea5u h\xecnh module v\u1edbi c\xe1c thi\u1ebft l\u1eadp b\u1ea5t \u0111\u1ed3ng b\u1ed9 ho\u1eb7c s\u1eed d\u1ee5ng c\xe1c dependency injection trong \u0111\xf3."]}),"\n"]}),"\n"]}),"\n"]})]}),"\n",(0,o.jsx)(e.h3,{id:"v\xed-d\u1ee5-dynamic-module-redismodule",children:"V\xed d\u1ee5 dynamic module RedisModule"}),"\n",(0,o.jsxs)(e.ul,{children:["\n",(0,o.jsx)(e.li,{children:"T\u1ea1o type cho options:"}),"\n"]}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-ts",metastring:'title="redis-module.type.ts"',children:'import { RedisOptions } from "ioredis";\n\nexport interface IRedisModuleAsyncOptions {\n  imports?: any[];\n  useFactory?: (...args: any[]) => Promise<RedisOptions> | RedisOptions;\n  inject?: any[];\n  isGlobal?: boolean;\n}\n\nexport interface IRedisModuleOptions extends RedisOptions {\n  isGlobal?: boolean;\n}\n'})}),"\n",(0,o.jsxs)(e.ul,{children:["\n",(0,o.jsx)(e.li,{children:"T\u1ea1o dynamic module:"}),"\n"]}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-ts",metastring:'title="redis.module.ts"',children:'import { DynamicModule, Module } from "@nestjs/common";\n\nimport { EProviderKey } from "src/common/constants/enum";\nimport { RedisService } from "src/modules/libs/redis/redis.service";\nimport {\n  IRedisModuleAsyncOptions,\n  IRedisModuleOptions,\n} from "src/modules/libs/redis/types/redis-module.type";\n\n@Module({})\nexport class RedisModule {\n  static registerAsync(options: IRedisModuleAsyncOptions): DynamicModule {\n    const defaultFactory = (...args: any[]) => null;\n    return {\n      module: RedisModule,\n      imports: options.imports || [],\n      providers: [\n        RedisService,\n        {\n          provide: EProviderKey.REDIS_OPTIONS,\n          useFactory: options.useFactory || defaultFactory,\n          inject: options.inject || [],\n        },\n      ],\n      exports: [RedisService],\n      global: options.isGlobal ?? false,\n    };\n  }\n\n  static register(options: IRedisModuleOptions): DynamicModule {\n    return {\n      module: RedisModule,\n      providers: [\n        RedisService,\n        { provide: EProviderKey.REDIS_OPTIONS, useValue: options },\n      ],\n      exports: [RedisService],\n      global: options.isGlobal ?? false,\n    };\n  }\n}\n'})}),"\n",(0,o.jsxs)(e.ul,{children:["\n",(0,o.jsx)(e.li,{children:"T\u1ea1o RedisService:"}),"\n"]}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-ts",metastring:'title="redis.service.ts"',children:'import { Inject, Injectable, Logger, OnModuleInit } from "@nestjs/common";\nimport { Redis, RedisOptions } from "ioredis";\n\nimport { EProviderKey } from "src/common/constants/enum";\n\n@Injectable()\nexport class RedisService extends Redis implements OnModuleInit {\n  private readonly logger = new Logger(RedisService.name);\n\n  constructor(\n    @Inject(EProviderKey.REDIS_OPTIONS)\n    options: RedisOptions\n  ) {\n    super(options);\n  }\n\n  async onModuleInit() {\n    try {\n      const redisInfo = await this.info();\n      await this.config("SET", "notify-keyspace-events", "KEA");\n      this.logger.log("\ud83d\ude80 Connect to Redis successfully!");\n    } catch (error) {\n      this.disconnect();\n      throw new Error(\n        `\u274c Connect to Redis failed: ${(error as Error).message}`\n      );\n    }\n  }\n}\n'})}),"\n",(0,o.jsxs)(e.ul,{children:["\n",(0,o.jsx)(e.li,{children:"Sau \u0111\xf3, \u1edf c\xe1c module m\xe0 ta mu\u1ed1n s\u1eed d\u1ee5ng RedisModule:"}),"\n"]}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-ts",metastring:'title="auth.module.ts"',children:'@Module({\n  imports: [\n    RedisModule.register({\n      host: "localhost",\n      port: 6379,\n      password: "ptit_150920022",\n    }),\n  ],\n})\nexport class AuthModule {}\n'})}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-ts",metastring:'title="orders.module.ts"',children:'@Module({\n  imports: [\n    RedisModule.registerAsync({\n      imports: [ConfigModule],\n      useFactory: (configService: ConfigService<IEnvironmentVariables>) => ({\n        host: configService.get<string>("REDIS_HOST"),\n        port: configService.get<number>("REDIS_PORT"),\n        password: configService.get<string>("REDIS_PASSWORD"),\n      }),\n      inject: [ConfigService],\n    }),\n  ],\n})\nexport class OrdersModule {}\n'})}),"\n",(0,o.jsx)(e.h2,{id:"global-module",children:"Global module"}),"\n",(0,o.jsxs)(e.ul,{children:["\n",(0,o.jsxs)(e.li,{children:["Nh\u01b0 \u0111\xe3 n\xf3i b\xean tr\xean, \u0111\u1ec3 s\u1eed d\u1ee5ng m\u1ed9t service, hay m\u1ed9t provider c\u1ee7a m\u1ed9t module (g\u1ecdi l\xe0 ModuleA), ta ph\u1ea3i import ModuleA \u0111\xf3 v\xe0o. Nh\u01b0ng n\u1ebfu service, hay provider \u0111\xf3 \u0111\u01b0\u1ee3c s\u1eed d\u1ee5ng \u1edf r\u1ea5t nhi\u1ec1u n\u01a1i, th\xec m\u1ed7i l\u1ea7n d\xf9ng ta l\u1ea1i ph\u1ea3i import ModuleA \u0111\xf3 v\xe0o, \u0111i\u1ec1u n\xe0y c\xf3 th\u1ec3 g\xe2y b\u1ea5t ti\u1ec7n. \u0110\u1ec3 gi\u1ea3i quy\u1ebft \u0111i\u1ec1u n\xe0y, h\xe3y \u0111\xe1nh d\u1ea5u ModuleA b\u1edfi decorator ",(0,o.jsx)(e.strong,{children:"@Global()"}),". Sau \u0111\xf3, ta c\xf3 th\u1ec3 s\u1eed d\u1ee5ng tr\u1ef1c ti\u1ebfp c\xe1c service, provider m\xe0 kh\xf4ng c\u1ea7n ph\u1ea3i import ModuleA."]}),"\n",(0,o.jsx)(e.li,{children:"V\xed d\u1ee5:"}),"\n"]}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-ts",metastring:'title="cats.module.ts"',children:'import { Module, Global } from "@nestjs/common";\nimport { CatsController } from "./cats.controller";\nimport { CatsService } from "./cats.service";\n\n@Global()\n@Module({\n  controllers: [CatsController],\n  providers: [CatsService],\n  exports: [CatsService],\n})\nexport class CatsModule {}\n'})}),"\n",(0,o.jsx)(e.admonition,{type:"note",children:(0,o.jsxs)(e.ul,{children:["\n",(0,o.jsxs)(e.li,{children:["Ta kh\xf4ng n\xean qu\xe1 l\u1ea1m d\u1ee5ng decorator ",(0,o.jsx)(e.strong,{children:"@Global()"})," n\xe0y."]}),"\n"]})})]})}function a(n={}){const{wrapper:e}={...(0,s.R)(),...n.components};return e?(0,o.jsx)(e,{...n,children:(0,o.jsx)(h,{...n})}):h(n)}},8453:(n,e,r)=>{r.d(e,{R:()=>i,x:()=>c});var o=r(6540);const s={},t=o.createContext(s);function i(n){const e=o.useContext(t);return o.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function c(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(s):n.components||s:i(n.components),o.createElement(t.Provider,{value:e},n.children)}}}]);