import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/home/index.vue'
import DetailsEvents from '../views/detailsEvents/index.vue'
import webCards from '../views/webCards/index.vue'
import webOrganizer from '../views/webOrganizer/index.vue'
import webTicket from '../views/webTicket/index.vue'
import webCongratulation from '../views/webCongratulation/index.vue'
import DetailsTickets from '../views/detailsTickets/index.vue'







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
    path: '/webTicket',
    name: 'webTicket',
    component: webTicket
  },

  {
    path: '/webCongrat',
    name: 'webCongrat',
    component: webCongratulation
  },
  {
    path: '/detailsTickets',
    name: 'detailsTickets',
    component: DetailsTickets
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
