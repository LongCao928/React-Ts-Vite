import axios from 'axios'
import type { AxiosRequestConfig, AxiosResponse } from 'axios'
import qs from 'qs'

export interface TParams {
  [key: string]: any
}

export type TRequestType = 'get' | 'post'

axios.defaults.withCredentials = true

const instance = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
  timeout: 0,
  withCredentials: true,
})

const myIntercptors = instance.interceptors.request.use(
  (config) => {
    console.log(config)
    return config
  },
  (error) => {
    return Promise.reject(error)
  }
)

// 移除请求拦截器
// axios.interceptors.request.eject(myIntercptors)
console.log(myIntercptors)

instance.interceptors.response.use(
  (response: AxiosResponse) => {
    console.log(response)
    const { data } = response
    console.log(data)
    return response
  },
  (error) => {
    return Promise.reject(error)
  }
)

function makeUrl(type: TRequestType, path: string, data?: Partial<TParams>) {
  // const host = envType ? '/proxy' : BASE_API
  if (path[0] !== '/') path = `/${path}`
  // console.log(data)
  data = data || {}
  // console.log(data)
  // console.log(qs.stringify(data))
  if (type === 'get') {
    // return `${module}${path}?${qs.stringify(data)}`
    return `${path}?${qs.stringify(data)}`
  }
  // return `${module}${path}`
  return `${path}`
}

export default {
  async post(
    path: string,
    data?: TParams,
    config?: Partial<AxiosRequestConfig>
  ) {
    // return axios.post(path, data, config || {})
    const url = makeUrl('post', path, data)
    return instance.post(url, data, config || {})
  },
  get: function (
    path: string,
    data?: TParams,
    config?: Partial<AxiosRequestConfig>
  ) {
    const url = makeUrl('get', path, data)
    return instance.get(url, config || {})
    // return axios.get(path, config || {})
  },
}
