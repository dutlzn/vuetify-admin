<!-- 课程管理页面 -->
<template>

	<v-app class="ma-3">
		<!-- 课程修改 新增 模态框 -->
		<v-dialog v-model="dialogCourse" max-width="1000px">
			<v-card>
				<v-card-title class="font-weight-bold">
					课程详情表单
				</v-card-title>

				<v-card-text>
					<v-row>
						<v-col cols="4">
							<v-text-field label="名称" v-model="course.name"></v-text-field>
						</v-col>

						<v-col cols="4">
							<v-select label="讲师"></v-select>
						</v-col>
						<v-col cols="4">
							<v-text-field label="时长" v-model="course.time"></v-text-field>
						</v-col>
					</v-row>
				</v-card-text>

				<v-card-text>
					<v-row>
						<v-col cols="4">
							<!-- vuetify key value  -->
							<v-select label="级别" v-model="course.level" :items="COURSE_LEVEL" item-text="value" item-value="key"></v-select>
						</v-col>

						<v-col cols="4">
							<v-select label="收费" v-model="course.charge" :items="COURSE_CHARGE" item-text="value" item-value="key"></v-select>
						</v-col>

						<v-col cols="4">
							<v-select label="状态" v-model="course.status" :items="COURSE_STATUS" item-text="value" item-value="key"></v-select>
						</v-col>
					</v-row>
				</v-card-text>

				<v-card-text>
					<v-col cols="12">
						<v-text-field label="封面" v-model="course.image"></v-text-field>
					</v-col>
				</v-card-text>



				<v-card-actions>
					<v-spacer></v-spacer>
					<v-btn class="primary" @click="dialogCourse = false">
						取消
					</v-btn>

					<v-btn class="success" @click="save()">
						保存
					</v-btn>
				</v-card-actions>

			</v-card>
		</v-dialog>

		<!-- 课程内容模态框 -->
		<v-dialog v-model="dialogContent" id="dialog-content">
			<v-card>
				<v-card-title class="font-weight-bold">
					课程内容修改
				</v-card-title>


				<v-card-text>
					<v-col cols="12">
						{{ saveContentLabel }}
					</v-col>
				</v-card-text>

				<v-card-text dark>
					<!-- <v-col cols="12"> -->
					<div id="content"></div>
					<!-- </v-col> -->
				</v-card-text>

				<v-card-actions>
					<v-spacer></v-spacer>
					<v-btn @click="dialogContent = false" class="primary">
						取消
					</v-btn>

					<v-btn @click="saveContent()" class="success">
						保存
					</v-btn>

					<v-btn class="info" id="close-content">
						关闭
					</v-btn>
				</v-card-actions>
			</v-card>
		</v-dialog>

		<!-- 课程排序模态框 -->
		<v-dialog v-model="dialogSort" max-width="300px">
			<v-card>
				<v-card-title class="font-weight-bold">
					课程排序修改
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
										<v-list-item-content>
											<v-list-item-title>{{ teacher.name }}</v-list-item-title>
											<v-list-item-subtitle>{{ teacher.position }}</v-list-item-subtitle>
										</v-list-item-content>
									</v-list-item>
								</v-list>
							</div>
						</v-card-text>
						<v-divider></v-divider>
						<!-- 发布 收费 初级  -->
						<v-card-text>

							<v-chip class="ma-2" color="indigo" text-color="white"> {{COURSE_LEVEL | optionKV(course.level)}}</v-chip>

							<v-chip class="ma-2" color="orange" text-color="white"> {{COURSE_CHARGE | optionKV(course.charge)}}</v-chip>

							<v-chip class="ma-2" color="green" text-color="white"> {{COURSE_STATUS | optionKV(course.status) }}</v-chip>

							<v-chip class="ma-2" color="indigo" text-color="white">ID:{{ course.id }}</v-chip>

							<v-chip class="ma-2" color="orange" text-color="white"> 排序:{{ course.sort }}</v-chip>

							<v-chip class="ma-2" color="green" text-color="white">时长:{{ course.time | formatSecond }}</v-chip>

						</v-card-text>



						<!-- 课程价格 -->
						<v-card-text class="ml-3 text-h5 blue--text d-flex">
							<!-- {{ course.price }} -->
							<!-- <v-chip class="ma-2 font-weight-bold" color="success" outlined> -->
								<v-icon left color="blue" >fas fa-yen-sign</v-icon>
								{{ course.price }}
							<!-- </v-chip> -->


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

							<v-btn small class="primary" @click="editContent(course)">

								内容
							</v-btn>

							<v-btn small class="accent" @click="openSortModal(course)">

								排序
							</v-btn>

							<v-btn small class="info" @click="edit(course)">

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
				saveContentInterval: {},

				// 排序模态框
				dialogSort: false,
				// 内容编辑模态框
				dialogContent: false,

				// 课程修改 新增
				dialogCourse: false,


				saveContentLabel: "",



				course: {},
				courses: [],
				COURSE_LEVEL: COURSE_LEVEL_ARRAY,
				COURSE_CHARGE: COURSE_CHARGE_ARRAY,
				COURSE_STATUS: COURSE_STATUS_ARRAY,
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

			/**
			 * 打开内容编辑器
			 */
			/**
			 * 点击【编辑】
			 */
			edit(course) {
				let _this = this;
				_this.course = $.extend({}, course);
				// _this.listCategory(course.id);
				_this.dialogCourse = true;
			},
			/**
			 * 打开内容编辑器
			 */
			editContent(course) {

				let _this = this;
				_this.dialogContent = true;
				let id = course.id;
				_this.course = course;


				$("#content").summernote({
					focus: true,
					height: 300
				});

				// 先清空历史文本
				$("#content").summernote("code", "");
				_this.saveContentLabel = "";

				Loading.show();

				_this.$ajax
					.get(
						process.env.VUE_APP_SERVER +
						"/business/admin/course/find-content/" +
						id
					)
					.then((response) => {
						Loading.hide();
						let resp = response.data;

						if (resp.success) {

							if (resp.content) {
								$("#content").summernote("code", resp.content.content);
							}

							// 定时自动保存
							let saveContentInterval = setInterval(function() {
								_this.saveContent();
							}, 5000);

							// 关闭内容框时，清空自动保存任务
							$('#close-content').on("click", function(e) {
								clearInterval(saveContentInterval);
								_this.dialogContent = false;
							});
						} else {
							Toast.warning(resp.message);
						}
					});
			},


			/**
			 * 保存内容
			 */
			saveContent() {
				let _this = this;
				let content = $("#content").summernote("code");
				Loading.show();
				_this.$ajax
					.post(
						process.env.VUE_APP_SERVER + "/business/admin/course/save-content", {
							id: _this.course.id,
							content: content,
						}
					)
					.then((response) => {
						Loading.hide();
						let resp = response.data;
						if (resp.success) {
							// Toast.success("内容保存成功");
							let now = Tool.dateFormat("hh:mm:ss");
							_this.saveContentLabel = "最后保存的时间: " + now;
						} else {
							Toast.warning(resp.message);
						}
					});
			},

			/**
			 * 保存课程
			 */
			save() {
				let _this = this;

				console.log(_this.course.level);
			}
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
