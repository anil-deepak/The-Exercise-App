<template>
  <div class="home">
    <section class="hero is-dark">
      <div class="hero-body">
        <div class="container">
          <h1 class="title">
            Welcome to Fitness Application
          </h1>
          <h2 class="subtitle">
            Make sure you check out our fitness application
          </h2>
          <div class="button-block">
            <button class="button is-xl is-dark" @click="goToSignUp">
              Sign Up to Fitness Application
            </button>
          </div>
        </div>
      </div>
    </section>
    <div class="section">
      <div class="container">
        <div class="columns">
          <div class="column is-two-thirds"><new-post /><Feed /></div>
          <div class="column is-one-third"><BothInput /></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Feed from "../components/Feed";
import BothInput from "../components/BothInput";
import NewPost from "../components/NewPost.vue";

export default {
  name: "Home",
  components: {
    Feed,
    BothInput,
    NewPost,
  },
  methods: {
    goToSignUp() {
      this.$router.push("/signup");
    },
  },
};
</script>

<style lang="scss" scoped>
.hero {
  text-align: center;
  background-image: url(https://d3ginfw2u4xn7p.cloudfront.net/a99b55fd2f50482f8cb801cd5e7ed2cc/images/3849680a3706d81c4605ac7dedade2db.jpg);
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  height: 400px;
}
.hero-body .title {
  text-shadow: 4px 4px 4px rgba(0, 0, 0, 0.6);
  padding: 40px 0 20px 0;
  font-size: 60px;
}
.subtitle {
  text-shadow: 4px 4px 4px rgba(0, 0, 0, 0.7);
  font-size: 30px;
}
.button-block {
  text-align: center;
  margin-left: auto;
  margin-right: auto;
  width: 100%;
  position: absolute;
  bottom: -150px;
  .button {
    margin-right: 50px;
    padding-left: 50px;
    padding-right: 50px;
  }
  .welcome {
    width: 400px;
    padding: 10px;
    margin-left: auto;
    margin-right: auto;
  }
}
.is-xl {
  font-size: 1.7rem;
}
</style>
