import axios from "axios";

const state = {
  people: null,
};
const getters = {
  People: (state) => state.people,
};

const actions = {
  async GetPeople({ commit, rootGetters }) {
    let token = rootGetters.Token;
    if (token) {
      const { data } = await axios.get("/users", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      await commit("setPeople", data);
    }
  },
};

const mutations = {
  setPeople(state, people) {
    state.people = people.users;
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
};
