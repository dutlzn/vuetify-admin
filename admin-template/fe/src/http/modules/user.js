import axios from '../axios'

// 范例
export const getAllUsers = (data) => {
	return axios({
		url: '/admin/user/pageUser',
		method: 'post',
		data
	})
}