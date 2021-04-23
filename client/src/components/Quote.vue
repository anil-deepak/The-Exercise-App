<template>
  <div class="section">
    <div class="container">
      <div class="panel is-success">
        <div class="panel-heading">
          Quote
        </div>
        <div class="panel-block">
          <p class="sub-title">{{ quote }}</p>
          <p class="is-danger">{{ error }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      quote: "",
      error: "",
    };
  },

  mounted() {
    axios
      .get("https://quotes.rest/qod")
      .then((response) => {
        this.quote = response.data.contents.quotes[0].quote;
      })
      .catch((error) => (this.error = error.toString()));
  },
};
</script>
