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
          path: '/communication/props',
          name: 'CommunicationProps',
          component: () => import('../views/communication/props/PropsTest.vue')
        },
        {
          path: '/communication/customevent',
          name: 'CommunicationCustomEvent',
          component: () => import('../views/communication/custom-event/EventTest.vue')
        },
        {
          path: '/communication/vmodel',
          name: 'CommunicationVModel',
          component: () => import('../views/communication/v-model/VModel.vue')
        },
        {
          path: '/communication/attrs',
          name: 'CommunicationUseAttrs',
          component: () => import('../views/communication/useAttrs/UseAttrsTest.vue')
        },
        {
          path: '/communication/inject',
          name: 'CommunicationInject',
          component: () => import('../views/communication/inject/InjectTest.vue')
        },
        {
          path: '/communication/pinia',
          name: 'CommunicationPinia',
          component: () => import('../views/communication/pinia/Pinia.vue')
        },
        {
          path: '/communication/slot',
          name: 'CommunicationSlot',
          component: () => import('../views/communication/slot/SlotTest.vue')
        }
      ]
    },
    {
      path: '/html',
      name: 'html',
      component: () => import('../views/html/Index.vue'),
      children: [
        {
          path: '/html/table',
          name: 'Table',
          component: () => import('../views/html/table/Table.vue')
        }
      ]
    }
  ]
})

export default router
