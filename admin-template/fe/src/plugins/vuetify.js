import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';
// 添加图标字体
import '@fortawesome/fontawesome-free/css/all.css' // 确保您正在使用 css-loader
import 'material-design-icons-iconfont/dist/material-design-icons.css' // 确保您正在使用 css

Vue.use(Vuetify);

export default new Vuetify({
	icons: {
		iconfont: 'md' || 'fa',
	},
});
