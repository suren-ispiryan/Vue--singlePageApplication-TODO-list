import VueRouter from 'vue-router'

import SignUpComponent from '@/components/SignUpComponent'
import LogInComponent from '@/components/LogInComponent'
import AdminCreateTodoPage from '../components/AdminPage/AdminCreateTodoPage'
import UserCreateTodoPage from '../components/UserPage/UserGetTodoPage'

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
      path: '/Admin',
      name: 'Admin',
      component: AdminCreateTodoPage
    },
    {
      path: '/User',
      name: 'User',
      component: UserCreateTodoPage
    },
    {
      path: '*/*',
      redirect: {name: 'LogIn'}
    }
  ]
})
