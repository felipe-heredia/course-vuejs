<template>
  <div class="counter">
    <span>{{ counter }}</span>
    <button class="button" @click="add">+</button>
    <button class="button" @click="remove">-</button>
  </div>
</template>

<script>
export default {
  data() {
    return { counter: 0 }
  },
  methods: {
    add() {
      this.counter++
    },
    remove() {
      this.counter--
    }
  }
}
</script>

<style>
  .counter span {
    border-bottom: 1px solid #CCC;
    height: 30px;
    padding: 5px 25px
  }

  .button {
    height: 30px;
    width: 30px;
    border-radius: 15px;
    background: #c63030;
    color: #fff;
    margin-left: 10px;
    outline: none;
  }
</style>
