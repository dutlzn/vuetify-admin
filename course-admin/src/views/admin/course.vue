<!-- 课程管理页面 -->
<template>

	<v-app class="ma-3">
		<!-- 课程修改 新增 模态框 -->
		<v-dialog v-model="dialogCourse"></v-dialog>

		<!-- 课程内容模态框 -->
		<v-dialog v-model="dialogContent"></v-dialog>

		<!-- 课程排序模态框 -->
		<v-dialog v-model="dialogSort"></v-dialog>
		<!-- 主要内容 -->
		<div class="display-1 grey--text">课程管理</div>

		<pagination ref="pagination" v-bind:list="list" v-bind:itemCount="5"></pagination>

		<v-container>
			<v-row>
				<v-col cols="4" v-for="(course, i) in courses" :key="i">
					<v-card>
						<v-img class="card-img" v-show="!course.image" src="/static/image/demo-course.jpg">

						</v-img>

						<v-img class="card-img" v-show="course.image" :src="course.image">

						</v-img>



						<v-card-title class="font-weight-bold blue--text">

							{{ course.name  }}

						</v-card-title>

						<!-- 发布 收费 初级  -->
						{{COURSE_LEVEL | optionKV(course.level)}}
						{{COURSE_CHARGE | optionKV(course.charge)}}
						{{COURSE_STATUS | optionKV(course.status) }}
						<!-- 讲师介绍 两行 布局 -->
							<div v-for="teacher in teachers.filter(t=>{return t.id===course.teacherId})" class="profile-activity clearfix">
													<div>
														<img v-show="!teacher.image" class="pull-left " src="/ace/assets/images/avatars/avatar5.png">
														<img v-show="teacher.image" class="pull-left" v-bind:src="teacher.image">
														<a class="user" href="#"> {{teacher.name}} </a>
														<br>
														{{teacher.position}}
													</div>
												</div>

						<!-- 课程价格 -->
						{{ course.price }}
						<!-- 课程简介 -->
						{ course.summary }}
						<!-- 课程id -->
						<span class="badge badge-info"> {{ course.id }} </span>
						<!-- 课程排序 -->
						<span class="badge badge-info">排序:{{ course.sort }} </span>
						<!-- 课程时长 -->

						<span class="badge badge-info">时长:{{ course.time | formatSecond }}</span>

							<v-card-actions>
								<v-spacer></v-spacer>
								<v-btn small class="success">

									大章
								</v-btn>

								<v-btn small class="primary">

									内容
								</v-btn>

								<v-btn small class="accent">

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
		name: "business-course",
		data: function() {
			return {
				// 修改 新增 模态框
				dialogCourse: false,
				// 课程内容模态框
				dialogContent: false,
				// 排序模态框
				dialogSort: false,
				course: {},
				courses: [],
				COURSE_LEVEL: COURSE_LEVEL,
				COURSE_CHARGE: COURSE_CHARGE,
				COURSE_STATUS: COURSE_STATUS,
				categorys: [],
				tree: [],
				saveContentLabel: "",
				sort: {
					id: "",
					oldSort: 0,
					newSort: 0
				},
				teachers: [],

			};
		},
		mounted: function() {
			let _this = this;
			_this.$refs.pagination.size = 5;
			// 获取所有分类
			// _this.allCategory();
			// 获取所有讲师
			_this.allTeachers();
			_this.list(1);

			// sidebar激活样式方法一
			// this.$parent.activeSidebar("business-course-sidebar");
		},
		methods: {
			allCategory() {
				let _this = this;
				Loading.show();
				_this.$ajax
					.post(process.env.VUE_APP_SERVER + "/business/admin/category/all")
					.then((response) => {
						Loading.hide();
						let resp = response.data;
						_this.categorys = resp.content;

						// _this.initTree();
					});
			},

			initTree() {
				let _this = this;
				let setting = {
					check: {
						enable: true,
					},
					data: {
						simpleData: {
							idKey: "id",
							pIdKey: "parent",
							rootPId: "00000000",
							enable: true,
						},
					},
				};

				let zNodes = _this.categorys;
				_this.tree = $.fn.zTree.init($("#tree"), setting, zNodes);
				// 展开所有的节点
				_this.tree.expandAll(true);
			},
			/**
			 * ,点击【新增】
			 */
			add() {
				let _this = this;
				_this.course = {

					// 也可以初始化更多的枚举字段，收费、初级、草稿
					level: "1",
					status: "P",
					charge: "C",
					sort: _this.$refs.pagination.total + 1
				};
				// 新增的时候，让所有的节点都不选中
				_this.tree.checkAllNodes(false);
				$("#form-modal").modal("show");
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
				$("#course-sort-modal").modal("show");
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
						$("#course-sort-modal").modal("hide");
						_this.list(1);
					} else {
						Toast.error("更新排序失败");
					}
				});
			},

			/**
			 * 点击【编辑】
			 */
			edit(course) {
				let _this = this;
				_this.course = $.extend({}, course);
				_this.listCategory(course.id);
				$("#form-modal").modal("show");
			},
			/**
			 * 打开内容编辑器
			 */
			editContent(course) {
				$("#course-content-modal").modal("show");
				let _this = this;
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
							$("course-content-modal").modal({
								backdrop: "static",
								keyboard: false,
							});

							if (resp.content) {
								$("#content").summernote("code", resp.content.content);
							}

							// 定时自动保存
							let saveContentInterval = setInterval(function() {
								_this.saveContent();
							}, 5000);
							// 关闭内容框时，清空自动保存任务
							$('#course-content-modal').on('hidden.bs.modal', function(e) {
								clearInterval(saveContentInterval);
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
			 * 点击【大章】
			 */
			toChapter(course) {
				let _this = this;
				SessionStorage.set(SESSION_KEY_COURSE, course);
				_this.$router.push("/business/chapter");
			},

			/**
			 * 查找课程下所有分类
			 * @param courseId
			 */
			listCategory(courseId) {
				let _this = this;
				Loading.show();
				_this.$ajax
					.post(
						process.env.VUE_APP_SERVER +
						"/business/admin/course/list-category/" +
						courseId
					)
					.then((res) => {
						Loading.hide();
						console.log("查找课程下所有分类结果：", res);
						let response = res.data;
						let categorys = response.content;

						// 勾选查询到的分类
						_this.tree.checkAllNodes(false);
						for (let i = 0; i < categorys.length; i++) {
							let node = _this.tree.getNodeByParam("id", categorys[i].categoryId);
							_this.tree.checkNode(node, true);
						}
					});
			},

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
			 * 点击【保存】
			 */
			save() {
				let _this = this;

				// 保存校验
				if (
					1 != 1 ||
					!Validator.require(_this.course.name, "名称") ||
					!Validator.length(_this.course.name, "名称", 1, 50) ||
					!Validator.length(_this.course.summary, "概述", 1, 2000) ||
					!Validator.length(_this.course.image, "封面", 1, 100)
				) {
					return;
				}

				let categorys = _this.tree.getCheckedNodes();
				if (Tool.isEmpty(categorys)) {
					Toast.warning("请选择分类!");
					return;
				}
				_this.course.categorys = categorys;

				Loading.show();
				_this.$ajax
					.post(
						process.env.VUE_APP_SERVER + "/business/admin/course/save",
						_this.course
					)
					.then((response) => {
						Loading.hide();
						let resp = response.data;
						if (resp.success) {
							$("#form-modal").modal("hide");
							_this.list(1);
							Toast.success("保存成功！");
						} else {
							Toast.warning(resp.message);
						}
					});
			},

			/**
			 * 点击【删除】
			 */
			del(id) {
				let _this = this;
				Confirm.show("删除课程后不可恢复，确认删除？", function() {
					Loading.show();
					_this.$ajax
						.delete(
							process.env.VUE_APP_SERVER + "/business/admin/course/delete/" + id
						)
						.then((response) => {
							Loading.hide();
							let resp = response.data;
							if (resp.success) {
								_this.list(1);
								Toast.success("删除成功！");
							}
						});
				});
			},

			allTeachers() {
				let _this = this;
				Loading.show();
				_this.$ajax
					.post(process.env.VUE_APP_SERVER + "/business/admin/teacher/all")
					.then((response) => {
						Loading.hide();
						let resp = response.data;
						_this.teachers = resp.content;

						// _this.initTree();
					});
			},
		},
	};
</script>

<style scoped>
	.caption h3 {
		font-size: 30px;
	}

	@media (max-width: 1199px) {
		.caption h3 {
			font-size: 16px;
		}
	}
</style>
