new Vue({
  el: '#app',
  data: {
    inGame: false,
    gameLog: [],
    player: {
      life: 100,
      color: '#2D942E',
      power: 12
    },
    monster: {
      life: 100,
      color: '#2D942E',
      power: 18
    },
  },
  methods: {
    initGame() {
      this.monster.life = 100
      this.player.life = 100
      this.gameLog = []
      this.inGame = true
    },
    attack() {
      const monsterAttack = Math.floor(Math.random() * this.monster.power)
      const playerAttack = Math.floor(Math.random() * this.player.power)

      const attacks = {
        monster: monsterAttack,
        monsterMessage: `O Monstro atacou com ${monsterAttack}`,
        player: playerAttack,
        playerMessage: `O Jogador atacou com ${playerAttack}`
      }

      this.gameLog.push(attacks)

      if (this.player.life - monsterAttack > 0 && this.monster.life - playerAttack > 0) {
        this.player.life = this.player.life - monsterAttack
        this.monster.life = this.monster.life - playerAttack
      } else if (this.player.life - monsterAttack > 0) {
        this.player.life = this.player.life - monsterAttack
        this.monster.life = 0
        this.inGame = false
      } else {
        this.player.life = 0
        this.monster.life = this.monster.life - playerAttack
        this.inGame = false
      }
    },
    specialAttack() {
      const monsterAttack = Math.floor(Math.random() * 10)
      const playerAttack = Math.floor(Math.random() * 20)

      const attacks = {
        monster: monsterAttack,
        monsterMessage: `O Monstro atacou com ${monsterAttack}`,
        player: playerAttack,
        playerMessage: `O Jogador atacou com ${playerAttack}`
      }
      this.gameLog.push(attacks)

      if (this.player.life - monsterAttack > 0 && this.monster.life - playerAttack > 0) {
        this.player.life = this.player.life - monsterAttack
        this.monster.life = this.monster.life - playerAttack
      } else if (this.player.life - monsterAttack > 0) {
        this.player.life = this.player.life - monsterAttack
        this.monster.life = 0
        this.inGame = false
      } else {
        this.player.life = 0
        this.monster.life = this.monster.life - playerAttack
        this.inGame = false
      }
    },
    heal() {
      if (this.player.life < 100) {

        const monsterAttack = Math.floor(Math.random() * 5)
        const playerHeal = Math.floor(Math.random() * 9)

        const log = {
          monster: monsterAttack,
          monsterMessage: `O Monstro atacou com ${monsterAttack}`,
          player: playerHeal,
          playerMessage: `O Jogador curou ${monsterAttack}`,
        }

        this.player.life = (this.player.life - monsterAttack) + log.player

        this.gameLog.push(log)
      }
    },
    quit() {
      this.inGame = false
      this.monster.life = 100
      this.player.life = 100
      this.gameLog = []
    }
  },
})
