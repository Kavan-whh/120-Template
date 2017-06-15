import Vue from 'vue'
import Router from 'vue-router'
import myChoice from '@/components/choice'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component:myChoice
    },
  
  ]
})
