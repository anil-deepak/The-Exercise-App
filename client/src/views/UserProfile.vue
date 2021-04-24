<template>
  <div class="section" v-if="user">
    <div class="container shadow">
      <div class="container">
        <div class="hero is-primary">
          <div class="hero-video">
            <figure class="image is-2by1">
              <img src="@/assets/1.png" alt />
            </figure>
          </div>
          <div class="hero-head"></div>
          <div class="hero-body"></div>
          <div class="hero-foot">
            <div class="level p-10px">
              <div class="level-left">
                <h1 class="title" id="username">
                  {{ user.firstName }} {{ user.lastName }}
                </h1>
              </div>
              <div class="level-right">
                <button class="button" v-if="ableToSendFriendRequest">
                  <span class="icon">
                    <i class="fas fa-plus"></i>
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="section has-text-weight-medium">
        <div class="columns">
          <div class="column is-one-quarter">Handle:</div>
          <div class="column">{{ user.handle }}</div>
        </div>
        <div class="columns">
          <div class="column is-one-quarter">Email:</div>
          <div class="column">{{ user.email }}</div>
        </div>
        <div class="columns">
          <div class="column is-one-quarter">Registered:</div>
          <div class="column">{{ registered }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import moment from "moment";

export default {
  name: "UserProfile",
  props: {
    handle: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      user: "Session.user",
    };
  },
  methods: {
    getUser() {
      if (this.handle) {
        this.user = JSON.parse(sessionStorage.getItem("user"));
      }
    },
    sendRequestBtnClicked() {
      if (this.ableToSendFriendRequest) {
        this.sendFriendRequest(this.user._id);
      }
    },
  },
  computed: {
    registered: function() {
      if (this.user) return moment(this.user.registered).format("MMMM Do YYYY");
      else return "";
    },
    ableToSendFriendRequest: function() {
      if (this.user) {
        return true;
      } else return false;
    },
  },
  watch: {
    handle: function() {
      this.getUser();
    },
  },
};
</script>

<style>
.p-10px {
  padding: 10px;
}
.shadow {
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}
.title#username {
  z-index: 99999 !important;
}
</style>
