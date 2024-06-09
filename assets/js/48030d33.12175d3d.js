"use strict";(self.webpackChunkreactjs=self.webpackChunkreactjs||[]).push([[754],{3905:(t,e,r)=>{r.d(e,{Zo:()=>m,kt:()=>k});var n=r(7294);function a(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function o(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function l(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?o(Object(r),!0).forEach((function(e){a(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function s(t,e){if(null==t)return{};var r,n,a=function(t,e){if(null==t)return{};var r,n,a={},o=Object.keys(t);for(n=0;n<o.length;n++)r=o[n],e.indexOf(r)>=0||(a[r]=t[r]);return a}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(n=0;n<o.length;n++)r=o[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(a[r]=t[r])}return a}var c=n.createContext({}),u=function(t){var e=n.useContext(c),r=e;return t&&(r="function"==typeof t?t(e):l(l({},e),t)),r},m=function(t){var e=u(t.components);return n.createElement(c.Provider,{value:e},t.children)},i="mdxType",d={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},p=n.forwardRef((function(t,e){var r=t.components,a=t.mdxType,o=t.originalType,c=t.parentName,m=s(t,["components","mdxType","originalType","parentName"]),i=u(r),p=a,k=i["".concat(c,".").concat(p)]||i[p]||d[p]||o;return r?n.createElement(k,l(l({ref:e},m),{},{components:r})):n.createElement(k,l({ref:e},m))}));function k(t,e){var r=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var o=r.length,l=new Array(o);l[0]=p;var s={};for(var c in e)hasOwnProperty.call(e,c)&&(s[c]=e[c]);s.originalType=t,s[i]="string"==typeof t?t:a,l[1]=s;for(var u=2;u<o;u++)l[u]=r[u];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},5849:(t,e,r)=>{r.r(e),r.d(e,{assets:()=>c,contentTitle:()=>l,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>u});var n=r(7462),a=(r(7294),r(3905));const o={sidebar_position:3},l="Controllers",s={unversionedId:"nestjs-fundamentals/controllers",id:"nestjs-fundamentals/controllers",title:"Controllers",description:"Controller l\xe0 g\xec?",source:"@site/docs/nestjs-fundamentals/controllers.md",sourceDirName:"nestjs-fundamentals",slug:"/nestjs-fundamentals/controllers",permalink:"/nestjs/nestjs-fundamentals/controllers",draft:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Modules",permalink:"/nestjs/nestjs-fundamentals/modules"},next:{title:"Pipes",permalink:"/nestjs/nestjs-fundamentals/pipes"}},c={},u=[{value:"Controller l\xe0 g\xec?",id:"controller-l\xe0-g\xec",level:2},{value:"L\u1ec7nh CLI \u0111\u1ec3 t\u1ea1o file controller",id:"l\u1ec7nh-cli-\u0111\u1ec3-t\u1ea1o-file-controller",level:2},{value:"Request Method",id:"request-method",level:2},{value:"Request Object",id:"request-object",level:2},{value:"Status code",id:"status-code",level:2},{value:"Header Response",id:"header-response",level:2}],m={toc:u},i="wrapper";function d(t){let{components:e,...r}=t;return(0,a.kt)(i,(0,n.Z)({},m,r,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"controllers"},"Controllers"),(0,a.kt)("h2",{id:"controller-l\xe0-g\xec"},"Controller l\xe0 g\xec?"),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("ul",{parentName:"admonition"},(0,a.kt)("li",{parentName:"ul"},"Trong NestJS, m\u1ed9t controller l\xe0 m\u1ed9t l\u1edbp \u0111\u01b0\u1ee3c s\u1eed d\u1ee5ng \u0111\u1ec3 \u0111\u1ecbnh ngh\u0129a c\xe1c endpoint (\u0111i\u1ec3m cu\u1ed1i) c\u1ee7a \u1ee9ng d\u1ee5ng v\xe0 x\u1eed l\xfd c\xe1c y\xeau c\u1ea7u HTTP \u0111\u1ebfn c\xe1c endpoint n\xe0y."),(0,a.kt)("li",{parentName:"ul"},"M\u1ed9t controller trong NestJS th\u01b0\u1eddng c\xf3 c\xe1c \u0111\u1eb7c \u0111i\u1ec3m sau:")),(0,a.kt)("ol",{parentName:"admonition"},(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("strong",{parentName:"li"},"\u0110\u1ecbnh ngh\u0129a c\xe1c endpoint")," : Controller s\u1ebd \u0111\u1ecbnh ngh\u0129a c\xe1c endpoint m\xe0 \u1ee9ng d\u1ee5ng s\u1ebd \u0111\xe1p \u1ee9ng, ch\u1eb3ng h\u1ea1n nh\u01b0 ",(0,a.kt)("inlineCode",{parentName:"li"},"/users"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"/products"),", v.v."),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("strong",{parentName:"li"},"X\u1eed l\xfd c\xe1c y\xeau c\u1ea7u HTTP")," : Controller s\u1ebd x\u1eed l\xfd c\xe1c y\xeau c\u1ea7u HTTP (GET, POST, PUT, DELETE, v.v.) \u0111\u01b0\u1ee3c g\u1eedi \u0111\u1ebfn c\xe1c endpoint \u0111\u01b0\u1ee3c \u0111\u1ecbnh ngh\u0129a."),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("strong",{parentName:"li"},"T\u01b0\u01a1ng t\xe1c v\u1edbi c\xe1c d\u1ecbch v\u1ee5")," : Controller s\u1ebd t\u01b0\u01a1ng t\xe1c v\u1edbi c\xe1c d\u1ecbch v\u1ee5 (service) \u0111\u1ec3 th\u1ef1c hi\u1ec7n c\xe1c t\xe1c v\u1ee5 c\u1ea7n thi\u1ebft."),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("strong",{parentName:"li"},"Tr\u1ea3 v\u1ec1 ph\u1ea3n h\u1ed3i")," : Controller s\u1ebd tr\u1ea3 v\u1ec1 ph\u1ea3n h\u1ed3i HTTP th\xedch h\u1ee3p (nh\u01b0 m\xe3 tr\u1ea1ng th\xe1i, d\u1eef li\u1ec7u JSON, v.v.) cho client.")),(0,a.kt)("ul",{parentName:"admonition"},(0,a.kt)("li",{parentName:"ul"},"\u0110\u1ec3 \u0111\u1ecbnh ngh\u0129a m\u1ed9t controller trong NestJS, ta s\u1eed d\u1ee5ng decorator ",(0,a.kt)("inlineCode",{parentName:"li"},"@Controller()")," v\xe0 \u0111\u1eb7t c\xe1c ph\u01b0\u01a1ng th\u1ee9c x\u1eed l\xfd c\xe1c y\xeau c\u1ea7u HTTP nh\u01b0 ",(0,a.kt)("inlineCode",{parentName:"li"},"@Get()"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"@Post()"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"@Put()"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"@Delete()"),", v.v."))),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"V\xed d\u1ee5 v\u1ec1 1 file controller:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},'import { Body, Controller, Get, Post } from "@nestjs/common";\n\nimport { CustomersService } from "src/modules/customers/customers.service";\nimport CreateCustomerDto from "src/modules/customers/dto/create-customer.dto";\n\n@Controller("customers")\nexport class CustomersController {\n  constructor(private customerService: CustomersService) {}\n\n  @Post("/create")\n  createCustomer(@Body() body: CreateCustomerDto) {\n    const createdCustomer = this.customerService.create(body);\n    return createdCustomer;\n  }\n\n  @Get("/list")\n  getCustomers() {\n    return this.customerService.getCustomers();\n  }\n}\n')),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("ul",{parentName:"admonition"},(0,a.kt)("li",{parentName:"ul"},"Trong v\xed d\u1ee5 tr\xean, ta t\u1ea1o 2 endpoint:",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"/customers/create"),": t\u1ea1o m\u1edbi 1 customer v\u1edbi method ",(0,a.kt)("strong",{parentName:"li"},"POST")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"/customers/list"),": l\u1ea5y danh s\xe1ch c\xe1c customers v\u1edbi method ",(0,a.kt)("strong",{parentName:"li"},"GET")))))),(0,a.kt)("h2",{id:"l\u1ec7nh-cli-\u0111\u1ec3-t\u1ea1o-file-controller"},"L\u1ec7nh CLI \u0111\u1ec3 t\u1ea1o file controller"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"nest g controller [MODULE_NAME]\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},'V\xed d\u1ee5 c\xe2u l\u1ec7nh sau s\u1ebd t\u1ea1o file "customer.controller.ts" b\xean trong th\u01b0 m\u1ee5c "src/modules/customer":')),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"nest g controller modules/customer\n")),(0,a.kt)("h2",{id:"request-method"},"Request Method"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"D\u01b0\u1edbi \u0111\xe2y l\xe0 c\xe1c decorator bi\u1ec3u th\u1ecb c\xe1c ph\u01b0\u01a1ng th\u1ee9c HTTP:")),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Decorator"),(0,a.kt)("th",{parentName:"tr",align:null},"M\xf4 t\u1ea3"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"@Get()"),(0,a.kt)("td",{parentName:"tr",align:null},"Ph\u01b0\u01a1ng th\u1ee9c GET")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"@Post()"),(0,a.kt)("td",{parentName:"tr",align:null},"Ph\u01b0\u01a1ng th\u1ee9c POST")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"@Put()"),(0,a.kt)("td",{parentName:"tr",align:null},"Ph\u01b0\u01a1ng th\u1ee9c PUT")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"@Delete()"),(0,a.kt)("td",{parentName:"tr",align:null},"Ph\u01b0\u01a1ng th\u1ee9c DELETE")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"@All()"),(0,a.kt)("td",{parentName:"tr",align:null},"X\u1eed l\xfd t\u1ea5t c\u1ea3 c\xe1c ph\u01b0\u01a1ng th\u1ee9c tr\xean")))),(0,a.kt)("h2",{id:"request-object"},"Request Object"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Trong m\u1ed7i h\xe0m controller, ta \u0111\u1ec1u c\xf3 th\u1ec3 truy xu\u1ea5t c\xe1c th\xf4ng tin c\u1ee7a request nh\u01b0 body, params, query, header,... th\xf4ng qua c\xe1c decorator m\xe0 NestJS cung c\u1ea5p s\u1eb5n nh\u01b0 \u1edf d\u01b0\u1edbi \u0111\xe2y:")),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Decorator"),(0,a.kt)("th",{parentName:"tr",align:null},"M\xf4 t\u1ea3"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"@Request(), @Req()"),(0,a.kt)("td",{parentName:"tr",align:null},"req")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"@Response(), @Res()"),(0,a.kt)("td",{parentName:"tr",align:null},"res")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"@Next()"),(0,a.kt)("td",{parentName:"tr",align:null},"next")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"@Session()"),(0,a.kt)("td",{parentName:"tr",align:null},"req.session")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"@Param(key?: string)"),(0,a.kt)("td",{parentName:"tr",align:null},"req.params / req.params","[key]")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"@Body(key?: string)"),(0,a.kt)("td",{parentName:"tr",align:null},"req.body / req.body","[key]")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"@Query(key?: string)"),(0,a.kt)("td",{parentName:"tr",align:null},"req.query / req.query","[key]")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"@Headers(name?: string)"),(0,a.kt)("td",{parentName:"tr",align:null},"req.headers / req.headers","[name]")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"@Ip()"),(0,a.kt)("td",{parentName:"tr",align:null},"req.ip")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"@HostParam()"),(0,a.kt)("td",{parentName:"tr",align:null},"req.hosts")))),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("ul",{parentName:"admonition"},(0,a.kt)("li",{parentName:"ul"},"Ta c\xf3 th\u1ec3 l\u1ea5y t\u1ea5t c\u1ea3 c\xe1c thu\u1ed9c t\xednh c\u1ee7a body, params ho\u1eb7c query v\u1edbi c\xe1ch vi\u1ebft nh\u01b0 @Body() body: CreateCustomerDTO. Sau \u0111\xf3 truy xu\u1ea5t c\xe1c thu\u1ed9c t\xednh th\xf4ng qua body.fullName, body.email,..."),(0,a.kt)("li",{parentName:"ul"},'N\u1ebfu body, query ho\u1eb7c params truy\u1ec1n v\xe0o m\xe0 c\xf3 1 thu\u1ed9c t\xednh th\xec ta c\xf3 th\u1ec3 l\u1ea5y qua key c\u1ee7a n\xf3 thay v\xec ph\u1ea3i \u0111\u1ecbnh ngh\u0129a type cho object. V\xed d\u1ee5 nh\u01b0 @Param("id") userId: string.'))),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"V\xed d\u1ee5:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},'import { Body, Controller, Get, Headers, Param, Post } from "@nestjs/common";\n\nimport { CustomersService } from "src/modules/customers/customers.service";\nimport CreateCustomerDto from "src/modules/customers/dto/create-customer.dto";\n\n@Controller("customers")\nexport class CustomersController {\n  constructor(private customerService: CustomersService) {}\n\n  @Post("/create")\n  createCustomer(\n    @Body() body: CreateCustomerDto,\n    @Headers("authorization") auth: string\n  ) {\n    const createdCustomer = this.customerService.create(body);\n    console.log("Auth:", auth); // In ra gi\xe1 tr\u1ecb c\u1ee7a "authorization" \u1edf header\n    return createdCustomer;\n  }\n\n  @Get("/:id")\n  getCustomerById(@Param("id") userId: string) {\n    return this.customerService.getCustomerById(userId);\n  }\n}\n')),(0,a.kt)("h2",{id:"status-code"},"Status code"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Ta c\xf3 th\u1ec3 custom HTTP Response Status Code th\xf4ng qua decorator ",(0,a.kt)("strong",{parentName:"li"},"@HttpCode()")),(0,a.kt)("li",{parentName:"ul"},"V\xed d\u1ee5:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},'import {\n  Body,\n  Controller,\n  Get,\n  HttpCode,\n  HttpStatus,\n  Post,\n} from "@nestjs/common";\n\nimport { CustomersService } from "src/modules/customers/customers.service";\nimport CreateCustomerDto from "src/modules/customers/dto/create-customer.dto";\n\n@Controller("customers")\nexport class CustomersController {\n  constructor(private customerService: CustomersService) {}\n\n  @Post("/create")\n  @HttpCode(HttpStatus.NOT_FOUND)\n  createCustomer(@Body() body: CreateCustomerDto) {\n    const createdCustomer = this.customerService.create(body);\n    return createdCustomer;\n  }\n}\n')),(0,a.kt)("h2",{id:"header-response"},"Header Response"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Ta c\xf3 th\u1ec3 th\xeam c\xe1c key - value trong response tr\u1ea3 v\u1ec1 c\u1ee7a header th\xf4ng qua decorator ",(0,a.kt)("strong",{parentName:"li"},"@Header()")),(0,a.kt)("li",{parentName:"ul"},"V\xed d\u1ee5:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},'import { Body, Controller, Get, Header, Param, Post } from "@nestjs/common";\n\nimport { CustomersService } from "src/modules/customers/customers.service";\nimport CreateCustomerDto from "src/modules/customers/dto/create-customer.dto";\n\n@Controller("customers")\nexport class CustomersController {\n  constructor(private customerService: CustomersService) {}\n\n  @Header("Message", "Customer created successfully")\n  @Header("Status", "Thanh cong")\n  @Post("/create")\n  createCustomer(@Body() body: CreateCustomerDto) {\n    const createdCustomer = this.customerService.create(body);\n    return createdCustomer;\n  }\n}\n')))}d.isMDXComponent=!0}}]);