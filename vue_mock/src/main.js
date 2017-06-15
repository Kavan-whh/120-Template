// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
// import Vue from 'vue'
import App from './App'
import router from './router'
import Vuex from 'vuex'
import store from './store/index.js'
import axios from 'axios'


Vue.use(Vuex)
import 'normalize.css'; //初始化样式
import './assets/css/base.scss';

Vue.config.productionTip = false
Vue.prototype.$http = axios

/* eslint-disable no-new */



createPop(function(userOpt) {
  let globalOpt = {
    // el: '#pops',
    router,
    store,
    template: '<App/>',
    components: {
      App
    },
    beforeCreate() {
      this.$store.dispatch('getAllData', this)
    }
  }
  // 分发数据
  Object.assign(globalOpt.store.state.initData, userOpt.data)
  // 分发方法

  new Vue(globalOpt).$mount('#pops')
});
