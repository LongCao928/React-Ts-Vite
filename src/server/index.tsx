import axios from 'axios'

interface TObj {
  [key: string]: string
}

export default {
  post: function (path: string, data: TObj) {
    return axios.post(path, data)
  },
  get: function (path: string) {
    return axios.get(path)
  },
}
