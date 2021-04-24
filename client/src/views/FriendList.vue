<template>
  <div class="section">
    <div class="container">
      <div class="panel">
        <div class="panel-heading">
          FriendList
        </div>
        <div class="panel-block" v-for="friend in users" :key="friend._id">
          <PersonCard :addFriendVisible="false" :user="friend" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import PersonCard from "../components/PersonCard";

export default {
  name: "FriendList",
  components: {
    PersonCard,
  },
  computed: {
    getFriendsObjects: () => {
      return [];
    },
  },
  methods: {},
  async mounted() {
    this.users = [];
  },
};
</script>

<style></style>
