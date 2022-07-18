<template>
  <v-app>
    <Header></Header>
    <v-main>
      <v-container fluid>
        <router-view />
      </v-container>
    </v-main>
    <Footer />
  </v-app>
</template>

<script lang="ts">
import Vue from 'vue';
import Header from './components/TheHeader.vue';
import Footer from './components/TheFooter.vue';
export default Vue.extend({
  name: 'App',
  components: { Header, Footer },
  data: () => ({}),
});
</script>
