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
		
		<v-navigation-drawer  v-model="drawer" app  class="blue accent-2">
			<p>test</p>
		</v-navigation-drawer>
	</nav>
</template>

<script>
	export default {
		data() {
			return {
				drawer: false,
				
			}
		}
	}
</script>

<style scoped>
</style>
