



# Vue + Vuetify  Admin Template

###  Ref Url

https://material.io/resources/icons/?style=baseline



https://v15.vuetifyjs.com/zh-Hans



https://vuetifyjs.com/zh-Hans/components/navigation-drawers/#-7、





# login register



![](./images/1.png)

![](./images/2.png)

# note

原色： 背景：白 ， 文字： 黑
		1 dark --->全部反色 ( 背景色 + 文字颜色)
		2 class="primary" 只改变背景颜色
		1 和 2 都是相比较原来的颜色来说的
		
			app起到一个固定导航栏的作用



p class="red" 背景色

white--text 文字颜色

```html
<p class="pink red--text">
```



看不清文字

改成

class="pink lighten-4 red--text"

lighten 减轻背景颜色，加深文字颜色，数字越大，效果越明显

文字变暗 更突出

```html
<h1 class="display-4">Massive Display</h1>
```

字体最大



flat已经被移除了，现在用text来代替，看最新的文档





新版本的vuetify有一个问题

v-list-item to 加了路由就没有激活样式了



侧边栏示例

```
<template>
	<nav>
		<v-app-bar app class="blue accent-2">

			<v-app-bar-nav-icon color="white" @click="drawer = !drawer"></v-app-bar-nav-icon>

			<v-toolbar-title class="text-uppercase white--text">
				<span class="font-weight-bold">Wudi</span>
				<span>App</span>
			</v-toolbar-title>

			<!-- text 透明度设置， color 改变按钮内部文字颜色 -->
			<!-- 尽可能多的占用空间 grid -->
			<v-spacer></v-spacer>
			<v-btn text class="white--text">
				<span>Sign Out</span>
				<v-icon>exit_to_app</v-icon>
			</v-btn>
		</v-app-bar>

		<v-navigation-drawer v-model="drawer" app class="blue accent-2">
      <v-list-item two-line>
					<v-list-item-avatar>
						<v-icon dark large>apps</v-icon>
					</v-list-item-avatar>
					<v-list-item-content class="display-1 white--text">管理系统</v-list-item-content>
        </v-list-item>
				
				
				
			<v-list dense dark>
				<v-list-item-group>
					<v-list-item v-for="(link, i) in links" :key="link.text" :to="link.route"   active-class="border">
						<v-list-item-action>
							<v-icon>{{ link.icon }}</v-icon>
						</v-list-item-action>
						<v-list-item-content>
							<v-list-item-title>{{ link.text }}</v-list-item-title>
						</v-list-item-content>
					</v-list-item>
				</v-list-item-group>
			</v-list>
			
			<!-- 带折叠的效果 子菜单 -->

			
			
			
			
		</v-navigation-drawer>
	</nav>
</template>

<script>
	export default {
		data() {
			return {
				drawer: false,

				links: [{
						icon: 'dashboard',
						text: 'Dashboard',
						route: '/about'
					},
					{
						icon: 'folder',
						text: 'My Projects',
						route: '/admin'
					},
					{
						icon: 'person',
						text: 'Team',
						route: '/welcome'
					}
				]
			}
		}
	}
</script>

<style scoped>
</style>

```





选项卡模式：

```vue
<template>
	<nav>
<v-toolbar
      color="cyan"
      dark
      flat>
        <v-tabs
          v-model="tab"
          align-with-title
        >
          <v-tabs-slider color="yellow"></v-tabs-slider>

          <v-tab
            v-for="link in links"
            :key="link.text"
						:to="link.route"
          >
            {{ link.text }}
          </v-tab>
        </v-tabs>
				
				<v-spacer></v-spacer>
				
				<v-btn>
					tuichu 
				</v-btn>
    </v-toolbar>


 
</nav>
</template>

<script>
	export default {
		data() {
			return {
				drawer: false,

				links: [{
						icon: 'dashboard',
						text: 'Dashboard',
						route: '/about'
					},
					{
						icon: 'folder',
						text: 'My Projects',
						route: '/admin'
					},
					{
						icon: 'person',
						text: 'Team',
						route: '/welcome'
					}
				],
				  tab: null,
				        items: [
				          'web', 'shopping', 'videos', 'images', 'news',
				        ],
				        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
				      
			}
		}
	}
</script>

<style scoped>
</style>

```



## grid

container 默认居中

如果想要占满屏幕宽度 就用 fluid

row 行 y

cols 列 x



## chip

有一个右边显示的问题，有点难解决



```vue
<template>
	<div class="dashboard">
		<h1 class="subheading grey--text">Dashboard</h1>

		<v-container clas="my-5">

			<v-card v-for="project in projects" :key="project.title" class="project">
				<v-layout row wrap  :class="` project ${project.status}`">
					<v-flex xs12 md6>
						<v-card-title class="caption grey--text">Project title</v-card-title>
						<v-card-text>{{ project.title }}</v-card-text>
					</v-flex>

					<v-flex xs6 sm4 md2>
						<v-card-text >Person</v-card-text>
						<v-card-text>{{ project.person }}</v-card-text>
					</v-flex>

					<v-flex xs6 sm4 md2>
						<v-card-text >Due by</v-card-text>
						<v-card-text>{{ project.due }}</v-card-text>
					</v-flex>

					<v-flex xs2 sm4 md2>
						<v-card-text>Status</v-card-text>
						<!-- <v-card-text>{{ project.status }}</v-card-text> -->
				    <v-card-text >
							<v-chip v-bind:color = "colorSelct(project.status)" >
								{{ project.status }}
								</v-chip>
						</v-card-text>
					</v-flex>


				</v-layout>
			</v-card>

		</v-container>

	</div>
</template>

<script>
	export default {
		data() {
			return {
				projects: [{
						title: 'Site web ',
						person: 'khaled',
						due: '10/10/1987',
						status: 'no'
					},
					{
						title: 'Application mobile',
						person: 'Iyad',
						due: '02/07/1990',
						status: 'complete'
					},
					{
						title: 'Gestion de stock',
						person: 'Zineb',
						due: '01/05/1987',
						status: 'yes'
					},
					{
						title: 'Conception',
						person: 'Hu Java',
						due: '02/09/1991',
						status: 'up'
					},
				]
			}
		},
	
	  methods: {
			colorSelct(status ) {
				switch(status) {
					case 'up' :
					return 'success';
					case 'yes' :
					return 'error';
					case 'complete':
					return 'primary';
					case 'no':
					return 'warning';
				}
			} 
		}
	}
</script>

<style>
	.project.complete {
		border-left: 4px solid #3cd1c2;
	}
	
	.project.no{
		border-left: 4px solid orange;
	}
	
	.project.up {
		border-left: 4px solid tomato;
	}
	
	.project.yes {
		border-left: 4px solid chartreuse
	}
	
	
	.v-chip.complete {
		background-color: #f83e70;
	}
	
	.v-chip.no {
		background-color: #3CD1C2;
	}
	
	.v-chip.up {
		background-color: #ffaa2c;
	}
	
	.v-chp.up {
		background-color: #7FFF00;
	}
	
	
</style>

```

