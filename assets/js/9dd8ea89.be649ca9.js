"use strict";(self.webpackChunkreactjs=self.webpackChunkreactjs||[]).push([[715],{2641:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>c,contentTitle:()=>i,default:()=>a,frontMatter:()=>r,metadata:()=>l,toc:()=>g});var o=t(4848),s=t(8453);const r={sidebar_position:6},i="Logger",l={id:"logger",title:"Logger",description:"- Logger l\xe0 m\u1ed9t c\xf4ng c\u1ee5 \u0111\u01b0\u1ee3c s\u1eed d\u1ee5ng \u0111\u1ec3 ghi l\u1ea1i c\xe1c th\xf4ng b\xe1o log nh\u1eb1m h\u1ed7 tr\u1ee3 vi\u1ec7c theo d\xf5i v\xe0 g\u1ee1 l\u1ed7i \u1ee9ng d\u1ee5ng.",source:"@site/docs/logger.md",sourceDirName:".",slug:"/logger",permalink:"/nestjs/logger",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:6,frontMatter:{sidebar_position:6},sidebar:"tutorialSidebar",previous:{title:"T\u1ea1o exception filter cho app",permalink:"/nestjs/custom-exception-filter"},next:{title:"Note v\u1ec1 NestJS",permalink:"/nestjs/nestjs-note"}},c={},g=[{value:"C\xe0i \u0111\u1eb7t th\u01b0 vi\u1ec7n",id:"c\xe0i-\u0111\u1eb7t-th\u01b0-vi\u1ec7n",level:2},{value:"Logger options",id:"logger-options",level:2},{value:"Setup logger cho m\xf4i tr\u01b0\u1eddng development v\xe0 production",id:"setup-logger-cho-m\xf4i-tr\u01b0\u1eddng-development-v\xe0-production",level:2},{value:"K\u1ebft h\u1ee3p ghi log trong exception filter",id:"k\u1ebft-h\u1ee3p-ghi-log-trong-exception-filter",level:2},{value:"K\u1ebft qu\u1ea3",id:"k\u1ebft-qu\u1ea3",level:2}];function h(n){const e={admonition:"admonition",code:"code",h1:"h1",h2:"h2",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.R)(),...n.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(e.h1,{id:"logger",children:"Logger"}),"\n",(0,o.jsx)(e.admonition,{type:"info",children:(0,o.jsxs)(e.ul,{children:["\n",(0,o.jsx)(e.li,{children:"Logger l\xe0 m\u1ed9t c\xf4ng c\u1ee5 \u0111\u01b0\u1ee3c s\u1eed d\u1ee5ng \u0111\u1ec3 ghi l\u1ea1i c\xe1c th\xf4ng b\xe1o log nh\u1eb1m h\u1ed7 tr\u1ee3 vi\u1ec7c theo d\xf5i v\xe0 g\u1ee1 l\u1ed7i \u1ee9ng d\u1ee5ng."}),"\n",(0,o.jsx)(e.li,{children:"Ta s\u1ebd s\u1eed d\u1ee5ng Winston \u0111\u1ec3 th\u1ef1c hi\u1ec7n vi\u1ec7c ghi log trong NestJS."}),"\n",(0,o.jsxs)(e.li,{children:["C\xf3 7 c\u1ea5p \u0111\u1ed9 log:","\n",(0,o.jsxs)(e.ul,{children:["\n",(0,o.jsx)(e.li,{children:(0,o.jsx)(e.strong,{children:"error: 0"})}),"\n",(0,o.jsx)(e.li,{children:(0,o.jsx)(e.strong,{children:"warn: 1"})}),"\n",(0,o.jsx)(e.li,{children:(0,o.jsx)(e.strong,{children:"info: 2"})}),"\n",(0,o.jsx)(e.li,{children:(0,o.jsx)(e.strong,{children:"http: 3"})}),"\n",(0,o.jsx)(e.li,{children:(0,o.jsx)(e.strong,{children:"verbose: 4"})}),"\n",(0,o.jsx)(e.li,{children:(0,o.jsx)(e.strong,{children:"debug: 5"})}),"\n",(0,o.jsx)(e.li,{children:(0,o.jsx)(e.strong,{children:"silly: 6"})}),"\n"]}),"\n"]}),"\n"]})}),"\n",(0,o.jsx)(e.h2,{id:"c\xe0i-\u0111\u1eb7t-th\u01b0-vi\u1ec7n",children:"C\xe0i \u0111\u1eb7t th\u01b0 vi\u1ec7n"}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-bash",children:"npm install winston nest-winston\n"})}),"\n",(0,o.jsx)(e.h2,{id:"logger-options",children:"Logger options"}),"\n",(0,o.jsxs)(e.ul,{children:["\n",(0,o.jsx)(e.li,{children:"C\xf3 3 options trong c\u1ea5u h\xecnh logger m\xe0 ta s\u1ebd hay d\xf9ng:"}),"\n"]}),"\n",(0,o.jsxs)(e.table,{children:[(0,o.jsx)(e.thead,{children:(0,o.jsxs)(e.tr,{children:[(0,o.jsx)(e.th,{children:"Options"}),(0,o.jsx)(e.th,{children:"M\xf4 t\u1ea3"})]})}),(0,o.jsxs)(e.tbody,{children:[(0,o.jsxs)(e.tr,{children:[(0,o.jsx)(e.td,{children:"level"}),(0,o.jsxs)(e.td,{children:["- Ch\u1ec9 \u0111\u1ecbnh m\u1ee9c \u0111\u1ed9 \u01b0u ti\xean c\u1ee7a c\xe1c th\xf4ng b\xe1o log. Ch\u1ec9 nh\u1eefng th\xf4ng b\xe1o log c\xf3 m\u1ee9c \u0111\u1ed9 b\u1eb1ng ho\u1eb7c cao h\u01a1n m\u1ee9c \u0111\u1ed9 n\xe0y m\u1edbi \u0111\u01b0\u1ee3c ghi l\u1ea1i. Ch\u1ec9 nh\u1eadn 1 trong\xa07 gi\xe1 tr\u1ecb nh\u01b0 \u1edf b\xean tr\xean \u0111\xe3 gi\u1edbi thi\u1ec7u.",(0,o.jsx)("br",{}),"- V\xed d\u1ee5:\xa0",(0,o.jsx)(e.code,{children:"level: 'info'"})," s\u1ebd ghi l\u1ea1i c\xe1c th\xf4ng b\xe1o t\u1eeb ",(0,o.jsx)(e.code,{children:"info"}),", ",(0,o.jsx)(e.code,{children:"warn"}),", v\xe0 ",(0,o.jsx)(e.code,{children:"error"}),"."]})]}),(0,o.jsxs)(e.tr,{children:[(0,o.jsx)(e.td,{children:"format"}),(0,o.jsxs)(e.td,{children:["- Ch\u1ec9 \u0111\u1ecbnh \u0111\u1ecbnh d\u1ea1ng c\u1ee7a c\xe1c th\xf4ng b\xe1o log tr\u01b0\u1edbc khi ch\xfang \u0111\u01b0\u1ee3c ghi l\u1ea1i.",(0,o.jsx)("br",{}),"- Winston cung c\u1ea5p nhi\u1ec1u \u0111\u1ecbnh d\u1ea1ng c\xf3 s\u1eb5n nh\u01b0 ",(0,o.jsx)(e.code,{children:"json"}),", ",(0,o.jsx)(e.code,{children:"simple"}),", ",(0,o.jsx)(e.code,{children:"timestamp"}),", v\xe0 ",(0,o.jsx)(e.code,{children:"printf"}),".",(0,o.jsx)("br",{}),"- C\xe1c \u0111\u1ecbnh d\u1ea1ng c\xf3 th\u1ec3 \u0111\u01b0\u1ee3c k\u1ebft h\u1ee3p l\u1ea1i v\u1edbi nhau b\u1eb1ng c\xe1ch s\u1eed d\u1ee5ng ",(0,o.jsx)(e.code,{children:"combine"}),"."]})]}),(0,o.jsxs)(e.tr,{children:[(0,o.jsx)(e.td,{children:"transports"}),(0,o.jsxs)(e.td,{children:["- X\xe1c \u0111\u1ecbnh n\u01a1i c\xe1c th\xf4ng b\xe1o log s\u1ebd \u0111\u01b0\u1ee3c ghi l\u1ea1i, v\xed d\u1ee5 nh\u01b0 file, console, HTTP, hay b\u1ea5t k\u1ef3 \u0111\xedch \u0111\u1ebfn n\xe0o kh\xe1c.",(0,o.jsx)("br",{}),"-\xa0M\u1ed9t logger c\xf3 th\u1ec3 c\xf3 nhi\u1ec1u ",(0,o.jsx)(e.code,{children:"transports"}),", v\xe0 m\u1ed7i ",(0,o.jsx)(e.code,{children:"transport"})," c\xf3 th\u1ec3 c\xf3 c\u1ea5u h\xecnh ri\xeang."]})]})]})]}),"\n",(0,o.jsxs)(e.ul,{children:["\n",(0,o.jsx)(e.li,{children:"V\xed d\u1ee5 v\u1ec1 1 logger options:"}),"\n"]}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-ts",children:'const loggerOptions: LoggerOptions = {\n  level: "silly",\n  format: format.combine(\n    format.colorize({ all: true }),\n    format.json(),\n    format.timestamp({ format: "DD/MM/YYYY, HH:mm:ss    " }),\n    format.label({ label: "NestServer" }),\n    format.printf((info) => {\n      //C\u1ea5u h\xecnh format message \u0111\u01b0\u1ee3c ghi ra\n      const { label, timestamp, level, context, message, ...args } = info;\n      return `[${label}] - ${timestamp}[${level}] [${context}] ${message}`;\n    })\n  ),\n  transports: [\n    new transports.Console(),\n    new transports.File({\n      filename: "logs/warn.log",\n      level: "warn",\n      format: getProductionLoggerFormat("warn"),\n    }),\n  ],\n};\n'})}),"\n",(0,o.jsx)(e.admonition,{type:"note",children:(0,o.jsxs)(e.ul,{children:["\n",(0,o.jsxs)(e.li,{children:[(0,o.jsx)(e.code,{children:"level"})," v\xe0 ",(0,o.jsx)(e.code,{children:"format"})," trong options s\u1ebd \xe1p d\u1ee5ng cho t\u1ea5t c\u1ea3 c\xe1c ",(0,o.jsx)(e.code,{children:"transports"})," m\xe0 ta khai b\xe1o"]}),"\n",(0,o.jsxs)(e.li,{children:["Trong m\u1ed7i transport, ta c\xf3 th\u1ec3 c\u1ea5u h\xecnh l\u1ea1i ",(0,o.jsx)(e.code,{children:"level"}),", th\xeam c\xe1c ",(0,o.jsx)(e.code,{children:"format"})," m\u1edbi (format \u0111\u01b0\u1ee3c c\u1ea5u h\xecnh chung v\u1eabn s\u1ebd \u0111\u01b0\u1ee3c \xe1p d\u1ee5ng)."]}),"\n"]})}),"\n",(0,o.jsx)(e.h2,{id:"setup-logger-cho-m\xf4i-tr\u01b0\u1eddng-development-v\xe0-production",children:"Setup logger cho m\xf4i tr\u01b0\u1eddng development v\xe0 production"}),"\n",(0,o.jsxs)(e.ul,{children:["\n",(0,o.jsxs)(e.li,{children:["Sau \u0111\xe2y, ta s\u1ebd t\u1ea1o c\u1ea5u h\xecnh logger cho 2 m\xf4i tr\u01b0\u1eddng l\xe0 development v\xe0 production.","\n",(0,o.jsxs)(e.ul,{children:["\n",(0,o.jsx)(e.li,{children:"\u1ede m\xf4i tr\u01b0\u1eddng development, ch\u1ec9 c\u1ea7n log ra \u1edf console."}),"\n",(0,o.jsx)(e.li,{children:"\u1ede m\xf4i tr\u01b0\u1eddng production, th\u1ef1c t\u1ebf ta s\u1ebd ph\u1ea3i s\u1eed d\u1ee5ng m\u1ed9t s\u1ed1 d\u1ecbch v\u1ee5 h\u1ed7 tr\u1ee3 log \u1edf cloud nh\u01b0 AWS, Azure. Nh\u01b0ng \u1edf \u0111\xe2y, ta ch\u1ec9 \u0111\u01a1n thu\u1ea7n l\xe0 ghi log ra file k\u1ebft h\u1ee3p in ra \u1edf console."}),"\n",(0,o.jsxs)(e.li,{children:["Nh\u01b0 \u0111\xe3 n\xf3i \u1edf tr\xean, v\xec theo t\u1eebng level, ch\u1ec9 nh\u1eefng th\xf4ng b\xe1o log c\xf3 level b\u1eb1ng ho\u1eb7c cao h\u01a1n level hi\u1ec7n t\u1ea1i s\u1ebd \u0111\u01b0\u1ee3c ghi l\u1ea1i. V\xed d\u1ee5: ",(0,o.jsx)(e.code,{children:'level: "info"'})," th\xec s\u1ebd ghi l\u1ea1i c\u1ea3 ",(0,o.jsx)(e.code,{children:"error"})," l\u1eabn ",(0,o.jsx)(e.code,{children:"warn"}),", cho n\xean ta ph\u1ea3i c\u1ea5u h\xecnh l\u1ea1i sao cho level n\xe0o th\xec ch\u1ec9 ghi log \u1edf level \u0111\xf3 th\xf4ng qua h\xe0m ",(0,o.jsx)(e.code,{children:"getProductionLoggerFormat()"}),". N\u1ebfu ",(0,o.jsx)(e.strong,{children:"error"})," th\xec ch\u1ec9 ghi ra ",(0,o.jsx)(e.strong,{children:"error.log"}),", t\u01b0\u01a1ng t\u1ef1 v\u1edbi ",(0,o.jsx)(e.strong,{children:"info"}),", ",(0,o.jsx)(e.strong,{children:"warn"}),". C\xe1c file n\xe0y s\u1ebd l\u01b0u \u1edf th\u01b0 m\u1ee5c ",(0,o.jsx)(e.strong,{children:"logs"})," (th\u01b0 m\u1ee5c n\xe0y n\u1eb1m \u1edf c\u1ea5p \u0111\u1ed9 ngo\xe0i c\xf9ng c\u1ee7a app, hay n\xf3 n\u1eb1m c\xf9ng c\u1ea5p v\u1edbi file ",(0,o.jsx)(e.strong,{children:"package.json"}),")"]}),"\n"]}),"\n"]}),"\n",(0,o.jsxs)(e.li,{children:["T\u1ea1o file t\xean ",(0,o.jsx)(e.strong,{children:"logger.config.ts"}),":"]}),"\n"]}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-ts",children:'import { createLogger, format, LoggerOptions, transports } from "winston";\n\nconst defaultFormat = format.combine(\n  format.json(),\n  format.timestamp({ format: "DD/MM/YYYY, HH:mm:ss    " }),\n  format.label({ label: "NestServer" }),\n  format.printf((info) => {\n    const { label, timestamp, level, context, message, ...args } = info;\n    return `[${label}] - ${timestamp}[${level}] [${context}] ${message}`;\n  })\n);\n\nexport const developmentLoggerOptions: LoggerOptions = {\n  level: "silly",\n  format: format.combine(format.colorize({ all: true }), defaultFormat),\n  transports: [new transports.Console()],\n};\n\n// Ch\u1ec9 ghi l\u1ea1i log theo level t\u01b0\u01a1ng \u1ee9ng\nconst getProductionLoggerFormat = (level: string) => {\n  return format.combine(\n    format((info) => {\n      if (info.level !== level) {\n        return false;\n      }\n      return info;\n    })()\n  );\n};\n\nexport const productionLoggerOptions: LoggerOptions = {\n  level: "info",\n  format: defaultFormat,\n  transports: [\n    new transports.Console(),\n    new transports.File({\n      filename: "logs/error.log",\n      format: getProductionLoggerFormat("error"),\n    }),\n    new transports.File({\n      filename: "logs/info.log",\n      format: getProductionLoggerFormat("info"),\n    }),\n    new transports.File({\n      filename: "logs/warn.log",\n      format: getProductionLoggerFormat("warn"),\n    }),\n  ],\n};\n\nconst loggerOptions =\n  process.env.NODE_ENV === "development"\n    ? developmentLoggerOptions\n    : productionLoggerOptions;\n\nexport const winstonLogger = createLogger(loggerOptions);\n'})}),"\n",(0,o.jsxs)(e.ul,{children:["\n",(0,o.jsxs)(e.li,{children:["\u1ede file ",(0,o.jsx)(e.strong,{children:"main.ts"}),":"]}),"\n"]}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-ts",children:'import { NestFactory } from "@nestjs/core";\nimport { WinstonModule } from "nest-winston";\n\nimport { AppModule } from "./app.module";\nimport { winstonLogger } from "src/common/logger/logger.config";\n\nasync function bootstrap() {\n  const app = await NestFactory.create(AppModule, {\n    logger: WinstonModule.createLogger({ instance: winstonLogger }), // Add custom logger\n  });\n\n  await app.listen(8080);\n}\nbootstrap();\n'})}),"\n",(0,o.jsxs)(e.ul,{children:["\n",(0,o.jsxs)(e.li,{children:["Cu\u1ed1i c\xf9ng, th\xeam ",(0,o.jsx)(e.code,{children:"Logger"})," v\xe0o m\u1ea3ng c\xe1c ",(0,o.jsx)(e.strong,{children:"providers"})," trong file ",(0,o.jsx)(e.strong,{children:"app.module.ts"}),":"]}),"\n"]}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-ts",children:'import { Logger, Module } from "@nestjs/common";\n\n@Module({\n  imports: [],\n  controllers: [],\n  providers: [\n    Logger, //Add this\n  ],\n})\nexport class AppModule {}\n'})}),"\n",(0,o.jsxs)(e.ul,{children:["\n",(0,o.jsx)(e.li,{children:"Gi\u1edd ta c\xf3 th\u1ec3 ghi log nh\u01b0 sau:"}),"\n"]}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-ts",children:'import {\n  BadRequestException,\n  Inject,\n  Injectable,\n  Logger,\n} from "@nestjs/common";\n\n@Injectable()\nexport class AuthService {\n  private readonly logger = new Logger(AuthService.name); // \u0110\u1ea3m b\u1ea3o c\xf3 d\xf2ng n\xe0y \u0111\u1ec3 gi\xe1 tr\u1ecb c\u1ee7a "context" kh\xf4ng b\u1ecb "undefined"\n\n  signup = async () => {\n    this.logger.log("Register successfully");\n  };\n}\n'})}),"\n",(0,o.jsx)(e.h2,{id:"k\u1ebft-h\u1ee3p-ghi-log-trong-exception-filter",children:"K\u1ebft h\u1ee3p ghi log trong exception filter"}),"\n",(0,o.jsxs)(e.ul,{children:["\n",(0,o.jsxs)(e.li,{children:["\u1ede l\u1ea7n tr\u01b0\u1edbc, ta \u0111\xe3 t\u1ea1o m\u1ed9t exception filter \u0111\u1ec3 catch t\u1ea5t c\u1ea3 c\xe1c exception \u0111\u01b0\u1ee3c throw ra trong app, gi\u1edd ta s\u1ebd k\u1ebft h\u1ee3p ghi log (ch\u1ec9 \u0111\u1ed1i v\u1edbi nh\u1eefng l\u1ed7i c\xf3 ",(0,o.jsx)(e.strong,{children:"statusCode"})," l\xe0 ",(0,o.jsx)(e.strong,{children:"500"}),"):"]}),"\n"]}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-ts",children:'import {\n  ArgumentsHost,\n  Catch,\n  ExceptionFilter,\n  HttpException,\n  HttpStatus,\n  Logger,\n} from "@nestjs/common";\nimport { plainToInstance } from "class-transformer";\nimport { Request, Response } from "express";\n\nimport { ExceptionResponse } from "src/common/dto/ExceptionResponse.dto";\n\n@Catch()\nexport class AllExceptionsFilter implements ExceptionFilter {\n  private readonly logger = new Logger(AllExceptionsFilter.name);\n\n  catch(exception: HttpException | Error, host: ArgumentsHost): void {\n    const ctx = host.switchToHttp();\n    const response = ctx.getResponse<Response>();\n    const request = ctx.getRequest<Request>();\n\n    this.handleResponse(request, response, exception);\n    this.handleLogger(request, exception);\n  }\n\n  private handleResponse(\n    request: Request,\n    response: Response,\n    exception: HttpException | Error\n  ): void {\n    let statusCode: number = HttpStatus.INTERNAL_SERVER_ERROR;\n    let message: string = "Internal server error";\n    let responseBody: any = {\n      statusCode,\n      message,\n      path: request.url,\n    };\n\n    if (exception instanceof HttpException) {\n      statusCode = exception.getStatus();\n      const exceptionResponseMessage: string | string[] | undefined = (\n        exception.getResponse() as any\n      )?.message;\n      message = Array.isArray(exceptionResponseMessage)\n        ? exceptionResponseMessage.join(", ")\n        : exceptionResponseMessage || "Unknown error message";\n\n      responseBody = {\n        ...responseBody,\n        ...(exception.getResponse() as object),\n        message,\n        statusCode,\n      };\n    }\n\n    responseBody = plainToInstance(ExceptionResponse, responseBody, {\n      excludeExtraneousValues: true,\n    });\n\n    response.status(statusCode).json(responseBody);\n  }\n\n  private handleLogger(request: Request, exception: HttpException | Error) {\n    const statusCode =\n      exception instanceof HttpException\n        ? exception.getStatus()\n        : HttpStatus.INTERNAL_SERVER_ERROR;\n\n    if (statusCode === HttpStatus.INTERNAL_SERVER_ERROR) {\n      this.logger.error(\n        `${request.method} ${\n          request.url\n        } - ${statusCode} - ${exception.stack?.toString()}`\n      );\n    }\n  }\n}\n'})}),"\n",(0,o.jsx)(e.h2,{id:"k\u1ebft-qu\u1ea3",children:"K\u1ebft qu\u1ea3"}),"\n",(0,o.jsxs)(e.ul,{children:["\n",(0,o.jsxs)(e.li,{children:["\u1ede m\xf4i tr\u01b0\u1eddng ",(0,o.jsx)(e.strong,{children:"development"}),":"]}),"\n"]}),"\n",(0,o.jsx)(e.p,{children:(0,o.jsx)(e.img,{alt:"1719423451369",src:t(4682).A+"",width:"1433",height:"471"})}),"\n",(0,o.jsxs)(e.ul,{children:["\n",(0,o.jsxs)(e.li,{children:["\u1ede m\xf4i tr\u01b0\u1eddng ",(0,o.jsx)(e.strong,{children:"production"})," (ghi log ra file):"]}),"\n"]}),"\n",(0,o.jsx)(e.p,{children:(0,o.jsx)(e.img,{alt:"1719423613644",src:t(6444).A+"",width:"1920",height:"1080"})})]})}function a(n={}){const{wrapper:e}={...(0,s.R)(),...n.components};return e?(0,o.jsx)(e,{...n,children:(0,o.jsx)(h,{...n})}):h(n)}},4682:(n,e,t)=>{t.d(e,{A:()=>o});const o=t.p+"assets/images/1719423451369-5bd20824cc0ef89550796842b72952a1.png"},6444:(n,e,t)=>{t.d(e,{A:()=>o});const o=t.p+"assets/images/1719423613644-34a75e432c1bc95bc3739e69dca96bb8.png"},8453:(n,e,t)=>{t.d(e,{R:()=>i,x:()=>l});var o=t(6540);const s={},r=o.createContext(s);function i(n){const e=o.useContext(r);return o.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function l(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(s):n.components||s:i(n.components),o.createElement(r.Provider,{value:e},n.children)}}}]);