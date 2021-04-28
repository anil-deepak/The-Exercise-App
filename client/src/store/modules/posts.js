import axios from "axios";

const state = {
  posts: null,
};
const getters = {
  Posts: (state) => state.posts,
};

const actions = {
  async CreatePost({ dispatch, rootGetters }, post) {
    let token = rootGetters.Token;
    let user = rootGetters.User;
    if (token) {
      post.handle = user.handle;
      await axios.post("/posts", post, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      await dispatch("GetPosts");
    }
  },

  async GetPosts({ commit, rootGetters }) {
    let token = rootGetters.Token;
    if (token) {
      let response = await axios.get("/posts", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      commit("setPosts", response.data);
    }
  },
};

const mutations = {
  setPosts(state, posts) {
    state.posts = posts;
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
};
