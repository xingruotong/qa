import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  
  {
    path: '/',
    name: '/home',
    component: () => import('../views/Home.vue'),
    redirect: '/quanzi',
    children: [
      {
        path: '/quanzi',
        component: () => import('../views/home/quanzi/Quan.vue'),
      },
      {
        path: '/my',
        component: () => import('../views/home/my/My.vue'),
        beforeEnter: (to, from, next) => {
          // ...
          if(localStorage.getItem('token')) {
            next()
          } else {
            next({ path: '/login'})
          }
        },
        children: [
          {
            path: '/geren',
            component: () => import('../views/home/my/geren/Ge.vue')
          },
          {
            path: '/pinglun',
            component: () => import('../views/home/my/pinglun/Wo.vue')
          },
          {
            path: '/shou',
            component: () => import('../views/home/my/shoucang/Shou.vue')
          },
          {
            path: '/xiu',
            component: () => import('../views/home/my/xiugai/Xiu.vue')
          },
          {
            path: '/tui',
            component: () => import('../views/home/my/tuichu/Tui.vue')
          }
        ]
      }
    ]
  },
  {
    path: '/login',
    component: () => import('../views/login/Login.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
