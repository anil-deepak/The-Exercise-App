<template>
  <div class="section">
    <div class="container">
      <div class="panel is-success">
        <div class="panel-heading">
          Time
        </div>
        <div class="panel-block">
          <div class="content is-centered">
            <p class="button">{{ hours }}</p>
            <p class="button">{{ minutes }}</p>
            <p class="button">{{ seconds }}</p>
            <p class="button">{{ hourtime }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { SECOND, HOUR, getHourTime, getZeroPad } from "../helpers/time";

export default {
  data() {
    return {
      hours: 0,
      minutes: 0,
      seconds: 0,
      hourtime: "",
    };
  },
  mounted() {
    this.$options.timer = window.setTimeout(this.updateDateTime, SECOND);
  },
  beforeUnmount() {
    window.clearTimeout(this.$options.timer);
  },
  methods: {
    updateDateTime() {
      const now = new Date();
      this.hours = now.getHours();
      this.minutes = getZeroPad(now.getMinutes());
      this.seconds = getZeroPad(now.getSeconds());
      this.hourtime = getHourTime(this.hours);
      this.hours = this.hours % HOUR || HOUR;
      this.$options.timer = window.setTimeout(this.updateDateTime, SECOND);
    },
  },
};
</script>
