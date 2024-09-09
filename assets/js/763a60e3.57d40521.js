"use strict";(self.webpackChunkreactjs=self.webpackChunkreactjs||[]).push([[978],{474:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>i,contentTitle:()=>o,default:()=>h,frontMatter:()=>c,metadata:()=>l,toc:()=>a});var r=t(4848),s=t(8453);const c={sidebar_position:7},o="Guards",l={id:"nestjs-fundamentals/guards",title:"Guards",description:"Guard l\xe0 g\xec?",source:"@site/docs/nestjs-fundamentals/guards.md",sourceDirName:"nestjs-fundamentals",slug:"/nestjs-fundamentals/guards",permalink:"/nestjs/nestjs-fundamentals/guards",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:7,frontMatter:{sidebar_position:7},sidebar:"tutorialSidebar",previous:{title:"Execution context",permalink:"/nestjs/nestjs-fundamentals/execution-context"},next:{title:"Middleware",permalink:"/nestjs/nestjs-fundamentals/middleware"}},i={},a=[{value:"Guard l\xe0 g\xec?",id:"guard-l\xe0-g\xec",level:2},{value:"T\u1ea1o Guard",id:"t\u1ea1o-guard",level:2},{value:"S\u1eed d\u1ee5ng Guard",id:"s\u1eed-d\u1ee5ng-guard",level:2},{value:"C\u1ea5p \u0111\u1ed9 Global",id:"c\u1ea5p-\u0111\u1ed9-global",level:3},{value:"C\u1ea5p \u0111\u1ed9 Controller",id:"c\u1ea5p-\u0111\u1ed9-controller",level:3},{value:"C\u1ea5p \u0111\u1ed9 method",id:"c\u1ea5p-\u0111\u1ed9-method",level:3},{value:"V\xed d\u1ee5 kh\xe1c",id:"v\xed-d\u1ee5-kh\xe1c",level:2}];function d(n){const e={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.R)(),...n.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(e.header,{children:(0,r.jsx)(e.h1,{id:"guards",children:"Guards"})}),"\n",(0,r.jsx)(e.h2,{id:"guard-l\xe0-g\xec",children:"Guard l\xe0 g\xec?"}),"\n",(0,r.jsx)(e.p,{children:"Guard trong NestJS l\xe0 m\u1ed9t t\xednh n\u0103ng quan tr\u1ecdng \u0111\u01b0\u1ee3c s\u1eed d\u1ee5ng \u0111\u1ec3 x\xe1c th\u1ef1c v\xe0 \u1ee7y quy\u1ec1n truy c\u1eadp v\xe0o c\xe1c endpoint trong \u1ee9ng d\u1ee5ng. Ch\xfang \u0111\u1ea3m nhi\u1ec7m c\xe1c ch\u1ee9c n\u0103ng sau:"}),"\n",(0,r.jsxs)(e.ol,{children:["\n",(0,r.jsxs)(e.li,{children:[(0,r.jsx)(e.strong,{children:"X\xe1c th\u1ef1c (Authentication)"})," : Guard gi\xfap x\xe1c \u0111\u1ecbnh danh t\xednh c\u1ee7a ng\u01b0\u1eddi d\xf9ng, \u0111\u1ea3m b\u1ea3o r\u1eb1ng ch\u1ec9 nh\u1eefng ng\u01b0\u1eddi d\xf9ng \u0111\u01b0\u1ee3c \u1ee7y quy\u1ec1n m\u1edbi c\xf3 th\u1ec3 truy c\u1eadp v\xe0o c\xe1c endpoint nh\u1ea5t \u0111\u1ecbnh."]}),"\n",(0,r.jsxs)(e.li,{children:[(0,r.jsx)(e.strong,{children:"\u1ee6y quy\u1ec1n (Authorization)"})," : Guard ki\u1ec3m tra vai tr\xf2 v\xe0 quy\u1ec1n h\u1ea1n c\u1ee7a ng\u01b0\u1eddi d\xf9ng, \u0111\u1ea3m b\u1ea3o r\u1eb1ng h\u1ecd ch\u1ec9 \u0111\u01b0\u1ee3c ph\xe9p th\u1ef1c hi\u1ec7n c\xe1c h\xe0nh \u0111\u1ed9ng \u0111\u01b0\u1ee3c ph\xe9p."]}),"\n",(0,r.jsxs)(e.li,{children:[(0,r.jsx)(e.strong,{children:"B\u1ea3o v\u1ec7 Endpoint"})," : Guard ng\u0103n ch\u1eb7n truy c\u1eadp tr\xe1i ph\xe9p v\xe0o c\xe1c endpoint nh\u1ea1y c\u1ea3m, b\u1ea3o v\u1ec7 d\u1eef li\u1ec7u v\xe0 t\xe0i nguy\xean c\u1ee7a \u1ee9ng d\u1ee5ng."]}),"\n",(0,r.jsxs)(e.li,{children:[(0,r.jsx)(e.strong,{children:"Linh ho\u1ea1t v\xe0 t\xe1i s\u1eed d\u1ee5ng"})," : Guard c\xf3 th\u1ec3 \u0111\u01b0\u1ee3c t\xe1i s\u1eed d\u1ee5ng cho nhi\u1ec1u endpoint kh\xe1c nhau, gi\xfap t\u0103ng t\xednh linh ho\u1ea1t v\xe0 t\xe1i s\u1eed d\u1ee5ng c\u1ee7a code."]}),"\n"]}),"\n",(0,r.jsx)(e.p,{children:(0,r.jsx)(e.img,{alt:"1718117311327",src:t(6423).A+"",width:"906",height:"269"})}),"\n",(0,r.jsx)(e.h2,{id:"t\u1ea1o-guard",children:"T\u1ea1o Guard"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-ts",children:'//auth.guard.ts\nimport { CanActivate, ExecutionContext, Injectable } from "@nestjs/common";\n\n@Injectable()\nexport class AuthGuard implements CanActivate {\n  canActivate(context: ExecutionContext) {\n    /* Logic of guard here */\n    return true;\n  }\n}\n'})}),"\n",(0,r.jsxs)(e.admonition,{type:"info",children:[(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsx)(e.li,{children:"\u1ede b\xean tr\xean, ta t\u1ea1o m\u1ed9t class AuthGuard implements CanActivate."}),"\n",(0,r.jsxs)(e.li,{children:["Trong h\xe0m canActivate, nh\u1eadn v\xe0o m\u1ed9t tham s\u1ed1 c\xf3 ki\u1ec3u ",(0,r.jsx)(e.a,{href:"./execution-context#executioncontext-class",children:"ExecutionContext"}),'. N\u1ebfu tr\u1ea3 v\u1ec1 "true", qu\xe1 tr\xecnh th\u1ef1c hi\u1ec7n request s\u1ebd ti\u1ebfp t\u1ee5c di\u1ec5n ra, n\u1ebfu kh\xf4ng, NestJS s\u1ebd throw ra ',(0,r.jsx)(e.strong,{children:"ForbiddenException"}),"."]}),"\n",(0,r.jsxs)(e.li,{children:["N\u1ebfu kh\xf4ng mu\u1ed1n throw ra ",(0,r.jsx)(e.strong,{children:"ForbiddenException"})," nh\u01b0 m\u1eb7c \u0111\u1ecbnh, ta c\xf3 th\u1ec3:"]}),"\n"]}),(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-ts",children:"throw new UnauthorizedException();\n"})})]}),"\n",(0,r.jsx)(e.admonition,{type:"note",children:(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsxs)(e.li,{children:["M\u1eb7c d\xf9 guard \u0111\u01b0\u1ee3c \u0111\xe1nh d\u1ea5u ",(0,r.jsx)(e.strong,{children:"@Injectable()"})," nh\u01b0ng ta kh\xf4ng c\u1ea7n ph\u1ea3i cho n\xf3 v\xe0o m\u1ea3ng provider \u1edf module. N\xf3 s\u1ebd t\u1ef1 \u0111\u1ed9ng \u0111\u01b0\u1ee3c resolve. Nh\u01b0ng n\u1ebfu trong guard s\u1eed d\u1ee5ng service n\xe0o \u0111\xf3 thu\u1ed9c module kh\xe1c th\xec ta v\u1eabn ph\u1ea3i import module \u0111\xf3 v\xe0o."]}),"\n",(0,r.jsxs)(e.li,{children:["Gi\u1ed1ng nh\u01b0 controller hay c\xe1c providers kh\xe1c, ta c\xf3 th\u1ec3 ",(0,r.jsx)(e.strong,{children:"inject dependencies"})," v\xe0o guard th\xf4ng qua h\xe0m ",(0,r.jsx)(e.strong,{children:"constructor()"})]}),"\n"]})}),"\n",(0,r.jsx)(e.h2,{id:"s\u1eed-d\u1ee5ng-guard",children:"S\u1eed d\u1ee5ng Guard"}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsx)(e.li,{children:"T\u01b0\u01a1ng t\u1ef1 nh\u01b0 exception filter, guard c\xf3 3 m\u1ee9c \xe1p d\u1ee5ng"}),"\n"]}),"\n",(0,r.jsx)(e.h3,{id:"c\u1ea5p-\u0111\u1ed9-global",children:"C\u1ea5p \u0111\u1ed9 Global"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-ts",children:"const app = await NestFactory.create(AppModule);\napp.useGlobalGuards(new RolesGuard());\n"})}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsx)(e.li,{children:"Ho\u1eb7c s\u1eed d\u1ee5ng global \u1edf trong AppModule:"}),"\n"]}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-ts",children:"@Module({\n  controllers: [],\n  providers: [\n    {\n      provide: APP_GUARD,\n      useClass: AuthGuard,\n    },\n  ],\n})\nexport class AppModule {}\n"})}),"\n",(0,r.jsx)(e.h3,{id:"c\u1ea5p-\u0111\u1ed9-controller",children:"C\u1ea5p \u0111\u1ed9 Controller"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-ts",children:'@Controller("cats")\n@UseGuards(new RolesGuard())\nexport class CatsController {}\n'})}),"\n",(0,r.jsx)(e.h3,{id:"c\u1ea5p-\u0111\u1ed9-method",children:"C\u1ea5p \u0111\u1ed9 method"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-ts",children:'@Controller("cats")\nexport class CatsController {\n  @UseGuards(new RolesGuard())\n  create() {}\n}\n'})}),"\n",(0,r.jsx)(e.h2,{id:"v\xed-d\u1ee5-kh\xe1c",children:"V\xed d\u1ee5 kh\xe1c"}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsxs)(e.li,{children:["\u1ede b\xe0i tr\u01b0\u1edbc, ta \u0111\xe3 s\u1eed d\u1ee5ng ",(0,r.jsx)(e.a,{href:"./execution-context#reflectorcreatedecorator",children:"Reflector.createDecorator()"}),' \u0111\u1ec3 t\u1ea1o m\u1ed9t decorator "Roles", gi\u1edd ch\xfang ta c\xf3 th\u1ec3 l\u1ea5y gi\xe1 tr\u1ecb c\u1ee7a n\xf3 ra trong guard \u0111\u1ec3 c\xf3 th\u1ec3 th\u1ef1c hi\u1ec7n vi\u1ec7c x\xe1c th\u1ef1c roles cho request.']}),"\n"]}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-ts",children:'import { Injectable, CanActivate, ExecutionContext } from "@nestjs/common";\nimport { Reflector } from "@nestjs/core";\nimport { Roles } from "./roles.decorator";\n\n@Injectable()\nexport class RolesGuard implements CanActivate {\n  constructor(private reflector: Reflector) {}\n\n  canActivate(context: ExecutionContext): boolean {\n    const roles = this.reflector.get(Roles, context.getHandler());\n    if (!roles) {\n      return true;\n    }\n    const request = context.switchToHttp().getRequest();\n    const user = request.user;\n    return matchRoles(roles, user.roles);\n  }\n}\n'})})]})}function h(n={}){const{wrapper:e}={...(0,s.R)(),...n.components};return e?(0,r.jsx)(e,{...n,children:(0,r.jsx)(d,{...n})}):d(n)}},6423:(n,e,t)=>{t.d(e,{A:()=>r});const r=t.p+"assets/images/1718117311327-93385e2843732c5c89583c5cb880ea4d.png"},8453:(n,e,t)=>{t.d(e,{R:()=>o,x:()=>l});var r=t(6540);const s={},c=r.createContext(s);function o(n){const e=r.useContext(c);return r.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function l(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(s):n.components||s:o(n.components),r.createElement(c.Provider,{value:e},n.children)}}}]);