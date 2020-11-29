<template>
	<div class="team">
		<h1 class="subheading grey--text">Team</h1>

		<v-container clas="my-5">
			<v-row>
				<v-col sm="6" xs="12" md="4" v-for="(person, index) in team" :key="index">
					<v-card class="text-md-center text-xs-center ma-3">
						<v-responsive class="pt-4">
						<v-avatar size="100" class="grey lighten-2">
							<img :src="person.avatar" />
						</v-avatar >
						</v-responsive>
						<v-card-text>
							<div class="subheading"> {{ person.name }}</div>
							<div class="grey--text"> {{ person.role }}</div>
						</v-card-text>

						<!-- class="justify-end" 靠右显示 -->
						<v-card-actions>
							<v-btn text color="grey">
								<v-icon small left>message</v-icon>
								<span>Message</span>
							</v-btn>
						</v-card-actions>
					</v-card>
				</v-col>
			</v-row>
		</v-container>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				// 完全响应式
				team: [{
						name: 'Iyad',
						role: 'web developer',
						avatar: '/img1.png'
					},
					{
						name: 'Reda',
						role: 'Graphic designer',
						avatar: '/img2.png'
					},
					{
						name: 'Zineb',
						role: 'web developer',
						avatar: '/img3.png'
					},
					{
						name: 'Hu TechGroup',
						role: 'Desktop developer',
						avatar: '/img4.png'
					},
					{
						name: 'Hu TechGroup',
						role: 'Desktop developer11234343434343434343434343412344444444444444444444444444444444444444444412344444444444444444',
						avatar: '/img4.png'
					},
					{
						name: 'Hu TechGroup',
						role: 'Desktop developer',
						avatar: '/img4.png'
					},
					{
						name: 'Hu TechGroup',
						role: 'Desktop developer',
						avatar: '/img4.png'
					},
					{
						name: 'Hu TechGroup',
						role: 'Desktop developer',
						avatar: '/img4.png'
					},
					{
						name: 'Hu TechGroup',
						role: 'Desktop developer11234343434343434343434343412344444444444444444444444444444444444444444412344444444444444444',
						avatar: '/img4.png'
					},
					{
						name: 'Hu TechGroup',
						role: 'Desktop developer',
						avatar: '/img4.png'
					},
					{
						name: 'Hu TechGroup',
						role: 'Desktop developer',
						avatar: '/img4.png'
					},

				]
			}
		}
	}
</script>

<style>
</style>
