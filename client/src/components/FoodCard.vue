<template>
  <div class="card">
    <div class="car-header">
      <div class="card-header-title">Food Log</div>
    </div>
    <div class="card-content">
      <div v-if="Food">
        you last ate {{ Food[Food.length - 1].name }},
        {{ Food[Food.length - 1].quantity }} grams which is
        {{ Food[Food.length - 1].type }}. You consumed
        {{ Food[Food.length - 1].calories }} calories in that serving.
      </div>
      <div v-else>No food found</div>
    </div>
  </div>
</template>
<script>
import { mapActions, mapGetters } from "vuex";
export default {
  name: "FoodCard",
  components: {},
  data() {
    return {};
  },
  created: function () {
    this.GetFood();
  },
  computed: {
    ...mapGetters({ Food: "Food" }),
  },
  methods: {
    ...mapActions(["GetFood"]),
  },
};
</script>
