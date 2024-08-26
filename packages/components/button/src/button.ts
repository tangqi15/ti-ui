// 该文件用于定义 button 的props 属性
// 将 props 定义为 button 类型

// ExtractPropTypes 是 vue3 所提供的一个工具类型
// 用于从 vue 组件的 props 对象中 提取 ts 类型
import type { ExtractPropTypes } from "vue";

// 定义props
export const buttonProps = {
  type: {
    type: String,
    default: "default",
  },
  plain: {
    type: Boolean,
    default: false,
  },
  round: {
    type: Boolean,
    default: false,
  },
  circle: {
    type: Boolean,
    default: false,
  },
  disabled: {
    type: Boolean,
    default: false,
  },
  icon: {
    type: String,
    defalut: "",
  }
};

// typeof 用于获取 已经声明的类型
export type ButtonTypes = ExtractPropTypes<typeof buttonProps>;