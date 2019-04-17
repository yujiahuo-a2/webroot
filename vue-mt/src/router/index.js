import Vue from 'vue'
import Router from 'vue-router'
import me from '@/pages/me'
import order from '@/pages/order'
import recent from '@/pages/recent'
import guang from '@/pages/guang'
import home from '@/pages/Home/home'
import meishi from '@/pages/meishi'
import main from '@/pages/main'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: main,
      children: [
        {
          path: '/',
          name: 'main',
          component: home
        },
        {
          path: '/recent',
          name: 'recent',
          component: recent
        },
        {
          path: '/guang',
          name: 'guang',
          component: guang
        },
        {
          path: '/order',
          name: 'order',
          component: order
        },
        {
          path: '/me',
          name: 'me',
          component: me
        },
        {
          path: '/home',
          name: 'home',
          component: home
        }
      ]
    },
    {
      path: '/meishi',
      name: 'meishi',
      component: meishi
    }
  ]
})
