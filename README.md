# 云托管函数型框架示例代码

该示例代码演示如何通过 `TypeScript` 编写 `云托管函数型框架示例代码` 项目代码。包括项目结构示例，以及调试。

> 注意：该示例项目主要展示一个完整的可构建函数，即，整个项目从根目录开始即为一个函数。
> 实际项目中会包括多个函数，以及项目中其他部分的项目代码，例如项目前端代码。
> 所以，在一个实际的项目中，该代码通常对应 `项目根路径/cloudrunfunctions/func-v2-template` 目录。

更完整的示例项目代码可参考：[TypeScript 示例代码](https://github.com/TencentCloudBase/cloudbase-examples/tree/master/cloudrunfunctions/ts-multiple-functions)

## 如何运行代码？

`Git Clone` 代码到本地后，可通过 `pnpm install` 安装依赖

通过如下命令允许云函数

```sh
npx tcb-ff
```

然后通过浏览器访问 `http://localhost:3000/` 即可查看示例代码运行结果。

请求子路径

```sh
curl http://localhost:3000/
curl http://localhost:3000/echo
curl http://localhost:3000/log
curl http://localhost:3000/ws
curl http://localhost:3000/sse
curl http://localhost:3000/sse-openai
```

## 如何调试代码？

示例代码中已经包含了 `VSCode` 的调试配置，可在 `Run And Debug` 界面选择 `launch-tcb-ff-local` 即可允许云函数并进行断点调试。

如何调试代码可参考：<https://docs.cloudbase.net/cbrf/how-to-debug-functions-code#%E8%B0%83%E8%AF%95-javascript-%E4%BB%A3%E7%A0%81>

## 文件说明

* `cloudbase-functions.json` 多函数配置文件，描述了函数的名称、入口文件、访问路径等信息
* `src/common` 公共模块，名称是任意的
* `src/echo` 回显函数示例
* `src/sse` 实现 `SSE` 的函数示例
* `src/sse-openai` 实现 `sse+openai` 的函数示例
* `src/ws` 实现 `WebSocket` 的函数示例
* `package.json` node.js 项目依赖管理描述文件

> 注意：因为整个项目为一个函数，项目的依赖需要安装到项目根路径下，即安装到 `项目根路径/package.json` 里面，不要安装到 `src` 里面的子函数里面。

Q：为什么 `src/ws` 等函数目录中存在 `package.json` 文件？

主要因为需要 [`type=module|commonjs`](https://nodejs.org/api/packages.html#type) 字段以支持加载不同类型的 `node.js` 模块。

## 如何部署？

可在云开发平台创建 `云托管` 服务后上传本示例代码包进行部署。

注意：如果通过 `Github Download zip` 方式下载的代码包，因多一层目录，需要解压后重新将文件压缩到根路径后再上传，或者上传解压后的目录。

压缩命令示例：

```sh
zip -x '/*.git/*' -x '.gitignore' -x '.DS_Store' -x 'node_modules/*' -r code.zip .
```

## 相关链接

* [腾讯云云开发-云托管函数型框架](https://docs.cloudbase.net/cbrf/intro)
