<template>
  <div class="card w-100">
    <div class="card-content">
      <div class="media">
        <div class="media-left">
          <figure class="image is-48x48">
            <img src="@/assets/1.png" alt="not loaded" />
          </figure>
        </div>
        <div class="media-content">
          <p class="title is-4">
            <router-link :to="`/users/${user.handle}`"
              >{{ user.firstName }} {{ user.lastName }}</router-link
            >
          </p>
          <p class="subtitle is-6">
            <router-link :to="`/users/${user.username}`"
              >@{{ user.handle }}</router-link
            >
          </p>
        </div>
        <div class="media-right">
          <div v-if="!recievedRequest">
            <button
              class="button is-primary"
              v-if="addFriendVisible"
              :disabled="disabled"
              @click="clickSendRequest()"
            >
              <span class="icon">
                <i class="fas fa-plus"></i>
              </span>
            </button>
          </div>

          <button
            class="button is-danger"
            @click="clickRemoveFriend()"
            v-if="removeFriendVisible"
          >
            <span class="icon">
              <i class="fas fa-trash"></i>
            </span>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
  name: "PersonCard",
  props: {
    user: {
      type: Object,
      required: true,
      default: null,
    },
    addFriendVisible: {
      type: Boolean,
      default: true,
    },
    removeFriendVisible: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      disabled: false,
    };
  },
  computed: {
    ...mapGetters({ MainUser: "User" }),
    recievedRequest() {
      const userIndex = this.MainUser.user.friends.findIndex(
        (frnd) => frnd.handle === this.user.handle
      );
      return userIndex === -1 ? false : true;
    },
  },

  methods: {
    ...mapActions(["SendRequest", "RemoveFriend"]),
    async clickSendRequest() {
      await this.SendRequest(this.user.handle);
      this.disabled = true;
    },
    async clickRemoveFriend() {
      await this.RemoveFriend(this.user.handle);
    },
  },
  mounted() {},
};
</script>

<style></style>
