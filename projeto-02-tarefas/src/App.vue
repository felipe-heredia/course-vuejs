<template>
  <div id="app">
    <h1>Tarefas</h1>
    <Progress :progress="progress" />
    <NewTask @taskAdded="addTask" />

    <p class="empty" v-if="tasksArray.length === 0">Você está em dia :')</p>
    <TasksWrapper v-else :tasksArray="tasksArray" @removeTask="deleteTask" />
  </div>
</template>

<script>
import Progress from "./components/Progress";
import NewTask from "./components/NewTask";
import TasksWrapper from "./components/TasksWrapper";

export default {
  components: { Progress, NewTask, TasksWrapper },
  data() {
    return {
      tasksArray: []
    };
  },

  methods: {
    deleteTask(index) {
      this.tasksArray.splice(index, 1);
    },

    addTask(task) {
      const sameName = item => item.taskName === task.taskName;
      const reallyNew = this.tasksArray.filter(sameName).length == 0;

      if (reallyNew) {
        this.tasksArray.push(task);
      }
    }
  },

  computed: {
    progress() {
      const total = this.tasksArray.length;
      const done = this.tasksArray.filter(task => task.state === "done").length;
      return Math.round((done / total) * 100) || 0;
    }
  },

  watch: {
    tasksArray: {
      deep: true,
      handler() {
        localStorage.setItem("tasks", JSON.stringify(this.tasksArray));
      }
    }
  },

  created() {
    const storageTasks = localStorage.getItem("tasks");
    const array = JSON.parse(storageTasks);
    this.tasksArray = Array.isArray(array) ? array : [];
  }
};
</script>

<style>
body {
  font-family: "Lato", sans-serif;
  background: linear-gradient(to right, rgb(22, 34, 42), rgb(58, 96, 115));
  color: #fff;
  -webkit-user-select: none;
  -moz-user-select: -moz-none;
  -ms-user-select: none;
  user-select: none;
}

#app {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

#app h1 {
  margin-bottom: 5px;
  font-weight: 300;
  font-size: 3rem;
}
</style>
