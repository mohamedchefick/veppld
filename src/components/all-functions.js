import http from '@/plugins/https'
import apiRoutes from '@/router/api-routes'

// GET ALL FAQ
export const getAllFaq = (data) => {
  return http.get(apiRoutes.baseURL + apiRoutes.getAllFaq, {
    params: data
  })
}
