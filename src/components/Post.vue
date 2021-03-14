<template>
  <article class="media">
    <div class="media-left">
      <figure class="image is-64x64">
        <img src="@/assets/1.png" alt="Image" />
      </figure>
    </div>
    <div class="media-content">
      <div class="content">
        {{ info }}
      </div>
      <nav class="level is-mobile">
        <div class="level-left">
          <a class="level-item" aria-label="like">
            <span class="icon is-small">
              <i class="far fa-heart" aria-hidden="true"></i>
            </span>
          </a>
          <small class="is-small">5</small>
        </div>
        <div class="level-right">
          <small class="is-small">Visibility</small>
        </div>
      </nav>
    </div>
  </article>
</template>

<script>
export default {
  name: "Post",
  props: ["info"],
  methods: {},
  computed: {},
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
