new Vue({
	el: '#challenge',
  data: {
    class1: 'destaque',
    warning: true,
    class3: '',
    class4: '',
    color5: '#c63030',
    style5: {
      height: '100px',
      width: '100px'
    },
    width: '0',
  },
  computed: {
    myStyle() {
      return { background: this.color }
    },
  },
	methods: {
		initEffect() {
      setInterval(() => {
        if (this.class1 === 'destaque') {
          this.class1 = 'encolher'
        } else {
          this.class1 = 'destaque'
        }
      }, 2000)
    },
    initProcess() {
      let value = 0

      const timer = setInterval(() => {
        value += 5
        this.width = `${value}%`

        if (value === 100) clearInterval(timer)
      }, 500)
    },
    setWarning(event) {
      if (event.target.value === 'true') {
        this.warning = true
      } else if (event.target.value === 'false') {
        this.warning = false
      }
    }
	}
})
