"use strict";(self.webpackChunkreactjs=self.webpackChunkreactjs||[]).push([[141],{3905:(t,e,n)=>{n.d(e,{Zo:()=>c,kt:()=>g});var r=n(7294);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function o(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function l(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?o(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function s(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},o=Object.keys(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var i=r.createContext({}),p=function(t){var e=r.useContext(i),n=e;return t&&(n="function"==typeof t?t(e):l(l({},e),t)),n},c=function(t){var e=p(t.components);return r.createElement(i.Provider,{value:e},t.children)},u="mdxType",m={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},d=r.forwardRef((function(t,e){var n=t.components,a=t.mdxType,o=t.originalType,i=t.parentName,c=s(t,["components","mdxType","originalType","parentName"]),u=p(n),d=a,g=u["".concat(i,".").concat(d)]||u[d]||m[d]||o;return n?r.createElement(g,l(l({ref:e},c),{},{components:n})):r.createElement(g,l({ref:e},c))}));function g(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var o=n.length,l=new Array(o);l[0]=d;var s={};for(var i in e)hasOwnProperty.call(e,i)&&(s[i]=e[i]);s.originalType=t,s[u]="string"==typeof t?t:a,l[1]=s;for(var p=2;p<o;p++)l[p]=n[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},6490:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>i,contentTitle:()=>l,default:()=>m,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var r=n(7462),a=(n(7294),n(3905));const o={sidebar_position:4},l="Pipes",s={unversionedId:"nestjs-fundamentals/pipes",id:"nestjs-fundamentals/pipes",title:"Pipes",description:"Pipe l\xe0 g\xec?",source:"@site/docs/nestjs-fundamentals/pipes.md",sourceDirName:"nestjs-fundamentals",slug:"/nestjs-fundamentals/pipes",permalink:"/nestjs/nestjs-fundamentals/pipes",draft:!1,tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Controllers",permalink:"/nestjs/nestjs-fundamentals/controllers"},next:{title:"Exception Filters",permalink:"/nestjs/nestjs-fundamentals/exception-filters"}},i={},p=[{value:"Pipe l\xe0 g\xec?",id:"pipe-l\xe0-g\xec",level:2},{value:"Built-in pipes",id:"built-in-pipes",level:2},{value:"V\xed d\u1ee5 v\u1ec1 Pipe",id:"v\xed-d\u1ee5-v\u1ec1-pipe",level:2},{value:"ValidationPipe cho object validation",id:"validationpipe-cho-object-validation",level:2},{value:"C\xe1c c\u1ea5p \u0111\u1ed9 s\u1eed d\u1ee5ng Pipe",id:"c\xe1c-c\u1ea5p-\u0111\u1ed9-s\u1eed-d\u1ee5ng-pipe",level:2},{value:"C\u1ea5p \u0111\u1ed9 Global",id:"c\u1ea5p-\u0111\u1ed9-global",level:3},{value:"C\u1ea5p \u0111\u1ed9 Controller",id:"c\u1ea5p-\u0111\u1ed9-controller",level:3},{value:"C\u1ea5p \u0111\u1ed9 method",id:"c\u1ea5p-\u0111\u1ed9-method",level:3},{value:"C\u1ea5p \u0111\u1ed9 request object",id:"c\u1ea5p-\u0111\u1ed9-request-object",level:3},{value:"T\u1ea1o custom pipe",id:"t\u1ea1o-custom-pipe",level:2},{value:"Custom l\u1ea1i pipe s\u1eb5n c\xf3",id:"custom-l\u1ea1i-pipe-s\u1eb5n-c\xf3",level:2}],c={toc:p},u="wrapper";function m(t){let{components:e,...n}=t;return(0,a.kt)(u,(0,r.Z)({},c,n,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"pipes"},"Pipes"),(0,a.kt)("h2",{id:"pipe-l\xe0-g\xec"},"Pipe l\xe0 g\xec?"),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("ul",{parentName:"admonition"},(0,a.kt)("li",{parentName:"ul"},"Trong NestJS, Pipes l\xe0 m\u1ed9t t\xednh n\u0103ng r\u1ea5t h\u1eefu \xedch. Pipes l\xe0 m\u1ed9t c\u01a1 ch\u1ebf \u0111\u1ec3 ki\u1ec3m tra, chuy\u1ec3n \u0111\u1ed5i v\xe0 x\xe1c th\u1ef1c d\u1eef li\u1ec7u tr\u01b0\u1edbc khi \u0111i v\xe0o \u1ee9ng d\u1ee5ng."),(0,a.kt)("li",{parentName:"ul"},"M\u1ed9t s\u1ed1 ch\u1ee9c n\u0103ng ch\xednh c\u1ee7a Pipes trong NestJS:")),(0,a.kt)("ol",{parentName:"admonition"},(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("strong",{parentName:"li"},"Validation")," : Pipes c\xf3 th\u1ec3 \u0111\u01b0\u1ee3c s\u1eed d\u1ee5ng \u0111\u1ec3 x\xe1c th\u1ef1c d\u1eef li\u1ec7u \u0111\u1ea7u v\xe0o c\u1ee7a c\xe1c endpoint, \u0111\u1ea3m b\u1ea3o r\u1eb1ng d\u1eef li\u1ec7u nh\u1eadn \u0111\u01b0\u1ee3c l\xe0 h\u1ee3p l\u1ec7 v\xe0 ph\xf9 h\u1ee3p v\u1edbi c\xe1c quy t\u1eafc \u0111\u1ecbnh s\u1eb5n."),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("strong",{parentName:"li"},"Transformation")," : Pipes c\xf3 th\u1ec3 \u0111\u01b0\u1ee3c s\u1eed d\u1ee5ng \u0111\u1ec3 chuy\u1ec3n \u0111\u1ed5i d\u1eef li\u1ec7u \u0111\u1ea7u v\xe0o th\xe0nh \u0111\u1ecbnh d\u1ea1ng mong mu\u1ed1n tr\u01b0\u1edbc khi n\xf3 \u0111\u01b0\u1ee3c x\u1eed l\xfd b\u1edfi controller."),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("strong",{parentName:"li"},"Error Handling")," : Pipes c\xf3 th\u1ec3 b\u1eaft v\xe0 x\u1eed l\xfd c\xe1c l\u1ed7i x\u1ea3y ra trong qu\xe1 tr\xecnh x\xe1c th\u1ef1c ho\u1eb7c chuy\u1ec3n \u0111\u1ed5i d\u1eef li\u1ec7u, v\xe0 tr\u1ea3 v\u1ec1 c\xe1c th\xf4ng b\xe1o l\u1ed7i ph\xf9 h\u1ee3p.")),(0,a.kt)("ul",{parentName:"admonition"},(0,a.kt)("li",{parentName:"ul"},"Pipes \u0111\u01b0\u1ee3c s\u1eed d\u1ee5ng \u1edf nhi\u1ec1u c\u1ea5p \u0111\u1ed9 trong NestJS, ch\u1eb3ng h\u1ea1n nh\u01b0 \u1edf c\u1ea5p \u0111\u1ed9 global, \u1edf c\u1ea5p \u0111\u1ed9 controller ho\u1eb7c \u1edf c\u1ea5p \u0111\u1ed9 method. Ta c\xf3 th\u1ec3 t\u1ea1o ra c\xe1c Pipes custom \u0111\u1ec3 \u0111\xe1p \u1ee9ng c\xe1c y\xeau c\u1ea7u c\u1ee5 th\u1ec3 c\u1ee7a \u1ee9ng d\u1ee5ng."),(0,a.kt)("li",{parentName:"ul"},"Vi\u1ec7c s\u1eed d\u1ee5ng Pipes gi\xfap t\u0103ng t\xednh \u0111\u1ea3m b\u1ea3o v\xe0 t\xednh nh\u1ea5t qu\xe1n trong \u1ee9ng d\u1ee5ng NestJS, \u0111\u1ed3ng th\u1eddi c\u0169ng l\xe0m cho code tr\u1edf n\xean d\u1ec5 \u0111\u1ecdc v\xe0 b\u1ea3o tr\xec h\u01a1n."))),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("ul",{parentName:"admonition"},(0,a.kt)("li",{parentName:"ul"},"Khi ta s\u1eed d\u1ee5ng pipe s\u1eb5n c\xf3 ho\u1eb7c 1 custom pipe do ta t\u1ea1o ra, m\u1eb7c d\xf9 ch\xfang l\xe0 1 service c\xf3 th\u1ec3 \u0111\u01b0\u1ee3c qu\u1ea3n l\xfd b\u1edfi h\u1ec7 th\u1ed1ng dependency injection c\u1ee7a NestJS (v\xec c\xf3 decorator ",(0,a.kt)("strong",{parentName:"li"},"@Injectable()"),"), nh\u01b0ng ta kh\xf4ng c\u1ea7n ph\u1ea3i cho n\xf3 v\xe0o m\u1ea3ng provider trong file module, n\xf3 s\u1ebd t\u1ef1 \u0111\u1ed9ng \u0111\u01b0\u1ee3c resolve b\u1edfi module."))),(0,a.kt)("h2",{id:"built-in-pipes"},"Built-in pipes"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"D\u01b0\u1edbi \u0111\xe2y l\xe0 m\u1ed9t s\u1ed1 pipe \u0111\u01b0\u1ee3c NestJS d\u1ef1ng s\u1eb5n:")),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Pipe"),(0,a.kt)("th",{parentName:"tr",align:null},"M\xf4 t\u1ea3"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"ParseIntPipe"),(0,a.kt)("td",{parentName:"tr",align:null},"Parse v\xe0 validate cho ki\u1ec3u s\u1ed1 nguy\xean")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"ParseFloatPipe"),(0,a.kt)("td",{parentName:"tr",align:null},"Parse v\xe0 validate cho ki\u1ec3u s\u1ed1 th\u1ef1c")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"ParseBoolPipe"),(0,a.kt)("td",{parentName:"tr",align:null},"Parse v\xe0 validate cho ki\u1ec3u boolean")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"ParseArrayPipe"),(0,a.kt)("td",{parentName:"tr",align:null},"Parse v\xe0 validate cho array")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"ParseUUIDPipe"),(0,a.kt)("td",{parentName:"tr",align:null},"Parse v\xe0 validate cho ki\u1ec3u UUID")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"ParseEnumPipe"),(0,a.kt)("td",{parentName:"tr",align:null},"Parse v\xe0 validate cho ki\u1ec3u enum")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"ParseFilePipe"),(0,a.kt)("td",{parentName:"tr",align:null},"Parse v\xe0 validate cho ki\u1ec3u file")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"DefaultValuePipe"),(0,a.kt)("td",{parentName:"tr",align:null},"Thi\u1ebft l\u1eadp gi\xe1 tr\u1ecb m\u1eb7c \u0111\u1ecbnh")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"ValidationPipe"),(0,a.kt)("td",{parentName:"tr",align:null},"Parse v\xe0 validate cho object")))),(0,a.kt)("h2",{id:"v\xed-d\u1ee5-v\u1ec1-pipe"},"V\xed d\u1ee5 v\u1ec1 Pipe"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"D\u01b0\u1edbi \u0111\xe2y l\xe0 m\u1ed9t v\xed d\u1ee5 v\u1ec1 s\u1eed d\u1ee5ng ",(0,a.kt)("strong",{parentName:"li"},"ParseIntPipe"),' \u0111\u1ec3 validate c\u0169ng nh\u01b0 transform param "id" v\u1ec1 number:')),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},'import { Controller, Get, Param, ParseIntPipe } from "@nestjs/common";\n\nimport { CustomersService } from "src/modules/customers/customers.service";\n\n@Controller("customers")\nexport class CustomersController {\n  constructor(private customerService: CustomersService) {}\n\n  @Get("/:id")\n  getCustomerById(@Param("id", ParseIntPipe) userId: number) {\n    console.log("Typeof id: ", typeof userId); // "number"\n    return this.customerService.getCustomerById(userId);\n  }\n}\n')),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},'Trong v\xed d\u1ee5 tr\xean, n\u1ebfu ta g\u1eedi request \u0111\u1ebfn endpoint: "/customers/15a", s\u1ebd nh\u1eadn l\u1ea1i l\u1ed7i:')),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "message": "Validation failed (numeric string is expected)",\n  "error": "Bad Request",\n  "statusCode": 400\n}\n')),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},'C\xf2n khi g\u1eedi request \u0111\u1ebfn endpoint: "/customers/15" th\xec s\u1ebd tr\u1ea3 v\u1ec1 response, v\xe0 ',(0,a.kt)("strong",{parentName:"li"},"userId")," s\u1ebd c\xf3 ki\u1ec3u l\xe0 number thay v\xec string nh\u01b0 m\u1eb7c \u0111\u1ecbnh do ",(0,a.kt)("strong",{parentName:"li"},"ParseIntPipe")," s\u1ebd t\u1ef1 \u0111\u1ed9ng chuy\u1ec3n v\u1ec1 number."),(0,a.kt)("li",{parentName:"ul"},"\u0110\u1ec3 custom message hay response status code, ta l\xe0m nh\u01b0 sau:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"import {,\n  Controller,\n  ForbiddenException,\n  Get,\n  HttpStatus,\n  Param,\n  ParseIntPipe,\n} from '@nestjs/common';\n\nimport { CustomersService } from 'src/modules/customers/customers.service';\nimport CreateCustomerDto from 'src/modules/customers/dto/create-customer.dto';\n\n@Controller('customers')\nexport class CustomersController {\n  constructor(private customerService: CustomersService) {}\n\n  @Get('/:id')\n  getCustomerById(\n    @Param(\n      'id',\n      new ParseIntPipe({\n        errorHttpStatusCode: HttpStatus.FORBIDDEN,\n        exceptionFactory: () => {\n          throw new ForbiddenException('Invalid ID');\n        }\n      })\n    )\n    userId: number\n  ) {\n    console.log('Typeof id: ', typeof userId); // \"number\"\n    return this.customerService.getCustomerById(userId);\n  }\n}\n\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"V\xed d\u1ee5 sau \u0111\xe2y s\u1eed d\u1ee5ng ",(0,a.kt)("strong",{parentName:"li"},"DefaultValuePipe")," \u0111\u1ec3 thi\u1ebft l\u1eadp gi\xe1 tr\u1ecb m\u1eb7c \u0111\u1ecbnh n\u1ebfu kh\xf4ng truy\u1ec1n v\xe0o:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},'import {\n  Controller,\n  DefaultValuePipe,\n  Get,\n  ParseIntPipe,\n  Query,\n} from "@nestjs/common";\n\nimport { CustomersService } from "src/modules/customers/customers.service";\n\n@Controller("customers")\nexport class CustomersController {\n  constructor(private customerService: CustomersService) {}\n\n  @Get("/")\n  getCustomers(\n    @Query("page", new DefaultValuePipe(1), ParseIntPipe) page: number,\n    @Query("limit", new DefaultValuePipe(10), ParseIntPipe) limit: number\n  ) {\n    return { page, limit };\n  }\n}\n')),(0,a.kt)("h2",{id:"validationpipe-cho-object-validation"},"ValidationPipe cho object validation"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u1ede m\u1ee5c tr\u01b0\u1edbc, ta \u0111\xe3 bi\u1ebft m\u1ed9t s\u1ed1 built-in pipes m\xe0 NestJS cung c\u1ea5p s\u1eb5n. M\u1ed9t s\u1ed1 pipe nh\u01b0 ",(0,a.kt)("strong",{parentName:"li"},"ParseIntPipe"),", ",(0,a.kt)("strong",{parentName:"li"},"ParseFloatPipe"),", ",(0,a.kt)("strong",{parentName:"li"},"ParseBoolPipe")," \u0111\u1ec3 parse c\u0169ng nh\u01b0 validate c\xe1c type nguy\xean th\u1ee7y nh\u01b0 number, boolean,...Trong th\u1ef1c t\u1ebf, ta l\xe0m vi\u1ec7c v\u1edbi ",(0,a.kt)("strong",{parentName:"li"},"ValidationPipe")," \u0111\u1ec3 validate object c\u1ee7a body hay query nhi\u1ec1u h\u01a1n."),(0,a.kt)("li",{parentName:"ul"},"ValidationPipe s\u1eed d\u1ee5ng 2 th\u01b0 vi\u1ec7n sau \u0111\u1ec3 transform v\xe0 validate:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"npm install class-transformer class-validator\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},'Ta t\u1ea1o m\u1ed9t class "CreateCustomerDTO" \u0111\u1ecbnh ngh\u0129a c\xe1c tr\u01b0\u1eddng d\u1eef li\u1ec7u cho body, s\u1eed d\u1ee5ng c\xe1c validation decorator c\u1ee7a th\u01b0 vi\u1ec7n tr\xean \u0111\u1ec3 validate:')),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},'import { IsEmail, IsNotEmpty, IsString } from "class-validator";\n\nclass CreateCustomerDto {\n  @IsNotEmpty()\n  @IsString()\n  name: string;\n\n  @IsNotEmpty()\n  @IsString()\n  @IsEmail()\n  email: string;\n\n  @IsNotEmpty()\n  password: string;\n}\n\nexport default CreateCustomerDto;\n')),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Sau \u0111\xf3 g\u1ecdi \u0111\u1ebfn pipe ",(0,a.kt)("strong",{parentName:"li"},"ValidationPipe"),":")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},'import { Body, Controller, Post, ValidationPipe } from "@nestjs/common";\n\nimport { CustomersService } from "src/modules/customers/customers.service";\nimport CreateCustomerDto from "src/modules/customers/dto/create-customer.dto";\n\n@Controller("customers")\nexport class CustomersController {\n  constructor(private customerService: CustomersService) {}\n\n  @Post("/create")\n  createCustomer(\n    @Body(new ValidationPipe({ whitelist: true }))\n    body: CreateCustomerDto\n  ) {\n    console.log("Data: ", body);\n\n    const createdCustomer = this.customerService.create(body);\n    return createdCustomer;\n  }\n}\n')),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"D\u01b0\u1edbi \u0111\xe2y l\xe0 m\u1ed9t s\u1ed1 options khi kh\u1edfi t\u1ea1o ",(0,a.kt)("strong",{parentName:"li"},"ValidationPipe"),":")),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Option"),(0,a.kt)("th",{parentName:"tr",align:null},"Ki\u1ec3u d\u1eef li\u1ec7u"),(0,a.kt)("th",{parentName:"tr",align:null},"M\xf4 t\u1ea3"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"whitelist"),(0,a.kt)("td",{parentName:"tr",align:null},"boolean"),(0,a.kt)("td",{parentName:"tr",align:null},'N\u1ebfu l\xe0 "true", c\xe1c thu\u1ed9c t\xednh kh\xf4ng \u0111\u01b0\u1ee3c \u0111\u1ecbnh ngh\u0129a s\u1ebd b\u1ecb lo\u1ea1i b\u1ecf. Gi\xe1 tr\u1ecb m\u1eb7c \u0111\u1ecbnh l\xe0 "false"')),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"errorHttpStatusCode"),(0,a.kt)("td",{parentName:"tr",align:null},"number"),(0,a.kt)("td",{parentName:"tr",align:null},"Response HTTP Status Code. Gi\xe1 tr\u1ecb m\u1eb7c \u0111\u1ecbnh l\xe0 400")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"exceptionFactory"),(0,a.kt)("td",{parentName:"tr",align:null},"Function"),(0,a.kt)("td",{parentName:"tr",align:null},"L\xe0 m\u1ed9t h\xe0m nh\u1eadn tham s\u1ed1 l\xe0 m\u1ed9t validation errors v\xe0 return m\u1ed9t exception. D\xf9ng khi ta mu\u1ed1n custom l\u1ed7i tr\u1ea3 v\xe8 cho client khi validate th\u1ea5t b\u1ea1i")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"stopAtFirstError"),(0,a.kt)("td",{parentName:"tr",align:null},"boolean"),(0,a.kt)("td",{parentName:"tr",align:null},'N\u1ebfu l\xe0 "true", s\u1ebd d\u1eebng l\u1ea1i khi validate\xa0th\u1ea5t b\u1ea1i \u1edf thu\u1ed9c t\xednh \u0111\u1ea7u ti\xean. M\u1eb7c \u0111\u1ecbnh l\xe0 "false"')))),(0,a.kt)("h2",{id:"c\xe1c-c\u1ea5p-\u0111\u1ed9-s\u1eed-d\u1ee5ng-pipe"},"C\xe1c c\u1ea5p \u0111\u1ed9 s\u1eed d\u1ee5ng Pipe"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"C\xf3 4 c\u1ea5p \u0111\u1ed9 m\xe0 Pipe \u0111\u01b0\u1ee3c \xe1p d\u1ee5ng:",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"C\u1ea5p \u0111\u1ed9 global: X\xe1c th\u1ef1c d\u1eef li\u1ec7u \u0111\u1ea7u v\xe0o cho t\u1ea5t c\u1ea3 c\xe1c endpoint trong \u1ee9ng d\u1ee5ng."),(0,a.kt)("li",{parentName:"ul"},"C\u1ea5p \u0111\u1ed9 controller: X\xe1c th\u1ef1c d\u1eef li\u1ec7u \u0111\u1ea7u v\xe0o c\u1ee7a t\u1ea5t c\u1ea3 c\xe1c endpoint trong controller."),(0,a.kt)("li",{parentName:"ul"},"C\u1ea5p \u0111\u1ed9 method: X\xe1c th\u1ef1c d\u1eef li\u1ec7u \u0111\u1ea7u v\xe0o c\u1ee7a m\u1ed9t endpoint nh\u1ea5t \u0111\u1ecbnh trong controller."),(0,a.kt)("li",{parentName:"ul"},"C\u1ea5p \u0111\u1ed9 request object: X\xe1c th\u1ef1c d\u1eef li\u1ec7u theo request object \u1edf trong 1 method c\u1ee5 th\u1ec3 trong controller, n\u1ebfu ch\u1ec9 \u0111\u1ecbnh \u1edf body, ch\u1ec9 validate \u1edf body, t\u01b0\u01a1ng t\u1ef1 v\u1edbi query."))),(0,a.kt)("li",{parentName:"ul"},"Trong 4 c\u1ea5p \u0111\u1ed9 tr\xean, 3 c\u1ea5p \u0111\u1ed9 \u0111\u1ea7u s\u1ebd validate d\u1eef li\u1ec7u cho c\u1ea3 BODY + QUERY n\u1ebfu ch\xfang \u0111\u01b0\u1ee3c \u0111\u1ecbnh ngh\u0129a b\u1eb1ng class v\xe0 s\u1eed d\u1ee5ng c\xe1c decorator c\u1ee7a th\u01b0 vi\u1ec7n class validator."),(0,a.kt)("li",{parentName:"ul"},"V\xed d\u1ee5 cho 4 c\u1ea5p \u0111\u1ed9:")),(0,a.kt)("h3",{id:"c\u1ea5p-\u0111\u1ed9-global"},"C\u1ea5p \u0111\u1ed9 Global"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},'import { NestFactory } from "@nestjs/core";\nimport { AppModule } from "./app.module";\nimport { ValidationPipe } from "@nestjs/common";\n\nasync function bootstrap() {\n  const app = await NestFactory.create(AppModule);\n  app.useGlobalPipes(new ValidationPipe());\n  await app.listen(3000);\n}\nbootstrap();\n')),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Ho\u1eb7c c\u1ea5u h\xecnh global trong AppModule:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"@Module({\n  controllers: [],\n  providers: [\n    {\n      provide: APP_PIPE,\n      useClass: RequestValidationPipe,\n    },\n  ],\n})\nexport class AppModule {}\n")),(0,a.kt)("h3",{id:"c\u1ea5p-\u0111\u1ed9-controller"},"C\u1ea5p \u0111\u1ed9 Controller"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},'import {\n  Body,\n  Controller,\n  Post,\n  UsePipes,\n  ValidationPipe,\n} from "@nestjs/common";\n\nimport { CustomersService } from "src/modules/customers/customers.service";\nimport CreateCustomerDto from "src/modules/customers/dto/create-customer.dto";\n\n@Controller("customers")\n@UsePipes(ValidationPipe) // Use for controller\nexport class CustomersController {\n  constructor(private customerService: CustomersService) {}\n\n  @Post("/create")\n  createCustomer(@Body() body: CreateCustomerDto) {\n    const createdCustomer = this.customerService.create(body);\n    return createdCustomer;\n  }\n\n  @Post("/login")\n  loginCustomer(@Body() body: CreateCustomerDto) {\n    const loginCustomer = this.customerService.create(body);\n    return loginCustomer;\n  }\n}\n')),(0,a.kt)("h3",{id:"c\u1ea5p-\u0111\u1ed9-method"},"C\u1ea5p \u0111\u1ed9 method"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},'import {\n  Body,\n  Controller,\n  Post,\n  UsePipes,\n  ValidationPipe,\n} from "@nestjs/common";\n\nimport { CustomersService } from "src/modules/customers/customers.service";\nimport CreateCustomerDto from "src/modules/customers/dto/create-customer.dto";\n\n@Controller("customers")\nexport class CustomersController {\n  constructor(private customerService: CustomersService) {}\n\n  @UsePipes(ValidationPipe) // Use for specific endpoint, validate both "body" and "query"\n  @Post("/create")\n  createCustomer(\n    @Body() body: CreateCustomerDto,\n    @Query() query: CreateCustomerDto\n  ) {\n    const createdCustomer = this.customerService.create(body);\n    return createdCustomer;\n  }\n\n  @Post("/login")\n  loginCustomer(@Body() body: CreateCustomerDto) {\n    const loginCustomer = this.customerService.create(body);\n    return loginCustomer;\n  }\n}\n')),(0,a.kt)("h3",{id:"c\u1ea5p-\u0111\u1ed9-request-object"},"C\u1ea5p \u0111\u1ed9 request object"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},'import { Body, Controller, Post, Query, ValidationPipe } from "@nestjs/common";\n\nimport { CustomersService } from "src/modules/customers/customers.service";\nimport CreateCustomerDto from "src/modules/customers/dto/create-customer.dto";\n\n@Controller("customers")\nexport class CustomersController {\n  constructor(private customerService: CustomersService) {}\n\n  @Post("/create")\n  createCustomer(\n    @Body(ValidationPipe) body: CreateCustomerDto, // Only validate "body", not include "query"\n    @Query() query: CreateCustomerDto\n  ) {\n    const createdCustomer = this.customerService.create(body);\n    return createdCustomer;\n  }\n}\n')),(0,a.kt)("h2",{id:"t\u1ea1o-custom-pipe"},"T\u1ea1o custom pipe"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u0110\u1ec3 t\u1ea1o m\u1ed9t pipe m\u1edbi, ta ph\u1ea3i implements ",(0,a.kt)("strong",{parentName:"li"},"PipeTransform< T, U >"),". V\u1edbi ",(0,a.kt)("strong",{parentName:"li"},"T")," l\xe0 ki\u1ec3u d\u1eef li\u1ec7u \u0111\u1ea7u v\xe0o, ",(0,a.kt)("strong",{parentName:"li"},"U")," l\xe0 ki\u1ec3u d\u1eef li\u1ec7u \u0111\u1ea7u ra sau khi transform."),(0,a.kt)("li",{parentName:"ul"},"V\xed d\u1ee5 d\u01b0\u1edbi \u0111\xe2y ta s\u1ebd t\u1ea1o m\u1ed9t pipe \u0111\u01a1n gi\u1ea3n gi\u1ed1ng ",(0,a.kt)("strong",{parentName:"li"},"ParseIntPipe"),":")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},'import {\n  ArgumentMetadata,\n  BadRequestException,\n  Injectable,\n  PipeTransform,\n} from "@nestjs/common";\n\n@Injectable()\nexport class ParseIntPipe implements PipeTransform<string, number> {\n  transform(value: string, metadata: ArgumentMetadata): number {\n    const val = parseInt(value, 10);\n    if (isNaN(val)) {\n      throw new BadRequestException("Validation failed");\n    }\n    return val;\n  }\n}\n')),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"V\xed d\u1ee5 ti\u1ebfp l\xe0 t\u1ea1o 1 pipe t\u01b0\u01a1ng t\u1ef1 ",(0,a.kt)("strong",{parentName:"li"},"ValidationPipe"),":")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},'import {\n  PipeTransform,\n  Injectable,\n  ArgumentMetadata,\n  BadRequestException,\n} from "@nestjs/common";\nimport { validate } from "class-validator";\nimport { plainToInstance } from "class-transformer";\n\n@Injectable()\nexport class ValidationPipe implements PipeTransform<any> {\n  async transform(value: any, { metatype }: ArgumentMetadata) {\n    if (!metatype || !this.toValidate(metatype)) {\n      return value;\n    }\n    const object = plainToInstance(metatype, value);\n    const errors = await validate(object);\n    if (errors.length > 0) {\n      throw new BadRequestException("Validation failed");\n    }\n    return value;\n  }\n\n  private toValidate(metatype: Function): boolean {\n    const types: Function[] = [String, Boolean, Number, Array, Object];\n    return !types.includes(metatype);\n  }\n}\n')),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("ul",{parentName:"admonition"},(0,a.kt)("li",{parentName:"ul"},"Gi\u1ed1ng nh\u01b0 controller, ta c\xf3 th\u1ec3 ",(0,a.kt)("strong",{parentName:"li"},"inject dependencies")," v\xe0o pipe th\xf4ng qua ",(0,a.kt)("strong",{parentName:"li"},"constructor()")))),(0,a.kt)("h2",{id:"custom-l\u1ea1i-pipe-s\u1eb5n-c\xf3"},"Custom l\u1ea1i pipe s\u1eb5n c\xf3"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u0110\u1ec3 t\xf9y ch\u1ec9nh l\u1ea1i pipe s\u1eb5n c\xf3 do NestJS cung c\u1ea5p, ta ch\u1ec9 c\u1ea7n extends l\u1ea1i n\xf3 v\xe0 custom l\u1ea1i thu\u1ed9c t\xednh, hay ph\u01b0\u01a1ng th\u1ee9c c\u1ee7a n\xf3."),(0,a.kt)("li",{parentName:"ul"},"V\xed d\u1ee5 sau ta s\u1ebd custom l\u1ea1i ValidationPipe (v\xec ta mu\u1ed1n custom l\u1ea1i message tr\u1ea3 v\u1ec1 l\xe0 1 string, ch\u1ee9 kh\xf4ng ph\u1ea3i m\u1ea3ng nh\u01b0 b\xecnh th\u01b0\u1eddng):")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},'import {\n  BadRequestException,\n  HttpStatus,\n  Injectable,\n  ValidationPipe,\n} from "@nestjs/common";\n\n@Injectable()\nexport class RequestValidationPipe extends ValidationPipe {\n  constructor() {\n    super({\n      whitelist: true,\n      stopAtFirstError: true,\n      transform: true,\n      transformOptions: { enableImplicitConversion: true },\n      exceptionFactory: (errors) => {\n        const firstErrorMessage = Object.values(\n          errors[0]?.constraints as object\n        ).reverse()[0];\n        return new BadRequestException({\n          statusCode: HttpStatus.BAD_REQUEST,\n          message: firstErrorMessage,\n          error: "Bad Requestssss",\n        });\n      },\n    });\n  }\n}\n')))}m.isMDXComponent=!0}}]);