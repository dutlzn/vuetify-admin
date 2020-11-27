<template>
	<div class="dashboard">
		<h1 class="subheading grey--text">Dashboard</h1>

		<v-container clas="my-5">

			<v-card v-for="project in projects" :key="project.title" class="project">
				<v-layout row wrap  :class="` project ${project.status}`">
					<v-flex xs12 md6>
						<v-card-title class="caption grey--text">Project title</v-card-title>
						<v-card-text>{{ project.title }}</v-card-text>
					</v-flex>

					<v-flex xs6 sm4 md2>
						<v-card-text >Person</v-card-text>
						<v-card-text>{{ project.person }}</v-card-text>
					</v-flex>

					<v-flex xs6 sm4 md2>
						<v-card-text >Due by</v-card-text>
						<v-card-text>{{ project.due }}</v-card-text>
					</v-flex>

					<v-flex xs2 sm4 md2>
						<v-card-text>Status</v-card-text>
						<v-card-text>{{ project.status }}</v-card-text>
					</v-flex>


				</v-layout>
			</v-card>

		</v-container>

	</div>
</template>

<script>
	export default {
		data() {
			return {
				projects: [{
						title: 'Site web ',
						person: 'khaled',
						due: '10/10/1987',
						status: 'no'
					},
					{
						title: 'Application mobile',
						person: 'Iyad',
						due: '02/07/1990',
						status: 'complete'
					},
					{
						title: 'Gestion de stock',
						person: 'Zineb',
						due: '01/05/1987',
						status: 'yes'
					},
					{
						title: 'Conception',
						person: 'Hu Java',
						due: '02/09/1991',
						status: 'up'
					},
				]
			}
		},
	}
</script>

<style>
	.project.complete {
		border-left: 4px solid #3cd1c2;
	}
	
	.project.no{
		border-left: 4px solid orange;
	}
	
	.project.up {
		border-left: 4px solid tomato;
	}
	
	.project.yes {
		border-left: 4px solid chartreuse
	}
</style>
