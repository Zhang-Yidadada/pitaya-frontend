import { request } from '../request'

export function fetchLogin(username, password) {
  return request({
    url: '/auth/login',
    method: 'post',
    data: { username, password }
  })
}
