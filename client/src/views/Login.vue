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
                v-model.trim="credentials.handle"
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
              <a class="button is-primary w-100" @click="login()">Login</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapActions } from "vuex";
export default {
  name: "SignIn",
  data() {
    return {
      credentials: {
        handle: "",
        password: "",
      },
      error: "",
    };
  },

  methods: {
    ...mapActions(["SignIn"]),
    validateFields() {
      if (this.credentials.handle.length === 0) {
        this.error = "Username is required";
        return false;
      }
      if (this.credentials.password.length === 0) {
        this.error = "Password is required";
        return false;
      }
      return true;
    },
    async login() {
      try {
        if (this.validateFields()) {
          await this.SignIn(this.credentials);
          this.resetForm();
          this.$router.push("/");
        }
      } catch (err) {
        this.error = err.toString();
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
