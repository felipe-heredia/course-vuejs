<template>
  <div id="app" class="container">
    <h1>HTTP com Axios</h1>

    <b-card>
      <b-form-group label="Nome">
        <b-form-input v-model="user.name" placeholder="Informe o nome" />
      </b-form-group>

      <b-form-group label="Email">
        <b-form-input v-model="user.email" placeholder="Informe o email" />
      </b-form-group>

      <b-button @click="sendData" size="lg" variant="primary">
        Enviar dados
      </b-button>

      <b-button @click="getUsers" size="lg" variant="success" class="ml-2">
        Obter usuários
      </b-button>
    </b-card>

    <hr />

    <b-list-group>
      <b-list-group-item v-for="(user, id) in users" :key="id">
        <strong>Nome: </strong> {{ user.name }} <br />
        <strong>Email: </strong> {{ user.email }} <br />
        <strong>ID: </strong> {{ id }} <br />
      </b-list-group-item>
    </b-list-group>
  </div>
</template>

<script>
export default {
  data() {
    return {
      users: [],
      user: {
        name: "",
        email: ""
      }
    };
  },

  methods: {
    sendData() {
      this.$http.post("users.json", this.user).then(response => {
        this.user = {
          name: "",
          email: ""
        };
      });
    },

    getUsers() {
      this.$http.get("users.json").then(response => {
        this.users = response.data;
      });
    }
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  font-size: 1.5rem;
}

#app h1 {
  text-align: center;
  margin: 50px;
}
</style>
