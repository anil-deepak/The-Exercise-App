<template>
  <div class="panel">
    <div class="panel-heading">New Post</div>
    <form class="container" v-on:submit="postBtnClicked()">
      <div class="panel-block">
        <input
          type="text"
          class="input"
          placeholder="New Post"
          v-model.trim="info"
          required
        />
      </div>

      <div class="panel-block">
        <p class="help is-danger">
          {{ error }}
        </p>
        <div class="field">
          <div class="control">
            <button class="button is-link" type="submit">Post</button>
          </div>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      info: "",
      username: "",
      error: "",
    };
  },
  mounted() {
    this.username = sessionStorage.user
      ? JSON.parse(sessionStorage.getItem("user")).username
      : "john doe";
  },
  methods: {
    postBtnClicked() {
      console.log("entered post");
      if (this.info.length === 0) {
        this.error = "Please enter a post message";
      } else {
        let posts;
        // get the posts data
        if (sessionStorage.posts) {
          posts = JSON.parse(sessionStorage.getItem("posts"));
        } else {
          posts = [];
        }
        //    add the post
        posts.push({
          info: this.info,
          username: this.username,
        });
        sessionStorage.setItem("posts", JSON.stringify(posts));
        this.info = "";
      }
    },
  },
};
</script>
<style>
.w-100,
.field {
  width: 100%;
}
</style>
