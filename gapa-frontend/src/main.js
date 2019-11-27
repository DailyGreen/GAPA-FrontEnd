import Vue from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'

// import './assets/styles/styles.scss'
Vue.config.productionTip = false
Vue.prototype.$http = axios

new Vue({
  router,
  render: h => h(App),
  scrollBehavior: () => ({ y: 0 }),
}).$mount('#app')
