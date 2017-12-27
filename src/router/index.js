import Vue from 'vue'
import Router from 'vue-router'
import Waterfall from '@/components/Waterfall'
import MyFall from '@/components/MyFall'
import Scroller from '@/components/Scroller'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Scroller',
      component: Scroller
    },
    {
      path: '/water',
      name: 'Waterfall',
      component: Waterfall
    },
    {
      path: '/fall',
      name: 'MyFall',
      component: MyFall
    },
    {
      path: '/scroller',
      name: 'Scroller',
      component: Scroller
    }
  ]
})
