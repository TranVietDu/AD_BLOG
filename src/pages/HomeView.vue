<template>
  <div class="todos">
    <v-simple-table>
      <template v-slot:default>
        <thead>
          <tr>
            <th class="text-left">Id</th>
            <th class="text-left">Body</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in posts.posts" :key="item.name">
            <td>{{ item.id }}</td>
            <td>{{ item.body }}</td>
          </tr>
        </tbody>
      </template>
    </v-simple-table>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { mapState } from 'vuex';
export default Vue.extend({
  name: 'HomeView',
  components: {},
  computed: mapState(['posts']),
  created() {
    this.getPosts();
  },
  methods: {
    getPosts() {
      this.$store.dispatch('getPosts');
    },
  },
});
</script>
