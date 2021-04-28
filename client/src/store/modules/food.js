import axios from "axios";

const state = {
  food: null,
};
const getters = {
  Food: (state) => state.food,
};

const actions = {
  async GetFood({ commit, rootGetters }) {
    let token = rootGetters.Token;
    if (token) {
      const { data } = await axios.get("/inputs/food", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      await commit("setFood", data);
    }
  },

  async AddFood({ dispatch, rootGetters }, food) {
    let token = rootGetters.Token;
    let user = rootGetters.User;

    if (token) {
      food.handle = user.handle;
      await axios.post("/inputs/food", food, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      await dispatch("GetFood");
    }
  },
};

const mutations = {
  setFood(state, food) {
    state.food = food;
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
};
