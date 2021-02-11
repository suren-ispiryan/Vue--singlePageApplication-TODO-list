import Vue from 'vue'
import App from './App'
/* connecting router */
import VueRouter from 'vue-router'
import router from './router/index'
/* connecting bootsrap */
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
/* connecting jquery */
import jQuery from 'jQuery'
window.jQuery = jQuery

Vue.config.productionTip = false

/* router */
Vue.use(VueRouter)
const rout = new Vue({
  el: '#app',
  render: h => h(App),
  router
})
rout()
