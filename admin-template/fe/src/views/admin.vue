<template>
	<v-app>
		<Nav />
		<v-main>
			<router-view></router-view>
		</v-main>
	</v-app>
</template>

<script>
	import Nav from '@/components/Nav.vue'
	export default {
		name: 'Admin',
		components: {
			Nav
		}
	}
</script>

<style>
</style>
