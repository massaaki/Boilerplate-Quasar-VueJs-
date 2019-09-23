import Vue from 'vue'
import axios from 'axios'

const axiosInstance = axios.create({
  baseURL: 'http://auth_api.test/api'
})


Vue.prototype.$axios = axiosInstance


export {
  axiosInstance
}
