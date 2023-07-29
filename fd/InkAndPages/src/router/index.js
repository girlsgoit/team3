import { createRouter, createWebHistory } from 'vue-router'
import SiteFooter from "../components/SiteFooter.vue"
import SiteHeader from "../components/SiteHeader.vue"
import MostPopularReviewsView from "../views/MostPopularReviewsView.vue"
import BooksView from "../views/BooksView.vue"
import LandingPage from "../components/LandingPage.vue"
import ComunityView from '../views/ComunityView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: LandingPage
    },
    {
      path: '/about',
      name: 'about',
      component: LandingPage
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
