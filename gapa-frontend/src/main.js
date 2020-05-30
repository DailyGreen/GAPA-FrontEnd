import Vue from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'


import {VueMasonryPlugin} from 'vue-masonry';
Vue.use(VueMasonryPlugin)



// var Bricklayer = require("bricklayer");

// var bricklayer = new Bricklayer(document.querySelector('.bricklayer'))

// import './assets/styles/styles.scss'
Vue.config.productionTip = false
Vue.prototype.$http = axios

new Vue({
  router,
  render: h => h(App),
  scrollBehavior: () => ({ y: 0 }),
}).$mount('#app')
