<!-- 课程管理页面 -->
<template>

	<v-app class="ma-3">
		<!-- 课程修改 新增 模态框 -->
		<v-dialog v-model="dialogCourse"></v-dialog>

		<!-- 课程内容模态框 -->
		<v-dialog v-model="dialogContent"></v-dialog>

		<!-- 课程排序模态框 -->
		<v-dialog v-model="dialogSort" max-width="300px">
			<v-card>
				<v-card-title class="font-weight-bold">
					分类表单
				</v-card-title>

				<v-card-text>
					<v-container>
						<v-col cols="12">
							<v-text-field label="当前排序" v-model="sort.oldSort" disabled></v-text-field>
						</v-col>
						<v-col cols="12">
							<v-text-field label="新排序" v-model="sort.newSort" required></v-text-field>
						</v-col>
					</v-container>
				</v-card-text>


				<v-card-actions>
					<v-spacer></v-spacer>
					<v-btn @click="dialogSort = false" class="primary">
						取消
					</v-btn>

					<v-btn @click="updateSort()" class="success">
						更新排序
					</v-btn>
				</v-card-actions>
			</v-card>
		</v-dialog>
		<!-- 主要内容 -->
		<div class="display-1 grey--text">课程管理</div>


		<p class="ma-10">
			<v-btn class="mr-5 mb-5" color="primary" @click="add()">
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
				<v-col sm="12" md="4" v-for="(course, i) in courses" :key="i">
					<v-card>
						<v-img class="card-img" v-show="!course.image" src="/static/image/demo-course.jpg">

						</v-img>

						<v-img class="card-img" v-show="course.image" :src="course.image">

						</v-img>



						<v-card-title class="font-weight-bold blue--text text-h5">

							{{ course.name  }}

						</v-card-title>

						<v-card-text>
							<div v-for="teacher in teachers.filter(t=>{return t.id===course.teacherId})">
								<v-list two-line class="teacher-card">
									<v-list-item>
										<v-avatar class="mr-7">
											<img v-show="!teacher.image" src="/static/image/avatar.png" />
											<img v-show="teacher.image" v-bind:src="teacher.image" />
										</v-avatar>
										<v-item-content>
											<v-list-item-title>{{ teacher.name }}</v-list-item-title>
											<v-list-item-subtitle>{{ teacher.position }}</v-list-item-subtitle>
										</v-item-content>
									</v-list-item>
								</v-list>
							</div>
						</v-card-text>
						<v-divider></v-divider>
						<!-- 发布 收费 初级  -->
						<v-card-text>

							<v-chip class="ma-2" color="indigo" text-color="white"> {{COURSE_LEVEL | optionKV(course.level)}}</v-chip>

							<v-chip class="ma-2" color="orange" text-color="white"> {{COURSE_LEVEL | optionKV(course.level)}}</v-chip>

							<v-chip class="ma-2" color="green" text-color="white"> {{COURSE_STATUS | optionKV(course.status) }}</v-chip>

							<v-chip class="ma-2" color="indigo" text-color="white">ID:{{ course.id }}</v-chip>

							<v-chip class="ma-2" color="orange" text-color="white"> 排序:{{ course.sort }}</v-chip>

							<v-chip class="ma-2" color="green" text-color="white">时长:{{ course.time | formatSecond }}</v-chip>

						</v-card-text>



						<!-- 课程价格 -->
						<v-card-text>
							<!-- {{ course.price }} -->
							<v-chip class="ma-2 font-weight-bold" color="success" outlined>
								<v-icon left x-small>fas fa-yen-sign</v-icon>
								{{ course.price }}
							</v-chip>


						</v-card-text>
						<!-- 课程简介 -->
						<v-card-text class="text-subtitle-1">
							{{ course.summary }}
						</v-card-text>
						<v-divider></v-divider>

						<v-card-actions>
							<v-spacer></v-spacer>
							<v-btn small class="success">
								大章
							</v-btn>

							<v-btn small class="primary">

								内容
							</v-btn>

							<v-btn small class="accent" @click="openSortModal(course)">

								排序
							</v-btn>

							<v-btn small class="info">

								编辑
							</v-btn>

							<v-btn small class="error">
								删除
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
	import Pagination from "../../components/pagination";
	export default {
		components: {
			Pagination
		},

		name: 'business-course',

		data: function() {
			return {

				// 排序模态框
				dialogSort: false,
				course: {},
				courses: [],
				COURSE_LEVEL: COURSE_LEVEL,
				COURSE_CHARGE: COURSE_CHARGE,
				COURSE_STATUS: COURSE_STATUS,
				categorys: [],
				teachers: [],

				sort: {
					id: "",
					oldSort: 0,
					newSort: 0,
				}
			}
		},


		mounted: function() {
			let _this = this;
			_this.$refs.pagination.size = 5;
			// 获取所有的老师
			_this.allTeachers();
			// 分页展示
			_this.list(1);
		},


		methods: {

			/**
			 * 列表查询
			 */
			list(page) {
				let _this = this;
				Loading.show();
				_this.$ajax
					.post(process.env.VUE_APP_SERVER + "/business/admin/course/list", {
						page: page,
						size: _this.$refs.pagination.size,
					})
					.then((response) => {
						Loading.hide();
						let resp = response.data;
						_this.courses = resp.content.list;
						_this.$refs.pagination.render(page, resp.content.total);
					});
			},


			/**
			 * 获取所有老师
			 */
			allTeachers() {
				let _this = this;
				Loading.show();
				_this.$ajax
					.post(process.env.VUE_APP_SERVER + "/business/admin/teacher/all")
					.then((response) => {
						Loading.hide();
						let resp = response.data;
						_this.teachers = resp.content;
					});
			},


			/**
			 * 打开修改排序的模态框
			 */
			openSortModal(course) {
				let _this = this;
				_this.sort = {
					id: course.id,
					oldSort: course.sort,
					newSort: course.sort
				};

				_this.dialogSort = true;
			},



			/**
			 * 排序
			 */
			updateSort() {
				let _this = this;
				if (_this.sort.newSort === _this.sort.oldSort) {
					Toast.warning("排序没有变化");
					return;
				}
				Loading.show();
				_this.$ajax.post(process.env.VUE_APP_SERVER + "/business/admin/course/sort", _this.sort).then((res) => {
					let response = res.data;

					if (response.success) {
						Toast.success("更新排序成功");
						_this.dialogSort = false;
						_this.list(1);
					} else {
						Toast.error("更新排序失败");
					}
				});
			},

		},



	};
</script>

<style scoped>
	.teacher-card {
		cursor: pointer;
	}

	.teacher-card:hover {
		background-color: lightgrey;
	}
</style>
