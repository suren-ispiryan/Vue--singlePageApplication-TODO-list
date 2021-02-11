<template>
  <div class="parent">
    <h1 class="mt-5">Sign up</h1>
    <form class="mt-5 mb-5">
      <input class="form-control mt-4" type="text" placeholder="Your name" autocomplete="off">
      <input class="form-control mt-3" type="text" placeholder="Your surname" autocomplete="off">
      <input class="form-control mt-3" type="email" placeholder="Your email" autocomplete="off">
      <input class="form-control mt-3" type="password" placeholder="Your password" autocomplete="off" >
      <input class="form-control mt-3" type="password" placeholder="Confirm your password" autocomplete="off">
      <input class="form-control mt-4 btn btn-primary" value="sign up">
      <h6 class="mt-4 mb-5">Already have profile?
        <router-link to="/">Log In here</router-link>
      </h6>
    </form>
  </div>
</template>

<script>
export default {
  name: 'SignUpComponent'
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
