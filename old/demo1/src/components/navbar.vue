<template>
	<nav>
		<v-app-bar app>

			<v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>

			<v-toolbar-title class="text-uppercase">
				<span class="font-weight-bold">Wudi</span>
				<span>App</span>
			</v-toolbar-title>

			<!-- text 透明度设置， color 改变按钮内部文字颜色 -->
			<!-- 尽可能多的占用空间 grid -->
			<v-spacer></v-spacer>
			<v-menu offset-y>
				<template v-slot:activator="{ on, attrs }">
					<v-btn text  v-bind="attrs" v-on="on">
						menu
					</v-btn>
				</template>

				<v-list>
					<v-list-item v-for="(item, i) in links" :key="i" :to="item.route" active-class="border">
						<v-list-item-title>{{item.text}}</v-list-item-title>
					</v-list-item>
				</v-list>
			</v-menu>

			<v-btn text>
				<span>Sign Out</span>
				<v-icon>exit_to_app</v-icon>
			</v-btn>
		</v-app-bar>

		<v-navigation-drawer v-model="drawer" app color="grey lighten-4">
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

			<v-list dense >
				<v-list-item v-for="(link, i) in links" :key="link.text" :to="link.route" active-class="border">
					<v-list-item-action>
						<v-icon>{{ link.icon }}</v-icon>
					</v-list-item-action>
					<v-list-item-content>
						<v-list-item-title>{{ link.text }}</v-list-item-title>
					</v-list-item-content>
				</v-list-item>
			</v-list>


			<v-list >
				<v-list-item :to="routerTest">
					<v-list-item-icon>
						<v-icon>mdi-home</v-icon>
					</v-list-item-icon>

					<v-list-item-title>Home</v-list-item-title>
				</v-list-item>

				<v-list-group :value="true" prepend-icon="mdi-account-circle">
					<template v-slot:activator>
						<v-list-item-title>Users</v-list-item-title>
					</template>

					<v-list-group :value="true" no-action sub-group>
						<template v-slot:activator>
							<v-list-item-content>
								<v-list-item-title>Admin</v-list-item-title>
							</v-list-item-content>
						</template>

						<v-list-item v-for="([title, icon], i) in admins" :key="i" link>
							<v-list-item-title v-text="title"></v-list-item-title>

							<v-list-item-icon>
								<v-icon v-text="icon"></v-icon>
							</v-list-item-icon>
						</v-list-item>
					</v-list-group>

					<v-list-group no-action sub-group>
						<template v-slot:activator>
							<v-list-item-content>
								<v-list-item-title>Actions</v-list-item-title>
							</v-list-item-content>
						</template>

						<v-list-item v-for="([title, icon], i) in cruds" :key="i" link>
							<v-list-item-title v-text="title"></v-list-item-title>

							<v-list-item-icon>
								<v-icon v-text="icon"></v-icon>
							</v-list-item-icon>
						</v-list-item>
					</v-list-group>
				</v-list-group>
			</v-list>

		</v-navigation-drawer>
	</nav>
</template>

<script>
	export default {
		data() {
			return {
				routerTest: '/button',
				drawer: false,
				admins: [
					['Management', 'mdi-account-multiple-outline'],
					['Settings', 'mdi-cog-outline'],
				],
				cruds: [
					['Create', 'mdi-plus-outline'],
					['Read', 'mdi-file-outline'],
					['Update', 'mdi-update'],
					['Delete', 'mdi-delete'],
				],

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
