<template>
  <div class="columns">
    <div class="column">
      <food-card />
    </div>
    <div class="column">
      <workout-card />
    </div>
  </div>
</template>
<script>
import FoodCard from "./FoodCard.vue";
import WorkoutCard from "./WorkoutCard.vue";
export default {
  name: "Input",
  components: { FoodCard, WorkoutCard },
};
</script>
