<template>
	<v-app class="ma-3">
		<div class="display-1 grey--text">分类管理</div>

    <v-container>
			<v-row>
				<v-col cols="12" md="6">
					<p>
						<v-btn v-on:click="add1()" large class="mr-10" color="primary">
							<v-icon left >mode_edit</v-icon>
							新增一级</v-btn>
							
						<v-btn v-on:click="all()" large color="primary">
							<v-icon left>refresh</v-icon>
							刷新
						</v-btn>
					</p>
					
					<!-- table -->
					
				</v-col>
				<v-col cols="12" md="6">
					<p>
						<v-btn v-on:click="add2()" large color="primary">
							<v-icon left>edit</v-icon>
							新增二级
						</v-btn>
					</p>
				</v-col>
			</v-row>
		</v-container>
	</v-app>
</template>


<script>
export default {
  components: {  },
  name: "business-category",
  data: function () {
    return {
      category: {},
      categorys: [],
      level1: [],
      level2: [],
      active: {},
    };
  },
  mounted: function () {
    let _this = this;
    // _this.$refs.pagination.size = 5;
    _this.all();
    // sidebar激活样式方法一
    // this.$parent.activeSidebar("business-category-sidebar");
  },
  methods: {
    /**点击显示二级分类 */
    onClickLevel1(category) {
      let _this = this;
      _this.level2 = category.children;
      _this.active = category;
    },
    /**
     * 点击【新增】
     */
    add() {
      let _this = this;
      _this.category = {};
      $("#form-modal").modal("show");
    },

    /**新增一级 */
    add1() {
      let _this = this;
      _this.active = {};
      _this.level2 = [];
      _this.category = {
        parent: "00000000"
      };
       $("#form-modal").modal("show");
    },  
     /**
       * 点击【新增二级】
       */
      add2() {
        let _this = this;
        if (Tool.isEmpty(_this.active)) {
          Toast.warning("请先点击一级分类");
          return;
        }
        _this.category = {
          parent: _this.active.id
        };
        $(".modal").modal("show");
      },
    /**
     * 点击【编辑】
     */
    edit(category) {
      let _this = this;
      _this.category = $.extend({}, category);
      $("#form-modal").modal("show");
    },

    /**
     * 列表查询 查询全部
     */
    all() {
      let _this = this;
      Loading.show();
      _this.$ajax
        .post(process.env.VUE_APP_SERVER + "/business/admin/category/all")
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
          setTimeout(function () {
            $("tr.active").trigger("click");
          }, 100);
        })
    },

    /**
     * 点击【保存】
     */
    save() {
      let _this = this;

      // 保存校验
      if (
        1 != 1 ||
        !Validator.require(_this.category.parent, "父id") ||
        !Validator.require(_this.category.name, "名称") ||
        !Validator.length(_this.category.name, "名称", 1, 50)
      ) {
        return;
      }

      Loading.show();
      _this.$ajax
        .post(
          process.env.VUE_APP_SERVER + "/business/admin/category/save",
          _this.category
        )
        .then((response) => {
          Loading.hide();
          let resp = response.data;
          if (resp.success) {
            $("#form-modal").modal("hide");
            _this.all();
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
      Confirm.show("删除分类后不可恢复，确认删除？", function () {
        Loading.show();
        _this.$ajax
          .delete(
            process.env.VUE_APP_SERVER + "/business/admin/category/delete/" + id
          )
          .then((response) => {
            Loading.hide();
            let resp = response.data;
            if (resp.success) {
              _this.all();
              Toast.success("删除成功！");
            }
          });
      });
    },
  },
};
</script>


<style>
</style>
