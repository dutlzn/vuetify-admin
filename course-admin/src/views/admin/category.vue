<template>
	<v-app class="ma-3">
		<div class="display-1 grey--text">分类管理</div>

		<v-container>
			<v-row>
				<v-col cols="12" md="6">
					<p>
						<v-btn large class="mr-10" color="primary">
							<v-icon left>mode_edit</v-icon>
							新增一级
						</v-btn>

						<v-btn large color="primary">
							<v-icon left>refresh</v-icon>
							刷新
						</v-btn>
					</p>

					<!-- table -->
					<v-simple-table>
						<thead>
							<tr>
								<th class="primary--text">
									id
								</th>
								<th class="primary--text">
									名称
								</th>
								<th class="primary--text">
									顺序
								</th>
								<th class="primary--text">
									操作
								</th>
							</tr>
						</thead>

						<tbody>
							<tr v-for="category in level1" v-on:click="onClickLevel1(category)" :class="{'active': category.id === active.id}">
								<td>{{ category.id }}</td>
								<td>{{ category.name }}</td>
								<td>{{ category.sort }}</td>
								<td>
									<v-row align="center" justify="space-around">
										<v-btn x-small fab color="info">
											<v-icon>edit</v-icon>
										</v-btn>
										<v-btn x-small fab color="warning">
											<v-icon>delete</v-icon>
										</v-btn>
									</v-row>

								</td>
							</tr>
						</tbody>
					</v-simple-table>


				</v-col>
				<v-col cols="12" md="6">
					<p>
						<v-btn large color="primary">
							<v-icon left>edit</v-icon>
							新增二级
						</v-btn>
					</p>

					<v-simple-table>
						<thead>
							<tr>
								<th class="primary--text">id</th>
								<th class="primary--text"> 名称</th>
								<th class="primary--text">顺序</th>
								<th class="primary--text">操作</th>
							</tr>
						</thead>

						<tbody>
							<tr v-for="category in level2">
								<td>{{ category.id }}</td>
								<td>{{ category.name }}</td>
								<td>{{ category.sort }}</td>
								<td>
									<v-row align="center" justify="space-around">
										<v-btn x-small fab color="info">
											<v-icon>edit</v-icon>
										</v-btn>
										<v-btn x-small fab color="warning">
											<v-icon>delete</v-icon>
										</v-btn>
									</v-row>

								</td>
							</tr>
						</tbody>
					</v-simple-table>
				</v-col>
			</v-row>
		</v-container>
	</v-app>
</template>


<script>
	export default {
		components: {},
		name: "business-category",
		data: function() {
			return {
				category: {},
				categorys: [],
				level1: [],
				level2: [],
				active: {},
			}
		},

		mounted: function() {
			let _this = this;
			_this.all();
		},

		methods: {
			/**
			 * 列表查询,查询全部
			 */
			all() {
				let _this = this;
				Loading.show();
				_this.$ajax.post(process.env.VUE_APP_SERVER + "/business/admin/category/all")
					.then((response) => {
						Loading.hide();
						let resp = response.data;
						_this.categorys = resp.content;
						// 将所有记录格式化成树形结构
						_this.level1 = [];
						for (let i = 0; i < _this.categorys.length; i++) {
							let c = _this.categorys[i];
							if (c.parent === "00000000") {
								_this.level1.push(c);
								for (let j = 0; j < _this.categorys.length; j++) {
									let child = _this.categorys[j];
									if (child.parent === c.id) {
										if (Tool.isEmpty(c.children)) {
											c.children = [];
										}
										c.children.push(child);
									}
								}
							}
						}

						_this.level2 = [];
						// 对当前一级分类中选中的表格触发一次点击事件，以刷新二级菜单列表
						// 注意：界面的渲染需要等vue绑定好变量后才做，所以加延时100ms
						setTimeout(function() {
							$("tr.active").trigger("click");
						}, 100);
					})
			},

			/**
			 * 一级分类吗某一行的点击触发事件
			 */
			onClickLevel1(category) {
				let _this = this;
				_this.active = category;
				_this.level2 = category.children;
			}
		}

	};
</script>


<style scoped>
	.active td {
		background-color: yellowgreen !important;
	}
</style>
