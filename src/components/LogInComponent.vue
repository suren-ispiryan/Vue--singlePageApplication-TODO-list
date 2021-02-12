<template>
    <div class="parent">
      <h1 class="mt-5 mb-5">Log in</h1>
      <form class="mt-5 mb-5">
        <input v-model="logMail" class="form-control mt-4" type="email" placeholder="Your email" autocomplete="off">
        <input v-model="logPassword" class="form-control mt-3" type="password" placeholder="Your password" autocomplete="off">
        <input class="form-control mt-4 btn btn-primary" type="button" value="log in" v-on:click="enterAccount()">
        <h6 class="mt-4 mb-5">Have no profile?
          <router-link to="/SignUp">Sign up here</router-link>
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
      logPassword: ''
    }
  },
  methods: {
    enterAccount () {
      let usersData = JSON.parse(localStorage.getItem('Users'))
      let usersDataObj = []
      for (let i in usersData) {
        usersDataObj.push(usersData[i])
        /* check if user exists in user table, if admin or user redirect to their pages */
        if (this.logMail === usersDataObj[0]['mail'] &&
        this.logPassword === usersDataObj[0]['password'] &&
        this.logMail !== '' && this.logPassword !== '') {
          this.$router.push('/Admin')
        } else if (usersDataObj[i]['mail'].includes(this.logMail) &&
        usersDataObj[i]['password'].includes(this.logPassword) &&
        this.logMail !== '' && this.logPassword !== '') {
          this.$router.push('/User')
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

</style>
