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
        path: '/support',
        name: 'Support',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
            import ( /* webpackChunkName: "about" */ '../views/Support.vue')
    },
    {
        path: '/listen',
        name: 'Listen',
        component: () =>
            import ('../views/listen/Listen.vue')
    },
    {
        path: '/event',
        name: 'Event',
        component: () =>
            import ('../views/Event.vue')
    },
    {
        path: '/listen:id',
        name: 'VoiceDetails',
        component: () =>
            import ('../views/listen/VoiceDetails.vue'),
        props: true
    },


    // ===========================
    //          重定向 
    // ===========================
    // 为什么要重定向 ？
    // 因为随着时间的推移，有些 url 会发生改变，我们要把一些过时的链接重定向到新的链接上去.
    // 例如： https://www.daluoli.live/listenVoice  => https://www.daluoli.live/listen
    {
        path: '/listenVoice',
        redirect: '/listen',
        // 这样 /listenVoice 的路径就会重定向到 /listen

    },

    // ===========================
    //          404 页面 
    // ===========================
    // 获取所有不存在的页面
    {
        path: '/:catAll(.*)',
        name: 'NotFound',
        component: () =>
            import ('../views/NotFound.vue'),

    },



];
// 实例化 routes
const router = createRouter({
    // 使用 webHistory API 从而可以在浏览器中前进/后退
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router