<template>
  <div class="section">
    <div class="container">
      <div class="panel">
        <div class="panel-heading">
          <div class="level">
            <div class="level-left">My inputs:</div>
          </div>
        </div>

        <Input />
      </div>
    </div>
  </div>
</template>

<script>
import Input from "../components/Input";
export default {
  name: "MyInputs",
  components: {
    Input,
  },
  computed: {
    filteredInputs() {
      var inputs = [];

      return inputs;
    },
  },
  data() {
    return {
      filterOptions: [
        {
          name: "Food input",
          value: "FoodInput",
        },
        {
          name: "Exercise input",
          value: "ExerciseInput",
        },
        {
          name: "Bmi input",
          value: "BmiInput",
        },
      ],
      selectedFilter: null,
      state: {
        inputTypes: {
          BmiInput: {
            icon: "fas fa-burn",
            sufix: "bmi",
            name: "Bmi input",
          },
          FoodInput: {
            icon: "fas fa-hamburger",
            sufix: "calories added",
            name: "Food input",
          },
          ExerciseInput: {
            icon: "fas fa-dumbbell",
            sufix: "calories burned",
            name: "Exercise input",
          },
        },
        foodTypes: ["Vegan", "Non vegan"],
        exerciseTypes: [],
      },
    };
  },
  methods: {},
  mounted() {},
};
</script>

<style></style>
