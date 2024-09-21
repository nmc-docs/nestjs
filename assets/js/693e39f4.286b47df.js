"use strict";(self.webpackChunkreactjs=self.webpackChunkreactjs||[]).push([[970],{7315:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>a,default:()=>u,frontMatter:()=>o,metadata:()=>i,toc:()=>d});var r=t(4848),s=t(8453);const o={sidebar_position:4},a="Upload v\xe0 validate file",i={id:"upload-file",title:"Upload v\xe0 validate file",description:"C\xe0i \u0111\u1eb7t th\u01b0 vi\u1ec7n",source:"@site/docs/upload-file.md",sourceDirName:".",slug:"/upload-file",permalink:"/nestjs/upload-file",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"S\u1eed d\u1ee5ng bi\u1ebfn m\xf4i tr\u01b0\u1eddng",permalink:"/nestjs/environment-variables"},next:{title:"T\u1ea1o exception filter cho app",permalink:"/nestjs/custom-exception-filter"}},l={},d=[{value:"C\xe0i \u0111\u1eb7t th\u01b0 vi\u1ec7n",id:"c\xe0i-\u0111\u1eb7t-th\u01b0-vi\u1ec7n",level:2},{value:"C\u1ea5u h\xecnh",id:"c\u1ea5u-h\xecnh",level:2},{value:"T\u1ea1o DTO",id:"t\u1ea1o-dto",level:2},{value:"T\u1ea1o controller",id:"t\u1ea1o-controller",level:2},{value:"T\u1ea1o Module",id:"t\u1ea1o-module",level:2},{value:"K\u1ebft qu\u1ea3",id:"k\u1ebft-qu\u1ea3",level:2}];function c(e){const n={code:"code",h1:"h1",h2:"h2",header:"header",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.header,{children:(0,r.jsx)(n.h1,{id:"upload-v\xe0-validate-file",children:"Upload v\xe0 validate file"})}),"\n",(0,r.jsx)(n.h2,{id:"c\xe0i-\u0111\u1eb7t-th\u01b0-vi\u1ec7n",children:"C\xe0i \u0111\u1eb7t th\u01b0 vi\u1ec7n"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"npm install nestjs-form-data\n"})}),"\n",(0,r.jsx)(n.h2,{id:"c\u1ea5u-h\xecnh",children:"C\u1ea5u h\xecnh"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["File ",(0,r.jsx)(n.strong,{children:"app-validation-pipe.ts"}),":"]}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",metastring:'title="app-validation-pipe.ts"',children:'import { Injectable, ValidationPipe } from "@nestjs/common";\n\n@Injectable()\nexport class AppValidationPipe extends ValidationPipe {\n  constructor() {\n    super({\n      whitelist: true,\n      transform: true,\n    });\n  }\n}\n'})}),"\n",(0,r.jsx)(n.h2,{id:"t\u1ea1o-dto",children:"T\u1ea1o DTO"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Ta t\u1ea1o DTO v\xe0 s\u1eed d\u1ee5ng c\xe1c decorator do th\u01b0 vi\u1ec7n cung c\u1ea5p \u0111\u1ec3 validate file:"}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",metastring:'title="change-avatar-body.dto.ts"',children:'import { ApiProperty } from "@nestjs/swagger";\nimport { IsNotEmpty } from "class-validator";\nimport {\n  HasMimeType,\n  IsFile,\n  MaxFileSize,\n  MemoryStoredFile,\n} from "nestjs-form-data";\n\nimport { MAX_AVATAR_FILE_SIZE } from "src/common/constants/file.constant";\n\nexport class ChangeAvatarBodyDTO {\n  @ApiProperty({ type: "string", format: "binary" })\n  @IsNotEmpty()\n  @IsFile({ message: "Avatar must be a file" })\n  @HasMimeType(["image/*"], { message: "Avatar must be an image" })\n  @MaxFileSize(MAX_AVATAR_FILE_SIZE, {\n    message: "File size must be lower than 5MB",\n  })\n  avatar: MemoryStoredFile;\n}\n'})}),"\n",(0,r.jsx)(n.h2,{id:"t\u1ea1o-controller",children:"T\u1ea1o controller"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Ta s\u1eed d\u1ee5ng decorator ",(0,r.jsx)(n.strong,{children:"@FormDataRequest()"})," \u0111\u1ec3 c\xf3 th\u1ec3 l\u1ea5y \u0111\u01b0\u1ee3c c\xe1c gi\xe1 tr\u1ecb t\u1eeb form data t\u1eeb body request:"]}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",metastring:'title="user.controller.ts"',children:'import { FormDataRequest } from "nestjs-form-data";\n\n@Controller("user")\nexport class UserController {\n  @Put("change-avatar")\n  @FormDataRequest()\n  async changeAvatar(@Body() body: ChangeAvatarBodyDTO): Promise<any> {\n    const { avatar } = body;\n    console.log("Avatar: ", avatar);\n    return "Done";\n  }\n}\n'})}),"\n",(0,r.jsx)(n.h2,{id:"t\u1ea1o-module",children:"T\u1ea1o Module"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",metastring:'title="user.module.ts"',children:'import { NestjsFormDataModule } from "nestjs-form-data";\n\nimport { UserController } from "src/modules/apis/user/user.controller";\nimport { UserService } from "src/modules/apis/user/user.service";\n\n@Module({\n  imports: [NestjsFormDataModule],\n  controllers: [UserController],\n  providers: [UserService],\n})\nexport class UserModule {}\n'})}),"\n",(0,r.jsx)(n.h2,{id:"k\u1ebft-qu\u1ea3",children:"K\u1ebft qu\u1ea3"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Sau khi upload file, avatar s\u1ebd l\xe0 m\u1ed9t object c\xf3 d\u1ea1ng nh\u01b0 sau:"}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{alt:"1721665466403",src:t(8432).A+"",width:"1897",height:"265"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Sau \u0111\xf3 ta c\xf3 th\u1ec3 s\u1eed d\u1ee5ng th\u01b0 vi\u1ec7n ",(0,r.jsx)(n.strong,{children:"cloudinary"})," \u0111\u1ec3 upload l\xean cloud v\xe0 l\u1ea5y URL c\u1ee7a file v\u1ec1."]}),"\n"]})]})}function u(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},8432:(e,n,t)=>{t.d(n,{A:()=>r});const r=t.p+"assets/images/1721665466403-65fda5e880104cae73b52f8d5a23f09c.png"},8453:(e,n,t)=>{t.d(n,{R:()=>a,x:()=>i});var r=t(6540);const s={},o=r.createContext(s);function a(e){const n=r.useContext(o);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),r.createElement(o.Provider,{value:n},e.children)}}}]);