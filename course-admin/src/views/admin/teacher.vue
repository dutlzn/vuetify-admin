<template>
	<v-app>
		<div class="display-1 grey--text">讲师管理</div>
		
		<p class="ma-10">
			<v-btn class="mr-5 mb-5" color="primary">
				<v-icon left small>edit</v-icon>
				新增
			</v-btn>
			
			<v-btn class="mb-5" color="primary">
				<v-icon left small>refresh</v-icon>
				刷新
			</v-btn>
		</p>
		
		
		<v-container>
			<v-row>
				<v-col cols="12">
					
				</v-col>
			</v-row>
		</v-container>
		
	</v-app>
</template>

<script>
	export default {
		name: 'business-teacher',
		data: function() {
			return {
				teacher: {},
				teachers: [],
			}
		},
		
		mounted: function() {
			
		},
		
		methods:  {
			
		}
		
	}
</script>

<style>
</style>
