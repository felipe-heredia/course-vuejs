<template>
  <v-app>
    <Navigation></Navigation>
    <AppBar></AppBar>
    <Content></Content>
    <Footer></Footer>
  </v-app>
</template>

<script>
import Navigation from './components/template/Navigation.vue';
import AppBar from './components/template/AppBar.vue';
import Content from './components/Content.vue';
import Footer from './components/template/Footer.vue';

export default {
  components: { Navigation, AppBar, Content, Footer },
}
</script>
