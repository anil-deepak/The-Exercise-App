<template>
  <div class="section">
    <div class="container">
      <div class="panel">
        <div class="panel-heading">
          <div class="field has-addons is-fullwidth">
            <div class="control has-icons-left is-expanded">
              <input class="input" type="text" placeholder="Search for people" v-model.trim="search" />
              <span class="icon is-small is-left">
                <i class="fas fa-search"></i>
              </span>
            </div>
            <div class="control">
              <a class="button is-info"
              >Search</a>
            </div>
          </div>
        </div>
        <div class="panel-block"  v-for="user in getUsers" :key="user._id">
            <PersonCard  :user="user" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import PersonCard from '../components/PersonCard'
import Users from '@/models/Users.js'
export default {
  name: "FindPeople",
  components:{
      PersonCard
  },
  data(){
    return {
      search: '',
      users:[]
    }
  },
  computed:{
    getUsers:()=>{
      var users = Users
      return users
    }
  },
  methods:{
    
  },
  mounted(){
    
  }
};
</script>

<style>
</style> 