import Vue from 'vue'
import Router from 'vue-router'
import home from '@/page/home'
import question from '@/page/question'
const complete = () => import('@/page/complete')

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: home,
      children: [
        {
          path: 'question',
          name: 'question',
          component: question
        },
        {
          path: 'complete',
          name: 'complete',
          component: complete
        }
      ]
    }
  ]
})
