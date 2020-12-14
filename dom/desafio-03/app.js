new Vue({
  el: '#challenge',
  data: {
    value: 0
  },
  computed: {
    result() {
      return this.value === 22 ? 'Igual á 22' : 'Diferente de 22'
    }
  },
  watch: {
    result() {
      setTimeout(() => {
        this.value = 0
      }, 5000)
    }
  }
});
