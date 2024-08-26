// 该文件会导出一个工具方式。  用于 组件的安装

import type{ App, Plugin } from 'vue';


// 这里 定义了 一个 新的 SFCWithInstall 的类型
// 这里一个泛型， 代表 的是  一个 即是类型 T 又是 Plugin类型。
// 也就是说  SFCWithInstall 这个类型  既有 T 又有 Plugin。

export type SFCWithInstall<T> = T & Plugin;

// 定义一个方法。  参数是一个组件。   组件是一个  T类型
//   参数是  com
//   参数类型是 T
//   com:T
//   <T>  声明 是一个泛型

// export const withInstall = <T>(com: T)  => {
//   com.install = function(app: App) {
//     // 做一个安装
//     // 做注册
//     app.component(com.name, com);
//   }

//   return com;
// }


// com as SFCWithInstall<T>  是一个 类型断言
// 将 com 断言为  SFCWithInstall<T>类型
// 推测这是一个 自定义的 包含 install 方法 和其他特定属性的   接口或类型。
// 这一步 是为了在后续给com 添加 install 方法时， 确保类型 系统能够识别这个方法的 存在位置。
export const withInstall = <T>(com: T)  => {
  (com as SFCWithInstall<T>).install = function(app: App) {
    // 做一个安装
    // 做注册
    app.component((com as any).name, com as SFCWithInstall<T>);
  }
  return com;
}

// 之后外部在使用这个  withInstall 的时候， 大致是这么使用
// withInstall(MyComponent)   // 这是其实就是对这个组件做了一个增强效果，添加了一个 install 方法
// 之后再其他项目中：

// app.use(MyComponent)