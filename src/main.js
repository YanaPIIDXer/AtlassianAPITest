import Vue from 'vue'
import App from './App.vue'
import dotenv from 'dotenv'
import store from './store'

dotenv.config()

Vue.config.productionTip = false

new Vue({
  store,
  render: h => h(App),
}).$mount('#app')
