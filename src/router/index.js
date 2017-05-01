import Vue from 'vue'
import Router from 'vue-router'
import Movies from '../components/Movies.vue'
import Grid from '../components/Grid.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Movies',
      component: Movies
    },
    {
      path: '/grid',
      name: 'Grid',
      component: Grid
    }
  ]
})
