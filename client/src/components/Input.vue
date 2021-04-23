<template>
  <div class="card w-100">
    <div class="card-header">
      <div class="level w-100 p-6px">
        <div class="level-left has-text-weight-semibold	">
          1{{ bmi }}
          <span> of {{ input }} kg/m<sup>2</sup> </span>
        </div>
        <div class="level-right">
          <span> {{ input }}</span>
        </div>
      </div>
    </div>
    <div class="card-content">
      <div class="container">You did it for: {{ input }}</div>
      <div class="container">
        <p>You ate: {{ input }}</p>
        <p>The food was {{ input }}</p>
      </div>
      <div class="container">
        <p>You weighed {{ input }} kg</p>
        <p>And had a height of {{ input }} cm</p>
      </div>
    </div>
    <div class="card-footer p-6px">
      <small>Time added: {{ dateAddedFormated || " " }}</small>
    </div>
  </div>
</template>

<script>
import moment from "moment";
import Session from "../models/Session";
import api from "../models/axios";
export default {
  name: "Input",
  data() {
    return {
      bmi: null,
      exercise: null,
      food: null,
    };
  },
  mounted() {
    api
      .get(
        "/inputs/bmi"
        // {
        // headers: { Authorization: "Bearer " + Session.token },
        // }
      )
      .then((bdata) => {
        console.log("bmi");
        this.bmi =
          bdata.data.length == 0
            ? "Not found"
            : bdata.data[bdata.data.length - 1];
      });

    api
      .get("/inputs/exercise", {
        headers: { Authorization: "Bearer " + Session.token },
      })
      .then(
        (edata) =>
          (this.exercise =
            edata.data.length !== 0 ? edata.data[edata.data.length - 1] : {})
      );

    api
      .get("/inputs/food", {
        headers: { Authorization: "Bearer " + Session.token },
      })
      .then(
        (fdata) =>
          (this.food =
            fdata.data.length !== 0 ? fdata.data[fdata.data.length - 1] : {})
      );
  },
  computed: {
    dateAddedFormated() {
      if (this.input.added_at)
        return moment(this.input.added_at).format(
          "dddd, MMMM Do YYYY, h:mm:ss a"
        );
      else return null;
    },

    input() {
      return "Hello";
    },
  },
};
</script>

<style>
.p-6px {
  padding: 6px;
}
</style>
