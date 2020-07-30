import Vue from 'vue'
import Router from 'vue-router'
import HomePage from '../Pages/HomePage.vue'
import Explore from '../Pages/Explore.vue'
import Notifications from '../Pages/Notifications.vue'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HomePage',
      component: HomePage
    },
    {
      path: '/explore',
      name: 'Explore',
      component: Explore,
      props: true
    },
    {
      path: '/notifications',
      name: 'Notifications',
      component: Notifications,
    }
  ],
  mode: 'history'
})