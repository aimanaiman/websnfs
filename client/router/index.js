import Vue from 'vue'
import Router from 'vue-router'
import Home from '../views/Home'
import Program from '../views/Program'
import Itinerary from '../views/Itinerary'
import Faq from '../views/Faq'
import ApplyNow from '../views/ApplyNow'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: Home
    },
    {
    	path: '/program',
    	component: Program
    },
    {
      path: '/itinerary',
      component: Itinerary
    },
    {
      path: '/faq',
      component: Faq
    },
    {
      path: '/apply-now',
      component: ApplyNow
    }
  ],
  scrollBehavior (to, from, savedPosition) {
    if (to.hash) {
      return {
        selector: to.hash
      }
    }
  }

})
