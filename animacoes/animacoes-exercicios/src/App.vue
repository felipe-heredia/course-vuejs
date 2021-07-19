<template>
  <div id="app" class="container">
    <h1>Animações</h1>
    <hr />

    <b-button variant="primary" class="mb-4" @click="show = !show">
      Mostrar Mensagem
    </b-button>

    <transition name="fade">
      <b-alert variant="info" show v-if="show">{{ message }}</b-alert>
    </transition>

    <transition name="slide" appear>
      <b-alert variant="info" show v-if="show">{{ message }}</b-alert>
    </transition>

    <transition
      enter-active-class="animated bounce"
      leave-active-class="animated shake"
    >
      <b-alert variant="info" show v-if="show">{{ message }}</b-alert>
    </transition>

    <hr />

    <b-select v-model="animationType">
      <option value="fade">Fade</option>
      <option value="slide">Slide</option>
    </b-select>

    <transition :name="animationType" mode="out-in">
      <b-alert variant="info" show v-if="show" key="info">{{
        message
      }}</b-alert>
      <b-alert variant="warning" show v-else key="warning">{{
        message
      }}</b-alert>
    </transition>

    <hr />
    <b-button @click="show2 = !show2">Alternar</b-button>

    <transition
      :css="false"
      @before-enter="beforeEnter"
      @enter="enter"
      @before-leave="beforeLeave"
      @leave="leave"
    >
      <div class="box" v-if="show2"></div>
    </transition>

    <hr />
    <div class="mb-4">
      <b-button
        variant="primary"
        class="mr-2"
        @click="selectedComponent = 'AlertInfo'"
      >
        Info
      </b-button>

      <b-button variant="secondary" @click="selectedComponent = 'Alert'">
        Alerta
      </b-button>
    </div>

    <transition name="fade" mode="out-in">
      <component :is="selectedComponent" />
    </transition>

    <hr />

    <b-button @click="addStudent" class="mb-4">Adicionar Alunos</b-button>

    <transition-group name="slide" tag="div">
      <b-list-group v-for="(student, index) in students" :key="student">
        <b-list-group-item @click="removeStudent(index)">
          {{ student }}
        </b-list-group-item>
      </b-list-group>
    </transition-group>
  </div>
</template>

<script>
import Alert from "./Alert.vue";
import AlertInfo from "./AlertInfo.vue";

export default {
  components: { Alert, AlertInfo },

  data() {
    return {
      students: ["Roberto", "Julia", "Andressa", "Kátia"],
      message: "Mensagem informativa para você, usuário!",
      show: false,
      show2: true,
      animationType: "fade",
      baseWidth: 0,
      selectedComponent: "AlertInfo"
    };
  },

  methods: {
    addStudent() {
      const random = Math.random()
        .toString(36)
        .substring(2);

      this.students.push(random);
    },

    removeStudent(index) {
      this.students.splice(index, 1);
    },

    animate(element, done, negative) {
      let round = 1;

      const timer = setInterval(() => {
        const newWidth = this.baseWidth + (negative ? -round * 10 : round * 10);

        element.style.width = `${newWidth}px`;
        round++;

        if (round > 30) {
          clearInterval(timer);
          done();
        }
      }, 40);
    },

    beforeEnter(element) {
      this.baseWidth = 0;
      element.style.width = `${this.baseWidth}px`;
    },

    enter(element, done) {
      this.animate(element, done, false);
    },

    beforeLeave(element) {
      this.baseWidth = 300;
      element.style.width = `${this.baseWidth}px`;
    },

    leave(element, done) {
      this.animate(element, done, true);
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
  font-size: 1.5rem;
}

.box {
  height: 100px;
  width: 300px;
  margin: 30px auto;
  background: lightgreen;
}

.alert {
  margin: 5rem;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 2s;
}

@keyframes slide-in {
  from {
    transform: translateY(40px);
  }

  to {
    transform: translateY(0);
  }
}

@keyframes slide-out {
  from {
    transform: translateY(0);
  }

  to {
    transform: translateY(40px);
  }
}

.slide-enter-active {
  animation: slide-in 2s ease;
  transition: opacity 2s;
}

.slide-leave-active {
  position: absolute;
  width: 50%;
  animation: slide-out 2s ease;
  transition: opacity 2s;

  opacity: 0;
}

.slide-leave-to,
.slide-enter {
  opacity: 0;
}

.slide-move {
  transition: transform 1s;
}
</style>
