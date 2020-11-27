<template>
	<nav>
		<v-app-bar app class="deep-orange darken-2">

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

		<v-navigation-drawer v-model="drawer" app class="deep-orange darken-1">
<!-- 			<v-list-item two-line>
				<v-list-item-avatar>
					<v-icon dark large>apps</v-icon>
				</v-list-item-avatar>
				<v-list-item-content class="display-1 white--text">管理系统</v-list-item-content>
			</v-list-item>

 -->

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
