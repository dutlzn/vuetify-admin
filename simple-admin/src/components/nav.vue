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
