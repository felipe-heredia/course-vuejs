new Vue({
  el: '#challenge',
  data: {
    user: {
      name: 'felipesuri',
      age: 16,
      avatar: 'https://github.com/felipesuri.png'
    }
  },
  methods: {
    age3x(age) {
      return age * 3
    },
    random() {
      return Math.random()
    }
  }
})
