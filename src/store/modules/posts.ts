import posts from '@/services/posts';
const state = {
  posts: [],
  post: '',
};

const actions = {
  async getPosts({ commit }: any) {
    try {
      const response = await posts.getAll();
      commit('SET_POST', response.data);
    } catch (error) {
      console.log(error);
    }
  },
  async get({ commit }: any, id: string) {
    try {
      const response = await posts.get(id);
      commit('GET', response.data);
    } catch (error) {
      console.log(error);
    }
  },
};
const mutations = {
  SET_POST(state: any, posts: any) {
    state.posts = posts;
  },
  GET(state: any, post: any) {
    state.post = post;
  },
};

export default {
  state,
  actions,
  mutations,
};
