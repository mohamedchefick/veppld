import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/home/index.vue'
import DetailsEvents from '../views/detailsEvents/index.vue'
import webCards from '../views/webCards/index.vue'
import webOrganizer from '../views/webOrganizer/index.vue'




const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/detailsevents',
    name: 'detailsevents',
    component: DetailsEvents
  },
  {
    path: '/webCards',
    name: 'webCards',
    component: webCards
  },
  {
    path: '/webOrganizer',
    name: 'webOrganizer',
    component: webOrganizer
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'page-not-found',
    component: () => import('../views/page-not-found/index.vue')
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { top: 0 }
    }
  }
})

export default router
