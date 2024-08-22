import { request } from '../request'

export function fetchLogin(account, password) {
  return request({
    url: '/sys/auth/b/login',
    method: 'post',
    data: { account, password }
  })
}
