<template>
  <div class="componente">
    <h2>Alterar os Dados de Usuário</h2>
    <p>Edite as informações</p>

    <p>Idade do usuário <strong>{{ age }}</strong></p>
    <button @click="modifyAge">Alterar idade</button>
  </div>
</template>

<script>
import barramento from '@/Barramento'

export default {
  props: {
    age: Number,
  },
  methods: {
    modifyAge() {
      this.age = 33
      barramento.modifyAge(this.age)
    }
  }
}
</script>

<style scoped>
  .componente {
    flex: 1;
    background-color: #98b99a;
    color: #fff;
  }
</style>
