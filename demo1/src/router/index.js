import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Button from '../views/button.vue'
import Card from '../views/card.vue'
import Team from '../views/team.vue'
import Dashboard from '../views/dashboard.vue'
import Project from '../views/project.vue'
import Grid from '../views/grid.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  }, {
		path: '/button',
		name: 'Button',
		component: Button
	}, {
		path: '/card',
		name: 'Card',
		component: Card
	}, {
		path: '/team',
		name: 'Team',
		component: Team
	}, {
		path: '/dashboard',
		name: 'Dashboard',
		component: Dashboard
	}, {
		path: '/project',
		name: 'project',
		component: Project
	}, {
		path: '/grid',
		name: 'grid',
		component: Grid
	}
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
