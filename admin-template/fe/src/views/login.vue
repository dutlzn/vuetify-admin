<template>
	<!-- login页面 -->
	<v-app>
		<v-container class="fill-height">
			<v-row class="justify-center">
				<v-col cols="12" md="5">
					<v-card>
						<v-card-text>
							<h1 class="blue--text display-1 text-center">登陆页面</h1>
						</v-card-text>
						<v-card-text>
							<!-- 表单 -->
							<v-text-field label="请输入姓名"></v-text-field>
							<v-text-field label="请输入密码" type="password"></v-text-field>
						</v-card-text>
						<v-card-actions>
							<v-spacer></v-spacer>
							<v-btn class="primary"  @click="login">登录</v-btn>
							<v-spacer></v-spacer>
						</v-card-actions>
					</v-card>
				</v-col>
			</v-row>
		</v-container>
	</v-app>
</template>

<script>
	export default {
		methods: {
			login() {
				let _this = this;
				_this.$router.push('/welcome');
			}
		},
	}
</script>

<style>
</style>
