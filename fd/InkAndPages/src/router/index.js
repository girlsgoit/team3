import { createRouter, createWebHistory } from 'vue-router'
import SiteFooter from "../components/SiteFooter.vue"

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: SiteFooter
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: SiteFooter
    },
    {
      path: '/terms',
      name: 'terms',
      component: SiteFooter
    },
    {
      path: '/ptivacy',
      name: 'privacy',
      component: SiteFooter

    },
    {
      path: '/help',
      name: 'help',
      component: SiteFooter
    }
  
  ]
})

export default router
