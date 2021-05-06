<template>
  <div class="section">
    <div class="container">
      <div class="panel">
        <div class="panel-heading">
          <div class="field has-addons is-fullwidth">
            <b-field label="Find People">
              <b-autocomplete
                rounded
                v-model="name"
                :data="Suggestions"
                placeholder="e.g. john doe"
                icon="magnify"
                clearable
                @keyup.native="fetchSuggestions"
                @select="(option) => (selected = option)"
              >
                <template #empty>No results found</template>
              </b-autocomplete>
            </b-field>
          </div>
        </div>
        <div class="panel-block" v-for="user in filteredUsers" :key="user.id">
          <PersonCard :user="user" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import PersonCard from "../components/PersonCard";
import { mapActions, mapGetters } from "vuex";
export default {
  name: "FindPeople",
  components: {
    PersonCard,
  },
  data() {
    return {
      name: "",
      selected: null,
    };
  },
  created: function () {
    this.GetPeople();
  },

  computed: {
    ...mapGetters({
      Users: "People",
      MainUser: "User",
      Suggestions: "Suggestions",
    }),
    filteredUsers() {
      return this.Users.filter((user) => user.handle != this.MainUser.handle);
    },
    filteredDataArray() {
      return this.data.filter((option) => {
        return (
          option.toString().toLowerCase().indexOf(this.name.toLowerCase()) >= 0
        );
      });
    },
  },
  methods: {
    ...mapActions(["GetPeople", "GetSuggestions"]),
    async fetchSuggestions(event) {
      if (['ArrowRight', 'ArrowLeft', 'ArrowUp', 'ArrowDown', 'Enter'].includes(event.key)) { 
      return null; 
    }
    await this.GetSuggestions(this.name);
    }
  
}
</script>

<style></style>
