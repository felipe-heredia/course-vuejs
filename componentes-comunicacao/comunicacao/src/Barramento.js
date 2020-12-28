import Vue from 'vue'
export default new Vue({
  methods: {
    modifyAge(age) {
      this.$emit('changedAge', age)
    },
    onModifyAge(callback) {
      this.$on('changedAge', callback)
    }
  }
})
