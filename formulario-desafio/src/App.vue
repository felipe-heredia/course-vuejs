<template>
  <div id="app">
    <h1>Formulário Desafio</h1>
    <div class="content">
      <form class="panel" v-if="!send">
        <div class="header">Formulário</div>

        <FullName label="Nome Completo" @nameUpdate="handleUpdateName" />

        <Rotulo name="Email">
          <input type="email" v-model="form.email" />
        </Rotulo>

        <Rotulo name="Senha">
          <input type="password" v-model="form.passowrd" />
        </Rotulo>

        <Rotulo name="Armazenar dados?">
          <input type="checkbox" v-model="form.backup" />
        </Rotulo>

        <button @click.prevent="send = true">Enviar</button>
      </form>
      <div class="panel" v-else>
        <div class="header">Resultado</div>

        <Rotulo name="Nome Completo">
          <span>{{ form.fullName }}</span>
        </Rotulo>

        <Rotulo name="Email">
          <span>{{ form.email }}</span>
        </Rotulo>

        <Rotulo name="Senha">
          <span>{{ form.senha }}</span>
        </Rotulo>

        <Rotulo name="Armazenar dados?">
          <span>{{ form.backup }}</span>
        </Rotulo>
      </div>
    </div>
  </div>
</template>

<script>
import Rotulo from "./components/Rotulo.vue";
import FullName from "./components/FullName.vue";

export default {
  name: "app",
  components: { Rotulo, FullName },

  data() {
    return {
      send: false,
      form: {
        fullName: "",
        name: {},
        email: "",
        password: "",
        backup: false
      }
    };
  },

  methods: {
    handleUpdateName(name) {
      this.form.name = name;
      this.form.fullName = `${name.firstName} ${name.secondName}`;
    }
  }
};
</script>

<style>
body {
  background-color: #ececec;
}

#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;

  display: flex;
  flex-direction: column;
}

.content {
  display: flex;
}

.panel {
  flex: 1;
  background: #fff;
  margin: 0px 10px;
  padding: 20px;
  border: 1px solid #aaa;
  border-radius: 5px;
}

.panel .header {
  width: 100%;
  background-color: #ddd;
  padding: 10px 0px;
  border-radius: 5px;
  font-size: 1.4rem;
}

#app form button {
  float: center;
  margin: 10px 0px;
  padding: 10px 20px;
  font-size: 1.4rem;
  border-radius: 5px;
  color: #fff;
  background-color: #2196f3;
}

#app h1 {
  font-weight: 200;
  margin: 20px;
  padding: 0;
}

.mr-4 {
  margin-right: 40px;
}
</style>
