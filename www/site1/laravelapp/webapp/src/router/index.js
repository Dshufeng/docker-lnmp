import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Car from '@/components/Car'
import Cate from '@/components/Cate'
import Person from '@/components/Person'
import Site from '@/components/Site'



Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Site',
      component: Site
    },{
      path: '/cate',
      name: 'Cate',
      component: Cate
    },
    {
      path: '/car',
      name: 'Car',
      component: Car
    },{
      path: '/person',
      name: 'Person',
      component: Person
    }
  ]
})
