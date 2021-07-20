<template>
  <div class="result" :class="{ wrong: !result }">
    <span v-if="result">Resporta Certa ;)</span>
    <span v-else>Resporta Errada ;(</span>
    <hr />

    <button @click="$emit('confirmed')">Tentar novamente!</button>
  </div>
</template>

<script>
export default {
  props: {
    result: {
      required: true,
      type: Boolean
    }
  }
};
</script>

<style>
.result {
  height: 400px;
  color: #000;
  background-color: #fff;
  width: 70%;
  border-radius: 20px;
  font-size: 5.5rem;

  display: flex;
  flex-direction: column;
  justify-content: space-around;
  background-color: #89c454;
  color: #30863d;
}

.result hr {
  color: #fff;
}

.result.wrong {
  background-color: #f05250;
  color: #bb2814;
}

.result button {
  outline: none;
  align-self: center;
  padding: 10px 20px;
  font-size: 1.7rem;
  border-radius: 8px;
  background-color: #fff;
  color: #30863d;
  font-weight: 600;
  cursor: pointer;
  transition: all 1s;
}

.result button:hover {
  transform: translateX(-5px);
  box-shadow: 6px 4px 10px #77777759;
}

.result.wrong button {
  color: #bb2814;
}
</style>
