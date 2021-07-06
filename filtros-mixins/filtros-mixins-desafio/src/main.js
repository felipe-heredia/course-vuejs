import Vue from "vue";
import App from "./App.vue";

Vue.config.productionTip = false;

Vue.filter("countLetters", function(value) {
  const array = value.split(" ");
  const counted = array.map(word => `${word} (${word.length}) `);

  return counted.join("");
});

new Vue({
  render: h => h(App)
}).$mount("#app");
