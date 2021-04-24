<template>
  <div class="card">
    <div class="car-header">
      <div class="card-header-title">
        Workouts Log
      </div>
    </div>
    <div class="card-content">
      <div v-if="Workouts">
        you last did {{ Workouts[Workouts.length - 1].name }}, which is
        {{ Workouts[Workouts.length - 1].type }} type workout and did it for
        {{ Workouts[Workouts.length - 1].duration }} . You expended
        {{ Workouts[Workouts.length - 1].calories }} calories in that workout.
      </div>
      <div v-else>
        No Workouts found
      </div>
    </div>
  </div>
</template>
<script>
import { mapActions, mapGetters } from "vuex";
export default {
  name: "WorkoutCard",
  components: {},
  data() {
    return {};
  },
  created: function() {
    this.GetWorkouts();
  },
  computed: {
    ...mapGetters({ Workouts: "Workouts" }),
  },
  methods: {
    ...mapActions(["GetWorkouts"]),
  },
};
</script>
