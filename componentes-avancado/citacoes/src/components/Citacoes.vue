<template>
  <div class="citacoes">
    <span>
      <button @click="number--">&lt;</button>
      <button @click="number++">&gt;</button>
    </span>

    <Citacao>
      <h1 slot="autor">{{ citacoes[index].autor }}</h1>
      <p>Citação:</p>
      <p>{{ citacoes[index].texto }}</p>
      <h6 slot="fonte">{{ citacoes[index].fonte }}</h6>
    </Citacao>
  </div>
</template>

<script>
import Citacao from './Citacao'

export default {
  components: { Citacao },
  data() {
    return {
      number: 0,
      citacoes: [{
        fonte: 'Jornal do Empreendedor',
        texto: 'Lembre-se sempre que você é absolutamente único. Assim como todos os outros.',
        autor: 'Margaret Mead'
      }, {
        fonte: 'Frases de Mãe',
        texto: 'Isso não é um quarto, é um chiqueiro.',
        autor: 'Roberta'
      }, {
        fonte: 'Frases de Pai',
        texto: 'Vou contar até 3! 1, 2, 2...',
        autor: 'Gustavo'
      }]
    }
  },
  computed: {
    index() {
      return Math.abs(this.number % 3)
    }
  }
}
</script>

<style scoped>
.citacoes {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
