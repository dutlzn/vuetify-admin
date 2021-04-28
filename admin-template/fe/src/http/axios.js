/**
 * axios拦截器
 */
import axios from 'axios'
import config from './config.js'
// import router from '@/router'

export default function $axios(options) {
	return new Promise((resolve, reject) => {
		const instance = axios.create({
			baseURL: config.baseUrl,
			headers: config.headers,
			timeout: config.timeout,
			withCredentials: config.withCredentials
		})
		
		// 添加请求拦截器
		instance.interceptors.request.use(function(config) {
			console.log("请求:", config);
			
		}, function(error){
			return Promise.reject(error);
		})
		
		//添加响应拦截器
		instance.interceptors.response.use(function(config) {
			console.log("响应：",config);
		}, function(error) {
			return Promise.reject(error);
		})
		// 请求处理
		instance(options).then(res => {
			resolve(res)
			return false;
		}).catch(error => {
			reject(error)
		})
	})
}