<template>
  <div class="dropdown is-hoverable">
    <div class="dropdown-trigger">
      <button class="button is-link" aria-controls="friendRequestsDropdown">
        <span class="icon">
          <i class="fas fa-user-friends"></i>
        </span>
        <span>{{ User.user.requests.length }}</span>
      </button>
    </div>
    <div class="dropdown-menu" id="friendRequestsDropdown" role="menu">
      <div class="dropdown-content">
        <div class="dropdown-item">
          <router-link to="/FriendList">Friend list</router-link>
        </div>
        <div v-for="(request, index) in User.user.requests" :key="index">
          <div class="dropdown-divider" />
          <div class="dropdown-item">
            <FriendRequest :request="request" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import FriendRequest from "./FriendRequest";
export default {
  name: "FriendRequestsDropdown",
  components: {
    FriendRequest,
  },
  computed: {
    ...mapGetters({ User: "User" }),
  },
  mounted() {
    console.log(this.User.user.requests);
  },
};
</script>

<style></style>
