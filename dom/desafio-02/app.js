new Vue({
  el: '#challenge',
  data: {
    value: ''
  },
  methods: {
    buttonAlert() {
      alert('Você clicou no botão!')
    },
    modifyValue(event) {
      this.value = event.target.value
    }
  }
})
