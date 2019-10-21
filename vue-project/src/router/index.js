import Vue from 'vue'
import Router from 'vue-router'
import Container from '@/page/LeftContainerDefault'
import Tables from '@/components/Tables'
import Form from '@/components/FormText'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '',
      name: 'Container',
      component: Container,
      children: [
        {
          path: 'tables',
          name: 'Tables',
          component: {
            render (c) { return c('router-view') }
          },
          children: [
            {
              path: '',
              component: Tables,
            },
          ]
        },
        {
          path: 'form',
          name: 'Form',
          component: {
            render (c) { return c('router-view') }
          },
          children: [
            {
              path: '',
              component: Form,
            },
          ]
        }
      ]
    }
    // ,
    // {
    //   path: '/tables',
    //   name: 'Tables',
    //   component: Tables
    // }
  ]
})
