"use strict";(self.webpackChunkreactjs=self.webpackChunkreactjs||[]).push([[471],{3905:(t,e,n)=>{n.d(e,{Zo:()=>p,kt:()=>h});var r=n(7294);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function o(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function c(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?o(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function l(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},o=Object.keys(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var s=r.createContext({}),i=function(t){var e=r.useContext(s),n=e;return t&&(n="function"==typeof t?t(e):c(c({},e),t)),n},p=function(t){var e=i(t.components);return r.createElement(s.Provider,{value:e},t.children)},u="mdxType",m={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},g=r.forwardRef((function(t,e){var n=t.components,a=t.mdxType,o=t.originalType,s=t.parentName,p=l(t,["components","mdxType","originalType","parentName"]),u=i(n),g=a,h=u["".concat(s,".").concat(g)]||u[g]||m[g]||o;return n?r.createElement(h,c(c({ref:e},p),{},{components:n})):r.createElement(h,c({ref:e},p))}));function h(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var o=n.length,c=new Array(o);c[0]=g;var l={};for(var s in e)hasOwnProperty.call(e,s)&&(l[s]=e[s]);l.originalType=t,l[u]="string"==typeof t?t:a,c[1]=l;for(var i=2;i<o;i++)c[i]=n[i];return r.createElement.apply(null,c)}return r.createElement.apply(null,n)}g.displayName="MDXCreateElement"},6884:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>s,contentTitle:()=>c,default:()=>m,frontMatter:()=>o,metadata:()=>l,toc:()=>i});var r=n(7462),a=(n(7294),n(3905));const o={sidebar_position:6},c="Execution context",l={unversionedId:"nestjs-fundamentals/execution-context",id:"nestjs-fundamentals/execution-context",title:"Execution context",description:"- Execution context cung c\u1ea5p th\xf4ng tin v\u1ec1 y\xeau c\u1ea7u hi\u1ec7n t\u1ea1i, cho ph\xe9p truy c\u1eadp v\xe0o c\xe1c \u0111\u1ed1i t\u01b0\u1ee3ng nh\u01b0 y\xeau c\u1ea7u (request), ph\u1ea3n h\u1ed3i (response), v\xe0 c\xe1c th\xf4ng tin kh\xe1c li\xean quan \u0111\u1ebfn chu\u1ed7i x\u1eed l\xfd y\xeau c\u1ea7u.",source:"@site/docs/nestjs-fundamentals/execution-context.md",sourceDirName:"nestjs-fundamentals",slug:"/nestjs-fundamentals/execution-context",permalink:"/nestjs/nestjs-fundamentals/execution-context",draft:!1,tags:[],version:"current",sidebarPosition:6,frontMatter:{sidebar_position:6},sidebar:"tutorialSidebar",previous:{title:"Exception Filters",permalink:"/nestjs/nestjs-fundamentals/exception-filters"}},s={},i=[{value:"ArgumentsHost class",id:"argumentshost-class",level:2},{value:"ExecutionContext class",id:"executioncontext-class",level:2},{value:"Reflection v\xe0 metadata",id:"reflection-v\xe0-metadata",level:2},{value:"Reflector.createDecorator()",id:"reflectorcreatedecorator",level:3},{value:"L\u1ea5y gi\xe1 tr\u1ecb metadata khi ch\u1ec9 \u0111\u1ecbnh decorator \u1edf c\u1ea5p \u0111\u1ed9 method:",id:"l\u1ea5y-gi\xe1-tr\u1ecb-metadata-khi-ch\u1ec9-\u0111\u1ecbnh-decorator-\u1edf-c\u1ea5p-\u0111\u1ed9-method",level:4},{value:"L\u1ea5y gi\xe1 tr\u1ecb metadata khi ch\u1ec9 \u0111\u1ecbnh decorator \u1edf c\u1ea5p \u0111\u1ed9 controller:",id:"l\u1ea5y-gi\xe1-tr\u1ecb-metadata-khi-ch\u1ec9-\u0111\u1ecbnh-decorator-\u1edf-c\u1ea5p-\u0111\u1ed9-controller",level:4},{value:"L\u1ea5y gi\xe1 tr\u1ecb metadata khi ch\u1ec9 \u0111\u1ecbnh decorator \u1edf c\u1ea3 2 c\u1ea5p \u0111\u1ed9 controller + method:",id:"l\u1ea5y-gi\xe1-tr\u1ecb-metadata-khi-ch\u1ec9-\u0111\u1ecbnh-decorator-\u1edf-c\u1ea3-2-c\u1ea5p-\u0111\u1ed9-controller--method",level:4}],p={toc:i},u="wrapper";function m(t){let{components:e,...n}=t;return(0,a.kt)(u,(0,r.Z)({},p,n,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"execution-context"},"Execution context"),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("ul",{parentName:"admonition"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Execution context cung c\u1ea5p th\xf4ng tin v\u1ec1 y\xeau c\u1ea7u hi\u1ec7n t\u1ea1i, cho ph\xe9p truy c\u1eadp v\xe0o c\xe1c \u0111\u1ed1i t\u01b0\u1ee3ng nh\u01b0 y\xeau c\u1ea7u (request), ph\u1ea3n h\u1ed3i (response), v\xe0 c\xe1c th\xf4ng tin kh\xe1c li\xean quan \u0111\u1ebfn chu\u1ed7i x\u1eed l\xfd y\xeau c\u1ea7u.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"C\xe1c lo\u1ea1i Execution Context trong NestJS:"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"HTTP Context"),": Ch\u1ee9a c\xe1c th\xf4ng tin v\u1ec1 HTTP request v\xe0 response."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"WebSocket Context"),": Ch\u1ee9a c\xe1c th\xf4ng tin li\xean quan \u0111\u1ebfn k\u1ebft n\u1ed1i WebSocket v\xe0 c\xe1c th\xf4ng \u0111i\u1ec7p."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"RPC Context"),": \u0110\u01b0\u1ee3c s\u1eed d\u1ee5ng cho c\xe1c \u1ee9ng d\u1ee5ng microservices. Ch\u1ee9a c\xe1c th\xf4ng tin li\xean quan \u0111\u1ebfn c\xe1c y\xeau c\u1ea7u RPC (Remote Procedure Call)."))))),(0,a.kt)("h2",{id:"argumentshost-class"},"ArgumentsHost class"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Trong NestJS, ",(0,a.kt)("strong",{parentName:"li"},"ArgumentsHost")," l\xe0 m\u1ed9t l\u1edbp cung c\u1ea5p c\xe1c ph\u01b0\u01a1ng th\u1ee9c \u0111\u1ec3 truy c\u1eadp v\xe0o c\xe1c \u0111\u1ed1i s\u1ed1 (arguments) c\u1ee7a ph\u01b0\u01a1ng th\u1ee9c x\u1eed l\xfd (handler) hi\u1ec7n t\u1ea1i. ",(0,a.kt)("strong",{parentName:"li"},"ArgumentsHost")," \u0111\u01b0\u1ee3c s\u1eed d\u1ee5ng ch\u1ee7 y\u1ebfu trong c\xe1c th\xe0nh ph\u1ea7n nh\u01b0",(0,a.kt)("a",{parentName:"li",href:"./exception-filters"}," exception filters"),", guards, v\xe0 interceptors \u0111\u1ec3 tr\xedch xu\u1ea5t v\xe0 x\u1eed l\xfd c\xe1c th\xf4ng tin li\xean quan \u0111\u1ebfn y\xeau c\u1ea7u (request) hi\u1ec7n t\u1ea1i."),(0,a.kt)("li",{parentName:"ul"},"C\xe1c ph\u01b0\u01a1ng th\u1ee9c ch\xednh c\u1ee7a ",(0,a.kt)("strong",{parentName:"li"},"ArgumentsHost"),":")),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Ph\u01b0\u01a1ng th\u1ee9c"),(0,a.kt)("th",{parentName:"tr",align:null},"M\xf4 t\u1ea3"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"switchToHttp()"),(0,a.kt)("td",{parentName:"tr",align:null},"Tr\u1ea3 v\u1ec1 m\u1ed9t \u0111\u1ed1i t\u01b0\u1ee3ng",(0,a.kt)("strong",{parentName:"td"},"HttpArgumentsHost")," cho ph\xe9p truy c\u1eadp v\xe0o c\xe1c \u0111\u1ed1i t\u01b0\u1ee3ng c\u1ee7a ng\u1eef c\u1ea3nh HTTP (request, response, next).")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"switchToRpc()"),(0,a.kt)("td",{parentName:"tr",align:null},"Tr\u1ea3 v\u1ec1 m\u1ed9t \u0111\u1ed1i t\u01b0\u1ee3ng",(0,a.kt)("strong",{parentName:"td"},"RpcArgumentsHost")," cho ph\xe9p truy c\u1eadp v\xe0o c\xe1c \u0111\u1ed1i t\u01b0\u1ee3ng c\u1ee7a ng\u1eef c\u1ea3nh RPC.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"switchToWs()"),(0,a.kt)("td",{parentName:"tr",align:null},"Tr\u1ea3 v\u1ec1 m\u1ed9t \u0111\u1ed1i t\u01b0\u1ee3ng",(0,a.kt)("strong",{parentName:"td"},"WsArgumentsHost")," cho ph\xe9p truy c\u1eadp v\xe0o c\xe1c \u0111\u1ed1i t\u01b0\u1ee3ng c\u1ee7a ng\u1eef c\u1ea3nh WebSocket.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"getArgs()"),(0,a.kt)("td",{parentName:"tr",align:null},"Tr\u1ea3 v\u1ec1 m\u1ed9t m\u1ea3ng ch\u1ee9a t\u1ea5t c\u1ea3 c\xe1c \u0111\u1ed1i s\u1ed1 c\u1ee7a handler")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"getArgByIndex(index: number)"),(0,a.kt)("td",{parentName:"tr",align:null},"Tr\u1ea3 v\u1ec1 \u0111\u1ed1i s\u1ed1 t\u1ea1i v\u1ecb tr\xed ch\u1ec9 \u0111\u1ecbnh")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"getType()"),(0,a.kt)("td",{parentName:"tr",align:null},"Tr\u1ea3 v\u1ec1 lo\u1ea1i ng\u1eef c\u1ea3nh hi\u1ec7n t\u1ea1i (http, rpc, ws)")))),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"D\u01b0\u1edbi \u0111\xe2y l\xe0 m\u1ed9t v\xed d\u1ee5 v\u1ec1 vi\u1ec7c s\u1eed d\u1ee5ng ",(0,a.kt)("strong",{parentName:"li"},"ArgumentsHost")," trong m\u1ed9t exception filter \u0111\u1ec3 x\u1eed l\xfd l\u1ed7i HTTP:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},'import {\n  ExceptionFilter,\n  Catch,\n  ArgumentsHost,\n  HttpException,\n} from "@nestjs/common";\nimport { Request, Response } from "express";\n\n@Catch(HttpException)\nexport class HttpExceptionFilter implements ExceptionFilter {\n  catch(exception: HttpException, host: ArgumentsHost) {\n    const ctx = host.switchToHttp();\n    const request = ctx.getRequest<Request>();\n    const response = ctx.getResponse<Response>();\n    const status = exception.getStatus();\n\n    response.status(status).json({\n      statusCode: status,\n      timestamp: new Date().toISOString(),\n      path: request.url,\n    });\n  }\n}\n')),(0,a.kt)("p",null,"\u270f\ufe0fTrong v\xed d\u1ee5 n\xe0y, ",(0,a.kt)("strong",{parentName:"p"},"ArgumentsHost")," \u0111\u01b0\u1ee3c s\u1eed d\u1ee5ng \u0111\u1ec3 chuy\u1ec3n \u0111\u1ed5i ng\u1eef c\u1ea3nh hi\u1ec7n t\u1ea1i sang ng\u1eef c\u1ea3nh HTTP v\xe0 truy c\u1eadp v\xe0o c\xe1c \u0111\u1ed1i t\u01b0\u1ee3ng request v\xe0 response."),(0,a.kt)("h2",{id:"executioncontext-class"},"ExecutionContext class"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Trong NestJS, ",(0,a.kt)("strong",{parentName:"li"},"ExecutionContext")," l\xe0 m\u1ed9t l\u1edbp m\u1edf r\u1ed9ng c\u1ee7a ",(0,a.kt)("strong",{parentName:"li"},"ArgumentsHost")," v\xe0 cung c\u1ea5p c\xe1c ph\u01b0\u01a1ng th\u1ee9c m\u1ea1nh m\u1ebd h\u01a1n \u0111\u1ec3 qu\u1ea3n l\xfd ng\u1eef c\u1ea3nh th\u1ef1c thi c\u1ee7a m\u1ed9t y\xeau c\u1ea7u. ",(0,a.kt)("strong",{parentName:"li"},"ExecutionContext")," kh\xf4ng ch\u1ec9 cung c\u1ea5p c\xe1c ph\u01b0\u01a1ng th\u1ee9c truy c\u1eadp v\xe0o c\xe1c \u0111\u1ed1i s\u1ed1 c\u1ee7a handler, m\xe0 c\xf2n cho ph\xe9p b\u1ea1n l\u1ea5y th\xf4ng tin v\u1ec1 class v\xe0 handler hi\u1ec7n t\u1ea1i \u0111ang \u0111\u01b0\u1ee3c x\u1eed l\xfd."),(0,a.kt)("li",{parentName:"ul"},"C\xe1c ph\u01b0\u01a1ng th\u1ee9c c\u1ee7a ",(0,a.kt)("strong",{parentName:"li"},"ExecutionContext")," c\u0169ng t\u01b0\u01a1ng t\u1ef1 nh\u01b0 ",(0,a.kt)("strong",{parentName:"li"},"ArgumentsHost")," nh\u01b0ng c\xf3 th\xeam 2 ph\u01b0\u01a1ng th\u1ee9c sau:")),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Ph\u01b0\u01a1ng th\u1ee9c"),(0,a.kt)("th",{parentName:"tr",align:null},"M\xf4 t\u1ea3"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"getClass()"),(0,a.kt)("td",{parentName:"tr",align:null},"Tr\u1ea3 v\u1ec1\xa0type c\u1ee7a class m\xe0 controller \u0111\xf3 thu\u1ed9c v\u1ec1")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"getHandler()"),(0,a.kt)("td",{parentName:"tr",align:null},"Tr\u1ea3 v\u1ec1\xa0tham chi\u1ebfu \u0111\u1ebfn h\xe0m handler (controller) \u0111\u01b0\u1ee3c g\u1ecdi")))),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"V\xed d\u1ee5:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},'const methodKey = ctx.getHandler().name; // "create"\nconst className = ctx.getClass().name; // "CatsController"\n')),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Ngo\xe0i ra, ",(0,a.kt)("strong",{parentName:"li"},"ExecutionContext")," c\xf2n cho ta truy c\u1eadp v\xe0o metadata \u0111\u01b0\u1ee3c set b\u1edfi ",(0,a.kt)("strong",{parentName:"li"},"Reflector.createDecorator()")," ho\u1eb7c decorator ",(0,a.kt)("strong",{parentName:"li"},"@SetMetadata()")," trong guard ho\u1eb7c interceptors. Xem ti\u1ebfp \u1edf ph\u1ea7n d\u01b0\u1edbi.")),(0,a.kt)("h2",{id:"reflection-v\xe0-metadata"},"Reflection v\xe0 metadata"),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("ul",{parentName:"admonition"},(0,a.kt)("li",{parentName:"ul"},"NestJS cung c\u1ea5p kh\u1ea3 n\u0103ng \u0111\xednh k\xe8m metadata t\xf9y ch\u1ec9nh v\xe0o tr\xecnh x\u1eed l\xfd route (route handler) th\xf4ng qua ph\u01b0\u01a1ng th\u1ee9c ",(0,a.kt)("strong",{parentName:"li"},"Reflector.createDecorator()")," ho\u1eb7c decorator ",(0,a.kt)("strong",{parentName:"li"},"@SetMetadata()")))),(0,a.kt)("h3",{id:"reflectorcreatedecorator"},"Reflector.createDecorator()"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},'V\xed d\u1ee5 d\u01b0\u1edbi \u0111\xe2y, ta s\u1ebd t\u1ea1o m\u1ed9t decorator "Roles" nh\u1eadn v\xe0o 1 tham s\u1ed1 l\xe0 m\u1ea3ng string:')),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},'//roles.decorator.ts\nimport { Reflector } from "@nestjs/core";\n\nexport const Roles = Reflector.createDecorator<string[]>();\n')),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"V\xe0 gi\u1edd ta c\xf3 th\u1ec3 s\u1eed d\u1ee5ng ch\xfang \u1edf trong controller:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"// cats.controller.ts\n@Post()\n@Roles(['admin'])\nasync create(@Body() createCatDto: CreateCatDto) {\n  this.catsService.create(createCatDto);\n}\n")),(0,a.kt)("p",null,'\ud83d\udca1\u1ede b\xean tr\xean, ta \u0111\xe3 \u0111\xednh k\xe8m decorator "Roles" v\xe0o ph\u01b0\u01a1ng th\u1ee9c ',(0,a.kt)("inlineCode",{parentName:"p"},"create()"),", cho bi\u1ebft r\u1eb1ng ch\u1ec9 nh\u1eefng ng\u01b0\u1eddi d\xf9ng c\xf3 vai tr\xf2 qu\u1ea3n tr\u1ecb vi\xean m\u1edbi \u0111\u01b0\u1ee3c truy c\u1eadp v\xe0o route n\xe0y."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u0110\u1ec3 c\xf3 th\u1ec3 truy c\u1eadp v\xe0o role c\u1ee7a route tr\xean, ta s\u1ebd s\u1eed d\u1ee5ng ",(0,a.kt)("strong",{parentName:"li"},"Reflector")," class \u1edf trong file guard.")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"//roles.guard.ts\n@Injectable()\nexport class RolesGuard {\n  constructor(private reflector: Reflector) {}\n}\n")),(0,a.kt)("h4",{id:"l\u1ea5y-gi\xe1-tr\u1ecb-metadata-khi-ch\u1ec9-\u0111\u1ecbnh-decorator-\u1edf-c\u1ea5p-\u0111\u1ed9-method"},"L\u1ea5y gi\xe1 tr\u1ecb metadata khi ch\u1ec9 \u0111\u1ecbnh decorator \u1edf c\u1ea5p \u0111\u1ed9 method:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u0110\u1ec3 l\u1ea5y gi\xe1 tr\u1ecb c\u1ee7a role \u1edf c\u1ea5p \u0111\u1ed9 method, ta d\xf9ng ph\u01b0\u01a1ng th\u1ee9c ",(0,a.kt)("inlineCode",{parentName:"li"},"get()")," v\u1edbi tham s\u1ed1 th\u1ee9 hai l\xe0 ",(0,a.kt)("inlineCode",{parentName:"li"},"context.getHandler()"),":")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"// roles.guard.ts\nconst roles = this.reflector.get(Roles, context.getHandler());\n")),(0,a.kt)("h4",{id:"l\u1ea5y-gi\xe1-tr\u1ecb-metadata-khi-ch\u1ec9-\u0111\u1ecbnh-decorator-\u1edf-c\u1ea5p-\u0111\u1ed9-controller"},"L\u1ea5y gi\xe1 tr\u1ecb metadata khi ch\u1ec9 \u0111\u1ecbnh decorator \u1edf c\u1ea5p \u0111\u1ed9 controller:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},'\u1ede b\xean tr\xean, ta d\xf9ng decorator "Roles" \u1edf c\u1ea5p \u0111\u1ed9 method, c\xf2n n\u1ebfu d\xf9ng \u1edf c\u1ea5p \u0111\u1ed9 controller nh\u01b0 sau, h\xe3y d\xf9ng ',(0,a.kt)("inlineCode",{parentName:"li"},"context.getClass()"),":")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},'//cats.controller.ts\n@Roles(["admin"])\n@Controller("cats")\nexport class CatsController {}\n')),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"//roles.guard.ts;\nconst roles = this.reflector.get(Roles, context.getClass());\n")),(0,a.kt)("h4",{id:"l\u1ea5y-gi\xe1-tr\u1ecb-metadata-khi-ch\u1ec9-\u0111\u1ecbnh-decorator-\u1edf-c\u1ea3-2-c\u1ea5p-\u0111\u1ed9-controller--method"},"L\u1ea5y gi\xe1 tr\u1ecb metadata khi ch\u1ec9 \u0111\u1ecbnh decorator \u1edf c\u1ea3 2 c\u1ea5p \u0111\u1ed9 controller + method:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},'N\u1ebfu ta d\xf9ng decorator "Roles" \u1edf c\u1ea3 c\u1ea5p \u0111\u1ed9 controller l\u1eabn method nh\u01b0 sau:')),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},'@Roles(["user"])\n@Controller("cats")\nexport class CatsController {\n  @Post()\n  @Roles(["admin"])\n  async create(@Body() createCatDto: CreateCatDto) {\n    this.catsService.create(createCatDto);\n  }\n}\n')),(0,a.kt)("p",null,'\u270f\ufe0fTrong v\xed d\u1ee5 tr\xean, ta mu\u1ed1n role c\xf3 gi\xe1 tr\u1ecb "user" l\xe0 m\u1eb7c \u0111\u1ecbnh cho to\xe0n b\u1ed9 c\xe1c method trong controller, nh\u01b0ng v\u1edbi method ',(0,a.kt)("inlineCode",{parentName:"p"},"create()"),' th\xec mu\u1ed1n role l\xe0 "admin". L\xfac n\xe0y, \u0111\u1ec3 l\u1ea5y gi\xe1 tr\u1ecb c\u1ee7a role, ta d\xf9ng:'),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},'const roles = this.reflector.getAllAndOverride(Roles, [\n  context.getHandler(),\n  context.getClass(),\n]); // ["admin"]\n')),(0,a.kt)("p",null,"\u270f\ufe0fC\xf2n trong tr\u01b0\u1eddng h\u1ee3p ta mu\u1ed1n h\u1ee3p nh\u1ea5t roles \u1edf c\u1ea3 2 c\u1ea5p \u0111\u1ed9:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},'const roles = this.reflector.getAllAndMerge(Roles, [\n  context.getHandler(),\n  context.getClass(),\n]); // ["user", "admin"]\n')))}m.isMDXComponent=!0}}]);