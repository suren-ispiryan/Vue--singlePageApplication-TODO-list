import VueRouter from 'vue-router'

import SignUpComponent from '@/components/SignUpComponent'
import LogInComponent from '@/components/LogInComponent'

/* router views */
export default new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'LogIn',
      component: LogInComponent
    },
    {
      path: '/Signup',
      name: 'SignUp',
      component: SignUpComponent
    },
    {
      path: '*/*',
      redirect: {name: 'LogIn'}
    }
  ]
})
