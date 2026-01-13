// vitest 配置文件

import { mergeConfig, defineConfig } from "vite";
// 引入 vite.config.js 中导出的配置
import viteConfig from "./vite.config";

export default mergeConfig(
  viteConfig,
  // defineConfig 定一个  config
  defineConfig({
    test: {
      // 这里表示 要使用 jsdom  这个库  目的： 提供一个 浏览器模拟环境
      environment: "jsdom",
    },
  })
);
