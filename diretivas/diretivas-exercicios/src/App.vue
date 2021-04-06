<template>
  <div id="app">
    <h1>Diretivas</h1>

    <hr />
    <p v-destaque:fundo.atrasar="'lightblue'">Usando diretiva personalizada</p>
    <p v-destaque="'red'">Usando diretiva personalizada</p>
    <hr />

    <p
      v-destaque-local.atrasar.alternar="{
        color1: 'green',
        color2: 'red',
        delay: 2500,
        interval: 200
      }"
    >
      Usando diretiva Personalizada
    </p>
    <p v-destaque-local:fundo.atrasar="{ color1: 'green', delay: 4000 }">
      Usando diretiva personalizada
    </p>
  </div>
</template>

<script>
export default {
  directives: {
    "destaque-local": {
      bind(el, binding) {
        const applyColor = color => {
          if (binding.arg === "fundo") {
            el.style.backgroundColor = color;
          } else {
            el.style.color = color;
          }
        };

        let delay = 0;
        if (binding.modifiers["atrasar"]) delay = binding.value.delay;

        const color1 = binding.value.color1;
        const color2 = binding.value.color2;
        let actualColor = color1;

        setTimeout(() => {
          if (binding.modifiers["alternar"]) {
            setInterval(() => {
              actualColor = actualColor === color1 ? color2 : color1;
              applyColor(actualColor);
            }, binding.value.interval);
          } else {
            applyColor(color1);
          }
        }, delay);
      }
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
