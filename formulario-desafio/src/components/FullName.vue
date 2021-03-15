<template>
  <Rotulo :name="label">
    <input type="text" v-model="name.firstName" placeholder="Nome" />
    <input type="text" v-model="name.secondName" placeholder="Sobrenome" />
  </Rotulo>
</template>

<script>
import Rotulo from "./Rotulo";

export default {
  props: ["label"],
  components: { Rotulo },

  data() {
    return {
      name: {
        firstName: null,
        secondName: null
      }
    };
  },

  watch: {
    name: {
      deep: true,
      handler(value) {
        this.$emit("nameUpdate", value);
      }
    }
  }
};
</script>

<style></style>
