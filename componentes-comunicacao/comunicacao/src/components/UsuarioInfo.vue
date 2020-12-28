<template>
  <div class="componente">
    <h2>As Informações de Usuário</h2>
    <p>Vários detalhes...</p>
    <p>Nome do usuário: {{ invertName() }}</p>
    <p>Idade do usuário <strong>{{ age }}</strong></p>

    <button @click="resetName">Reiniciar nome</button>
    <button @click="resetFn()">Reiniciar nome (CallBack)</button>
  </div>
</template>

<script>
import barramento from '@/Barramento'

export default {
  props: {
    name: {
      type: String,
      default: 'Anônimo',
      required: true,
    },
    age: Number,
    resetFn: Function
  },
  methods: {
    invertName() {
      return this.name.split('').reverse().join('')
    },
    resetName() {
      this.name = 'Pedro'
      this.$emit('changeName', this.name)
    }
  },
  created() {
    barramento.onModifyAge(age => {
      this.age = age
    })
  }
}
</script>

<style scoped>
  .componente {
    flex: 1;
    background-color: #ec485f;
    color: #fff;
  }
</style>
