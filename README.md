# ti-ui
UI组件库


技术栈

vue3
TypeScript
Eslint
Prettier
Sass
Vitest
Rollup
monorepo   单仓多库


搭建项目框架
monorepo: 
      pnpm + workspace 的方式来进行搭建


documents  文档

packages   组件库代码目录





在根目录下  创建  pnpm-workspace.yaml 文件

```
# 用到指定那些包 放到公众空间里面

packages:
  - packages/*
  - documents
  # 示例
  - examples
  # 不包括 test 内容
  - "!**/test/**"


```



安装依赖
<!-- -D  开发依赖 -->
<!-- -w  安装工作空间  运行依赖 -->
```
pnpm add typescript -D -w
pnpm add @ti-ui/components @ti-ui/theme-chalk @ti-ui/utils -w


```