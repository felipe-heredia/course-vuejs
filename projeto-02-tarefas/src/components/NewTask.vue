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
  data() {
    return {
      task: { taskName: "", state: "pending" }
    };
  },

  methods: {
    add() {
      this.$emit("taskAdded", this.task);
      this.task = { taskName: "", state: "pending" };
    }
  }
};
</script>

<style>
.new-task {
  display: flex;
  flex-direction: row;
  border-radius: 8px;
  border: 1px solid #fff;
  margin-top: 2rem;
}

.new-task button {
  width: 30px;
  padding: 5px;
  background: #2196f3;
  color: #fff;
  font-size: 1rem;

  margin: 0;
  outline: none;
  border: none;
  border-left: none;
  border-top-right-radius: 8px;
  border-bottom-right-radius: 8px;
}

.new-task input {
  height: 30px;
  width: 450px;
  padding: 10px;

  color: #fff;
  background: #fff2;
  border-top-left-radius: 8px;
  border-bottom-left-radius: 8px;
  font-size: 1rem;
  border: none;
}
</style>
