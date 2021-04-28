import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/login.vue'
import Admin from '../views/admin.vue'
import Welcome from '../views/welcome.vue'
Vue.use(VueRouter)

const routes = [
	{
		path: '',
		component: Login,
	}, {
		path: '/',
		component: Admin,
		children: [
			{
				path: 'welcome',
				component: Welcome
			}
		]
	}
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
