import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/nexttick',
      name: 'nexttick',
      component: () => import('../views/nexttick/NextTickTest.vue')
    },
    {
      path: '/communication',
      name: 'communication',
      component: () => import('../views/communication/Index.vue'),
      children: [
        {
          path: '/communication/vmodel',
          name: 'CommunicationVModel',
          component: () => import('../views/communication/v-model/VModel.vue')
        },
        {
          path: '/communication/pinia',
          name: 'CommunicationPinia',
          component: () => import('../views/communication/pinia/Pinia.vue')
        }
      ]
    }
  ]
})

export default router
