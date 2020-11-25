
import '@fortawesome/fontawesome-free/css/all.css' // 确保您正在使用 css-loader
import 'material-design-icons-iconfont/dist/material-design-icons.css' // 确保您正在使用 css-l
import Vue from 'vue';
import Vuetify from 'vuetify/lib';

Vue.use(Vuetify);

export default new Vuetify({
	icon: {
		iconfont: 'md' || 'fa'
	}
});
