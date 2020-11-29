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
			<v-menu  offset-y>
				<template v-slot:activator="{ on, attrs }">
					<v-btn text dark v-bind="attrs" v-on="on">
						menu
					</v-btn>
				</template>

				<v-list>
<!-- 					<v-list-item v-for="(item, index) in items" :key="index">
						<v-list-item-title>{{ item.title }}</v-list-item-title>
					</v-list-item> -->
					<v-list-item v-for="(item, i) in links" :key = "i" :to="item.route" active-class="border">
						<v-list-item-title>{{item.text}}</v-list-item-title>
					</v-list-item>
				</v-list>
			</v-menu>

			<v-btn text class="white--text">
				<span>Sign Out</span>
				<v-icon>exit_to_app</v-icon>
			</v-btn>
		</v-app-bar>

		<v-navigation-drawer v-model="drawer" app class="success darken-2">
			<!-- 新版2.x -->
			<!-- 新版已经不推荐用layout和flex -->
			<v-row>
				<v-col class="text-md-center">
					<v-avatar size="100">
						<img src="/img1.png" alt="">
					</v-avatar>
					<p class="white--text subheading">Person</p>
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
				}, {
					icon: 'label',
					text: 'Grid',
					route: '/grid'
				}],

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

<style scoped>
</style>
