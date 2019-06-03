import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/user',
      name: 'user',
      component: () => import('./views/user.vue')
    },
    {
      path: '/REST',
      name: 'rest',
      component: () => import('./views/REST.vue')
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('./views/login.vue')
    },
    {
      path: '/sign',
      name: 'sign',
      component: () => import('./views/sign.vue')
    },
    {
      path: '/test',
      name: '헤더',
      component: () => import('./views/test'),
      // beforeEnter: authCheck
      beforeEnter: (to, from, next) => {
        console.log(to)
        console.log(from)
       if (!localStorage.getItem('token')) return next('block')
        next()
      }
    },
    {
      path: '/block',
      name: '차단',
      component: () => import('./views/block.vue')
    },
    {
      path: '/',
      name: 'lv0',
      component: () => import('./views/lv0')
    },,
    {
      path: '/lv1',
      name: 'lv1',
      component: () => import('./views/lv1')
    },,
    {
      path: '/lv2',
      name: 'lv2',
      component: () => import('./views/lv2')
    },,
    {
      path: '/lv3',
      name: 'lv3',
      component: () => import('./views/lv3')
    },
  ]
})
