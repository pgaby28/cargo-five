import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/views/Home'
import MaritimePort from '@/components/views/MaritimePort'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/maritime-port',
      name: 'MaritimePort',
      component: MaritimePort
    }
  ]
})
