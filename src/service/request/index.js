import { createFlatRequest } from '@pkg/axios'

const baseURL = 'http://test.com'

export const request = createFlatRequest({
  baseURL
})
