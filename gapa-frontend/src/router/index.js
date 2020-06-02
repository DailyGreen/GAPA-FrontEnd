import Vue from 'vue'
import VueRouter from 'vue-router'
// import Home from '../views/Home.vue'

import Index from '../containers/Index'

import Auth from '../containers/Auth'

Vue.use(VueRouter)

const routes = [
    {
		path: '/',
		name: 'IndexPage',
		component: Index
    },
    {
		path: '/auth',
		name: 'AuthPage',
		component: Auth
    },	
	{
		path: '*',
		redirect: '/'
    }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
  scrollBehavior (to, from, savedPosition) {
	if (savedPosition) {
		return savedPosition
	} else {
		return { x: 0, y: 0 }
	}
  }
})

export default router
