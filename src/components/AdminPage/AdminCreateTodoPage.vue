<template>
  <div class="admin-parent mt-5">
    <h1> Welcome dear Admin </h1>
    <form class="pl-5 pt-5 pb-3">
      <select v-model="selected" class="select">
        <option v-for="option in options" v-bind:key="option.key" v-bind:value="option.value">{{ option.text }}</option>
      </select>
      <input v-model="task" class="form-control ml-2" type="text" placeholder="Write a task" autocomplete="off">
      <input class="form-control btn btn-warning ml-2" type="button" value="Add task" v-on:click="addTask()">
    </form>
    <hr class="mb-4">
    <ul class="pr-5 pl-5">
      <li>
        <span class="id pt-1 pb-1">Id</span>
        <span class="task pt-1 pb-1">User tasks</span>
        <span class="delete pt-1 pb-1">Delete</span>
      </li>
      <!-- component -->
    </ul>
  </div>
</template>

<script>
export default {
  name: 'AdminCreateTodoPage',
  data () {
    return {
      task: '',
      options: [
        { text: 'One', value: 'A' },
        { text: 'Two', value: 'B' },
        { text: 'Three', value: 'C' }
      ]
    }
  },
  methods: {
    addTask () {

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
 .select{
   width: 300px;
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
 .delete{
   color: red;
   font-weight: bold;
   width: 10%;
 }
</style>
