// vite 配置文件

// 从 node.js 内置的 url 模块引入 fileURLToPath、 URL
// 这两个函数用于 做URL 相关的处理
// fileURLToPath 用于 将 文件的  URL 格式转换为 本地文件系统的路径格式
//
import { fileURLToPath, URL } from "node:url";

// 从 vite 里面引入  defineConfig, 该方法用于定义 vite 配置
import { defineConfig } from "vite";

// 引入 @vitejs/plugin-vue 这个插件
import vue from "@vitejs/plugin-vue";

// https://vitejs.dev/config/
export default defineConfig({
  // 要使用的插件
  plugins: [vue()],
  resolve: {
    alias: {
      // new URL() 是用于创建一个 URL 对象的构造函数。
      // const myUrl = new URL('https://www.example.com/page?param1=value1&param2=value2');
      /***
       * myUrl = {
          hash: "",
          host: "www.example.com",
          hostname: "www.example.com",
          href: "https://www.example.com/page?param1=value1&param2=value2",
          origin: "https://www.example.com",
          password: "",
          pathname: "/page",
          port: "",
          protocol: "https:",
          search: "?param1=value1&param2=value2",
          searchParams: URLSearchParams {
            size: 2
          },
          username: "",
        }
       * 
       * 
       */

      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
});