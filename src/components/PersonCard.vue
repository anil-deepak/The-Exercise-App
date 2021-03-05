<template>
  <div class="card w-100">
    <div class="card-content">
      <div class="media">
        <div class="media-left">
          <figure class="image is-48x48">
            <img src="@/assets/1.png" alt="not loaded" />
          </figure>
        </div>
        <div class="media-content">
          <p class="title is-4">
            <router-link :to="`/User/${user.username}`">{{ user.firstname }} {{user.lastname}}</router-link>
          </p>
          <p class="subtitle is-6">
            <router-link :to="`/User/${user.username}`">@{{user.username}}</router-link>
          </p>
        </div>
        <div class="media-right">
         <button
            class="button is-primary"
            v-if="addFriendVisible"
            :disabled="!ableToSendFriendRequest"
            
          >
            <span class="icon">
              <i class="fas fa-plus"></i>
            </span>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "PersonCard",
   props:{
    user:{
      type: Object,
      required: true,
      default: null
       },
    addFriendVisible:{
      type: Boolean,
      default: true
    }
  },
  computed: {
   
    ableToSendFriendRequest: function() {
      return true;
    }
   
  },
  methods: {
    
  }
};
</script>

<style>
</style>