<template>
  <div class="tasks-wrapper">
    <Task
      v-for="(task, index) in tasksArray"
      :task="task"
      :key="task.taskName"
      @removeTask="$emit('removeTask', index)"
    />
  </div>
</template>

<script>
import Task from "./Task";

export default {
  components: { Task },
  props: {
    tasksArray: {
      required: true,
      type: Array
    }
  }
};
</script>

<style>
.tasks-wrapper {
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 100%;
  overflow: hidden;

  margin: 2rem;
}

.empty {
  color: #aaa;
  font-size: 1.3rem;
}
</style>
