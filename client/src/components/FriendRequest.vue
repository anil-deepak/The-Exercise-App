<template>
  <div class="level">
    <div class="level-left">
      <router-link to="/">{{ request }}</router-link>
    </div>
    <div class="level-right">
      <div class="level-item">
        <a
          class="button is-white has-text-success"
          @click="acceptFriendRequest"
        >
          <span class="icon">
            <i class="fas fa-check"></i>
          </span>
        </a>

        <button
          class="button is-white has-text-danger"
          @click="rejectFriendRequest"
        >
          <span class="icon">
            <i class="fas fa-times"></i>
          </span>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "FriendRequest",
  props: {
    request: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      ableToRespond: false,
    };
  },
  methods: {
    ...mapActions(["AcceptRequest", "RejectRecievedRequest"]),
    async acceptFriendRequest() {
      await this.AcceptRequest(this.request);
    },
    async rejectFriendRequest() {
      await this.RejectRecievedRequest(this.request);
    },
  },
};
</script>

<style></style>
