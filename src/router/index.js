import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Profile from '@/components/Profile'
import Resource from '@/components/resource/Resource'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '',
      name: 'main',
      component: HelloWorld
    },
    {
      path: '/profile',
      name: 'profile',
      component: Profile
    },
    // {
    //   path: '/resources/add',
    //   name: 'add_resource',
    //   component: Resource
    // },
    {
      path: '/resources/:resourceName',
      name: 'edit_resource',
      component: Resource,
      props: true
    }
  ]
})
