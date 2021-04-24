<template>
  <div class="panel">
    <div class="panel-heading">
      <div class="level">
        <div class="level-left">
          <span>Feed</span>
        </div>
      </div>
    </div>
    <div class="panel-block">
      <div class="clock w-100">
        <div v-for="(post, index) in Posts" :key="index">
          <br />
          <Post :info="post" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Post from "../components/Post";
import { mapGetters, mapActions } from "vuex";

export default {
  name: "Feed",
  components: {
    Post,
  },

  data() {
    return {
      selectedFilter: "Public posts",
    };
  },
  computed: {
    ...mapGetters({ Posts: "Posts", User: "User" }),
  },
  created: function() {
    this.GetPosts();
  },
  methods: {
    ...mapActions(["GetPosts"]),
    //triggered once we reach the end of the pahe, loads more posts, thats so I dont need to have pagination :)
  },
};
</script>

<style>
.w-100 {
  width: 100%;
}
</style>
