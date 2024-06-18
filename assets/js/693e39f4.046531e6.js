"use strict";(self.webpackChunkreactjs=self.webpackChunkreactjs||[]).push([[970],{7315:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>o,contentTitle:()=>a,default:()=>p,frontMatter:()=>r,metadata:()=>s,toc:()=>d});var t=i(4848),l=i(8453);const r={sidebar_position:4},a="Upload v\xe0 validate file",s={id:"upload-file",title:"Upload v\xe0 validate file",description:"- Trong NestJS, c\xf3 m\u1ed9t pipe l\xe0 ParseFilePipe v\xe0 m\u1ed9t s\u1ed1 built-in validator h\u1ed7 tr\u1ee3 ta trong vi\u1ec7c upload v\xe0 validate file. Trong b\xe0i vi\u1ebft n\xe0y, ta t\u1eadp trung ch\u1ee7 y\u1ebfu v\xe0o vi\u1ec7c t\u1ef1 t\u1ea1o ra custom pipe v\xe0 custom validator cho vi\u1ec7c x\u1eed l\xfd upload file v\xe0 validate n\xf3.",source:"@site/docs/upload-file.md",sourceDirName:".",slug:"/upload-file",permalink:"/nestjs/upload-file",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"S\u1eed d\u1ee5ng bi\u1ebfn m\xf4i tr\u01b0\u1eddng",permalink:"/nestjs/environment-variables"},next:{title:"Note v\u1ec1 NestJS",permalink:"/nestjs/nestjs-note"}},o={},d=[{value:"C\xe0i \u0111\u1eb7t dependency",id:"c\xe0i-\u0111\u1eb7t-dependency",level:2},{value:"T\u1ea1o validator",id:"t\u1ea1o-validator",level:2},{value:"File required validator",id:"file-required-validator",level:3},{value:"File type validator",id:"file-type-validator",level:3},{value:"File size validator",id:"file-size-validator",level:3},{value:"File count validator",id:"file-count-validator",level:3},{value:"T\u1ea1o pipe",id:"t\u1ea1o-pipe",level:2},{value:"T\u1ea1o decorator",id:"t\u1ea1o-decorator",level:2},{value:"S\u1eed d\u1ee5ng \u1edf trong controller",id:"s\u1eed-d\u1ee5ng-\u1edf-trong-controller",level:2}];function c(e){const n={admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",pre:"pre",strong:"strong",ul:"ul",...(0,l.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"upload-v\xe0-validate-file",children:"Upload v\xe0 validate file"}),"\n",(0,t.jsx)(n.admonition,{type:"info",children:(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Trong NestJS, c\xf3 m\u1ed9t pipe l\xe0 ",(0,t.jsx)(n.strong,{children:"ParseFilePipe"})," v\xe0 m\u1ed9t s\u1ed1 built-in validator h\u1ed7 tr\u1ee3 ta trong vi\u1ec7c upload v\xe0 validate file. Trong b\xe0i vi\u1ebft n\xe0y, ta t\u1eadp trung ch\u1ee7 y\u1ebfu v\xe0o vi\u1ec7c t\u1ef1 t\u1ea1o ra custom pipe v\xe0 custom validator cho vi\u1ec7c x\u1eed l\xfd upload file v\xe0 validate n\xf3."]}),"\n"]})}),"\n",(0,t.jsx)(n.h2,{id:"c\xe0i-\u0111\u1eb7t-dependency",children:"C\xe0i \u0111\u1eb7t dependency"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"npm install file-type-mime\n"})}),"\n",(0,t.jsx)(n.admonition,{type:"info",children:(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Th\u01b0 vi\u1ec7n tr\xean \u0111\u1ec3 validate \u0111\xfang ki\u1ec3u file \u0111\u01b0\u1ee3c upload l\xean (gi\u1ea3 s\u1eed n\u1ebfu ng\u01b0\u1eddi d\xf9ng \u0111\u1ed5i t\xean file mp4 th\xe0nh jpg th\xec khi validate s\u1ebd ph\xe1t hi\u1ec7n ra \u0111\u01b0\u1ee3c)."}),"\n"]})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"npm install -D @types/multer\n"})}),"\n",(0,t.jsx)(n.h2,{id:"t\u1ea1o-validator",children:"T\u1ea1o validator"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Sau \u0111\xe2y, ta s\u1ebd t\u1ea1o 4 validator \u0111\u1ec3:","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Validate b\u1eaft bu\u1ed9c ph\u1ea3i upload file"}),"\n",(0,t.jsx)(n.li,{children:"Validate k\xedch c\u1ee1 t\u1ed1i \u0111a c\u1ee7a file c\u1ea7n upload"}),"\n",(0,t.jsx)(n.li,{children:"Validate s\u1ed1 l\u01b0\u1ee3ng file t\u1ed1i \u0111a \u0111\u01b0\u1ee3c upload"}),"\n",(0,t.jsx)(n.li,{children:"Validate ki\u1ec3u file \u0111\u01b0\u1ee3c upload l\xean"}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\u0110\u1ec3 t\u1ea1o m\u1ed9t custom validator, ta t\u1ea1o m\u1ed9t class v\xe0 ",(0,t.jsx)(n.code,{children:"extends"})," t\u1eeb abstract class ",(0,t.jsx)(n.code,{children:"FileValidator<T>"}),". Abstract class n\xe0y c\xf3 thu\u1ed9c t\xednh v\xe0 ph\u01b0\u01a1ng th\u1ee9c sau v\xe0 ta b\u1eaft bu\u1ed9c ph\u1ea3i \u0111\u1ecbnh ngh\u0129a n\xf3:","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Thu\u1ed9c t\xednh ",(0,t.jsx)(n.code,{children:"validationOptions"}),": c\xf3 ki\u1ec3u generic l\xe0 T"]}),"\n",(0,t.jsxs)(n.li,{children:["Ph\u01b0\u01a1ng th\u1ee9c ",(0,t.jsx)(n.code,{children:"isValid(files: Express.Multer.File | Express.Multer.File[] | undefined)"}),": tr\u1ea3 v\u1ec1 true n\u1ebfu validate th\xe0nh c\xf4ng."]}),"\n",(0,t.jsxs)(n.li,{children:["Ph\u01b0\u01a1ng th\u1ee9c ",(0,t.jsx)(n.code,{children:"buildErrorMessage()"}),": tr\u1ea3 v\u1ec1 m\u1ed9t string l\xe0 error message khi validate th\u1ea5t b\u1ea1i."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"file-required-validator",children:"File required validator"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",children:'import { FileValidator } from "@nestjs/common";\n\ninterface IFileRequiredValidatorOptions {\n  message?: string;\n}\n\nexport class FileRequiredValidator extends FileValidator<IFileRequiredValidatorOptions> {\n  constructor(\n    validationOptions: IFileRequiredValidatorOptions = {\n      message: "File is required",\n    }\n  ) {\n    super(validationOptions);\n  }\n\n  public buildErrorMessage() {\n    return this.validationOptions.message || "File is required";\n  }\n\n  isValid(files: Express.Multer.File | Express.Multer.File[] | undefined) {\n    if (!files) return false;\n    if (Array.isArray(files)) return files.length > 0;\n    return true;\n  }\n}\n'})}),"\n",(0,t.jsx)(n.h3,{id:"file-type-validator",children:"File type validator"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",children:'import { FileValidator } from "@nestjs/common";\nimport * as FileType from "file-type-mime";\n\ninterface IFileTypeValidatorOptions {\n  fileType: string[];\n  message?: string;\n}\n\nexport class FileTypeValidator extends FileValidator<IFileTypeValidatorOptions> {\n  constructor(validationOptions: IFileTypeValidatorOptions) {\n    super(validationOptions);\n  }\n\n  public buildErrorMessage() {\n    return (\n      this.validationOptions.message ||\n      `File type is not allowed, supported types: ${this.validationOptions.fileType.join(\n        ", "\n      )}`\n    );\n  }\n\n  isValid(files: Express.Multer.File | Express.Multer.File[] | undefined) {\n    if (this.validationOptions.fileType.length > 0 && files) {\n      if (Array.isArray(files)) {\n        return files.every((file) => this.validateFileType(file));\n      }\n      return this.validateFileType(files);\n    }\n    return true;\n  }\n\n  private validateFileType(file: Express.Multer.File) {\n    const actualFileType = FileType.parse(file.buffer)?.mime || "";\n    console.log("Actual File Type: ", actualFileType);\n\n    return this.validationOptions.fileType.includes(actualFileType);\n  }\n}\n'})}),"\n",(0,t.jsx)(n.h3,{id:"file-size-validator",children:"File size validator"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",children:'import { FileValidator } from "@nestjs/common";\n\ninterface IFileSizeValidatorOptions {\n  maxSize: number;\n  message?: string;\n}\n\nexport class FileSizeValidator extends FileValidator<IFileSizeValidatorOptions> {\n  constructor(validationOptions: IFileSizeValidatorOptions) {\n    super(validationOptions);\n  }\n\n  public buildErrorMessage() {\n    return (\n      this.validationOptions.message ||\n      `File size is too large, max size: ${\n        this.validationOptions.maxSize / 1024 / 1024\n      }MB`\n    );\n  }\n\n  isValid(files: Express.Multer.File | Express.Multer.File[] | undefined) {\n    if (files) {\n      if (Array.isArray(files)) {\n        return files.every((file) => this.validateFileSize(file));\n      }\n      return this.validateFileSize(files);\n    }\n    return true;\n  }\n\n  private validateFileSize(file: Express.Multer.File) {\n    return file.size <= this.validationOptions.maxSize;\n  }\n}\n'})}),"\n",(0,t.jsx)(n.h3,{id:"file-count-validator",children:"File count validator"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",children:'import { FileValidator } from "@nestjs/common";\n\ninterface IFileCountValidatorOptions {\n  maxCount: number;\n  message?: string;\n}\n\nexport class FileCountValidator extends FileValidator<IFileCountValidatorOptions> {\n  constructor(validationOptions: IFileCountValidatorOptions) {\n    super(validationOptions);\n  }\n\n  public buildErrorMessage() {\n    return (\n      this.validationOptions.message ||\n      `You can only upload a maximum of ${this.validationOptions.maxCount} files.`\n    );\n  }\n\n  isValid(files: Express.Multer.File | Express.Multer.File[] | undefined) {\n    if (files) {\n      if (Array.isArray(files)) {\n        return files.length <= this.validationOptions.maxCount;\n      }\n      return true;\n    }\n    return true;\n  }\n}\n'})}),"\n",(0,t.jsx)(n.h2,{id:"t\u1ea1o-pipe",children:"T\u1ea1o pipe"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Gi\u1edd ta s\u1ebd t\u1ea1o pipe \u0111\u1ec3 validate file c\u1ee7a t\u1eebng field trong request b\u1eb1ng c\xe1c validator ta \u0111\xe3 t\u1ea1o \u1edf tr\xean:"}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",children:'import { FileValidator } from "@nestjs/common";\nimport { IFile } from "@nestjs/common/pipes/file/interfaces";\n\nexport type TFileValidators = {\n  validators: FileValidator<Record<string, any>, IFile>[];\n};\n'})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",children:'import {\n  ArgumentMetadata,\n  BadRequestException,\n  Injectable,\n  PipeTransform,\n} from "@nestjs/common";\n\nimport { TFileValidators } from "src/common/types/pipe.type";\n\n@Injectable()\nexport class ParseFileFieldsPipe<T> implements PipeTransform {\n  constructor(\n    private readonly validationSchemas: { [P in keyof T]: TFileValidators }\n  ) {}\n\n  transform(\n    fileFields: { [K in keyof T]: Express.Multer.File[] },\n    metadata: ArgumentMetadata\n  ) {\n    const fields = Object.keys(this.validationSchemas);\n    fields.forEach((field) => {\n      const schema = this.validationSchemas[field as keyof T];\n      const files = fileFields[field as keyof T];\n      schema.validators.forEach((validator) => {\n        if (!validator.isValid(files)) {\n          throw new BadRequestException((validator as any).buildErrorMessage());\n        }\n      });\n    });\n    return fileFields;\n  }\n}\n'})}),"\n",(0,t.jsx)(n.h2,{id:"t\u1ea1o-decorator",children:"T\u1ea1o decorator"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Ti\u1ebfp theo, ta s\u1ebd t\u1ea1o \u0111\u1ecbnh ngh\u0129a request DTO v\xe0 t\u1ea1o decorator:"}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",children:'import { applyDecorators, UploadedFiles } from "@nestjs/common";\nimport { IsEmail, IsNotEmpty, IsString } from "class-validator";\n\nimport { ParseFileFieldsPipe } from "src/common/pipes/parse-files-fields.pipe";\nimport { FileCountValidator } from "src/common/validators/file-count.validator";\nimport { FileRequiredValidator } from "src/common/validators/file-required.validator";\nimport { FileSizeValidator } from "src/common/validators/file-size.validator";\nimport { FileTypeValidator } from "src/common/validators/file-type.validator";\n\nexport class CreateCustomerDto {\n  @IsNotEmpty()\n  @IsString()\n  name: string;\n\n  @IsNotEmpty()\n  @IsString()\n  @IsEmail()\n  email: string;\n\n  @IsNotEmpty()\n  password: string;\n}\n\nexport class CreateCustomerUploadFilesDto {\n  avatar: Express.Multer.File[];\n  background?: Express.Multer.File[];\n}\n\nexport const CreateCustomerUploadFiles = () => {\n  return applyDecorators(\n    UploadedFiles(\n      new ParseFileFieldsPipe<CreateCustomerUploadFilesDto>({\n        avatar: {\n          validators: [\n            new FileRequiredValidator({\n              message: "Avatar is required",\n            }),\n            new FileCountValidator({\n              maxCount: 1,\n              message: "Avatar must be only one",\n            }),\n            new FileSizeValidator({\n              maxSize: 1024 * 1024,\n              message: "Avatar file size is too large",\n            }),\n            new FileTypeValidator({\n              fileType: ["image/png", "image/jpg", "image/jpeg"],\n              message: "Avatar file type is not allowed",\n            }),\n          ],\n        },\n        background: {\n          validators: [\n            new FileCountValidator({\n              maxCount: 1,\n              message: "Background must be only one",\n            }),\n            new FileSizeValidator({\n              maxSize: 1024 * 1024,\n              message: "Background file size is too large",\n            }),\n            new FileTypeValidator({\n              fileType: ["image/jpg", "image/jpeg"],\n              message: "Background file type is not allowed",\n            }),\n          ],\n        },\n      })\n    ) as PropertyDecorator\n  ) as ParameterDecorator;\n};\n'})}),"\n",(0,t.jsx)(n.h2,{id:"s\u1eed-d\u1ee5ng-\u1edf-trong-controller",children:"S\u1eed d\u1ee5ng \u1edf trong controller"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",children:'import { Body, Controller, Post, UseInterceptors } from "@nestjs/common";\nimport { FileFieldsInterceptor } from "@nestjs/platform-express";\n\nimport { CustomersService } from "src/modules/customers/customers.service";\nimport {\n  CreateCustomerDto,\n  CreateCustomerUploadFiles,\n  CreateCustomerUploadFilesDto,\n} from "src/modules/customers/dto/create-customer.dto";\n\n@Controller("customers")\nexport class CustomersController {\n  constructor(private customerService: CustomersService) {}\n\n  @Post("/create")\n  @UseInterceptors(\n    FileFieldsInterceptor([{ name: "avatar" }, { name: "background" }])\n  )\n  async createCustomer(\n    @Body()\n    body: CreateCustomerDto,\n\n    @CreateCustomerUploadFiles() // Use decorator that we have just created above here\n    files: CreateCustomerUploadFilesDto\n  ) {\n    console.log("File:", files);\n    return this.customerService.create(body);\n  }\n}\n'})})]})}function p(e={}){const{wrapper:n}={...(0,l.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},8453:(e,n,i)=>{i.d(n,{R:()=>a,x:()=>s});var t=i(6540);const l={},r=t.createContext(l);function a(e){const n=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:a(e.components),t.createElement(r.Provider,{value:n},e.children)}}}]);