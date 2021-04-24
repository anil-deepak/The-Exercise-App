import axios from "axios";

const state = {
  user: null,
  token: null,
  workouts: null,
  posts: null,
  food: null,
};
const getters = {
  loggedIn: (state) => state.user !== null,
  Token: (state) => state.token,
  User: (state) => state.user,
  Workouts: (state) => state.workouts,
  Posts: (state) => state.posts,
  People: (state) => state.people,
  Food: (state) => state.food,
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

  async SignOut({ commit }) {
    let user = null;
    commit("logOut", user);
  },

  async UpdateDetails({ commit, getters }, User) {
    let token = getters.Token;
    let user = getters.User;
    if (token) {
      await axios.patch(`/users/${user.user.id}`, User);
      await commit("setUser", User);
    }
  },

  async GetWorkouts({ commit, getters }) {
    let token = getters.Token;
    if (token) {
      const { data } = await axios.get("/inputs/workout", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      console.log(getters.Workouts);
      await commit("setWorkouts", data);
    }
  },

  async AddWorkout({ dispatch, getters }, workout) {
    let token = getters.Token;
    let user = getters.User;

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

  async CreatePost({ dispatch, getters }, post) {
    let token = getters.Token;
    let user = getters.User;
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

  async GetPosts({ commit, getters }) {
    let token = getters.Token;
    if (token) {
      let response = await axios.get("/posts", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      commit("setPosts", response.data);
    }
  },
  async GetPeople({ commit, getters }) {
    let token = getters.Token;
    if (token) {
      const { data } = await axios.get("/users", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      await commit("setPeople", data);
    }
  },
  async GetFood({ commit, getters }) {
    let token = getters.Token;
    if (token) {
      const { data } = await axios.get("/inputs/food", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      await commit("setFood", data);
    }
  },

  async AddFood({ dispatch, getters }, food) {
    let token = getters.Token;
    let user = getters.User;

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

  async logOut({ commit }) {
    await commit("logOut");
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
  setWorkouts(state, workouts) {
    state.workouts = workouts;
  },
  setPosts(state, posts) {
    state.posts = posts;
  },
  setPeople(state, people) {
    state.people = people.users;
  },
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
