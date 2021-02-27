<template>
  <div class="container-fluid parent-Pic">
    <div class="container">
      <div class="row">
        <div class="col-md-12">
          <div class="row">
            <div class="col-md-12 sub-Cols">

              <div class="parent">
                <form class="mt-5 mb-5">
                  <h1 class="mt-5 mb-2">Log in</h1>
                  <label for="log"> {{ messageLoginEmail }} </label>
                  <input v-model="logMail" class="form-control mt-1" type="email" placeholder="Your email" autocomplete="off" id="log">
                  <label> {{ messageLoginPassword }} </label>
                  <input v-model="logPassword" class="form-control mt-1" type="password" placeholder="Your password" autocomplete="off">
                  <input class="form-control mt-4 btn btn-primary" type="button" value="log in" v-on:click="enterAccount()">
                  <h6 class="mt-4 mb-5 text">Have no profile?
                    <router-link to="/signUp">Sign up here</router-link>
                  </h6>
                </form>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
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
        if (this.logMail === '' || !(usersDataObj[i]['mail'].includes(this.logMail))) {
          let message = 'please check email'
          this.messageLoginEmail = message
        }
        if (this.logPassword === '' || !(usersDataObj[i]['password'].includes(this.logPassword))) {
          let message = 'please check password'
          this.messageLoginPassword = message
        }
      }
    }
  }

}
</script>

<style scoped>
  .sub-Cols{
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 25px;
    border-radius: 5px;
  }
  .parent-Pic{
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    width: 100vw;
    background-image: url("./../assets/background.png");
    background-attachment: fixed;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
  }
 form{
   border-radius: 5px;
   padding: 0 50px;
   border: 1px grey solid;
   background-color: rgba(10,10,150,0.2);
 }
 .parent{
   display: flex;
   justify-content: flex-end;
   width: 90%;
 }
 input{
   border: 1px grey solid;
   width: 100%;
 }
 label{
   width: 100%;
   text-align: left;
   padding: 0;
   margin: 0 0 0 5px;
   color: red;
 }
</style>
