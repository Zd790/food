import Vue from 'vue'
import App from './App.vue'
import router from './router'
import "@/common/common.css"
import axios from "axios"

Vue.config.productionTip = false
Vue.prototype.$axios=axios //全局注册
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
