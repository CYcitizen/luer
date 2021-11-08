/*
    this file set up 
*/

// 使用 vue 中的 createApp
import { createApp } from 'vue'

// 导入 App.vue 根 component, 这个是自己写的
import App from './App.vue'

// 导入 router, 不用写 ./router/index.js 
// 该 index.js 管理着 网站的路由
import router from './router'

// 使用 createApp() 创建 app 
// 使用 use() 方法，使用路由 router 
// 使用 mount() 挂载 #app
createApp(App).use(router).mount('#app')