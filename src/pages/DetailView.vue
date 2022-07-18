<template>
  <div class="app">
    <h1>{{ posts.post.body }}</h1>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { mapState } from 'vuex';
export default Vue.extend({
  name: 'TheDetail',
  computed: mapState(['posts']),
  created() {
    this.getPost(this.$route.params.id);
  },
  methods: {
    getPost(id: string) {
      this.$store.dispatch('get', id);
    },
  },
});
</script>

<style></style>
