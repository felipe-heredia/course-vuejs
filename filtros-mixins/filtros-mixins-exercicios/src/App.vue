<template>
  <div id="app">
    <h1>Filtros & Mixins</h1>
    <hr />
    {{ loggedUser }}

    <p>{{ myCpf | cpf | invert }}</p>
    <input type="text" :value="myCpf | cpf" />

    <hr />

    <Fruits />

    <hr />

    <div>
      <ul>
        <li v-for="fruit in fruits" :key="fruit">{{ fruit }}</li>
      </ul>

      <input type="text" v-model="fruit" @keydown.enter="add" />
    </div>
  </div>
</template>

<script>
import Fruits from "./Fruits.vue";
import FruitsMixin from "./FruitsMixin";
import userMixin from "./userMixin";

export default {
  components: { Fruits },
  mixins: [FruitsMixin, userMixin],

  data() {
    return {
      myCpf: "39809813499"
    };
  },

  filters: {
    cpf(value) {
      const arr = value.split("");
      arr.splice(3, 0, ".");
      arr.splice(7, 0, ".");
      arr.splice(11, 0, "-");
      return arr.join("");
    }
  },

  created() {
    console.log("Created - App.vue");
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

input {
  font-size: 2.5rem;
}
</style>
