import Vue from 'vue'
import Router from 'vue-router'
import demo from 'view/demo'

Vue.use(Router)
console.log()
export default new Router({
  routes: [
    {
      path: '/',
      name: 'demo',
      component: demo
    }
  ]
})
