<template>
  <div class="section">
    <div class="container ">
      <div class="panel">
        <p class="panel-heading">Sign up</p>
        <div class="panel-block">
          <div class="field">
            <label class="label">Username</label>
            <div class="control has-icons-left">
              <input
                type="text"
                class="input"
                placeholder="Your username"
                v-model.trim="user.handle"
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
            <label class="label">First name</label>
            <div class="control">
              <div class="control has-icons-left">
                <input
                  type="text"
                  class="input"
                  placeholder="Your first name"
                  required
                  v-model.trim="user.firstName"
                />
                <span class="icon is-small is-left">
                  <i class="fas fa-user"></i>
                </span>
              </div>
            </div>
            <label class="label">Last name</label>
            <div class="control">
              <div class="control has-icons-left">
                <input
                  type="text"
                  class="input"
                  placeholder="Your last name"
                  v-model.trim="user.lastName"
                  required
                />
                <span class="icon is-small is-left">
                  <i class="fas fa-user"></i>
                </span>
              </div>
            </div>
          </div>
        </div>
        <div class="panel-block">
          <div class="field">
            <label class="label">Email</label>
            <div class="control has-icons-left">
              <input
                type="email"
                class="input"
                placeholder="Your email"
                v-model.trim="user.email"
                required
              />
              <span class="icon is-small is-left">
                <i class="fas fa-envelope" />
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
                v-model.trim="user.password"
              />
              <span class="icon is-small is-left">
                <i class="fas fa-lock"></i>
              </span>
            </div>

            <label class="label">Repeat password</label>
            <div class="control has-icons-left">
              <input
                type="password"
                class="input"
                placeholder="Repeat your passowrd"
                v-model.trim="user.repeatPassword"
              />
              <span class="icon is-small is-left">
                <i class="fas fa-lock"></i>
              </span>
            </div>
          </div>
        </div>
        <!-- <div class="panel-block">
          <div class="file has-name is-fullwidth w-100">
            <label class="file-label">
              <input
                class="file-input"
                type="file"
                name="resume"
                @change="pictureSelected"
                accept="image/png, image/jpeg"
              />
              <span class="file-cta">
                <span class="file-icon">
                  <i class="fas fa-upload"></i>
                </span>
                <span class="file-label">Choose a profile picture...</span>
              </span>
              <span class="file-name">{{
                picture ? picture.name : "Not selected"
              }}</span>
            </label>
          </div>
        </div> -->
        <div class="panel-block">
          <p class="help is-danger">
            {{ error }}
          </p>
        </div>
        <div class="panel-block">
          <div class="field">
            <div class="control">
              <a class="button is-primary w-100" @click="register()"
                >Register</a
              >
            </div>
          </div>
        </div>
        <div class="panel-block" v-if="uploadProgressBar.isUploading">
          <progress
            class="progress is-success"
            :value="uploadProgressBar.uploadProgress"
            max="100"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "SignUp",
  data() {
    return {
      user: {
        handle: "",
        password: "",
        repeatPassword: "",
        email: "",
        firstName: "",
        lastName: "",
        picture: "",
      },
      error: "",
      picture: null,
      notificationModal: {
        isVisible: false,
        modalColor: "is-success",
        title: "",
        text: "",
      },
      uploadProgressBar: {
        isUploading: false,
        uploadProgress: 0,
      },
    };
  },

  methods: {
    ...mapActions(["SignUp"]),
    validateFields() {
      // username
      if (this.user.handle.length === 0) {
        this.error = "Username should not be empty";
        return false;
      }

      // firstname
      if (this.user.firstName.length === 0) {
        this.error = "Firstname should not be empty";
        return false;
      }

      // lastname
      if (this.user.lastName.length === 0) {
        this.error = "Lastname should not be empty";
        return false;
      }

      // email
      if (this.user.email.length === 0) {
        this.error = "Email is required";
        return false;
      }

      // password
      if (this.user.password.length === 0) {
        this.error = "Password is required";
        return false;
      }

      return true;
    },

    async register() {
      try {
        if (this.validateFields()) {
          await this.SignUp(this.user);
          this.clearForm();
          this.$router.push("/");
        }
      } catch (err) {
        this.error = err.toString();
      }
    },

    clearForm() {
      this.picture = null;
      var userToClear = this.user;
      userToClear.username = "";
      userToClear.email = "";
      userToClear.password = "";
      userToClear.repeatPassword = "";
      userToClear.firstname = "";
      userToClear.lastname = "";
    },
  },
};
</script>

<style scoped>
.w-100,
.field {
  width: 100%;
}
.h-100perc {
  height: 100%;
}
</style>
