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
      path: '/signup',
      name: 'SignUp',
      component: SignUpComponent
    },
    {
      path: '/admin',
      name: 'Admin',
      component: AdminCreateTodoPage
    },
    {
      path: '/user',
      name: 'User',
      component: UserCreateTodoPage
    },
    {
      path: '*/*',
      redirect: {name: 'LogIn'}
    }
  ]
})
