<template>
    <div class="parent">
      <h1 class="mt-5 mb-5">Log in</h1>
      <form class="mt-5 mb-5">
        <label> {{ messageLoginEmail }} </label>
        <input v-model="logMail" class="form-control mt-1" type="email" placeholder="Your email" autocomplete="off">
        <label> {{ messageLoginPassword }} </label>
        <input v-model="logPassword" class="form-control mt-1" type="password" placeholder="Your password" autocomplete="off">
        <input class="form-control mt-4 btn btn-primary" type="button" value="log in" v-on:click="enterAccount()">
        <h6 class="mt-4 mb-5 text">Have no profile?
          <router-link to="/signUp">Sign up here</router-link>
        </h6>
      </form>
    </div>
</template>

<script>
export default {
  name: 'LogInComponent',

  data () {
    return {
      logMail: '',
      logPassword: '',
      messageLoginEmail: '',
      messageLoginPassword: ''
    }
  },
  methods: {
    enterAccount () {
      /* clear error messages and check again */
      this.messageLoginEmail = ''
      this.messageLoginPassword = ''
      let usersData = JSON.parse(localStorage.getItem('Users'))
      let usersDataObj = []
      for (let i in usersData) {
        usersDataObj.push(usersData[i])
        /* check if user exists in user table, if admin or user redirect to their pages */
        if (this.logMail === usersDataObj[0]['mail'] &&
        this.logPassword === usersDataObj[0]['password'] &&
        this.logMail !== '' && this.logPassword !== '') {
          this.$router.push('/admin')
        } else if (usersDataObj[i]['mail'].includes(this.logMail) &&
        usersDataObj[i]['password'].includes(this.logPassword) &&
        this.logMail !== '' && this.logPassword !== '') {
          this.$router.push('/user')
        }
        /* error messages */
        if (this.logMail === '') {
          let message = 'please check email'
          this.messageLoginEmail = message
        }
        if (this.logPassword === '') {
          let message = 'please fill password'
          this.messageLoginPassword = message
        }
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
 label{
   padding: 0;
   margin: 0;
   color: red;
 }
</style>
