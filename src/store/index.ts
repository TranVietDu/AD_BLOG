import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';
import posts from './modules/posts';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: { posts },
});
