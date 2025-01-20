"use strict";(self.webpackChunkreactjs=self.webpackChunkreactjs||[]).push([[112],{8749:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>d,contentTitle:()=>c,default:()=>h,frontMatter:()=>r,metadata:()=>o,toc:()=>l});var s=i(4848),t=i(8453);const r={sidebar_position:99},c="Note v\u1ec1 NestJS",o={id:"nestjs-note",title:"Note v\u1ec1 NestJS",description:"1",source:"@site/docs/nestjs-note.md",sourceDirName:".",slug:"/nestjs-note",permalink:"/nestjs/nestjs-note",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:99,frontMatter:{sidebar_position:99},sidebar:"tutorialSidebar",previous:{title:"T\u1ea1o exception filter cho app",permalink:"/nestjs/custom-exception-filter"}},d={},l=[{value:"1",id:"1",level:2},{value:"2",id:"2",level:2},{value:"3",id:"3",level:2},{value:"4",id:"4",level:2}];function a(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,t.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.header,{children:(0,s.jsx)(n.h1,{id:"note-v\u1ec1-nestjs",children:"Note v\u1ec1 NestJS"})}),"\n",(0,s.jsx)(n.h2,{id:"1",children:"1"}),"\n",(0,s.jsx)(n.admonition,{type:"note",children:(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Trong NestJS, decorator ",(0,s.jsx)(n.code,{children:"@Injectable()"})," \u0111\u01b0\u1ee3c s\u1eed d\u1ee5ng \u0111\u1ec3 \u0111\xe1nh d\u1ea5u m\u1ed9t l\u1edbp l\xe0 m\u1ed9t provider. C\xe1c provider trong NestJS l\xe0 c\xe1c \u0111\u1ed1i t\u01b0\u1ee3ng m\xe0 c\xf3 th\u1ec3 \u0111\u01b0\u1ee3c NestJS qu\u1ea3n l\xfd v\xe0 inject (ti\xeam) v\xe0o c\xe1c ph\u1ea7n kh\xe1c c\u1ee7a \u1ee9ng d\u1ee5ng (nh\u01b0 controller ho\u1eb7c c\xe1c provider kh\xe1c) th\xf4ng qua c\u01a1 ch\u1ebf dependency injection."]}),"\n",(0,s.jsxs)(n.li,{children:["T\u1ea1i sao c\u1ea7n s\u1eed d\u1ee5ng ",(0,s.jsx)(n.code,{children:"@Injectable()"}),"?\nDependency Injection: ",(0,s.jsx)(n.code,{children:"@Injectable()"})," gi\xfap NestJS bi\u1ebft r\u1eb1ng l\u1edbp n\xe0y c\xf3 th\u1ec3 \u0111\u01b0\u1ee3c ti\xeam v\xe0o c\xe1c l\u1edbp kh\xe1c. \u0110i\u1ec1u n\xe0y gi\xfap qu\u1ea3n l\xfd s\u1ef1 ph\u1ee5 thu\u1ed9c gi\u1eefa c\xe1c l\u1edbp d\u1ec5 d\xe0ng h\u01a1n v\xe0 th\xfac \u0111\u1ea9y vi\u1ec7c s\u1eed d\u1ee5ng l\u1ea1i m\xe3 ngu\u1ed3n.\nQu\u1ea3n l\xfd lifecycle: NestJS qu\u1ea3n l\xfd v\xf2ng \u0111\u1eddi c\u1ee7a c\xe1c provider v\xe0 \u0111\u1ea3m b\u1ea3o r\u1eb1ng ch\xfang \u0111\u01b0\u1ee3c kh\u1edfi t\u1ea1o v\xe0 h\u1ee7y \u0111\xfang c\xe1ch."]}),"\n"]})}),"\n",(0,s.jsx)(n.h2,{id:"2",children:"2"}),"\n",(0,s.jsx)(n.admonition,{type:"note",children:(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Khi t\u1ea1o m\u1ed9t service m\xe0 \u0111\u01b0\u1ee3c qu\u1ea3n l\xfd b\u1edfi Dependency Injection Container (\u0111\u01b0\u1ee3c \u0111\xe1nh d\u1ea5u b\u1edfi ",(0,s.jsx)(n.code,{children:"@Injectable()"}),"), ngo\u1ea1i tr\u1eeb c\xe1c ",(0,s.jsx)(n.a,{href:"./nestjs-fundamentals/guards",children:"Guard"}),", ",(0,s.jsx)(n.a,{href:"./nestjs-fundamentals/exception-filters",children:"Exception filter"}),", ",(0,s.jsx)(n.a,{href:"./nestjs-fundamentals/pipes",children:"Pipe"}),", ",(0,s.jsx)(n.a,{href:"./nestjs-fundamentals/interceptors",children:"Interceptor"}),", ",(0,s.jsx)(n.a,{href:"./nestjs-fundamentals/middleware",children:"Middleware"})," th\xec n\xean cho ch\xfang v\xe0o m\u1ed9t module. Khi s\u1eed d\u1ee5ng c\xe1c service n\xe0y th\xec import module \u0111\xf3 v\xe0o."]}),"\n"]})}),"\n",(0,s.jsx)(n.h2,{id:"3",children:"3"}),"\n",(0,s.jsxs)(n.admonition,{type:"note",children:[(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",children:'import { Injectable } from "@nestjs/common";\n\n@Injectable()\nexport class ExampleService {\n  private property1;\n  private property2;\n  private constants1 = "EXAMPLE VALUE";\n\n  constructor(\n    private serviceA: ServiceA,\n    private serviceB: ServiceB,\n    private serviceC: ServiceC\n  ) {\n    property1 = X;\n    property2 = Y;\n  }\n}\n'})}),(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["C\xe1c tham s\u1ed1 truy\u1ec1n v\xe0o ",(0,s.jsx)(n.code,{children:"constructor()"})," ph\u1ea3i l\xe0 c\xe1c ",(0,s.jsx)(n.a,{href:"./nestjs-fundamentals/providers#%C4%91%E1%BB%8Bnh-ngh%C4%A9a-provider",children:(0,s.jsx)(n.strong,{children:"PROVIDER"})}),"."]}),"\n",(0,s.jsxs)(n.li,{children:["V\xec class ",(0,s.jsx)(n.strong,{children:"ExampleService"})," c\xf3 inject c\xe1c dependency n\xean n\xf3 c\u0169ng ph\u1ea3i l\xe0 m\u1ed9t ",(0,s.jsx)(n.a,{href:"./nestjs-fundamentals/providers#%C4%91%E1%BB%8Bnh-ngh%C4%A9a-provider",children:(0,s.jsx)(n.strong,{children:"PROVIDER"})})," (\u0111\u01b0\u1ee3c \u0111\xe1nh d\u1ea5u b\u1eb1ng ",(0,s.jsx)(n.code,{children:"@Injectable()"}),")"]}),"\n",(0,s.jsxs)(n.li,{children:["C\xe1c thu\u1ed9c t\xednh kh\xe1c c\u1ee7a class kh\xf4ng ph\u1ea3i l\xe0 ",(0,s.jsx)(n.a,{href:"./nestjs-fundamentals/providers#%C4%91%E1%BB%8Bnh-ngh%C4%A9a-provider",children:(0,s.jsx)(n.strong,{children:"PROVIDER"})})," th\xec khai b\xe1o ra ngo\xe0i, khi kh\u1edfi t\u1ea1o th\xec th\u1ef1c hi\u1ec7n b\xean trong h\xe0m ",(0,s.jsx)(n.code,{children:"constructor()"})]}),"\n",(0,s.jsx)(n.li,{children:"C\xe1c thu\u1ed9c t\xednh l\xe0 h\u1eb1ng s\u1ed1 th\xec khai b\xe1o v\xe0 g\xe1n lu\xf4n gi\xe1 tr\u1ecb."}),"\n"]})]}),"\n",(0,s.jsx)(n.h2,{id:"4",children:"4"}),"\n",(0,s.jsxs)(n.admonition,{type:"note",children:[(0,s.jsx)(n.p,{children:"\u274cKH\xd4NG N\xcaN VI\u1ebeT KI\u1ec2U N\xc0Y:"}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",metastring:'title="redis.service.ts"',children:'import { Injectable } from "@nestjs/common";\nimport { Redis } from "ioredis";\n\n@Injectable()\nexport class RedisService {\n  private redis: Redis;\n\n  constructor() {\n    this.redis = new Redis();\n  }\n}\n'})}),(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Khi s\u1eed d\u1ee5ng c\xe1c class c\u1ee7a th\u01b0 vi\u1ec7n, ta n\xean t\u1ea1o provider ri\xeang v\xe0 ",(0,s.jsx)(n.code,{children:"extends"})," t\u1eeb class c\u1ee7a th\u01b0 vi\u1ec7n \u0111\xf3."]}),"\n",(0,s.jsx)(n.li,{children:"N\u1ebfu class c\u1ee7a th\u01b0 vi\u1ec7n c\xf3 tham s\u1ed1 kh\u1edfi t\u1ea1o m\xe0 c\xe1c tham s\u1ed1 n\xe0y ta ch\u1ec9 s\u1eed d\u1ee5ng m\u1ed9t l\u1ea7n duy nh\u1ea5t cho to\xe0n app, ta truy\u1ec1n lu\xf4n c\u1ea5u h\xecnh nh\u01b0 sau:"}),"\n"]}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",metastring:'title="redis.provider.ts"',children:'import { Injectable, Logger, OnModuleInit } from "@nestjs/common";\nimport { ConfigService } from "@nestjs/config";\nimport { Redis } from "ioredis";\n\nimport { IEnvironmentVariables } from "src/common/types/env.type";\n\n@Injectable()\nexport class RedisProvider extends Redis implements OnModuleInit {\n  private readonly logger = new Logger(RedisProvider.name);\n\n  constructor(private configService: ConfigService<IEnvironmentVariables>) {\n    super({\n      host: configService.get<string>("REDIS_HOST"),\n      port: configService.get<number>("REDIS_PORT"),\n      password: configService.get<string>("REDIS_PASSWORD"),\n    });\n  }\n\n  async onModuleInit() {\n    try {\n      const redisInfo = await this.info();\n      await this.config("SET", "notify-keyspace-events", "KEA");\n      this.logger.log("\ud83d\ude80 Connect to Redis successfully!");\n    } catch (error) {\n      this.disconnect();\n      throw new Error(\n        `\u274c Connect to Redis failed: ${(error as Error).message}`\n      );\n    }\n  }\n}\n'})}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",metastring:'title="redis.service.ts"',children:'import { Injectable } from "@nestjs/common";\n\nimport { ETokenExpiration } from "src/common/constants/common.enum";\nimport { RedisProvider } from "src/modules/libs/redis/redis.provider";\n\n@Injectable()\nexport class RedisService {\n  constructor(private redis: RedisProvider) {}\n\n  setFilePublicId = async (encodeURL: string, publicId: string) => {\n    await this.redis.set(`file_public_id:${encodeURL}`, publicId);\n  };\n\n  getFilePublicId = async (encodeURL: string) => {\n    const publicId = await this.redis.get(`file_public_id:${encodeURL}`);\n    return publicId;\n  };\n\n  deleteFilePublicId = async (encodeURL: string) => {\n    await this.redis.del(`file_public_id:${encodeURL}`);\n  };\n}\n'})}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",metastring:'title="redis.module.ts"',children:'import { Module } from "@nestjs/common";\n\nimport { RedisProvider } from "src/modules/libs/redis/redis.provider";\nimport { RedisService } from "src/modules/libs/redis/redis.service";\n\n@Module({\n  providers: [RedisProvider, RedisService],\n  exports: [RedisService],\n})\nexport class RedisModule {}\n'})}),(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["N\u1ebfu class c\u1ee7a th\u01b0 vi\u1ec7n c\xf3 tham s\u1ed1 kh\u1edfi t\u1ea1o m\xe0 c\xe1c tham s\u1ed1 n\xe0y ta s\u1eed d\u1ee5ng m\u1ed7i module m\u1ed9t kh\xe1c, h\xe3y t\u1ea1o dynamic module nh\u01b0 \u1edf ",(0,s.jsx)(n.a,{href:"./nestjs-fundamentals/modules#v%C3%AD-d%E1%BB%A5-dynamic-module-redismodule",children:"v\xed d\u1ee5 n\xe0y"})]}),"\n"]})]})]})}function h(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(a,{...e})}):a(e)}},8453:(e,n,i)=>{i.d(n,{R:()=>c,x:()=>o});var s=i(6540);const t={},r=s.createContext(t);function c(e){const n=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:c(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);