# VUE + VUETIFY 打造简易后台管理系统（基础版）

## 安装环境
```
vue create simple-admin （注意选择手动配置，勾选上router)
cd simple-admin
vue add vuetify 
cnpm install material-design-icons-iconfont -D
cnpm install @fortawesome/fontawesome-free -D
npm run serve
```

## 图标配置
plugins vuetify.js
```js
import '@fortawesome/fontawesome-free/css/all.css' // 确保您正在使用 css-loader
import 'material-design-icons-iconfont/dist/material-design-icons.css' // 确保您正在使用 css-loader
import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';

Vue.use(Vuetify);

export default new Vuetify({
	icons: {
		iconfont: 'fa' || 'md',
	},
});

```
## 删除多余文件和更改app.vue
1 删除component views 下的文件 
2 修改app.vue
```vue
<template>
	<v-app>
		
	</v-app>
</template>

<script>

export default {
  name: 'App',

  components: {

  },

  data: () => ({
    //
  }),
};
</script>
```
3 修改router index.js
```js
import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
```
## 修改app.vue
```vue
<template>
		<router-view></router-view>
</template>

<script>

export default {
  name: 'App',

  components: {

  },

  data: () => ({
    //
  }),
};
</script>

```

## 登录页面和路由
views login.vue
```vue
<template>
	<v-app>
		<v-container class="fill-height">
			<v-row class="d-flex justify-center">
				<v-col cols="12" md="6">
					<v-card>
						<v-card-text>
							<h1 class="text-center blue--text display-2">登陆页面</h1>
						</v-card-text>
						<v-card-text>
							<v-text-field label="name" prepend-icon="person" required></v-text-field>
		
							<v-text-field label="password" prepend-icon="lock" required></v-text-field>
						</v-card-text>
						<v-card-actions>
							<v-spacer></v-spacer>
							<v-btn class="primary" @click="login()">
								登录
							</v-btn>
							<v-spacer></v-spacer>
						</v-card-actions>
					</v-card>
				</v-col>
			</v-row>
		</v-container>
	</v-app>
</template>

<script>
	export default {
		methods: {
			login() {
				let _this = this;
				_this.$router.push('/welcome');
			}
		}
	}
</script>

<style>
</style>

```

router index.js
```js
import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/login.vue'
Vue.use(VueRouter)

const routes = [
	{
		path: '',
		component: Login,
	}
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

```

## Admin 页面
views admin.vue 
```vue
<template>
	<v-app>
		<v-main>
			<router-view></router-view>
		</v-main>
	</v-app>
</template>

<script>
</script>

<style>
</style>

```



views welcome. vue

```vue
<template>
	<div>
		欢迎界面
	</div>
</template>

<script>
</script>

<style>
</style>

```



router index.js

```js
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

```



## 顶部栏和侧边栏

component nav.vue

```vue
<template>
	<nav>
		<v-app-bar app class="teal">

			<v-app-bar-nav-icon @click="drawer=!drawer">

			</v-app-bar-nav-icon>

			<v-toolbar-title>
				<span class="font-weight-bold">在线</span>
				<span>xxx系统</span>
			</v-toolbar-title>

			<v-spacer>

			</v-spacer>
			<v-menu offset-y>
				<template v-slot:activator="{ on, attrs }">
					<v-btn  v-bind="attrs" v-on="on" text>
						<span class="font-weight-bold">菜单</span>
					</v-btn>
				</template>
				<v-list>
					<v-list-item v-for="(item, index) in items" :key="index">
						<v-list-item-title>{{ item.title }}</v-list-item-title>
					</v-list-item>
				</v-list>
			</v-menu>
			<v-btn text>
				<span class="font-weight-bold">退出</span>
				<v-icon>exit_to_app</v-icon>
			</v-btn>
		</v-app-bar>

		<v-navigation-drawer color="#f8f8f8" app v-model="drawer">
			<v-list>
				<v-list-group prepend-icon="settings" no-action>
					<template v-slot:activator>
						<v-list-item-title>系统管理</v-list-item-title>
					</template>
					
					<v-list-item>
						<v-list-item-content>
							权限管理
						</v-list-item-content>
					</v-list-item>
					
					
					<v-list-item>
						<v-list-item-content>
							用户管理
						</v-list-item-content>
					</v-list-item>
					
					
				</v-list-group>
			</v-list>

		</v-navigation-drawer>
	</nav>
</template>

<script>
	export default {
		data: function() {
			return {
				drawer: true,
				items: [{
						title: 'Click Me'
					},
					{
						title: 'Click Me'
					},
					{
						title: 'Click Me'
					},
					{
						title: 'Click Me 2'
					},
				],
			}
		}
	}
</script>

<style>
</style>

```





admin.vue

```
<template>
	<v-app>
		<Nav />
		<v-main>
			<router-view></router-view>
		</v-main>
	</v-app>
</template>

<script>
	import Nav from '@/components/nav.vue'
	export default {
		components:{
			Nav
		}
	}
</script>

<style>
</style>

```

