<template>
  <div id="app" class="container">
    <h1>HTTP com Axios</h1>

    <b-alert
      show
      dismissible
      v-for="message in messages"
      :key="message.text"
      :variant="message.type"
      >{{ message.text }}</b-alert
    >

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

        <b-button variant="warning" size="lg" @click="edit(id)">
          Editar
        </b-button>
        <b-button
          variant="danger"
          class="ml-2"
          size="lg"
          @click="deleteUser(id)"
        >
          Apagar
        </b-button>
      </b-list-group-item>
    </b-list-group>
  </div>
</template>

<script>
export default {
  data() {
    return {
      messages: [],
      users: [],
      id: null,
      user: {
        name: "",
        email: ""
      }
    };
  },

  methods: {
    clear() {
      this.user.name = "";
      this.user.email = "";
      this.messages = [];
      this.id = null;
    },

    edit(id) {
      this.id = id;
      this.user = { ...this.users[id] };
    },

    deleteUser(id) {
      this.$http
        .delete(`/users/${id}.jso`)
        .then(() => this.clear())
        .catch(() => {
          this.messages.push({
            text: "Problema ao excluir!",
            type: "danger"
          });
        });
    },

    async sendData() {
      const method = this.id ? "patch" : "post";
      const endUrl = this.id ? `/${this.id}.json` : ".json";

      await this.$http[method](`/users${endUrl}`, this.user).then(() => {
        this.clear();
        this.messages.push({
          text: "Operação realizada com sucesso!",
          type: "success"
        });
      });

      if (method === "patch") this.getUsers();
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
