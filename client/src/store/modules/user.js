import axios from "axios";

const state = {
  user: null,
  token: null,
  friends: null,
  requests: null,
};
const getters = {
  loggedIn: (state) => state.user !== null,
  Token: (state) => state.token,
  User: (state) => state.user,
  Friends: (state) => state.friends,
  Requests: (state) => state.requests,
};

const actions = {
  async SignUp({ dispatch }, form) {
    await axios.post("auth/register", form);
    let UserForm = {};
    UserForm.handle = form.handle;
    UserForm.password = form.password;
    await dispatch("SignIn", UserForm);
  },

  async SignIn({ commit }, User) {
    const { data } = await axios.post("auth/login", User);
    await commit("setToken", data.token);
    await commit("setUser", data);
  },

  async UpdateDetails({ commit, getters }, User) {
    let token = getters.Token;
    let user = getters.User;
    if (token) {
      await axios.patch(`/users/${user.user.id}`, User);
      await commit("setUser", User);
    }
  },

  async logOut({ commit }) {
    await commit("logOut");
  },

  async GetFriends({ commit, getters }) {
    let token = getters.Token;
    if (token) {
      const { data } = await axios.get(
        "/friends",

        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      await commit("setFriends", data);
    }
  },

  async GetRequests({ commit, getters }) {
    let token = getters.Token;

    if (token) {
      const { data } = await axios.get(
        "/friends/requests",

        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );

      await commit("setRequests", data);
    }
  },

  async AcceptRequest({ dispatch, getters, commit }, handle) {
    let token = getters.Token;
    if (token) {
      const { data } = await axios.post(
        `/friends/accept/${handle}`,
        {},
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      await commit("setUser", { user: data });
      await dispatch("GetRequests");
      await dispatch("GetFriends");
    }
  },

  async SendRequest({ dispatch, getters, commit }, handle) {
    let token = getters.Token;

    if (token) {
      const { data } = await axios.post(
        `/friends/send/${handle}`,
        {},
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );

      await commit("setUser", { user: data });
      console.log(getters.User);
      await dispatch("GetRequests");
      await dispatch("GetFriends");
    }
  },

  async RemoveFriend({ dispatch, getters, commit }, handle) {
    let token = getters.Token;

    if (token) {
      const { data } = await axios.delete(`/friends/delete/${handle}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      await commit("setUser", { user: data });
      await dispatch("GetRequests");
      await dispatch("GetFriends");
    }
  },
  async RejectRecievedRequest({ dispatch, getters, commit }, handle) {
    let token = getters.Token;
    if (token) {
      const { data } = await axios.delete(`/friends/reject/${handle}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      await commit("setUser", { user: data });
      await dispatch("GetRequests");
      await dispatch("GetFriends");
    }
  },
};

const mutations = {
  setUser(state, user) {
    state.user = { ...state.user, ...user };
  },
  setToken(state, token) {
    state.token = token;
  },
  logOut(state) {
    state.user = null;
    state.posts = null;
    state.token = null;
  },

  setFriends(state, friends) {
    state.friends = friends;
  },
  setRequests(state, requests) {
    state.requests = requests;
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
};
