import Vue from 'vue'
import VueRouter from 'vue-router'
import Team from '../views/team.vue'
import Teacher from '../views/teacher.vue'
import Welcome from '../views/welcome.vue'
import Paper from '../views/paper.vue'
Vue.use(VueRouter)

const routes = [
	{
		path: '/',
		component: Welcome,
		children: [
			{
				name: 'team',
				path: 'team',
				component: Team
			},
			{
				name: 'teachers',
				path: 'teachers',
				component: Teacher
			}, {
				path: 'paper',
				component: Paper
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
