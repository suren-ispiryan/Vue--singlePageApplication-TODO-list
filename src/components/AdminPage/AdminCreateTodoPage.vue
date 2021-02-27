<template>
  <div class="admin-parent mt-5">
    <h1> Welcome dear Admin </h1>

    <form class="mt-5 mr-5 mb-3 ml-5">
      <label for="mailErrorMsg"> {{ mailErrorMsg }} </label>
      <select v-model="selected" class="select ml-2 mt-3" id="mailErrorMsg">
        <option v-for="option in options" v-bind:key="option">
          {{ option }}
        </option>
      </select>

      <label for="taskErrorMsg"> {{ taskErrorMsg }} </label>
      <input v-model="task" class="form-control ml-2 mt-3" type="text" placeholder="Write a task" autocomplete="off" id="taskErrorMsg">
      <input class="form-control btn btn-warning ml-2 mt-3" type="button" value="Add task" v-on:click="addTask()">
      <input class="form-control btn btn-success ml-2 mt-3" type="button" value="Show tasks" v-on:click="showTasks()">
    </form>

    <hr class="mb-4">

    <ul class="pr-5 pl-5">
      <li class="pt-1 pb-1">
        <span class="id pt-1 pb-1">Id</span>
        <span class="task pt-1 pb-1">User tasks</span>
        <span class="delete pt-1 pb-1">Delete</span>
      </li>
      <!-- repeteing component li -->
      <TaskListLiComponent />
    </ul>

  </div>
</template>

<script>
import TaskListLiComponent from '@/components/AdminPage/TaskListLiComponent'
export default {
  name: 'AdminCreateTodoPage',
  components: {
    TaskListLiComponent
  },

  data () {
    return {
      mailErrorMsg: '',
      taskErrorMsg: '',
      task: '',
      selected: '',
      options: [],
      choosen: []
    }
  },
  mounted () {
    /* on page load find and put user mails into select option */
    let usersData = JSON.parse(localStorage.getItem('Users'))
    for (let i in usersData) {
      this.options.push(usersData[i]['mail'])
    }
  },
  methods: {
    addTask () {
      /* check if select and task input are not empty */
      if (this.selected !== '' && this.task !== '') {
        this.mailErrorMsg = ''
        this.taskErrorMsg = ''
        /* take data from db */
        let usersTasks = JSON.parse(localStorage.getItem('Tasks'))
        let usersTasksObj = []
        for (let i in usersTasks) {
          usersTasksObj.push(usersTasks[i])
        }
        /* put users tasks and mails in an obj for putting Tasks in db */
        let taskObj = {
          'email': this.selected,
          'task': this.task
        }
        /* put selected users mail and task in db */
        usersTasksObj.push(taskObj)
        localStorage.setItem('Tasks', JSON.stringify(usersTasksObj))
        /* error mrsages */
      } else if (this.selected === '') {
        this.mailErrorMsg = 'choose a user'
        this.taskErrorMsg = ''
      } else if (this.task === '') {
        this.mailErrorMsg = ''
        this.taskErrorMsg = 'write a task'
      }
    },

    showTasks () {
      /* get all messages */
      let usersTasks = JSON.parse(localStorage.getItem('Tasks'))
      let usersTasksObj = []
      /* clear tasks array for not repeating previous user's tasks */
      this.choosen = []
      /* put all user's task in array */
      for (let i in usersTasks) {
        usersTasksObj.push(usersTasks[i])
        /* choose selected mail's tasks */
        if (usersTasks[i]['email'] === this.selected && usersTasks[i]['task'] !== this.choosen[i]) {
          this.choosen.push(usersTasks[i]['task'])
        }
      }
      alert(this.selected + this.choosen)
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
 .select{
   width: 300px;
 }
 input{
   width: 300px;
 }
 .btn{
   width: 100px;
 }
 ul{
   display: flex;
   flex-wrap: wrap;
   justify-content: center;
 }
 li{
   width: 95%;
   display: flex;
   justify-content: center;
   align-items: center;
   list-style-type: none;
   border: solid 1px grey;
   margin-top: 5px;
 }
 .id{
   border-right: 1px black solid;
   color: red;
   font-weight: bold;
   width: 5%;
   min-width: 50px;
 }
 .task{
   border-right: 1px black solid;
   color: red;
   font-weight: bold;
   width: 85%;
 }
 .delete{
   color: red;
   font-weight: bold;
   width: 10%;
   min-width: 100px;
 }
 label{
   margin: 20px 0 0 30px;
   color: red;
 }
</style>
