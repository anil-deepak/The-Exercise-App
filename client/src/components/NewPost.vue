<template>
  <div class="panel">
    <div class="panel-heading">New Post</div>
    <form class="container" v-on:submit="postBtnClicked()">
      <div class="panel-block">
        <input
          type="text"
          class="input"
          placeholder="New Post"
          v-model.trim="caption"
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
import Session from "../models/Session";
export default {
  data() {
    return {
      caption: "",
      handle: "",
      error: "",
    };
  },
  mounted() {
    this.username = Session.user.handle;
  },
  methods: {
    postBtnClicked() {
      console.log("entered post");
      if (this.info.length === 0) {
        this.error = "Please enter a post message";
      } else {
        // add post

        this.caption = "";
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
