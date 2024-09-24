"use strict";(self.webpackChunkreactjs=self.webpackChunkreactjs||[]).push([[389],{4081:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>i,default:()=>d,frontMatter:()=>r,metadata:()=>c,toc:()=>l});var s=t(4848),o=t(8453);const r={sidebar_position:5},i="T\u1ea1o exception filter cho app",c={id:"custom-exception-filter",title:"T\u1ea1o exception filter cho app",description:"- Tr\u01b0\u1edbc \u0111\xf3, ta \u0111\xe3 bi\u1ebft t\u1ea1o 1 Catch All Exception Filter, gi\u1edd ta s\u1ebd t\u1ea1o n\xf3 \u0111\u1ec3 x\u1eed l\xfd t\u1ea5t c\u1ea3 c\xe1c exception \u0111\u01b0\u1ee3c throw ra trong app m\u1ed9t c\xe1ch c\xf3 hi\u1ec7u qu\u1ea3.",source:"@site/docs/custom-exception-filter.md",sourceDirName:".",slug:"/custom-exception-filter",permalink:"/nestjs/custom-exception-filter",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"Upload v\xe0 validate file",permalink:"/nestjs/upload-file"},next:{title:"Logger",permalink:"/nestjs/logger"}},a={},l=[];function p(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",header:"header",li:"li",pre:"pre",strong:"strong",ul:"ul",...(0,o.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.header,{children:(0,s.jsx)(n.h1,{id:"t\u1ea1o-exception-filter-cho-app",children:"T\u1ea1o exception filter cho app"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Tr\u01b0\u1edbc \u0111\xf3, ta \u0111\xe3 bi\u1ebft t\u1ea1o 1 ",(0,s.jsx)(n.a,{href:"./nestjs-fundamentals/exception-filters#catch-all-exception",children:"Catch All Exception Filter"}),", gi\u1edd ta s\u1ebd t\u1ea1o n\xf3 \u0111\u1ec3 x\u1eed l\xfd t\u1ea5t c\u1ea3 c\xe1c exception \u0111\u01b0\u1ee3c throw ra trong app m\u1ed9t c\xe1ch c\xf3 hi\u1ec7u qu\u1ea3."]}),"\n",(0,s.jsxs)(n.li,{children:["Exception filter ta s\u1ebd t\u1ea1o d\u01b0\u1edbi \u0111\xe2y s\u1ebd:","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Tr\u1ea3 v\u1ec1 error cho client g\u1ed3m 3 tr\u01b0\u1eddng c\u1ed1 \u0111\u1ecbnh: ",(0,s.jsx)(n.strong,{children:"statusCode"}),", ",(0,s.jsx)(n.strong,{children:"message"}),", ",(0,s.jsx)(n.strong,{children:"path"}),". v\xe0 c\xf3 th\u1ec3 c\xf3 th\xeam c\xe1c tr\u01b0\u1eddng t\xf9y ch\u1ec9nh kh\xe1c."]}),"\n",(0,s.jsx)(n.li,{children:"N\u1ebfu m\xe3 l\u1ed7i tr\u1ea3 v\u1ec1 l\xe0 500, th\xec s\u1ebd tr\u1ea3 v\u1ec1 cho client c\xf3 d\u1ea1ng sau, v\xe0 \u1edf server s\u1ebd log ra chi ti\u1ebft l\u1ed7i \u0111\xf3:"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",children:'{\n  "statusCode": 500,\n  "message": "Internal server error",\n  "path": "/api/v1/auth/upload"\n}\n'})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\u0110\u1ea7u ti\xean, t\u1ea1o ",(0,s.jsx)(n.strong,{children:"BaseExceptionResponse.dto.ts"}),":"]}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",metastring:'title="BaseExceptionResponse.dto.ts"',children:'import { Expose } from "class-transformer";\n\nexport class BaseExceptionResponse {\n  @Expose()\n  statusCode: number;\n\n  @Expose()\n  message: string;\n\n  @Expose()\n  path: string;\n}\n'})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["T\u1ea1o ",(0,s.jsx)(n.strong,{children:"all-exception-filter.ts"}),":"]}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",metastring:'title="all-exception-filter.ts"',children:'import {\n  ArgumentsHost,\n  Catch,\n  ExceptionFilter,\n  HttpException,\n  HttpStatus,\n  Logger,\n} from "@nestjs/common";\nimport { plainToInstance } from "class-transformer";\nimport { Request, Response } from "express";\n\nimport { BaseExceptionResponse } from "src/common/dto/BaseExceptionResponse.dto";\n\n@Catch()\nexport class AllExceptionsFilter implements ExceptionFilter {\n  catch(exception: HttpException | Error, host: ArgumentsHost): void {\n    const ctx = host.switchToHttp();\n    const response = ctx.getResponse<Response>();\n    const request = ctx.getRequest<Request>();\n\n    this.handleResponse(request, response, exception);\n  }\n\n  private handleResponse(\n    request: Request,\n    response: Response,\n    exception: HttpException | Error\n  ): void {\n    let statusCode: number = HttpStatus.INTERNAL_SERVER_ERROR;\n    let message: string = "Internal server error";\n    let responseBody: BaseExceptionResponse = {\n      statusCode,\n      message,\n      path: request.url,\n    };\n\n    if (exception instanceof HttpException) {\n      statusCode = exception.getStatus();\n      if (statusCode !== HttpStatus.INTERNAL_SERVER_ERROR) {\n        const exceptionResponseMessage: string | string[] | undefined = (\n          exception.getResponse() as any\n        )?.message;\n        message = Array.isArray(exceptionResponseMessage)\n          ? exceptionResponseMessage.join(", ")\n          : exceptionResponseMessage || "Unknown error message";\n\n        /* \n        - L\u1ea5y ra c\xe1c error fields kh\xe1c m\xe0 ta \u0111\xe3 th\xeam v\xe0o khi throw exception\n        - V\xed d\u1ee5: khi ta throw new BadRequestException({ errorType: \'INVALID_CREDENTIALS\', message: \'Invalid email\' }) th\xec extraErrorFields = { errorType: \'INVALID_CREDENTIALS\', message: \'Invalid email\' }\n        */\n        const { error, ...extraErrorFields } = exception.getResponse() as any;\n\n        responseBody = {\n          ...responseBody,\n          ...extraErrorFields,\n          message,\n          statusCode,\n        };\n      }\n    }\n\n    response.status(statusCode).json(responseBody);\n  }\n}\n'})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Cu\u1ed1i c\xf9ng, \u1edf file ",(0,s.jsx)(n.strong,{children:"app.module.ts"}),":"]}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",metastring:'title="app.module.ts"',children:'import { APP_FILTER } from "@nestjs/core";\n\n@Module({\n  providers: [{ provide: APP_FILTER, useClass: AllExceptionsFilter }],\n})\nexport class AppModule {}\n'})}),"\n",(0,s.jsxs)(n.admonition,{type:"caution",children:[(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:'N\u1ebfu truy\u1ec1n 1 object khi throw exception (ho\u1eb7c custom exception). H\xe3y nh\u1edb lu\xf4n th\xeam tr\u01b0\u1eddng "message". \u0110i\u1ec1u n\xe0y l\xe0 b\u1eaft bu\u1ed9c.'}),"\n"]}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",children:'// \u274c Kh\xf4ng h\u1ee3p l\u1ec7\nthrow new BadRequestException({\n  errorType: ELoginExceptionErrorType.INVALID_2FA_OTP,\n});\n\n// \u2705 H\u1ee3p l\u1ec7\nthrow new BadRequestException({\n  message: "Two factor authenticator code is invalid",\n  errorType: ELoginExceptionErrorType.INVALID_2FA_OTP,\n});\n\n// \u2705 H\u1ee3p l\u1ec7 b\u1edfi v\xec truy\u1ec1n 1 string th\xec NestJS t\u1ef1 g\xe1n n\xf3 l\xe0 thu\u1ed9c t\xednh "message"\nthrow new BadRequestException("Two factor authenticator code is invalid");\n'})})]})]})}function d(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(p,{...e})}):p(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>i,x:()=>c});var s=t(6540);const o={},r=s.createContext(o);function i(e){const n=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);