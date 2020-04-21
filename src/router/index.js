import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home/index.vue'
import Classify from '../views/Classify/index.vue'
import Hello from '../views/Hello/index.vue'
import Favorite from '../views/Hello/Favorite/index.vue'
import history from '../views/Hello/History/index.vue'
import Login from '../views/Login/index.vue'
import My from '../views/My/index.vue'
import Ranking from '../views/Ranking/index.vue'
import Search from '../views/Search/index.vue'
import Register from '../views/Register/index.vue'
import SearchResult from '../views/SearchResult/index.vue'
import Vip from '../views/Vip/index.vue'
Vue.use(VueRouter)
const router = new VueRouter({
  routes: [
    {
      path: '/home',
      component: Home
    },
    {
      path: '/classify',
      component: Classify
    },
    {
      path: '/hello',
      component: Hello,
      children: [
        {
          path: 'favorite',
          component: Favorite
        },
        {
          path: 'history',
          component: history
        },
        {
          path: '',
          redirect: '/hello/favorite'
        }
      ]
    },
    {
      path: '/login',
      component: Login
    },
    {
      path: '/my',
      component: My
    },
    {
      path: '/ranking',
      component: Ranking
    },
    {
      path: '/search',
      component: Search
    },
    {
      path: '/register',
      component: Register
    },
    {
      path: '/search-result',
      component: SearchResult
    },
    {
      path: '/vip',
      component: Vip
    },
    {
      path: '/',
      redirect: '/home'
    }
  ]
})
export default router
