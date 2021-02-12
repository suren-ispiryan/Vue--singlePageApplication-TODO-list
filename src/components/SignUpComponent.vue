<template>
  <div class="parent">
    <h1 class="mt-5">Sign up</h1>
    <form class="mt-5 mb-5">
      <input v-model="firstName" class="form-control mt-4" type="text" placeholder="Your name" autocomplete="off">
      <input v-model="lastName" class="form-control mt-3" type="text" placeholder="Your surname" autocomplete="off">
      <input v-model="email" class="form-control mt-3" type="email" placeholder="Your email" autocomplete="off">
      <input v-model="password" class="form-control mt-3" type="password" placeholder="Your password" autocomplete="off" >
      <input v-model="confirmPassword" class="form-control mt-3" type="password" placeholder="Confirm your password" autocomplete="off">
      <input class="form-control mt-4 btn btn-primary" type="button" value="sign up" v-on:click="getUsersData()">
      <h6 class="mt-4 mb-5">Already have profile?
        <router-link to="/">Log In here</router-link>
      </h6>
    </form>
  </div>
</template>

<script>
export default {
  name: 'SignUpComponent',

  data () {
    return {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      confirmPassword: ''
    }
  },
  mounted () {
    /* if no table user create it */
    let users = localStorage.getItem('Users')
    if (!users) {
      localStorage.setItem('Users', JSON.stringify([{
        'firstName': 'Admin',
        'lastName': 'Admin',
        'password': 'password',
        'mail': 'admin@admin.com'
      }]))
    }
  },

  methods: {
    getUsersData () {
      /* put signup-ed user's data into the User table */
      let usersData = JSON.parse(localStorage.getItem('Users'))
      let usersDataObj = []
      for (let i in usersData) {
        usersDataObj.push(usersData[i])
      }

      if (this.firstName !== '' &&
        this.lastName !== '' &&
        this.email.match(/^\w+[+.\w-]*@([\w-]+\.)*\w+[\w-]*\.([a-z]{2,4}|\d+)$/i) &&
        this.password.match(/^[0-9a-zA-Z]+$/) &&
        this.password === this.confirmPassword) {
        /* put user data into localStorage user table and redirect to login component */
        let userObj = {
          'firstName': this.firstName,
          'lastName': this.lastName,
          'mail': this.email,
          'password': this.password
        }
        usersDataObj.push(userObj)
        localStorage.setItem('Users', JSON.stringify(usersDataObj))
        this.$router.push('/')
      } else {
        alert('please check your data')
      }
    }
  }
}
</script>

<style scoped>
.parent{
  width: 60%;
}
input{
  border: 1px grey solid;
  width: 100%;
}
</style>
