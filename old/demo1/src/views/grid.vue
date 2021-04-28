<template>
	<div>
		<h1 class="grey--text subheading">Grid System</h1>
		<v-container clas="my-5">
			<v-layout row>
				<v-flex xs12 md6 >
					<v-btn   outlined block color="indigo" >1</v-btn>
				</v-flex>
				<v-flex xs4 md2 >
					<v-btn  outlined block color="indigo"  >2</v-btn>
				</v-flex>
				<v-flex xs4 md2 >
					<v-btn  outlined block color="indigo"  >2</v-btn>
				</v-flex>
				<v-flex xs4 md2 >
					<v-btn  outlined block color="indigo"  >2</v-btn>
				</v-flex>
			</v-layout>
			
			<v-layout row wrap justify-space-around="">
				<v-flex xs4 md3>
					<v-btn outlined block color="indigo">1</v-btn>
				</v-flex>
				<v-flex xs4 md3>
					<v-btn outlined block color="indigo">2</v-btn>
				</v-flex>
			</v-layout>
			
			<v-layout row wrap justify-end="">
				<v-flex xs4 md3>
					<v-btn outlined block color="indigo">1</v-btn>
				</v-flex>
				<v-flex xs4 md3>
					<v-btn outlined block color="indigo">2</v-btn>
				</v-flex>
			</v-layout>
		</v-container>
		
	</div>
</template>

<script>
</script>

<style>
</style>
