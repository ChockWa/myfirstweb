import Vue from 'vue'
import Router from 'vue-router'
import IndexLayout from '@/views/layout/IndexLayout'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/index',
      name: 'index',
      component: IndexLayout
    },
    {
      path: '/index',
      name: 'IndexLayout',
      component: IndexLayout
    }
  ]
})
