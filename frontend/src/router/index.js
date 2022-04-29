import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/homeview/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
    meta: {
      title: "Accueil",
    },
  },
  {
    path: '/about',
    name: 'about',
    meta: {
      title: "A propos",
    },
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue'),
  }
  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
