<template>
	<div class="dashboard">
		<h1 class="subheading grey--text">Dashboard</h1>

		<v-container clas="my-5">

			<v-row class="mb-3">

				<v-tooltip top>
					<template v-slot:activator="{on, attrs}">
						<v-btn color="success" text class="mr-3" v-on:click="sortBy('title')" v-bind="attrs" v-on="on">
							<v-icon>folder</v-icon>
							<span class="subheading text-lowercase">By project name</span>
						</v-btn>
					</template>
					<span>Sort By Projects</span>
				</v-tooltip>

				<v-tooltip top>
					<template v-slot:activator="{on, attrs} ">
						<v-btn color="warning" text class="mr-3" v-on:click="sortBy('person')" v-bind="attrs" v-on="on">
							<v-icon>person</v-icon>
							<span class="subheading text-lowercase">By Person</span>

						</v-btn>
					</template>

					<span>Sort By Person</span>
				</v-tooltip>





			</v-row>

			<v-card v-for="(project, index) in projects" :key="index" class="project">
				<v-row :class="`project ${project.status}`">
					<v-col md="6" sm="12">
						<v-card-title>Project title</v-card-title>
						<v-card-text>{{ project.title }}</v-card-text>
					</v-col>
					<v-col md="2" sm="4">
						<v-card-title>Person</v-card-title>
						<v-card-text>{{ project.person }}</v-card-text>
					</v-col>
					<v-col md="2" sm="4">
						<v-card-title>Due by</v-card-title>
						<v-card-text>{{ project.due }}</v-card-text>
					</v-col>
					<v-col md="2" sm="4" class="my-auto">
						<v-card-text class="text-right" center>
							<v-chip v-bind:color="colorSelct(project.status)">
								{{ project.status }}
							</v-chip>
						</v-card-text>
					</v-col>
				</v-row>
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

		methods: {
			colorSelct(status) {
				switch (status) {
					case 'up':
						return 'success';
					case 'yes':
						return 'error';
					case 'complete':
						return 'primary';
					case 'no':
						return 'warning';
				}
			},
			sortBy(prop) {
				console.log("点击事件:", prop);
				//lambda 表达式
				this.projects.sort((a, b) => a[prop] < b[prop] ? -1 : 1);
			}
		},

	}
</script>

<style>
	.project.complete {
		border-left: 4px solid #3cd1c2;
	}

	.project.no {
		border-left: 4px solid orange;
	}

	.project.up {
		border-left: 4px solid tomato;
	}

	.project.yes {
		border-left: 4px solid chartreuse
	}


	.v-chip.complete {
		background-color: #f83e70;
	}

	.v-chip.no {
		background-color: #3CD1C2;
	}

	.v-chip.up {
		background-color: #ffaa2c;
	}

	.v-chp.up {
		background-color: #7FFF00;
	}
</style>
