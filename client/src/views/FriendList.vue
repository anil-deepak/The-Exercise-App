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
import { GetAllUsers } from "../models/Users";
export default {
  name: "FriendList",
  components: {
    PersonCard,
  },
  computed: {
    getFriendsObjects: () => {
      return Users;
    },
  },
  methods: {},
  async mounted() {
    this.users = await GetAllUsers();
  },
};
</script>

<style></style>
