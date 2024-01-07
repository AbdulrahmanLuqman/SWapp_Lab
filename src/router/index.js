import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ServiceProfile from '../components/ServicesProfile.vue'
import YoungPersonProfile from '../components/YoungPerson.vue'
import Reports from '../components/Reports.vue'
import TrainingHub from '../components/TrainingHub.vue'
import Policies from '../components/Policies.vue'
import SwProfile from '../components/SwProfile.vue'
import TimeSheet from '../components/TimeSheet.vue'
import NotFoundPage from '../components/NotFoundPage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: HomeView,

      children: [
        {
        path: '/',
        name: '',
        component: ServiceProfile,
        },
        {
          path: '/yp-profile',
          name: 'YoungPersonProfile',
          component: YoungPersonProfile,
        },
        {
          path: '/reports',
          name: 'Reports',
          component: Reports,
        },
        {
          path: '/training-hub',
          name: 'TrainingHub',
          component: TrainingHub,
        },
        {
          path: '/policies',
          name: 'Policies',
          component: Policies,
        },
        {
          path: '/sw-profile',
          name: 'SwProfile',
          component: SwProfile,
        },
        {
          path: '/time-sheet',
          name: 'TimeSheet',
          component: TimeSheet,
        },
        {
          path: '/:catchAll(.*)',
          name: 'NotFoundPage',
          component: NotFoundPage
        }
      ]
    },
  ]
})

export default router
