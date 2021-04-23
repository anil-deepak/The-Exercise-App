<template>
  <div class="level">
    <div class="level-left">
      <router-link to="/" >Christopher Smith</router-link>
    </div>
    <div class="level-right">
        <div class="level-item">
        <a class="button is-white has-text-success" >
          <span class="icon">
            <i class="fas fa-check"></i>
          </span>
        </a>

        <button class="button is-white has-text-danger" >
          <span class="icon">
            <i class="fas fa-times"></i>
          </span>
        </button>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "FriendRequest",
  props:{
    
  },
  data(){
    return{
      ableToRespond: false
    }
  },
  methods:{
    //on btn click accepts or rejects friend request
     
  }
};
</script>

<style>
</style>