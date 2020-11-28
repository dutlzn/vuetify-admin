<template>
	<nav>
		<v-app-bar app class="success darken-3">

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

		<v-navigation-drawer v-model="drawer" app class="success darken-2">
			<v-row >
				<v-col class="mt-5">
					
					<v-card class="success darken-2 text-md-center text-sm-text">
						<v-avator >
							<img src="https://randomuser.me/api/portraits/men/1.jpg" />
						</v-avator>
						<p class="display-1 white--text">Shuai Ge</p>
					</v-card>
		
				</v-col>
			</v-row>
			
			<v-list dense dark>
				<v-list-item v-for="(link, i) in links" :key="link.text" :to="link.route" active-class="border">
					<v-list-item-action>
						<v-icon>{{ link.icon }}</v-icon>
					</v-list-item-action>
					<v-list-item-content>
						<v-list-item-title>{{ link.text }}</v-list-item-title>
					</v-list-item-content>
				</v-list-item>
			</v-list>
		</v-navigation-drawer>
	</nav>
</template>

<script>
	export default {
		data() {
			return {
				drawer: false,
				
				// 动态路由就可以通过这样获得
				links: [{
					icon: 'label',
					text: 'Button',
					route: '/button'
				}, {
					icon: 'label',
					text: 'Card',
					route: '/card'
				}, {
					icon: 'label',
					text: 'Team',
					route: '/team'
				}, {
					icon: 'label',
					text: 'Dashboard',
					route: '/dashboard'
				}, {
					icon: 'label',
					text: 'Projdct',
					route: '/project'
				} , {
					icon: 'label',
					text: 'Grid',
					route: '/grid'
				}],
			}
		}
	}
</script>

<style scoped>
</style>
