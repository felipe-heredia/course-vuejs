<template>
  <div class="task" :class="task.state" @click="handleModifyStatus(task.state)">
    <span class="close" @click.stop="$emit('removeTask', task)">X</span>
    <p>{{ task.taskName }}</p>
  </div>
</template>

<script>
export default {
  props: {
    task: {
      required: true,
      type: Object
    }
  },
  methods: {
    handleModifyStatus(status) {
      if (status === "done") this.task.state = "pending";
      if (status === "pending") this.task.state = "done";
    }
  }
};
</script>

<style>
.task {
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  cursor: pointer;

  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;

  width: 300px;
  height: 130px;
  margin: 10px;
  border-radius: 5px;
  font-size: 1.6rem;
  font-weight: 300;
}

.pending {
  border-left: 12px solid #b73229;
  background: #f44336;
}

.pending .close {
  background: #b73229;
}

.done {
  border-left: 12px solid #0a8f08;
  background: #4caf50;
  text-decoration: line-through;
}

.done .close {
  background: #0a8f08;
}

.close {
  display: flex;
  justify-content: center;
  position: absolute;

  right: 10px;
  top: 10px;
  height: 20px;
  width: 20px;
  border-radius: 10px;
  font-size: 0.9rem;
  text-decoration: none;
}
</style>
