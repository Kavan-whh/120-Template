// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import 'babel-polyfill'
import Vue from 'vue'
import App from './App'
import router from './router'

import Vuex from 'vuex'
import store from './store/index.js'
import axios from 'axios'

Vue.use(Vuex)
Vue.prototype.$http = axios

// import 'assets/scss/index.scss'

Vue.config.productioinTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
