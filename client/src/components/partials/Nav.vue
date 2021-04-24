<template>
  <nav class="navbar container" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
      <a class="navbar-item" href="/">
        <strong class="is-size-4">Fitness</strong>
      </a>
      <a
        role="button"
        class="navbar-burger burger"
        aria-label="menu"
        aria-expanded="false"
        data-target="navbarBasicExample"
      >
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a>
    </div>
    <div id="navbar" class="navbar-menu">
      <div class="navbar-start">
        <router-link to="/" class="navbar-item">Home</router-link>
        <router-link to="/about" class="navbar-item">About</router-link>
        <router-link to="/tools" class="navbar-item" v-if="User != null"
          >Tools</router-link
        >
        <router-link class="navbar-item" to="/FindPeople" v-if="User != null"
          >Find people</router-link
        >
      </div>
      <div class="navbar-end">
        <div class="navbar-item">
          <div class="buttons">
            <router-link to="/Login" class="button is-danger"
              >Sign in</router-link
            >
            <router-link to="/Signup" class="button is-dark"
              >Sign up</router-link
            >
          </div>
        </div>
        <div class="navbar-item">
          <FriendRequestsDropdown />
        </div>

        <div class="navbar-item has-dropdown is-hoverable">
          <a class="navbar-link">
            <span class="icon">
              <i class="fas fa-user"></i>
            </span>
            <span>{{
              User ? User.user.firstName + " " + User.user.lastName : ""
            }}</span>
          </a>
          <div class="navbar-dropdown" v-if="User != null">
            <router-link to="/AccountSettings" class="navbar-item"
              >My profile</router-link
            >
            <router-link to="/MyInputs" class="navbar-item"
              >My inputs</router-link
            >
            <!-- <router-link class="navbar-item" to="/Dashboard"
              >Dashboard</router-link
            >
            <router-link to="/Admin" class="navbar-item">Admin</router-link> -->
            <a class="navbar-item" v-on:click="signOut">Sign out</a>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>
<script>
import FriendRequestsDropdown from "@/components/FriendRequestsDropdown";
import { mapActions, mapGetters } from "vuex";

export default {
  name: "Nav",
  components: {
    FriendRequestsDropdown,
  },
  data() {
    return {
      menuOpen: false,
    };
  },

  computed: {
    ...mapGetters({ User: "User" }),
  },
  methods: {
    ...mapActions(["logOut"]),
    signOut() {
      this.logOut();
      this.$router.push("/login");
    },
  },
};
</script>
<style lang="scss" scoped>
nav {
  margin-top: 25px;
  margin-bottom: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #d88d00;
    }
  }
}
</style>
