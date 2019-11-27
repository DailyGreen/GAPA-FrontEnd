import Vue from 'vue'
import VueRouter from 'vue-router'
// import Home from '../views/Home.vue'

import Index from '../containers/Index'

import Auth from '../containers/Auth'
import Login from '../containers/Login'
import Rooms from '../containers/Rooms'
import Chat from '../containers/Chat'

Vue.use(VueRouter)

const routes = [
    {
      path: '/',
      name: 'IndexPage',
      component: Auth
    },
    {
      path: '/auth',
      name: 'AuthPage',
      component: Index
    },
    {
      path: '/login',
      name: 'LoginPage',
      component: Login
    },
    {
      path: '/rooms',
      name: 'RoomsPage',
      component: Rooms
    },
    {
      path: '/chat',
      name: 'ChatPage',
      component: Chat
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
