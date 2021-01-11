<template>
  <div class="progress-wrapper">
    <span class="value">{{ percent }}%</span>
    <div
      class="progress"
      :style="{
        width: `${percent}%`,
        background: percent <= 20 ? '#c63030' : '#4CAF50'
      }"
    />
  </div>
</template>

<script>
export default {
  props: {
    percent: {
      required: true,
      type: Number
    }
  }
};
</script>

<style>
.progress-wrapper {
  display: flex;
  align-items: center;
  position: relative;
  flex-direction: column;

  width: 80%;
  height: 30px;
  border-radius: 5px;
  border: 1px solid #fff;
}

.value {
  z-index: 1;
  font-size: 1.5rem;
}

.progress {
  position: absolute;
  align-self: start;
  max-width: 100%;

  height: 30px;
  border-radius: 5px;
  background: #4caf50;
}
</style>
