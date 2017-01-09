import Vue from 'vue'
import {sync} from 'vuex-router-sync'
import App from './components/App'
import router from './router'
import store from './store'
import Keen from 'keen-ui'
sync(store, router)

Vue.use(Keen)

const app = new Vue({
  router,
  store,
  ...App
})

export {app, router, store}

router.beforeEach(function (to, from, next) {
  window.scrollTo(0, 0)
  next();
})