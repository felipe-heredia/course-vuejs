import Vue from 'vue'
export default new Vue({
  methods: {
    handleModifyUser(user) {
      this.$emit('changedUser', user)
    },
    onModifyUser(callback) {
      this.$on('changedUser', callback)
    }
  }
})
