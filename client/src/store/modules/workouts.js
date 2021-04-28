import axios from "axios";

const state = {
  workouts: null,
};
const getters = {
  Workouts: (state) => state.workouts,
};

const actions = {
  async GetWorkouts({ commit, rootGetters }) {
    let token = rootGetters.Token;
    if (token) {
      const { data } = await axios.get("/inputs/workout", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      await commit("setWorkouts", data);
    }
  },

  async AddWorkout({ dispatch, rootGetters }, workout) {
    let token = rootGetters.Token;
    let user = rootGetters.User;

    if (token) {
      workout.handle = user.handle;
      await axios.post("/inputs/workout", workout, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      await dispatch("GetWorkouts");
    }
  },
};

const mutations = {
  setWorkouts(state, workouts) {
    state.workouts = workouts;
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
};
