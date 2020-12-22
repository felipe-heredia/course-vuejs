<template>
  <div id="app">
    {{ title }}
    <button @click="title += '#'">Adicionar #</button>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      title: 'Teste usando Vue JS'
    }
  }
}
</script>

<style>
#app {
  background: chocolate;
  color: #fff;
}
</style>
