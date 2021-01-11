<template>
  <div class="new-task">
    <input
      v-model="task.taskName"
      @keydown.enter="add"
      placeholder="Adicionar tarefa"
    />
    <button @click="add">+</button>
  </div>
</template>

<script>
export default {
  props: {
    tasksArray: {
      required: true,
      type: Array
    }
  },

  data() {
    return {
      task: { taskName: "", state: "pending" }
    };
  },

  methods: {
    add() {
      const exists = this.tasksArray.find(
        item => item.taskName === this.task.taskName
      );

      if (!exists) {
        this.tasksArray.push(this.task);
      }

      this.task = { taskName: "", state: "pending" };
    }
  }
};
</script>

<style>
.new-task {
  display: flex;
  flex-direction: row;
  border-radius: 5px;
  border: 1px solid #fff;
  margin-top: 2rem;
}

.new-task button {
  width: 30px;
  padding: 5px;
  background: #2196f3;

  margin: 0;
  outline: none;
  border: none;
}

.new-task input {
  height: 40px;
  width: 450px;
  padding: 10px;

  color: #fff;
  background: #fff2;
  border-right: 1px solid #fff;
  font-size: 1rem;
  border: none;
}
</style>
