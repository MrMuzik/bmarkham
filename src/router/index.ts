import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/case-studies/hubspot-performance-recovery',
      name: 'hubspot-case-study',
      component: () => import('@/views/HubspotCaseStudyView.vue'),
    },
  ],
  scrollBehavior() {
    return { top: 0 }
  },
})

export default router
