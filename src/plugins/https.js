import axios from 'axios'
import apiRouter from '../router/api-routes'
// import { useUserStore } from '@/stores/index'

// La fonction useStore doit être appelée à l'intérieur d'un composant ou d'une fonction
// réactive (par exemple, dans un composable Vue 3)
// let store = useUserStore()

const http = axios.create({
  baseURL: apiRouter.baseURL
})

http.defaults.headers.common['x-api-key'] = import.meta.env.VITE_X_API_KEY

// Attendre que le store soit initialisé avant d'accéder au token
// if (store && store.token) {
//   http.defaults.headers.common.Authorization = 'Bearer ' + store.token
// }

// Intercepteur pour les requêtes
http.interceptors.request.use(
  function (request) {
    if (request.baseURL === apiRouter.baseURL) {
      console.log('owner site')
    } else {
      console.log('other site')
    }
    return request
  },
  function (error) {
    return Promise.reject(error)
  }
)

// Intercepteur pour les réponses
http.interceptors.response.use(
  function (response) {
    return response.data
  },
  function (error) {
    return Promise.reject(
      error.response || {
        response: { status: error?.statusCode || 500, message: error.message }
      }
    )
  }
)

export default http
