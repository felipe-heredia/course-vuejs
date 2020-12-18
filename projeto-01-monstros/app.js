new Vue({
  el: '#app',
  data: {
    inGame: false,
    gameLog: [],
    player: {
      life: 100,
    },
    monster: {
      life: 100,
    },
  },
  computed: {
    hasResult() {
      return this.player.life === 0 || this.monster.life === 0
    }
  },
  methods: {
    initGame() {
      this.monster.life = 100
      this.player.life = 100
      this.gameLog = []
      this.inGame = true
    },
    quit() {
      this.inGame = false
      this.monster.life = 100
      this.player.life = 100
      this.gameLog = []
    },
    getRandom(min, max) {
      return Math.floor(Math.random() * (min - max) + min)
    },
    attack(special) {
      this.hurt('monster', 5, 10, special, 'Jogador', 'Monster', 'player')

      if (this.monster.life > 0) {
        this.hurt('player', 7, 12, false, 'Monstro', 'Jogador', 'monster')
      }
    },
    hurt(atr, min, max, special, source, target, className) {
      const plus = special ? 5 : 0
      const hurt = this.getRandom(min + plus, max + plus)

      this[atr].life = Math.max(this[atr].life - hurt, 0)
      this.registerLog(`${source} atingiu ${target} com ${hurt}.`, className)
    },
    heal() {
      const heal = this.getRandom(10, 15)

      if (this.player.life + heal <= 100) {
        this.player.life = Math.min(this.player.life + heal, 100)
        this.registerLog(`Jogador ganhou força de ${heal}.`, 'heal')
        this.hurt('player', 7, 12, false, 'Monstro', 'Jogador', 'monster')
      }
    },
    registerLog(text, className) {
      this.gameLog.unshift({ text, className })
    }
  },
  watch: {
    hasResult(value) {
      if (value) this.inGame = false
    }
  },
})
