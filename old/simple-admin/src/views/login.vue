<template>
	<v-app>
		<v-container class="fill-height">
			<v-row class="d-flex justify-center">
				<v-col cols="12" md="6">
					<v-card>
						<v-card-text>
							<h1 class="text-center blue--text display-2">登陆页面</h1>
						</v-card-text>
						<v-card-text>
							<v-text-field label="name" prepend-icon="person" required></v-text-field>
		
							<v-text-field label="password" prepend-icon="lock" required></v-text-field>
						</v-card-text>
						<v-card-actions>
							<v-spacer></v-spacer>
							<v-btn class="primary" @click="login()">
								登录
							</v-btn>
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
		}
	}
</script>

<style>
</style>
