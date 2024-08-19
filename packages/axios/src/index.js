import axios from 'axios'

export function createFlatRequest(axiosConfig, options) {
  const instance = axios.create(axiosConfig)

  console.log(options)

  instance.interceptors.request.use((conf) => {
    return conf
  })

  instance.interceptors.response.use((resp) => {
    return resp
  })

  const flatRequest = async function (config) {
    const response = await instance(config)
    console.log('call flatRequest')
    return response
  }

  return flatRequest
}
