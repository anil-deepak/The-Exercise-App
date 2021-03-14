<template>
  <div class="section">
    <div class="container ">
      <div class="panel">
        <p class="panel-heading">Sign In</p>
        <div class="panel-block">
          <div class="field">
            <label class="label">Username</label>
            <div class="control has-icons-left">
              <input
                type="text"
                class="input"
                placeholder="Your username"
                v-model.trim="credentials.username"
                required
              />
              <span class="icon is-small is-left">
                <i class="fas fa-user"></i>
              </span>
            </div>
          </div>
        </div>
        <div class="panel-block">
          <div class="field">
            <label class="label">Password</label>
            <div class="control has-icons-left">
              <input
                type="password"
                class="input"
                placeholder="Your password"
                v-model.trim="credentials.password"
                required
              />
              <span class="icon is-small is-left">
                <i class="fas fa-lock"></i>
              </span>
            </div>
          </div>
        </div>
        <div class="panel-block">
          <p class="help is-danger">
            {{ error }}
          </p>
        </div>
        <div class="panel-block">
          <div class="field">
            <div class="control">
              <a class="button is-primary w-100" @click="loginBtnClicked()"
                >Login</a
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>

import router from "@/router/index.js";
export default {
  name: "SignIn",
  data() {
    return {
      credentials: {
        username: "",
        password: "",
      },
      error: "",
    };
  },

  mounted() {
    if (sessionStorage.isLoggedIn) {
      this.$router.push("/");
    }
  },
  methods: {
    validateFields() {
      // email
      if (this.credentials.username.length === 0) {
        this.error = "Username is required";
        return false;
      }

      // password
      if (this.credentials.password.length === 0) {
        this.error = "Password is required";
        return false;
      }

      return true;
    },
    loginBtnClicked() {
      if (this.validateFields()) {
        let users = JSON.parse(sessionStorage.getItem("users"));
        const user = users.find((x) => x.username == this.credentials.username);
        if (user != undefined && user != "") {
          if (user.password == this.credentials.password) {
            sessionStorage.setItem("user", JSON.stringify(user));
            sessionStorage.setItem("isLoggedIn", true);
            this.wrongCredentials = true;
            this.resetForm();
            router.push("/");
          }
        }
        this.resetForm();
      }
    },
    resetForm() {
      this.credentials.username = null;
      this.credentials.password = null;
    },
  },
};
</script>
<style>
.w-100,
.field {
  width: 100%;
}
</style>
