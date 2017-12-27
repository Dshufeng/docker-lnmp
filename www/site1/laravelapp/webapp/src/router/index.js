import Vue from 'vue'
import Router from 'vue-router'
import Personal from '@/components/Personal'
import ChangePass from '@/components/ChangePass'
import GoodsDetail from '@/components/GoodsDetail'
import Search from '@/components/Search'
import Site from '@/components/Site'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Site',
      component: Site
    },{
      path: '/personal',
      name: 'Personal',
      component: Personal
    },{
      path: '/pass',
      name: 'ChangePass',
      component: ChangePass
    },{
      path: '/detail',
      name: 'GoodsDetail',
      component:GoodsDetail
    },{
      path: '/search',
      name: 'Search',
      component:Search
    }

  ]
})
