<template>
  <article class="media">
    <div class="media-left">
      <figure class="image is-64x64">
        <img v-bind:src="info.src || fallbackImg" v-bind:alt="info.alt" />
      </figure>
    </div>
    <div class="media-content">
      <div class="content">
        {{ info.caption }}
        <br />
        <span class="has-text-link">
          {{ info.handle }}
        </span>
      </div>
    </div>
  </article>
</template>

<script>
export default {
  name: "Post",
  props: ["info"],
  methods: {},
  computed: {},
  data() {
    return {
      fallbackImg: "../assets/1.png",
    };
  },
};
</script>

<style>
.w-100 {
  width: 100%;
}
.pr-4px {
  padding-right: 4px;
}
</style>
