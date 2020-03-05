import axios from 'axios';
import { Toast } from 'antd-mobile';
axios.interceptors.request.use(config => {
    return config
},
error => {
    Toast.hide()
    return Promise.reject(error)
})

axios.interceptors.response.use(response => {
    return response.data
},
error => {
    Toast.hide()
    return Promise.reject(error)
})

export default axios;