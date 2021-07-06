export default {
  data() {
    return {
      fruit: "",
      fruits: ["Banana", "Maça", "Laranja"]
    };
  },

  methods: {
    add() {
      this.fruits.push(this.fruit);
      this.fruit = "";
    }
  }
};
