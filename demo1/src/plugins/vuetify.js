import '@fortawesome/fontawesome-free/css/all.css' // 确保您正在使用 css-loader
import 'material-design-icons-iconfont/dist/material-design-icons.css' // 确保您正在使用 css-load


import Vue from 'vue';

import Vuetify from 'vuetify/lib';

Vue.use(Vuetify);

export default new Vuetify({
	icons: {
		icon: 'md' || 'fa'
	},
	
	theme: {
		themes: {
			light: {
				primary: '#9652ff',
				success: '#3cd1c2',
				info: '#ffaa2c',
				error: '#f83e70'
			},
			dark : {
				primary: '#9652ff',
				success: '#3cd1c2',
				info: '#ffaa2c',
				error: '#f83e70'
			}
		}
	},
});
