import Vue from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify'
import global from '@/utils/global'
import api from './http'
Vue.use(api)
Vue.config.productionTip = false
Vue.prototype.global = global;// 挂载全局配置模块
new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')
