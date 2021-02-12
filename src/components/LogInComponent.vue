<template>
    <div class="parent">
      <h1 class="mt-5 mb-5">Log in</h1>
      <form class="mt-5 mb-5">
        <input class="form-control mt-4" type="email" placeholder="Your email" autocomplete="off">
        <input class="form-control mt-3" type="password" placeholder="Your password" autocomplete="off">
        <input class="form-control mt-4 btn btn-primary" type="button" value="log in">
        <h6 class="mt-4 mb-5">Have no profile?
          <router-link to="/SignUp">Sign up here</router-link>
        </h6>
      </form>
    </div>
</template>

<script>
export default {
  name: 'LogInComponent'
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
