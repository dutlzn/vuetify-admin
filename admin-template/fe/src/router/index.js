import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '@/views/login.vue'
import Admin from '@/views/admin.vue'
import Welcome from '@/views/welcome.vue'

// 业务相关
import User from '@/views/settings/user.vue'
import Role from '@/views/settings/role.vue'
import Menu from '@/views/settings/menu.vue'

Vue.use(VueRouter)

const routes = [
	// 登陆页面
	{
		path: '*',
		redirect: '/login'
	},
	{
		path: '',
		component: Login
	},
	{
		path: '/login',
		component: Login
	},
	// TODO: 后台界面
	{
		path: '/',
		component: Admin,
		children: [
			{
				path: 'welcome',
				component: Welcome
			},
			{
				path: 'system/user',
				component: User,
			},
			{
				path: 'system/role',
				component: Role,
			},
			{
				path: 'system/menu',
				component: Menu
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
