<template>
  <div class="user-parent mt-5">
    <h1> Welcome dear User </h1>
    <form class="mt-5 mr-5 mb-3 ml-5 pl-2">
      <input class="form-control btn btn-warning mt-2 ml-2" type="button" value="Get task" v-on:click="getTask()">
      <input class="form-control btn btn-success mt-2 ml-2" type="button" value="Send task" v-on:click="sendTask()">
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
   flex-wrap: wrap;
   display: flex;
   justify-content: flex-start;
 }
 input{
   width: 300px;
 }
 .btn{
   width: 100px;
 }
 ul{
   display: flex;
   justify-content: center;
 }
 li{
   width: 95%;
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
   width: 5%;
   min-width: 50px;
 }
 .check{
   color: red;
   font-weight: bold;
   width: 10%;
   min-width: 80px;
 }
 .task{
   color: red;
   font-weight: bold;
   width: 85%;
 }
</style>
