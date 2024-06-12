"use strict";(self.webpackChunkreactjs=self.webpackChunkreactjs||[]).push([[762],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>g});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),s=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(i.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=s(n),m=a,g=p["".concat(i,".").concat(m)]||p[m]||d[m]||o;return n?r.createElement(g,c(c({ref:t},u),{},{components:n})):r.createElement(g,c({ref:t},u))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,c=new Array(o);c[0]=m;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l[p]="string"==typeof e?e:a,c[1]=l;for(var s=2;s<o;s++)c[s]=n[s];return r.createElement.apply(null,c)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},115:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>c,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var r=n(7462),a=(n(7294),n(3905));const o={sidebar_position:7},c="Guards",l={unversionedId:"nestjs-fundamentals/guards",id:"nestjs-fundamentals/guards",title:"Guards",description:"Guard l\xe0 g\xec?",source:"@site/docs/nestjs-fundamentals/guards.md",sourceDirName:"nestjs-fundamentals",slug:"/nestjs-fundamentals/guards",permalink:"/nestjs/nestjs-fundamentals/guards",draft:!1,tags:[],version:"current",sidebarPosition:7,frontMatter:{sidebar_position:7},sidebar:"tutorialSidebar",previous:{title:"Execution context",permalink:"/nestjs/nestjs-fundamentals/execution-context"},next:{title:"Middleware",permalink:"/nestjs/nestjs-fundamentals/middleware"}},i={},s=[{value:"Guard l\xe0 g\xec?",id:"guard-l\xe0-g\xec",level:2},{value:"T\u1ea1o Guard",id:"t\u1ea1o-guard",level:2},{value:"S\u1eed d\u1ee5ng Guard",id:"s\u1eed-d\u1ee5ng-guard",level:2},{value:"C\u1ea5p \u0111\u1ed9 Global",id:"c\u1ea5p-\u0111\u1ed9-global",level:3},{value:"C\u1ea5p \u0111\u1ed9 Controller",id:"c\u1ea5p-\u0111\u1ed9-controller",level:3},{value:"C\u1ea5p \u0111\u1ed9 method",id:"c\u1ea5p-\u0111\u1ed9-method",level:3},{value:"V\xed d\u1ee5 kh\xe1c",id:"v\xed-d\u1ee5-kh\xe1c",level:2}],u={toc:s},p="wrapper";function d(e){let{components:t,...o}=e;return(0,a.kt)(p,(0,r.Z)({},u,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"guards"},"Guards"),(0,a.kt)("h2",{id:"guard-l\xe0-g\xec"},"Guard l\xe0 g\xec?"),(0,a.kt)("p",null,"Guard trong NestJS l\xe0 m\u1ed9t t\xednh n\u0103ng quan tr\u1ecdng \u0111\u01b0\u1ee3c s\u1eed d\u1ee5ng \u0111\u1ec3 x\xe1c th\u1ef1c v\xe0 \u1ee7y quy\u1ec1n truy c\u1eadp v\xe0o c\xe1c endpoint trong \u1ee9ng d\u1ee5ng. Ch\xfang \u0111\u1ea3m nhi\u1ec7m c\xe1c ch\u1ee9c n\u0103ng sau:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("strong",{parentName:"li"},"X\xe1c th\u1ef1c (Authentication)")," : Guard gi\xfap x\xe1c \u0111\u1ecbnh danh t\xednh c\u1ee7a ng\u01b0\u1eddi d\xf9ng, \u0111\u1ea3m b\u1ea3o r\u1eb1ng ch\u1ec9 nh\u1eefng ng\u01b0\u1eddi d\xf9ng \u0111\u01b0\u1ee3c \u1ee7y quy\u1ec1n m\u1edbi c\xf3 th\u1ec3 truy c\u1eadp v\xe0o c\xe1c endpoint nh\u1ea5t \u0111\u1ecbnh."),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("strong",{parentName:"li"},"\u1ee6y quy\u1ec1n (Authorization)")," : Guard ki\u1ec3m tra vai tr\xf2 v\xe0 quy\u1ec1n h\u1ea1n c\u1ee7a ng\u01b0\u1eddi d\xf9ng, \u0111\u1ea3m b\u1ea3o r\u1eb1ng h\u1ecd ch\u1ec9 \u0111\u01b0\u1ee3c ph\xe9p th\u1ef1c hi\u1ec7n c\xe1c h\xe0nh \u0111\u1ed9ng \u0111\u01b0\u1ee3c ph\xe9p."),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("strong",{parentName:"li"},"B\u1ea3o v\u1ec7 Endpoint")," : Guard ng\u0103n ch\u1eb7n truy c\u1eadp tr\xe1i ph\xe9p v\xe0o c\xe1c endpoint nh\u1ea1y c\u1ea3m, b\u1ea3o v\u1ec7 d\u1eef li\u1ec7u v\xe0 t\xe0i nguy\xean c\u1ee7a \u1ee9ng d\u1ee5ng."),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("strong",{parentName:"li"},"Linh ho\u1ea1t v\xe0 t\xe1i s\u1eed d\u1ee5ng")," : Guard c\xf3 th\u1ec3 \u0111\u01b0\u1ee3c t\xe1i s\u1eed d\u1ee5ng cho nhi\u1ec1u endpoint kh\xe1c nhau, gi\xfap t\u0103ng t\xednh linh ho\u1ea1t v\xe0 t\xe1i s\u1eed d\u1ee5ng c\u1ee7a code.")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"1718117311327",src:n(683).Z,width:"906",height:"269"})),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("ul",{parentName:"admonition"},(0,a.kt)("li",{parentName:"ul"},"Guard \u0111\u01b0\u1ee3c th\u1ef1c thi sau t\u1ea5t c\u1ea3 c\xe1c middleware, v\xe0 tr\u01b0\u1edbc b\u1ea5t k\u1ef3 interceptor ho\u1eb7c pipe n\xe0o."),(0,a.kt)("li",{parentName:"ul"},"M\u1eb7c d\xf9 guard \u0111\u01b0\u1ee3c \u0111\xe1nh d\u1ea5u ",(0,a.kt)("strong",{parentName:"li"},"@Injectable()")," nh\u01b0ng ta kh\xf4ng c\u1ea7n ph\u1ea3i cho n\xf3 v\xe0o m\u1ea3ng provider \u1edf module. N\xf3 s\u1ebd t\u1ef1 \u0111\u1ed9ng \u0111\u01b0\u1ee3c resolve. Nh\u01b0ng n\u1ebfu trong guard s\u1eed d\u1ee5ng service n\xe0o \u0111\xf3 thu\u1ed9c module kh\xe1c th\xec ta v\u1eabn ph\u1ea3i import module \u0111\xf3 v\xe0o."))),(0,a.kt)("h2",{id:"t\u1ea1o-guard"},"T\u1ea1o Guard"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},'//auth.guard.ts\nimport { CanActivate, ExecutionContext, Injectable } from "@nestjs/common";\n\n@Injectable()\nexport class AuthGuard implements CanActivate {\n  canActivate(context: ExecutionContext) {\n    /* Logic of guard here */\n    return true;\n  }\n}\n')),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("ul",{parentName:"admonition"},(0,a.kt)("li",{parentName:"ul"},"\u1ede b\xean tr\xean, ta t\u1ea1o m\u1ed9t class AuthGuard implements CanActivate."),(0,a.kt)("li",{parentName:"ul"},"Trong h\xe0m canActivate, nh\u1eadn v\xe0o m\u1ed9t tham s\u1ed1 c\xf3 ki\u1ec3u ",(0,a.kt)("a",{parentName:"li",href:"./execution-context#executioncontext-class"},"ExecutionContext"),'. N\u1ebfu tr\u1ea3 v\u1ec1 "true", qu\xe1 tr\xecnh th\u1ef1c hi\u1ec7n request s\u1ebd ti\u1ebfp t\u1ee5c di\u1ec5n ra, n\u1ebfu kh\xf4ng, NestJS s\u1ebd throw ra ',(0,a.kt)("strong",{parentName:"li"},"ForbiddenException"),"."),(0,a.kt)("li",{parentName:"ul"},"N\u1ebfu kh\xf4ng mu\u1ed1n throw ra ",(0,a.kt)("strong",{parentName:"li"},"ForbiddenException")," nh\u01b0 m\u1eb7c \u0111\u1ecbnh, ta c\xf3 th\u1ec3:")),(0,a.kt)("pre",{parentName:"admonition"},(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"throw new UnauthorizedException();\n"))),(0,a.kt)("h2",{id:"s\u1eed-d\u1ee5ng-guard"},"S\u1eed d\u1ee5ng Guard"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"T\u01b0\u01a1ng t\u1ef1 nh\u01b0 exception filter, guard c\xf3 3 m\u1ee9c \xe1p d\u1ee5ng")),(0,a.kt)("h3",{id:"c\u1ea5p-\u0111\u1ed9-global"},"C\u1ea5p \u0111\u1ed9 Global"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"const app = await NestFactory.create(AppModule);\napp.useGlobalGuards(new RolesGuard());\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Ho\u1eb7c s\u1eed d\u1ee5ng global \u1edf trong AppModule:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"@Module({\n  controllers: [],\n  providers: [\n    {\n      provide: APP_GUARD,\n      useClass: AuthGuard,\n    },\n  ],\n})\nexport class AppModule {}\n")),(0,a.kt)("h3",{id:"c\u1ea5p-\u0111\u1ed9-controller"},"C\u1ea5p \u0111\u1ed9 Controller"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},'@Controller("cats")\n@UseGuards(new RolesGuard())\nexport class CatsController {}\n')),(0,a.kt)("h3",{id:"c\u1ea5p-\u0111\u1ed9-method"},"C\u1ea5p \u0111\u1ed9 method"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},'@Controller("cats")\nexport class CatsController {\n  @UseGuards(new RolesGuard())\n  create() {}\n}\n')),(0,a.kt)("h2",{id:"v\xed-d\u1ee5-kh\xe1c"},"V\xed d\u1ee5 kh\xe1c"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u1ede b\xe0i tr\u01b0\u1edbc, ta \u0111\xe3 s\u1eed d\u1ee5ng ",(0,a.kt)("a",{parentName:"li",href:"./execution-context#reflectorcreatedecorator"},"Reflector.createDecorator()"),' \u0111\u1ec3 t\u1ea1o m\u1ed9t decorator "Roles", gi\u1edd ch\xfang ta c\xf3 th\u1ec3 l\u1ea5y gi\xe1 tr\u1ecb c\u1ee7a n\xf3 ra trong guard \u0111\u1ec3 c\xf3 th\u1ec3 th\u1ef1c hi\u1ec7n vi\u1ec7c x\xe1c th\u1ef1c roles cho request.')),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},'import { Injectable, CanActivate, ExecutionContext } from "@nestjs/common";\nimport { Reflector } from "@nestjs/core";\nimport { Roles } from "./roles.decorator";\n\n@Injectable()\nexport class RolesGuard implements CanActivate {\n  constructor(private reflector: Reflector) {}\n\n  canActivate(context: ExecutionContext): boolean {\n    const roles = this.reflector.get(Roles, context.getHandler());\n    if (!roles) {\n      return true;\n    }\n    const request = context.switchToHttp().getRequest();\n    const user = request.user;\n    return matchRoles(roles, user.roles);\n  }\n}\n')))}d.isMDXComponent=!0},683:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/1718117311327-93385e2843732c5c89583c5cb880ea4d.png"}}]);