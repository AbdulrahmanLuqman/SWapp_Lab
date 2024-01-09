import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Log from '../components/Log.vue'
import YoungPersonProfile from '../components/YoungPerson.vue'
import Incidents from '../components/Incidents.vue'
import TrainingHub from '../components/TrainingHub.vue'
import Policies from '../components/Policies.vue'
import SwProfile from '../components/SwProfile.vue'
import Notification from '../components/Notification.vue'
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
        component: Log,
        },
        {
          path: '/yp-profile',
          name: 'YoungPersonProfile',
          component: YoungPersonProfile,
        },
        {
          path: '/incident',
          name: 'Incidents',
          component: Incidents,
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
          path: '/notifications',
          name: 'Notification',
          component: Notification,
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
