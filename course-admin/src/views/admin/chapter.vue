<!-- 大章页面 -->
<template>
	<v-app class="ma-3" app>
		<!-- 主要内容 -->
		<div class="display-1 grey--text">大章管理
			<v-icon>keyboard_arrow_right</v-icon>
			<span class="text-h5">{{ course.name }}</span>
		</div>


		<p class="ma-10">
			<v-btn to="/business/course" class="mr-5 mb-5" color="primary">
				返回课程
			</v-btn>
			<v-btn class="mr-5 mb-5" color="primary" @click="add()">
				<v-icon left small>add</v-icon>
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
				<v-col cols="12">
					<v-simple-table>
						
					</v-simple-table>
				</v-col>
			</v-row>
		</v-container>
	</v-app>
</template>

<script>
	import Pagination from "../../components/pagination.vue";
	export default {
		name: 'business-chapter',
		components: {
			Pagination
		},
		data: function() {
			return {
				// 映射表单数据
				chapter: {},
				chapters: [],
				course: {}
			}
		},

		mounted: function() {
			let _this = this;
			_this.$refs.pagination.size = 5;
			let course = SessionStorage.get(SESSION_KEY_COURSE) || {};
			if (Tool.isEmpty(course)) {
				_this.$router.push("/welcome");
			}
			_this.course = course;
			_this.list(1);
		},

		methods: {

			// 获取所有大章的数据
			list(page) {
				let _this = this;
				Loading.show();
				_this.$ajax
					.post(process.env.VUE_APP_SERVER + "/business/admin/chapter/list", {
						page: page,
						//  跟组子组件获取  size应该有一个默认的参数
						size: _this.$refs.pagination.size,
						courseId: _this.course.id,
					})
					.then((response) => {
						Loading.hide();
						let resp = response.data;
						_this.chapters = resp.content.list;
						_this.$refs.pagination.render(page, resp.content.total);
					});
			},
		}
	}
</script>

<style>
</style>
