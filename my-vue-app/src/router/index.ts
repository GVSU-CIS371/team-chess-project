import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import OpeningView from '../views/OpeningView.vue'

const routes = [
  { path: '/', name: 'Home', component: Home },
  {
    path: '/openings/:id',
    name: 'opening',
    component: OpeningView
  }
  
]

export default createRouter({
  history: createWebHistory(),
  routes,
})
