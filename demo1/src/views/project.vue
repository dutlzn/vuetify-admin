<template>
	<div class="projects">
		<h1 class="subheading grey--text">Projects</h1>

		<v-container clas="my-5">
			<v-row justify="center">
				<v-expansion-panels accordion>
					<v-expansion-panel v-for="(item,i) in myProjects" :key="i">
						<v-expansion-panel-header>{{ item.title }}</v-expansion-panel-header>
						<v-expansion-panel-content>
							<v-card>
								<v-card-text>
									<div>{{ item.person}} </div>
									<div>{{ item.due }}</div>
									<div> {{item.status }}</div>
								</v-card-text>
							</v-card>
						</v-expansion-panel-content>
					</v-expansion-panel>
				</v-expansion-panels>
			</v-row>
		</v-container>
	</div>
</template>

<script>
	export default {
		name: 'project',

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


		computed: {
			myProjects() {
				return this.projects.filter( project => {
					return project.title === 'Site web '
				})
			},
		}
	}
</script>

<style>
</style>
