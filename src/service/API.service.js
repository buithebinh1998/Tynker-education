import axios from 'axios'

const requestConfig = apiGateway => ({
  baseURL: apiGateway,
  timeout: 30000,
  headers: { 'content-type': 'application/json' }
})

const APIStaticObject = []

export default apiGateway => {
  const request = axios.create(requestConfig(apiGateway))

  APIStaticObject.push(request)

  return request
}
