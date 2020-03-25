### 基于 React + Route + Redux + antd + customize-cra 的脚手架

目录结构：

```
├── public                          公共文件夹
|   ├── favicon.ico
|   ├── index.html
├── src                             源码目录
|   ├── components                  公共组件目录
|   ├── iamges                      公共图片目录
|   ├── pages                       页面文件目录
|   |   ├── home                    home 页面目录
|   |   |   ├── home.tsx            home 页面逻辑
|   |   |   └── home.less           home 页面样式
|   ├── redux                       redux目录
|   |   ├── action                  action目录
|   |   ├── constants               constants目录
|   |   ├── reducers                reducers目录
|   |   ├── types                   types目录，redux类型
|   |   ├── store                   store配置目录
|   ├── utils                       公共方法库
|   ├── app.less                    app项目样式
|   └── app.tsx                     app项目入口
|   ├── index.less                  项目样式
|   └── index.tsx                   项目入口文件
└── package.json
└── tsconfig.json                   ts配置文件
```

### 使用

使用 dotnet 命令，需要安装 dotnet core sdk https://dotnet.microsoft.com/download

安装 facade 命令工具，dotnet tool install --global Facade.ToolCLI
使用命令构建项目 facade init mydemo -t react
