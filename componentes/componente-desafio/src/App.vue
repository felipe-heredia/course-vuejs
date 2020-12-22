<template>
  <v-app>
    <navigation></navigation>
    <app-bar></app-bar>
    <app-content></app-content>
    <app-footer></app-footer>
  </v-app>
</template>

<script>
import Navigation from './Navigation.vue';
import AppBar from './AppBar.vue';
import Content from './Content.vue';
import Footer from './Footer.vue';

export default {
  components: {
    navigation: Navigation,
    'app-bar': AppBar,
    'app-content': Content,
    'app-footer': Footer,
  },
}
</script>
