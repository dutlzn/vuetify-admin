<template>
	<nav>
		<!-- 顶部栏 -->
		<v-app-bar app color="#6777ef">
			<v-app-bar-nav-icon @click="drawer=!drawer"></v-app-bar-nav-icon>

			<v-toolbar-title>
				<span class="font-weight-bold">后台管理系统</span>
			</v-toolbar-title>

			<v-spacer></v-spacer>

			<!-- 菜单 -->
			<v-menu offset-y>
				<template v-slot:activator="{on, attrs}">
					<v-btn v-bind="attrs" v-on="on" text>
						菜单
					</v-btn>
				</template>
				<v-list>
					<v-list-item v-for="(item, index) in items" :key="index">
						<v-list-item-title>{{ item.title }}</v-list-item-title>
					</v-list-item>
				</v-list>
			</v-menu>

			<!-- 退出 -->
			<v-btn text @click="logout">
				<span>退出</span>
				<v-icon>exit_to_app</v-icon>
			</v-btn>
		</v-app-bar>

		<!-- 侧边栏 -->
		<v-navigation-drawer app v-model="drawer" color="#f8f8f8" >
			<v-card-text class="text-center title">
				后台管理系统
			</v-card-text>
			
			<v-list>
				<v-list-group prepend-icon="settings" no-action>
					<template v-slot:activator>
						<v-list-item-title>系统管理</v-list-item-title>
					</template>
					
					<v-list-item to="/system/user">
						<v-list-item-content>
							用户管理
						</v-list-item-content>
					</v-list-item>
					
					<v-list-item to="/system/role">
						<v-list-item-content>
							角色管理
						</v-list-item-content>
					</v-list-item>
					
					<v-list-item to="/system/menu">
						<v-list-item-content>
							权限管理
						</v-list-item-content>
					</v-list-item>
				</v-list-group>
			</v-list>
		</v-navigation-drawer>
	</nav>
</template>

<script>
	export default {
		data() {
			return {
				drawer: false,
				items: [{
						title: '点击1'
					},
					{
						title: '点击2'
					},
					{
						title: '点击3'
					}
				]
			}
		},
		
		methods: {
			/* 退出 */
			logout() {
				let _this = this;
				_this.$router.push('/login');
			}
		},
	}
</script>

<style>
</style>
