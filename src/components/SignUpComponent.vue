<template>
  <div class="container-fluid parent-Pic">
    <div class="container">
      <div class="row">
        <div class="col-md-12">
          <div class="row">
            <div class="col-md-12 sub-Cols">

              <div class="parent">
                <form class="mt-5 mb-5">
                  <h1 class="mt-5">Sign up</h1>
                  <label> {{ messageFirstName }} </label>
                  <input v-model="firstName" class="form-control mb-1" type="text" placeholder="Your name" autocomplete="off">
                  <label> {{ messageLastName }} </label>
                  <input v-model="lastName" class="form-control mb-1" type="text" placeholder="Your surname" autocomplete="off">
                  <label> {{ messageEmail }} </label>
                  <input v-model="email" class="form-control mb-1" type="email" placeholder="Your email" autocomplete="off">
                  <label> {{ messagePassword }} </label>
                  <input v-model="password" class="form-control mb-1" type="password" placeholder="Your password" autocomplete="off" >
                  <label> {{ messageConfirm }} </label>
                  <input v-model="confirmPassword" class="form-control mb-1" type="password" placeholder="Confirm your password" autocomplete="off">
                  <input class="form-control mt-4 btn btn-primary" type="button" value="sign up" v-on:click="getUsersData()">
                  <h6 class="mt-4 mb-5">Already have profile?
                    <router-link to="/">Log In here</router-link>
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
  name: 'SignUpComponent',

  data () {
    return {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      confirmPassword: '',
      messageFirstName: '',
      messageLastName: '',
      messageEmail: '',
      messagePassword: '',
      messageConfirm: ''
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
      /* on click btn clear error messages and check again */
      this.messageFirstName = ''
      this.messageLastName = ''
      this.messageEmail = ''
      this.messagePassword = ''
      this.messageConfirm = ''
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
        /* error messages */
        if (this.firstName === '') {
          let message = 'please fill first name'
          this.messageFirstName = message
        }
        if (this.lastName === '') {
          let message = 'please fill last name'
          this.messageLastName = message
        }
        if (this.email === '' || !this.email.match(/^\w+[+.\w-]*@([\w-]+\.)*\w+[\w-]*\.([a-z]{2,4}|\d+)$/i)) {
          let message = 'please correct email'
          this.messageEmail = message
        }
        if (this.password === '') {
          let message = 'please write password'
          this.messagePassword = message
        }
        if (this.confirmPassword === '') {
          let message = 'please write password'
          this.messageConfirm = message
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
   margin: 0;
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
