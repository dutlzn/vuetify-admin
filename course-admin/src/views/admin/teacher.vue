<template>
	<v-app>
		<div class="display-1 grey--text">讲师管理</div>

		<p class="ma-10">
			<v-btn class="mr-5 mb-5" color="primary">
				<v-icon left small>edit</v-icon>
				新增
			</v-btn>

			<v-btn class="mb-5" color="primary" @click="list(1)">
				<v-icon left small>refresh</v-icon>
				刷新
			</v-btn>
		</p>

		<pagination ref="pagination" v-bind:list="list" v-bind:itemCount="5"></pagination>


		<v-container>
			<v-row>
				<v-col cols="3" v-for="(teacher, i) in teachers" :key = "i">
					<v-card>
						<v-img>

						</v-img>

						<v-card-text>
							{{ teacher.name }}
						</v-card-text>

						<v-card-actions>

						</v-card-actions>
					</v-card>
				</v-col>
			</v-row>
		</v-container>

	</v-app>
</template>

<script>
	import Pagination from "../../components/pagination";
	export default {
		name: 'business-teacher',

		components: {
			Pagination
		},

		data: function() {
			return {
				teacher: {},
				teachers: [],
			}
		},

		mounted: function() {
			let _this = this;
		_this.$refs.pagination.size = 5;
			_this.list(1);
		},

		methods: {
			/** 
			 * 列表查询
			 */
			list(page) {
				let _this = this;
				Loading.show();
				_this.$ajax.post(process.env.VUE_APP_SERVER + '/business/admin/teacher/list', {
					page: page,
					size: _this.$refs.pagination.size,
				}).then((response) => {
					Loading.hide();
					let resp = response.data;
					_this.teachers = resp.content.list;
					_this.$refs.pagination.render(page, resp.content.total);

				})
			},
		}

	}
</script>

<style>
</style>
