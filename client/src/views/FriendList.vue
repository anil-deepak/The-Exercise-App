<template>
  <div class="section">
    <div class="container">
      <div class="panel">
        <div class="panel-heading">
          FriendList
        </div>
        <div class="panel-block" v-for="friend in Friends" :key="friend.id">
          <PersonCard :user="friend" :removeFriendVisible="true" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import PersonCard from "../components/PersonCard";
import { mapActions, mapGetters } from "vuex";

export default {
  name: "FriendList",
  components: {
    PersonCard,
  },
  computed: {
    ...mapGetters({ Friends: "Friends" }),
  },
  created: function() {
    this.GetFriends();
  },
  methods: {
    ...mapActions(["GetFriends"]),
  },
};
</script>

<style></style>
