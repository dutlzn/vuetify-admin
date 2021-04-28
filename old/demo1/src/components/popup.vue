<template>
	<div>
		<v-dialog max-width="600px">
			<template v-slot:activator="{ on }">
				<v-btn outlined color="teal lighten-3" dark v-on="on">Add new project</v-btn>
			</template>
		</v-dialog>

	</div>
</template>

<script>
	export default {

	}
</script>

<style>
</style>
