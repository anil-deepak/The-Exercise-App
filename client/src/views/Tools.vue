<template>
  <div class="container">
    <div class="columns">
      <div class="column ">
        <date />
      </div>
      <div class="column">
        <weather />
      </div>
    </div>
  </div>
</template>

<script>
import Date from "../components/Date.vue";
import Weather from "../components/Quote.vue";
export default {
  components: {
    Date,
    Weather,
  },
  Date,
};
</script>
