import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/Home.vue')
  },
  {
    path: '/sort',
    name: 'sort',
    component: () => import('../views/Sort.vue'),
    // children:[
    //   {
    //     path: '/sortone',
    //     name: 'sortone',
    //     component: () => import('../views/Sortone.vue')
    //   }
    // ]
  },
  {
    path: '/favorites',
    name: 'favorites',
    component: () => import('../views/Favorites.vue')
  },
  {
    path: '/mine',
    name: 'mine',
    component: () => import('../views/Mine.vue')
  },
  {
    path: '/search_list',
    name: 'Search_list',
    component: () => import('../views/Search_list.vue')
  },
  {
    path: '/details',
    name: 'Details',
    component: () => import('../views/Details.vue')
  },
]

const router = new VueRouter({
  routes
})

export default router
