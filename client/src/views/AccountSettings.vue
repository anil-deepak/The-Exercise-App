<template>
  <div class="section">
    <div class="container">
      <!-- <form @submit.prevent=""></form> -->
      <div class="box">
        <div class="profile-container">
          <div class="image-container">
            <figure>
              <img
                class="profile-image"
                src="@/assets/1.png"
                alt="Profile picture"
              />
            </figure>
          </div>
          <div class="profile-info-container">
            <div class="profile-info-element">Username:</div>
            <div class="profile-info-element">
              <div class="field">
                <div class="control">
                  <input class="input" type="text" v-model="form.handle" />
                </div>
              </div>
            </div>
            <div class="profile-info-element">First name:</div>
            <div class="profile-info-element">
              <div class="field">
                <div class="control">
                  <input class="input" type="text" v-model="form.firstName" />
                </div>
              </div>
            </div>

            <div class="profile-info-element">Last name:</div>
            <div class="profile-info-element">
              <div class="field">
                <div class="control">
                  <input class="input" type="text" v-model="form.lastName" />
                </div>
              </div>
            </div>

            <div class="profile-info-element">Email:</div>
            <div class="field">
              <div class="control">
                <input class="input" type="text" v-model="form.email" />
              </div>
            </div>
            <div class="profile-info-element">Change Password:</div>
            <div class="profile-info-element">
              <div class="field">
                <div class="control">
                  <input
                    class="input"
                    type="password"
                    placeholder="Change password"
                    v-model="form.password"
                  />
                </div>
              </div>
            </div>
            <div class="profile-info-element">Repeat Password:</div>
            <div class="profile-info-element">
              <div class="field">
                <div class="control">
                  <input
                    class="input"
                    type="password"
                    placeholder="Repeat password"
                    v-model="form.repeatPassword"
                  />
                </div>
              </div>
              <div class="field is-grouped is-grouped-right">
                <button class="button is-danger" @click="submit">
                  Change the details
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="content friends-container card">
      <h1>Friends List</h1>
      <div v-if="User.user.friends.length > 1">
        <div v-for="(friend, index) in User.user.friends" :key="index">
          <p>{{ friend.handle }}</p>
        </div>
      </div>
      <div v-else>
        <p>No friends yet!!! Make friends now</p>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  name: "AccountSettings",
  computed: {},
  setup() {},

  data() {
    return {
      form: {
        handle: "",
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        repeatPassword: "",
      },
      error: "",
      message: "",
    };
  },

  computed: {
    ...mapGetters({ User: "User" }),
  },
  mounted() {
    this.fillDetails();

    console.log(this.User);
  },
  methods: {
    ...mapActions(["UpdateDetails"]),
    async submit() {
      try {
        if (this.form.password === this.form.repeatPassword) {
          this.form.repeatPassword = null;
          await this.UpdateDetails(this.form);
          this.error = "";
          this.message = "Details updated successfully";
          this.clearform();
        } else {
          console.log("Password does not match");
        }
      } catch (error) {
        console.log(error.toString());
      }
    },
    fillDetails() {
      this.form.handle = this.User.user.handle;
      this.form.firstName = this.User.user.firstName;
      this.form.lastName = this.User.user.lastName;
      this.form.email = this.User.user.email;
    },
    clearform() {
      this.form.password = "";
    },
  },
};
</script>

<style>
.profile-container {
  display: grid;
  grid-template-columns: 4fr 8fr;
}
.image-container {
  padding: 12px;
}
.profile-info-container {
  display: grid;
  grid-template-columns: 4fr 8fr;
  padding: 12px;
}
.profile-image {
  width: 384px;
  height: 384px;
}
@media (max-width: 1024px) {
  .profile-container {
    grid-template-columns: 1fr;
  }
  .profile-info-container {
    grid-template-columns: 1fr;
  }
  .profile-info-element:nth-child(odd) {
    margin-top: 20px;
  }
}
.friends-container {
  margin-top: 20px;
  padding: 20px;
}
</style>
