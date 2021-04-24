<template>
  <div class="panel">
    <div class="panel-heading">New Post</div>
    <form class="container" v-on:submit.prevent="postBtnClicked()">
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
import { mapActions } from "vuex";
export default {
  name: "NewPost",
  data() {
    return {
      caption: "",
      error: "",
    };
  },
  mounted() {},
  methods: {
    ...mapActions(["CreatePost"]),
    async postBtnClicked() {
      try {
        await this.CreatePost({ caption: this.caption });
        this.caption = "";
      } catch (error) {
        this.error = "Sorry you can't make a post now!";
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
