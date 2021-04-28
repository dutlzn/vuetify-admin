/**
 * 这里把axios注册为vue插件 使用
 * 使用方式
 * this.$api.子模块.方法(参数)
 * this.$api.user.findAllUser(data)
 */

import api from './api'

const install = Vue => {
	Object.defineProperties(Vue.prototype, {
		$api: {
			get() {
				return api
			}
		}
	})
}

export default install