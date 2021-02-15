<template>
  <div class="user-parent mt-5">
    <h1> Welcome dear User </h1>
    <form class="pl-5 pt-5 pb-3">
      <input class="form-control btn btn-success ml-2" type="button" value="Send task" v-on:click="sendTask()">
    </form>
    <hr class="mb-4">
    <ul class="pr-5 pl-5">
      <li>
        <span class="check pt-1 pb-1">Check</span>
        <span class="id pt-1 pb-1">Id</span>
        <span class="task pt-1 pb-1">Your tasks</span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'UserGetTodoPage',
  methods: {
    sendTask () {
      alert(1)
    }
  }
}
</script>

<style scoped>
 hr{
   background-color: grey;
   height: 1px;
   width: 90%;
 }
 form {
   display: flex;
   justify-content: flex-start;
 }
 input{
   width: 300px;
 }
 .btn{
   width: 100px;
 }
 li{
   display: flex;
   justify-content: center;
   align-items: center;
   list-style-type: none;
 }
 span{
   border: solid 1px grey;
 }
 .id{
   color: red;
   font-weight: bold;
   width: 10%;
 }
 .task{
   color: red;
   font-weight: bold;
   width: 80%;
 }
 .check{
   color: red;
   font-weight: bold;
   width: 10%;
 }
</style>
