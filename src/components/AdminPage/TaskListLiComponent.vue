<template>
  <li class="pt-1 pb-1">
    <span class="id">{{ index + 1 }}</span>
    <span class="task"> {{ task }} </span>
    <span class="delete">
      <input type="button" class="btn btn-danger btn" value="x" v-on:click="deleteTask()">
    </span>
  </li>
</template>

<script>
export default {
  name: 'TaskListLiComponent',
  props: ['index', 'task'],
  methods: {
    deleteTask () {
    //  delete task from local storage
    }
  }
}
</script>

<style scoped>
li{
  width: 95%;
  display: flex;
  justify-content: center;
  align-items: center;
  list-style-type: none;
  border: solid 1px grey;
  margin-top: 10px;
}
.id{
  border-right: 1px black solid;
  color: green;
  font-weight: bold;
  width: 5%;
  min-width: 50px;
}
.task{
  border-right: 1px black solid;
  color: green;
  font-weight: bold;
  width: 85%;
}
.delete{
  color: red;
  font-weight: bold;
  width: 10%;
  min-width: 100px;
}
.btn{
  padding: 7px 12px;
  font-size: 12px;
  border-radius: 100%;
}
</style>
