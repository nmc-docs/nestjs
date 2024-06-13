"use strict";(self.webpackChunkreactjs=self.webpackChunkreactjs||[]).push([[266],{2700:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>l,contentTitle:()=>c,default:()=>d,frontMatter:()=>o,metadata:()=>i,toc:()=>a});var r=t(4848),s=t(8453);const o={sidebar_position:9},c="Interceptors",i={id:"nestjs-fundamentals/interceptors",title:"Interceptors",description:"Gi\u1edbi thi\u1ec7u v\u1ec1 Interceptors",source:"@site/docs/nestjs-fundamentals/interceptors.md",sourceDirName:"nestjs-fundamentals",slug:"/nestjs-fundamentals/interceptors",permalink:"/nestjs/nestjs-fundamentals/interceptors",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:9,frontMatter:{sidebar_position:9},sidebar:"tutorialSidebar",previous:{title:"Middleware",permalink:"/nestjs/nestjs-fundamentals/middleware"},next:{title:"Custom decorator",permalink:"/nestjs/nestjs-fundamentals/custom-decorator"}},l={},a=[{value:"Gi\u1edbi thi\u1ec7u v\u1ec1 Interceptors",id:"gi\u1edbi-thi\u1ec7u-v\u1ec1-interceptors",level:2},{value:"T\u1ea1o Interceptors",id:"t\u1ea1o-interceptors",level:2},{value:"Apply interceptor",id:"apply-interceptor",level:2},{value:"\xc1p d\u1ee5ng \u1edf Global",id:"\xe1p-d\u1ee5ng-\u1edf-global",level:3},{value:"\xc1p d\u1ee5ng \u1edf Controller",id:"\xe1p-d\u1ee5ng-\u1edf-controller",level:3},{value:"\xc1p d\u1ee5ng \u1edf Method",id:"\xe1p-d\u1ee5ng-\u1edf-method",level:3},{value:"V\xed d\u1ee5 v\u1ec1 interceptor",id:"v\xed-d\u1ee5-v\u1ec1-interceptor",level:2},{value:"Ghi log",id:"ghi-log",level:3},{value:"Response Mapping",id:"response-mapping",level:3},{value:"Exception mapping",id:"exception-mapping",level:3},{value:"Request timeout",id:"request-timeout",level:3}];function h(n){const e={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.R)(),...n.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(e.h1,{id:"interceptors",children:"Interceptors"}),"\n",(0,r.jsx)(e.h2,{id:"gi\u1edbi-thi\u1ec7u-v\u1ec1-interceptors",children:"Gi\u1edbi thi\u1ec7u v\u1ec1 Interceptors"}),"\n",(0,r.jsxs)(e.admonition,{type:"info",children:[(0,r.jsx)(e.p,{children:"Trong NestJS, interceptors (b\u1ed9 ch\u1eb7n) l\xe0 m\u1ed9t c\xf4ng c\u1ee5 \u0111\u01b0\u1ee3c s\u1eed d\u1ee5ng \u0111\u1ec3 can thi\u1ec7p v\xe0o qu\xe1 tr\xecnh x\u1eed l\xfd y\xeau c\u1ea7u v\xe0 ph\u1ea3n h\u1ed3i trong \u1ee9ng d\u1ee5ng. Ch\xfang c\xf3 th\u1ec3 \u0111\u01b0\u1ee3c s\u1eed d\u1ee5ng \u0111\u1ec3 th\u1ef1c hi\u1ec7n m\u1ed9t lo\u1ea1t c\xe1c t\xe1c v\u1ee5, ch\u1eb3ng h\u1ea1n nh\u01b0:"}),(0,r.jsxs)(e.ol,{children:["\n",(0,r.jsxs)(e.li,{children:[(0,r.jsx)(e.strong,{children:"Logging (Ghi nh\u1eadt k\xfd)"})," : Interceptors c\xf3 th\u1ec3 \u0111\u01b0\u1ee3c s\u1eed d\u1ee5ng \u0111\u1ec3 ghi l\u1ea1i th\xf4ng tin v\u1ec1 y\xeau c\u1ea7u v\xe0 ph\u1ea3n h\u1ed3i, bao g\u1ed3m th\u1eddi gian x\u1eed l\xfd, d\u1eef li\u1ec7u y\xeau c\u1ea7u v\xe0 d\u1eef li\u1ec7u ph\u1ea3n h\u1ed3i."]}),"\n",(0,r.jsxs)(e.li,{children:[(0,r.jsx)(e.strong,{children:"Transformation (Chuy\u1ec3n \u0111\u1ed5i)"})," : Ch\xfang c\xf3 th\u1ec3 \u0111\u01b0\u1ee3c s\u1eed d\u1ee5ng \u0111\u1ec3 chuy\u1ec3n \u0111\u1ed5i d\u1eef li\u1ec7u t\u1eeb \u0111\u1ecbnh d\u1ea1ng n\xe0y sang \u0111\u1ecbnh d\u1ea1ng kh\xe1c tr\u01b0\u1edbc khi tr\u1ea3 v\u1ec1 cho client. \u0110i\u1ec1u n\xe0y c\xf3 th\u1ec3 bao g\u1ed3m vi\u1ec7c chuy\u1ec3n \u0111\u1ed5i \u0111\u1ecbnh d\u1ea1ng JSON ho\u1eb7c c\u1ea5u tr\xfac d\u1eef li\u1ec7u kh\xe1c."]}),"\n",(0,r.jsxs)(e.li,{children:[(0,r.jsx)(e.strong,{children:"Error Handling (X\u1eed l\xfd l\u1ed7i)"})," : Interceptors c\xf3 th\u1ec3 b\u1eaft v\xe0 x\u1eed l\xfd l\u1ed7i x\u1ea3y ra trong qu\xe1 tr\xecnh x\u1eed l\xfd y\xeau c\u1ea7u v\xe0 tr\u1ea3 v\u1ec1 ph\u1ea3n h\u1ed3i l\u1ed7i ph\xf9 h\u1ee3p cho client."]}),"\n",(0,r.jsxs)(e.li,{children:[(0,r.jsx)(e.strong,{children:"Caching (B\u1ed9 nh\u1edb \u0111\u1ec7m)"})," : Ch\xfang c\xf3 th\u1ec3 \u0111\u01b0\u1ee3c s\u1eed d\u1ee5ng \u0111\u1ec3 l\u01b0u tr\u1eef t\u1ea1m th\u1eddi k\u1ebft qu\u1ea3 c\u1ee7a c\xe1c y\xeau c\u1ea7u \u0111\u1ec3 gi\u1ea3m t\u1ea3i cho h\u1ec7 th\u1ed1ng v\xe0 c\u1ea3i thi\u1ec7n hi\u1ec7u su\u1ea5t."]}),"\n",(0,r.jsxs)(e.li,{children:[(0,r.jsx)(e.strong,{children:"Authentication v\xe0 Authorization (X\xe1c th\u1ef1c v\xe0 Ph\xe2n quy\u1ec1n)"})," : Interceptors c\xf3 th\u1ec3 ki\u1ec3m tra th\xf4ng tin x\xe1c th\u1ef1c c\u1ee7a y\xeau c\u1ea7u v\xe0 quy\u1ebft \u0111\u1ecbnh c\xf3 n\xean ti\u1ebfp t\u1ee5c x\u1eed l\xfd y\xeau c\u1ea7u hay kh\xf4ng d\u1ef1a tr\xean quy\u1ec1n c\u1ee7a ng\u01b0\u1eddi d\xf9ng."]}),"\n"]}),(0,r.jsx)(e.p,{children:(0,r.jsx)(e.img,{alt:"1718201351933",src:t(1702).A+"",width:"900",height:"425"})})]}),"\n",(0,r.jsx)(e.h2,{id:"t\u1ea1o-interceptors",children:"T\u1ea1o Interceptors"}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsxs)(e.li,{children:["M\u1ed9t interceptor l\xe0 m\u1ed9t class \u0111\u01b0\u1ee3c bi\u1ec3u th\u1ecb b\u1edfi ",(0,r.jsx)(e.strong,{children:"@Injectable"})," (cho NestJS bi\u1ebft l\xe0 ch\xfang \u0111\u01b0\u1ee3c qu\u1ea3n l\xfd b\u1edfi Dependency Injection container) v\xe0 implements ",(0,r.jsx)(e.strong,{children:"NestInterceptor"})," interface."]}),"\n",(0,r.jsxs)(e.li,{children:["Interface ",(0,r.jsx)(e.strong,{children:"NestInterceptor< T, R >"})," l\xe0 m\u1ed9t generic, trong \u0111\xf3:","\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsxs)(e.li,{children:[(0,r.jsx)(e.strong,{children:"T"}),": ki\u1ec3u c\u1ee7a d\u1eef li\u1ec7u tr\u1ea3 v\u1ec1 tr\u01b0\u1edbc khi v\xe0o interceptor"]}),"\n",(0,r.jsxs)(e.li,{children:[(0,r.jsx)(e.strong,{children:"R"}),": ki\u1ec3u d\u1eef li\u1ec7u s\u1ebd tr\u1ea3 v\u1ec1 cho client sau khi \u0111\u01b0\u1ee3c bi\u1ebfn \u0111\u1ed5i b\u1edfi interceptor."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-ts",children:'import {\n  Injectable,\n  NestInterceptor,\n  ExecutionContext,\n  CallHandler,\n} from "@nestjs/common";\nimport { Observable } from "rxjs";\nimport { tap } from "rxjs/operators";\n\n@Injectable()\nexport class LoggingInterceptor implements NestInterceptor {\n  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {\n    console.log("Before...");\n\n    const now = Date.now();\n    return next\n      .handle()\n      .pipe(tap(() => console.log(`After... ${Date.now() - now}ms`)));\n  }\n}\n'})}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsxs)(e.li,{children:["Ph\u01b0\u01a1ng th\u1ee9c ",(0,r.jsx)(e.strong,{children:"intercept"})," trong NestJS nh\u1eadn v\xe0o hai tham s\u1ed1 ch\xednh:"]}),"\n"]}),"\n",(0,r.jsxs)(e.ol,{children:["\n",(0,r.jsx)(e.li,{children:(0,r.jsxs)(e.strong,{children:["context: ",(0,r.jsx)(e.a,{href:"./execution-context#executioncontext-class",children:"ExecutionContext"})]})}),"\n",(0,r.jsxs)(e.li,{children:[(0,r.jsx)(e.strong,{children:"next: CallHandler"}),": CallHandler \u0111\u1ea1i di\u1ec7n cho lu\u1ed3ng th\u1ef1c thi ti\u1ebfp theo trong pipeline c\u1ee7a NestJS. N\xf3 c\xf3 m\u1ed9t ph\u01b0\u01a1ng th\u1ee9c ch\xednh l\xe0 ",(0,r.jsx)(e.strong,{children:"handle()"}),", tr\u1ea3 v\u1ec1 m\u1ed9t ",(0,r.jsx)(e.strong,{children:"Observable"})," c\xf3 th\u1ec3 \u0111\u01b0\u1ee3c s\u1eed d\u1ee5ng \u0111\u1ec3 can thi\u1ec7p v\xe0o lu\u1ed3ng d\u1eef li\u1ec7u c\u1ee7a ph\u1ea3n h\u1ed3i. B\u1ea1n c\xf3 th\u1ec3 s\u1eed d\u1ee5ng c\xe1c to\xe1n t\u1eed c\u1ee7a RxJS \u0111\u1ec3 x\u1eed l\xfd ho\u1eb7c bi\u1ebfn \u0111\u1ed5i d\u1eef li\u1ec7u tr\u01b0\u1edbc khi tr\u1ea3 v\u1ec1 cho client."]}),"\n"]}),"\n",(0,r.jsx)(e.admonition,{type:"note",children:(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsxs)(e.li,{children:["\u0110o\u1ea1n code logic tr\u01b0\u1edbc return s\u1ebd \u0111\u01b0\u1ee3c ch\u1ea1y tr\u01b0\u1edbc khi request \u0111\u01b0\u1ee3c g\u1eedi \u0111\u1ebfn route handler. \u1ede \u0111\xe2y ta c\xf3 th\u1ec3 bi\u1ebfn \u0111\u1ed5i th\xf4ng s\u1ed1 request object th\xf4ng qua tham s\u1ed1 ",(0,r.jsx)(e.strong,{children:"context"}),"."]}),"\n",(0,r.jsxs)(e.li,{children:["\u0110o\u1ea1n code ",(0,r.jsx)(e.strong,{children:"next.handle().pipe()"})," s\u1ebd \u0111\u01b0\u1ee3c ch\u1ea1y tr\u01b0\u1edbc khi g\u1eedi response v\u1ec1 cho client. \u1ede \u0111\xe2y ta c\xf3 th\u1ec3 transform response, error,..."]}),"\n",(0,r.jsxs)(e.li,{children:["M\u1ed9t s\u1ed1 to\xe1n t\u1eed do RxJS cung c\u1ea5p nh\u01b0:","\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsxs)(e.li,{children:[(0,r.jsx)(e.strong,{children:"tap"}),": d\xf9ng \u0111\u1ec3 ghi nh\u1eadt k\xfd request."]}),"\n",(0,r.jsxs)(e.li,{children:[(0,r.jsx)(e.strong,{children:"map"}),": bi\u1ebfn \u0111\u1ed5i response data."]}),"\n",(0,r.jsxs)(e.li,{children:[(0,r.jsx)(e.strong,{children:"catchError"}),": bi\u1ec3n \u0111\u1ed5i error khi b\u1ecb throw ra exception."]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(e.li,{children:[(0,r.jsx)(e.strong,{children:"Interceptor"})," c\u0169ng gi\u1ed1ng nh\u01b0 guard, controller,... \u0111\u1ec1u c\xf3 th\u1ec3 ",(0,r.jsx)(e.strong,{children:"inject dependencies"})," th\xf4ng qua constructor()."]}),"\n"]})}),"\n",(0,r.jsx)(e.h2,{id:"apply-interceptor",children:"Apply interceptor"}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsx)(e.li,{children:"T\u01b0\u01a1ng t\u1ef1 nh\u01b0 guard, interceptor c\xf3 th\u1ec3 apply \u1edf 3 m\u1ee9c \u0111\u1ed9: Global, Controller, Method."}),"\n"]}),"\n",(0,r.jsx)(e.h3,{id:"\xe1p-d\u1ee5ng-\u1edf-global",children:"\xc1p d\u1ee5ng \u1edf Global"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-ts",children:"const app = await NestFactory.create(AppModule);\napp.useGlobalInterceptors(new LoggingInterceptor());\n"})}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsx)(e.li,{children:"Ho\u1eb7c \u1edf file AppModule:"}),"\n"]}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-ts",children:'import { Module } from "@nestjs/common";\nimport { APP_INTERCEPTOR } from "@nestjs/core";\n\n@Module({\n  providers: [\n    {\n      provide: APP_INTERCEPTOR,\n      useClass: LoggingInterceptor,\n    },\n  ],\n})\nexport class AppModule {}\n'})}),"\n",(0,r.jsx)(e.h3,{id:"\xe1p-d\u1ee5ng-\u1edf-controller",children:"\xc1p d\u1ee5ng \u1edf Controller"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-ts",children:"@UseInterceptors(LoggingInterceptor)\nexport class CatsController {}\n"})}),"\n",(0,r.jsx)(e.h3,{id:"\xe1p-d\u1ee5ng-\u1edf-method",children:"\xc1p d\u1ee5ng \u1edf Method"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-ts",children:'@Controller("customers")\nexport class CustomersController {\n  constructor(private customerService: CustomersService) {}\n\n  @Post("/create")\n  @UseInterceptors(TransformInterceptor)\n  createCustomer(\n    @Body()\n    body: CreateCustomerDto\n  ) {\n    return this.customerService.create(body);\n  }\n}\n'})}),"\n",(0,r.jsx)(e.h2,{id:"v\xed-d\u1ee5-v\u1ec1-interceptor",children:"V\xed d\u1ee5 v\u1ec1 interceptor"}),"\n",(0,r.jsx)(e.h3,{id:"ghi-log",children:"Ghi log"}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsxs)(e.li,{children:["V\xed d\u1ee5 v\u1ec1 s\u1eed d\u1ee5ng ",(0,r.jsx)(e.strong,{children:"tap"})," c\u1ee7a RxJS \u0111\u1ec3 ghi nh\u1eadt k\xfd:"]}),"\n"]}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-ts",children:'import {\n  CallHandler,\n  ExecutionContext,\n  Injectable,\n  NestInterceptor,\n} from "@nestjs/common";\nimport { Request, Response } from "express";\nimport { Observable, tap } from "rxjs";\n\n@Injectable()\nexport class LoggerInterceptor implements NestInterceptor {\n  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {\n    const request = context.switchToHttp().getRequest<Request>();\n    const response = context.switchToHttp().getResponse<Response>();\n    const handler = context.getHandler();\n    const className = context.getClass().name;\n\n    console.log(\n      `Handling ${request.method} request to ${request.url} in ${className}.${handler.name}`\n    );\n\n    return next.handle().pipe(\n      tap((data) => console.log(`Response sent: `, JSON.stringify(data))) // Ch\u1ec9 in ra n\u1ebfu request tr\u1ea3 v\u1ec1 response th\xe0nh c\xf4ng\n    );\n  }\n}\n'})}),"\n",(0,r.jsx)(e.p,{children:"\u270f\ufe0fKhi \u0111\xf3, log s\u1ebd c\xf3 d\u1ea1ng ki\u1ec3u nh\u01b0 sau:"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-plaintext",children:'Handling POST request to /api/v1/customers/create in CustomersController.createCustomer\nResponse sent:  {"name":"Nguyen Minh Chi","password":"12345678","email":"minhchico@gmail.com"}\n'})}),"\n",(0,r.jsx)(e.h3,{id:"response-mapping",children:"Response Mapping"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-ts",children:'import {\n  CallHandler,\n  ExecutionContext,\n  Injectable,\n  NestInterceptor,\n} from "@nestjs/common";\nimport { Observable } from "rxjs";\nimport { map } from "rxjs/operators";\n\nexport interface Response<T> {\n  data: T;\n}\n\n@Injectable()\nexport class TransformInterceptor<T>\n  implements NestInterceptor<T, Response<T>>\n{\n  intercept(\n    context: ExecutionContext,\n    next: CallHandler<T>\n  ): Observable<Response<T>> {\n    return next\n      .handle()\n      .pipe(map((dataBeforeInterceptor) => ({ data: dataBeforeInterceptor })));\n  }\n}\n'})}),"\n",(0,r.jsx)(e.p,{children:"\u270f\ufe0fKhi \u0111\xf3, response s\u1ebd c\xf3 d\u1ea1ng nh\u01b0 sau:"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-json",children:'{\n  "data": {\n    "name": "Nguyen Minh Chi",\n    "password": "12345678",\n    "email": "minhchicog@mail.com",\n    "id": 20\n  }\n}\n'})}),"\n",(0,r.jsx)(e.h3,{id:"exception-mapping",children:"Exception mapping"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-ts",children:'import {\n  Injectable,\n  NestInterceptor,\n  ExecutionContext,\n  BadGatewayException,\n  CallHandler,\n} from "@nestjs/common";\nimport { Observable, throwError } from "rxjs";\nimport { catchError } from "rxjs/operators";\n\n@Injectable()\nexport class ErrorsInterceptor implements NestInterceptor {\n  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {\n    return next\n      .handle()\n      .pipe(catchError((err) => throwError(() => new BadGatewayException())));\n  }\n}\n'})}),"\n",(0,r.jsxs)(e.p,{children:["\u270f\ufe0fKhi \u0111\xf3, b\u1ea5t k\u1ef3 request n\xe0o m\xe0 throw ra exception th\xec exception \u0111\xf3 lu\xf4n b\u1ecb override b\u1edfi ",(0,r.jsx)(e.strong,{children:"BadGatewayException"})]}),"\n",(0,r.jsx)(e.h3,{id:"request-timeout",children:"Request timeout"}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsxs)(e.li,{children:["V\xed d\u1ee5 sau n\u1ebfu g\u1eedi request m\xe0 kh\xf4ng nh\u1eadn l\u1ea1i \u0111\u01b0\u1ee3c ph\u1ea3n h\u1ed3i sau 5s, s\u1ebd throw ra ",(0,r.jsx)(e.strong,{children:"RequestTimeoutException"})]}),"\n"]}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-ts",children:'import {\n  Injectable,\n  NestInterceptor,\n  ExecutionContext,\n  CallHandler,\n  RequestTimeoutException,\n} from "@nestjs/common";\nimport { Observable, throwError, TimeoutError } from "rxjs";\nimport { catchError, timeout } from "rxjs/operators";\n\n@Injectable()\nexport class TimeoutInterceptor implements NestInterceptor {\n  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {\n    return next.handle().pipe(\n      timeout(5000),\n      catchError((err) => {\n        return throwError(() => new RequestTimeoutException(err.message));\n      })\n    );\n  }\n}\n'})})]})}function d(n={}){const{wrapper:e}={...(0,s.R)(),...n.components};return e?(0,r.jsx)(e,{...n,children:(0,r.jsx)(h,{...n})}):h(n)}},1702:(n,e,t)=>{t.d(e,{A:()=>r});const r=t.p+"assets/images/1718201351933-c6354a50765b6ad5fdb4d0e07c935214.png"},8453:(n,e,t)=>{t.d(e,{R:()=>c,x:()=>i});var r=t(6540);const s={},o=r.createContext(s);function c(n){const e=r.useContext(o);return r.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function i(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(s):n.components||s:c(n.components),r.createElement(o.Provider,{value:e},n.children)}}}]);