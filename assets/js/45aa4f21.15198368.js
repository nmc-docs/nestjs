"use strict";(self.webpackChunkreactjs=self.webpackChunkreactjs||[]).push([[904],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>v});var r=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var c=r.createContext({}),l=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},p=function(e){var n=l(e.components);return r.createElement(c.Provider,{value:n},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=l(t),d=o,v=u["".concat(c,".").concat(d)]||u[d]||m[d]||a;return t?r.createElement(v,s(s({ref:n},p),{},{components:t})):r.createElement(v,s({ref:n},p))}));function v(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,s=new Array(a);s[0]=d;var i={};for(var c in n)hasOwnProperty.call(n,c)&&(i[c]=n[c]);i.originalType=e,i[u]="string"==typeof e?e:o,s[1]=i;for(var l=2;l<a;l++)s[l]=t[l];return r.createElement.apply(null,s)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},42:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>s,default:()=>m,frontMatter:()=>a,metadata:()=>i,toc:()=>l});var r=t(7462),o=(t(7294),t(3905));const a={sidebar_position:1},s="Providers",i={unversionedId:"nestjs-fundamentals/provider",id:"nestjs-fundamentals/provider",title:"Providers",description:"Dependency Injection (DI) l\xe0 g\xec?",source:"@site/docs/nestjs-fundamentals/provider.md",sourceDirName:"nestjs-fundamentals",slug:"/nestjs-fundamentals/provider",permalink:"/nestjs/nestjs-fundamentals/provider",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"NestJS Fundamentals",permalink:"/nestjs/category/nestjs-fundamentals"}},c={},l=[{value:"Dependency Injection (DI) l\xe0 g\xec?",id:"dependency-injection-di-l\xe0-g\xec",level:2},{value:"\u0110\u1ecbnh ngh\u0129a Provider",id:"\u0111\u1ecbnh-ngh\u0129a-provider",level:2},{value:"C\xe1c lo\u1ea1i Provider th\u01b0\u1eddng d\xf9ng trong NestJS",id:"c\xe1c-lo\u1ea1i-provider-th\u01b0\u1eddng-d\xf9ng-trong-nestjs",level:2},{value:"useClass",id:"useclass",level:3},{value:"useValue",id:"usevalue",level:3},{value:"useFactory",id:"usefactory",level:3}],p={toc:l},u="wrapper";function m(e){let{components:n,...t}=e;return(0,o.kt)(u,(0,r.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"providers"},"Providers"),(0,o.kt)("h2",{id:"dependency-injection-di-l\xe0-g\xec"},"Dependency Injection (DI) l\xe0 g\xec?"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Ta c\xf3 v\xed d\u1ee5 sau:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"class UserService {\n  private authService: AuthService;\n\n  constructor(authService: AuthService) {\n    this.authService = authService;\n  }\n\n  async login(username: string, password: string): Promise<User> {\n    const token = await this.authService.authenticate(username, password);\n    const user = await this.getUser(token);\n    return user;\n  }\n}\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},'class AuthService {\n  private databaseService: DatabaseService;\n\n  constructor(databaseService: DatabaseService) {\n    this.databaseService = databaseService;\n  }\n\n  async authenticate(username: string, password: string): Promise<string> {\n    const isValid = await this.databaseService.verifyCredentials(\n      username,\n      password\n    );\n    if (isValid) {\n      return this.generateToken(username);\n    } else {\n      throw new Error("Invalid credentials");\n    }\n  }\n\n  private generateToken(username: string): string {\n    // Logic to generate an authentication token\n    return "ABC123";\n  }\n}\n')),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},'class DatabaseService {\n  async verifyCredentials(\n    username: string,\n    password: string\n  ): Promise<boolean> {\n    // Logic to check the database for valid credentials\n    return username === "admin" && password === "password";\n  }\n}\n')),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("ul",{parentName:"admonition"},(0,o.kt)("li",{parentName:"ul"},"Trong v\xed d\u1ee5 tr\xean, ta th\u1ea5y UserService ph\u1ee5 thu\u1ed9c v\xe0o AuthService, AuthService sau \u0111\xf3 ph\u1ee5 thu\u1ed9c v\xe0o DatabaseService."),(0,o.kt)("li",{parentName:"ul"},"V\u1ea5n \u0111\u1ec1 l\xe0 khi 1 service c\xf3 qu\xe1 nhi\u1ec1u s\u1ef1 ph\u1ee5 thu\u1ed9c v\xe0o c\xe1c service kh\xe1c, vi\u1ec7c qu\u1ea3n l\xfd c\u0169ng nh\u01b0 t\u1ed5 ch\u1ee9c code g\u1eb7p kh\xf3 kh\u0103n, v\xec v\u1eady k\u1ef9 thu\u1eadt Dependency Injection l\xe0 gi\u1ea3i ph\xe1p."))),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("ul",{parentName:"admonition"},(0,o.kt)("li",{parentName:"ul"},"Dependency Injection (DI) l\xe0 m\u1ed9t m\xf4 h\xecnh thi\u1ebft k\u1ebf ph\u1ea7n m\u1ec1m trong \u0111\xf3 c\xe1c \u0111\u1ed1i t\u01b0\u1ee3ng nh\u1eadn \u0111\u01b0\u1ee3c c\xe1c \u0111\u1ed1i t\u01b0\u1ee3ng ph\u1ee5 thu\u1ed9c c\u1ee7a ch\xfang th\xf4ng qua m\u1ed9t c\u01a1 ch\u1ebf b\xean ngo\xe0i thay v\xec t\u1ef1 t\u1ea1o ra ch\xfang."),(0,o.kt)("li",{parentName:"ul"},'Trong DI, thay v\xec t\u1ea1o ra c\xe1c \u0111\u1ed1i t\u01b0\u1ee3ng ph\u1ee5 thu\u1ed9c trong b\u1ea3n th\xe2n \u0111\u1ed1i t\u01b0\u1ee3ng s\u1eed d\u1ee5ng ch\xfang, c\xe1c \u0111\u1ed1i t\u01b0\u1ee3ng ph\u1ee5 thu\u1ed9c n\xe0y \u0111\u01b0\u1ee3c cung c\u1ea5p b\u1edfi m\u1ed9t "Injector" ho\u1eb7c "Container" b\xean ngo\xe0i (Trong NestJS n\xf3 g\u1ecdi l\xe0 Nest IoC Container). \u0110i\u1ec1u n\xe0y gi\xfap gi\u1ea3m s\u1ef1 k\u1ebft d\xednh gi\u1eefa c\xe1c th\xe0nh ph\u1ea7n trong \u1ee9ng d\u1ee5ng.'),(0,o.kt)("li",{parentName:"ul"},"C\xe1c th\xe0nh ph\u1ea7n \u0111\u01b0\u1ee3c \u0111\xe1nh d\u1ea5u l\xe0 \u0111\u1ed1i t\u01b0\u1ee3ng ph\u1ee5 thu\u1ed9c g\u1ecdi l\xe0 m\u1ed9t ",(0,o.kt)("strong",{parentName:"li"},"Provider")))),(0,o.kt)("h2",{id:"\u0111\u1ecbnh-ngh\u0129a-provider"},"\u0110\u1ecbnh ngh\u0129a Provider"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Trong NestJS, ta c\xf3 th\u1ec3 \u0111\xe1nh d\u1ea5u m\u1ed9t service l\xe0 m\u1ed9t provider th\xf4ng qua ",(0,o.kt)("strong",{parentName:"li"},"@Injectable()"),", v\xed d\u1ee5:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},'import { Injectable } from "@nestjs/common";\nimport { Cat } from "./interfaces/cat.interface";\n\n@Injectable()\nexport class CatsService {\n  private readonly cats: Cat[] = [];\n\n  findAll(): Cat[] {\n    return this.cats;\n  }\n}\n')),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"V\xe0 ta s\u1eed d\u1ee5ng CatsService n\xe0y \u1edf trong CatsController:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},'import { Controller, Get } from "@nestjs/common";\nimport { CatsService } from "./cats.service";\nimport { Cat } from "./interfaces/cat.interface";\n\n@Controller("cats")\nexport class CatsController {\n  constructor(private catsService: CatsService) {}\n\n  @Get()\n  async findAll(): Promise<Cat[]> {\n    return this.catsService.findAll();\n  }\n}\n')),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},'Cu\u1ed1i c\xf9ng, ta ph\u1ea3i "\u0111\u0103ng k\xfd" (register) provider CatsService n\xe0y v\u1edbi Nest IoC Container th\xf4ng qua providers trong CatsModule:')),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},'import { Module } from "@nestjs/common";\nimport { CatsController } from "./cats/cats.controller";\nimport { CatsService } from "./cats/cats.service";\n\n@Module({\n  controllers: [CatsController],\n  providers: [CatsService],\n})\nexport class CatsModule {}\n')),(0,o.kt)("h2",{id:"c\xe1c-lo\u1ea1i-provider-th\u01b0\u1eddng-d\xf9ng-trong-nestjs"},"C\xe1c lo\u1ea1i Provider th\u01b0\u1eddng d\xf9ng trong NestJS"),(0,o.kt)("h3",{id:"useclass"},"useClass"),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("ul",{parentName:"admonition"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"useClass")," provider trong NestJS l\xe0 m\u1ed9t c\xe1ch \u0111\u1ec3 cung c\u1ea5p m\u1ed9t class nh\u01b0 m\u1ed9t provider cho m\u1ed9t module. N\xf3 cho ph\xe9p b\u1ea1n ch\u1ec9 \u0111\u1ecbnh m\u1ed9t class s\u1ebd \u0111\u01b0\u1ee3c s\u1eed d\u1ee5ng khi m\u1ed9t provider \u0111\u01b0\u1ee3c y\xeau c\u1ea7u."))),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"V\xed d\u1ee5 \u1edf b\xean tr\xean l\xe0 m\u1ed9t minh h\u1ecda cho vi\u1ec7c s\u1eed d\u1ee5ng ",(0,o.kt)("strong",{parentName:"li"},"useClass"),", n\u1ebfu vi\u1ebft r\xf5 ra th\xec l\xe0:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},'import { Module } from "@nestjs/common";\nimport { CatsController } from "./cats/cats.controller";\nimport { CatsService } from "./cats/cats.service";\n\n@Module({\n  controllers: [CatsController],\n  providers: [\n    {\n      provide: CatsService,\n      useClass: CatsService,\n    },\n  ],\n})\nexport class CatsModule {}\n')),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u1ede thu\u1ed9c t\xednh ",(0,o.kt)("inlineCode",{parentName:"li"},"provide"),", ta c\xf3 th\u1ec3 ch\u1ec9 \u0111\u1ecbnh m\u1ed9t key (ki\u1ec3u string) cho n\xf3 thay v\xec \u0111\u1ec3 c\u1ea3 m\u1ed9t class service nh\u01b0 v\u1eady, v\xe0 n\u1ebfu mu\u1ed1n s\u1eed d\u1ee5ng provider n\xe0y, ta s\u1eed d\u1ee5ng ",(0,o.kt)("strong",{parentName:"li"},"@Inject(TOKEN_NAME)"),":")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},'@Module({\n  controllers: [CustomersController],\n  providers: [\n    {\n      provide: "CUSTOMERS_SERVICE",\n      useClass: CustomersService,\n    },\n  ],\n})\nexport class CustomersModule {}\n')),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},'@Controller("customers")\nexport class CustomersController {\n  constructor(\n    @Inject("CUSTOMERS_SERVICE") private customerService: CustomersService\n  ) {}\n  @Get("")\n  getAllCustomers() {\n    const customers = this.customerService.findAll();\n    return customers;\n  }\n}\n')),(0,o.kt)("h3",{id:"usevalue"},"useValue"),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("ul",{parentName:"admonition"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"useValue")," provider trong NestJS cho ph\xe9p b\u1ea1n cung c\u1ea5p m\u1ed9t gi\xe1 tr\u1ecb c\u1ee5 th\u1ec3 (literal value) cho m\u1ed9t provider. \u0110i\u1ec1u n\xe0y r\u1ea5t h\u1eefu \xedch khi b\u1ea1n mu\u1ed1n cung c\u1ea5p m\u1ed9t c\u1ea5u h\xecnh, m\u1ed9t constant, ho\u1eb7c m\u1ed9t mock object cho c\xe1c unit test."))),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"V\xed d\u1ee5:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},'export interface IExampleUseValue {\n  apiUrl: string;\n  host: number;\n}\n\n@Module({\n  controllers: [CustomersController],\n  providers: [\n    {\n      provide: "EXAMPLE_USE_VALUE",\n      useValue: {\n        apiUrl: "http://example.com",\n        host: 3000,\n      } as IExampleUseValue,\n    },\n  ],\n})\nexport class CustomersModule {}\n')),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},'@Controller("customers")\nexport class CustomersController {\n  constructor(\n    @Inject("EXAMPLE_USE_VALUE") private exampleUseValue: IExampleUseValue\n  ) {}\n  @Get("")\n  getAllCustomers() {\n    console.log(this.exampleUseValue);\n  }\n}\n')),(0,o.kt)("h3",{id:"usefactory"},"useFactory"),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("ul",{parentName:"admonition"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"useFactory")," provider trong NestJS l\xe0 m\u1ed9t c\xe1ch r\u1ea5t m\u1ea1nh m\u1ebd \u0111\u1ec3 cung c\u1ea5p c\xe1c provider \u0111\u1ed9ng. N\xf3 cho ph\xe9p vi\u1ebft m\u1ed9t h\xe0m factory \u0111\u1ec3 t\u1ea1o ra instance c\u1ee7a provider, c\xf3 th\u1ec3 s\u1eed d\u1ee5ng c\xe1c dependencies kh\xe1c v\xe0 c\xe1c tham s\u1ed1 c\u1ea5u h\xecnh l\xe0m tham s\u1ed1."),(0,o.kt)("li",{parentName:"ul"},"Provider ch\xednh l\xe0 gi\xe1 tr\u1ecb \u0111\u01b0\u1ee3c tr\u1ea3 v\u1ec1 t\u1eeb h\xe0m factory (c\xf3 th\u1ec3 l\xe0 m\u1ed9t instance)"),(0,o.kt)("li",{parentName:"ul"},"H\xe0m factory c\xf3 th\u1ec3 nh\u1eadn tham s\u1ed1 \u0111\u1ea7u v\xe0o, v\xe0 ch\xfang ",(0,o.kt)("strong",{parentName:"li"},"PH\u1ea2I L\xc0 PROVIDER"),", v\xe0 ph\u1ea3i \u0111\u01b0\u1ee3c inject v\xe0o."))),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"V\xed d\u1ee5:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},'const connectionProvider = {\n  provide: "CONNECTION",\n  useFactory: (optionsProvider: OptionsProvider, optionalProvider?: string) => {\n    const options = optionsProvider.get();\n    return new DatabaseConnection(options);\n  },\n  inject: [OptionsProvider, { token: "SomeOptionalProvider", optional: true }],\n  //       \\_____________/            \\__________________/\n  //        This provider              The provider with this\n  //        is mandatory.              token can resolve to `undefined`.\n};\n\n@Module({\n  providers: [\n    connectionProvider,\n    OptionsProvider,\n    { provide: "SomeOptionalProvider", useValue: "anything" },\n  ],\n})\nexport class AppModule {}\n')),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"V\xed d\u1ee5 ti\u1ebfp:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},'import { DataSource } from "typeorm";\nimport { Module } from "@nestjs/common";\n\nconst databaseProviders = [\n  {\n    provide: "DATA_SOURCE",\n    useFactory: async () => {\n      const dataSource = new DataSource({\n        type: "mysql",\n        host: "localhost",\n        port: 3306,\n        username: "root",\n        password: "root",\n        database: "test",\n        entities: [__dirname + "/../**/*.entity{.ts,.js}"],\n        synchronize: true,\n      });\n\n      return dataSource.initialize();\n    },\n  },\n];\n\n@Module({\n  providers: [...databaseProviders],\n  exports: [...databaseProviders],\n})\nexport class DatabaseModule {}\n')),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},'import { Module } from "@nestjs/common";\nimport { DatabaseModule } from "../database/database.module";\nimport { photoProviders } from "./photo.providers";\nimport { PhotoService } from "./photo.service";\n\n@Module({\n  imports: [DatabaseModule],\n  providers: [\n    {\n      provide: "PHOTO_REPOSITORY",\n      useFactory: (dataSource: DataSource) => dataSource.getRepository(Photo),\n      inject: ["DATA_SOURCE"], // Inject provider theo t\xean token\n    },\n    ,\n    PhotoService,\n  ],\n})\nexport class PhotoModule {}\n')),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},'import { Injectable, Inject } from "@nestjs/common";\nimport { Repository } from "typeorm";\nimport { Photo } from "./photo.entity";\n\n@Injectable()\nexport class PhotoService {\n  constructor(\n    @Inject("PHOTO_REPOSITORY")\n    private photoRepository: Repository<Photo>\n  ) {}\n\n  async findAll(): Promise<Photo[]> {\n    return this.photoRepository.find();\n  }\n}\n')))}m.isMDXComponent=!0}}]);