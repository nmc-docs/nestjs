"use strict";(self.webpackChunkreactjs=self.webpackChunkreactjs||[]).push([[920],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>g});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function d(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),i=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=i(e.components);return r.createElement(s.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,c=d(e,["components","mdxType","originalType","parentName"]),m=i(n),p=o,g=m["".concat(s,".").concat(p)]||m[p]||u[p]||a;return n?r.createElement(g,l(l({ref:t},c),{},{components:n})):r.createElement(g,l({ref:t},c))}));function g(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,l=new Array(a);l[0]=p;var d={};for(var s in t)hasOwnProperty.call(t,s)&&(d[s]=t[s]);d.originalType=e,d[m]="string"==typeof e?e:o,l[1]=d;for(var i=2;i<a;i++)l[i]=n[i];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},8929:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>u,frontMatter:()=>a,metadata:()=>d,toc:()=>i});var r=n(7462),o=(n(7294),n(3905));const a={sidebar_position:8},l="Middleware",d={unversionedId:"nestjs-fundamentals/middleware",id:"nestjs-fundamentals/middleware",title:"Middleware",description:"- Middleware l\xe0 h\xe0m m\xe0 s\u1ebd \u0111\u01b0\u1ee3c ch\u1ea1y tr\u01b0\u1edbc khi v\xe0o router handler. Middleware c\xf3 quy\u1ec1n truy c\u1eadp v\xe0o \u0111\u1ed1i t\u01b0\u1ee3ng request v\xe0 response, x\u1eed l\xfd ch\xfang.",source:"@site/docs/nestjs-fundamentals/middleware.md",sourceDirName:"nestjs-fundamentals",slug:"/nestjs-fundamentals/middleware",permalink:"/nestjs/nestjs-fundamentals/middleware",draft:!1,tags:[],version:"current",sidebarPosition:8,frontMatter:{sidebar_position:8},sidebar:"tutorialSidebar",previous:{title:"Guards",permalink:"/nestjs/nestjs-fundamentals/guards"}},s={},i=[{value:"T\u1ea1o middleware",id:"t\u1ea1o-middleware",level:2},{value:"Apply middleware",id:"apply-middleware",level:2}],c={toc:i},m="wrapper";function u(e){let{components:t,...a}=e;return(0,o.kt)(m,(0,r.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"middleware"},"Middleware"),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("ul",{parentName:"admonition"},(0,o.kt)("li",{parentName:"ul"},"Middleware l\xe0 h\xe0m m\xe0 s\u1ebd \u0111\u01b0\u1ee3c ch\u1ea1y tr\u01b0\u1edbc khi v\xe0o router handler. Middleware c\xf3 quy\u1ec1n truy c\u1eadp v\xe0o \u0111\u1ed1i t\u01b0\u1ee3ng request v\xe0 response, x\u1eed l\xfd ch\xfang."),(0,o.kt)("li",{parentName:"ul"},"Middleware c\xf3 h\u1ed7 tr\u1ee3 Dependency Injection. Gi\u1ed1ng nh\u01b0 provider hay controller, n\xf3 c\xf3 th\u1ec3 inject c\xe1c providers, service, dependencies \u1edf trong h\xe0m kh\u1edfi t\u1ea1o constructor()")),(0,o.kt)("p",{parentName:"admonition"},(0,o.kt)("img",{alt:"1718176640024",src:n(3646).Z,width:"970",height:"220"}))),(0,o.kt)("h2",{id:"t\u1ea1o-middleware"},"T\u1ea1o middleware"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},'import { Injectable, NestMiddleware } from "@nestjs/common";\nimport { Request, Response, NextFunction } from "express";\n\n@Injectable()\nexport class LoggerMiddleware implements NestMiddleware {\n  use(req: Request, res: Response, next: NextFunction) {\n    console.log("Request...");\n    next();\n  }\n}\n')),(0,o.kt)("h2",{id:"apply-middleware"},"Apply middleware"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Ta apply middleware b\xean trong module nh\u01b0 sau:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},'import { Module, NestModule, MiddlewareConsumer } from "@nestjs/common";\nimport { LoggerMiddleware } from "./common/middleware/logger.middleware";\nimport { CatsModule } from "./cats/cats.module";\n\n@Module({\n  imports: [CatsModule],\n})\nexport class AppModule implements NestModule {\n  configure(consumer: MiddlewareConsumer) {\n    consumer.apply(LoggerMiddleware).forRoutes("cats");\n  }\n}\n')),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},'import { Module, NestModule, MiddlewareConsumer } from "@nestjs/common";\nimport { LoggerMiddleware } from "./common/middleware/logger.middleware";\nimport { CatsModule } from "./cats/cats.module";\nimport { CatsController } from "./cats/cats.controller";\n\n@Module({\n  imports: [CatsModule],\n})\nexport class AppModule implements NestModule {\n  configure(consumer: MiddlewareConsumer) {\n    consumer.apply(LoggerMiddleware).forRoutes(CatsController);\n  }\n}\n')),(0,o.kt)("p",null,'\u270f\ufe0fTrong v\xed d\u1ee5 th\u1ee9 nh\u1ea5t b\xean tr\xean, ta apply "LoggerMiddleware" cho t\u1ea5t c\u1ea3 nh\u1eefng route b\u1eaft \u0111\u1ea7u b\u1eb1ng "/cats". C\xf2n \u1edf v\xed d\u1ee5 th\u1ee9 hai, ta apply middleware cho t\u1ea5t c\u1ea3 c\xe1c route \u0111\u01b0\u1ee3c \u0111\u1ecbnh ngh\u0129a \u1edf trong "CatsController".'),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u0110\u1ec3 apply middleware cho c\xe1c route v\xe0 v\u1edbi c\xe1c method nh\u1ea5t \u0111\u1ecbnh:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},'import {\n  Module,\n  NestModule,\n  RequestMethod,\n  MiddlewareConsumer,\n} from "@nestjs/common";\nimport { LoggerMiddleware } from "./common/middleware/logger.middleware";\nimport { CatsModule } from "./cats/cats.module";\n\n@Module({\n  imports: [CatsModule],\n})\nexport class AppModule implements NestModule {\n  configure(consumer: MiddlewareConsumer) {\n    consumer\n      .apply(LoggerMiddleware)\n      .forRoutes({ path: "cats", method: RequestMethod.GET });\n  }\n}\n')),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Ta c\u0169ng c\xf3 th\u1ec3 exclude c\xe1c route \u0111\u1ec3 kh\xf4ng \xe1p d\u1ee5ng middleware v\u1edbi c\xe1c route n\xe0y:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},'consumer\n  .apply(LoggerMiddleware)\n  .exclude(\n    { path: "cats", method: RequestMethod.GET },\n    { path: "cats", method: RequestMethod.POST }\n  )\n  .forRoutes(CatsController);\n')),(0,o.kt)("p",null,'\u270f\ufe0f\u1ede \u0111\xe2y, ta \xe1p d\u1ee5ng "LoggerMiddleware" \u0111\u1ed1i v\u1edbi t\u1ea5t c\u1ea3 c\xe1c route trong "CatsController" nh\u01b0ng kh\xf4ng \xe1p d\u1ee5ng \u0111\u1ed1i v\u1edbi method ',(0,o.kt)("strong",{parentName:"p"},"GET")," v\xe0 ",(0,o.kt)("strong",{parentName:"p"},"POST"),"."))}u.isMDXComponent=!0},3646:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/1718176640024-bc31bf6c273e58e9b2f6ada159347344.png"}}]);