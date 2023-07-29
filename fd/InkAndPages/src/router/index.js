import { createRouter, createWebHistory } from 'vue-router'
import SiteFooter from "../components/SiteFooter.vue"
import SiteHeader from "../components/SiteHeader.vue"
import MostPopularReviewsView from "../views/MostPopularReviewsView.vue"
import BooksView from "../views/BooksView.vue"
import ComunityView from '../views/ComunityView.vue'
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
    },
    {
      path: '/home',
      name: 'home',
      component: SiteHeader
    },
    {
      path: '/books/:genre',
      name: 'books',
      props: true,
      component: BooksView
    },
    {
      path: '/reviews',
      name: 'reviews',
      component: MostPopularReviewsView
    },
    {
      path: '/sign in',
      name: 'sign in',
      component: SiteHeader
    },
    {
      path: '/community',
      name: 'community',
      component: ComunityView
    }
  
  ]
})

export default router
