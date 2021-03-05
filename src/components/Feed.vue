<template>
  <div class="panel">
      <div class="panel-heading">
      <div class="level">
        <div class="level-left">
          <span>Feed</span>
        </div>
        <div class="level-right">
          <div class="select is-small">
            <select v-model="selectedFilter">
              <option>A</option>
              <option>Public posts</option>
              <option>B</option>
              <option>C</option>
              <option>D</option>
            </select>
          </div>
        </div>
      </div>
    </div>
    <Post />
  </div>
</template>

<script>
import Post from "../components/Post";
export default {
  name: "Feed",
   components: {
    Post,
  },
  computed: {
    
  },
  data() {
    return {
      selectedFilter: "Public posts"
    };
  },
   methods: {
    
    //triggered once we reach the end of the pahe, loads more posts, thats so I dont need to have pagination :)
    
  }
};
</script>

<style>
.w-100 {
  width: 100%;
}
</style>