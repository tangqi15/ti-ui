import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

// 单独引入各个组件
import TiButton from '@ti-ui/components/button'

// 引入组件的样式代码
import "@ti-ui/theme-chalk/src/index.scss"

const app = createApp(App)

// 挂载组件
app.use(TiButton)

app.use(router)

app.mount('#app')
