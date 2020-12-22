<template>
  <div class="counters">
    <h1>Contadores</h1>
    <counter v-for="c in 5" :key="c"></counter>
    <button>aaa</button>
  </div>
</template>

<script>
import Counter from './Counter.vue'

export default {
  components: { counter: Counter }
}
</script>

<style>

</style>
