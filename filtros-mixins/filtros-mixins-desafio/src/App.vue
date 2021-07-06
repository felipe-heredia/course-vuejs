<template>
  <div id="app">
    <h1>Filtros & Mixins (Desafio)</h1>
    <!-- Exercício 1 -->
    <!-- Construir um filtro local que troca espaços por vírgula -->
    <p>{{ phrase | spaceToComma }}</p>

    <!-- Exercício 2 -->
    <!-- Filtro global que conta o tamanho de cada palavra e adiciona o
			valor na string final -->
    <!-- "Pedro é legal" => "Pedro (5) é (1) legal (5)" -->
    <p>{{ phrase | countLetters }}</p>

    <!-- Exercício 3 -->
    <!-- Implementar os exercicios 1 e 2 com propriedade computada -->
    <p>{{ phraseWithComma }}</p>
    <p>{{ phraseCounted }}</p>

    <!-- Exercício 4 -->
    <!-- Compartilhe a propriedade computada via mixin -->
  </div>
</template>

<script>
import phraseMixin from "./phraseMixin";

export default {
  mixins: [phraseMixin],

  data() {
    return {
      phrase: "Don't tread on me"
    };
  },

  filters: {
    spaceToComma(value) {
      const newPhrase = value.replace(/ /g, ",");
      return newPhrase;
    }
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  font-size: 2.5rem;
}
</style>
