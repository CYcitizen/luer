/*
  This file set all the different routes in this web site
  这个文件设置了此网站所有的路由
  This file is use at /src/main.js
  这个文件在 /sec/main.js 中使用
 */

import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

// routes are array, and the elements in it are objects
// routes 是 数组，其中的每个元素是 对象
const routes = [{
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/about',
        name: 'About',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
            import ( /* webpackChunkName: "about" */ '../views/About.vue')
    },
    {
        path: '/listen',
        name: 'Listen',
        component: () =>
            import ('../views/listen/Listen.vue')
    },
    {
        path: '/listen:id',
        name: 'VoiceDetails',
        component: () =>
            import ('../views/listen/VoiceDetails.vue')
    }
];
// 实例化 routes
const router = createRouter({
    // 使用 webHistory API 从而可以在浏览器中前进/后退
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router