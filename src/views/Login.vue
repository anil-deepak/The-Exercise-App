<template>
  <div class="section">
    <div class="container ">
      
      <div class="panel">
        <p class="panel-heading">Sign In</p>
        <div class="panel-block">
          <div class="field">
            <label class="label">Username</label>
            <div class="control has-icons-left">
               <input
                type="text"
                :class="`input ${v$.credentials.username.$invalid ? 'is-danger' : ''}`"
                placeholder="Your username"
                v-model.trim="credentials.username"
              />
              <span class="icon is-small is-left">
                <i class="fas fa-user"></i>
              </span>
              <p v-if="!v$.credentials.username.required" class="help is-danger">Field is required</p>
            </div>
          </div>
        </div>
        <div class="panel-block">
          <div class="field">
            <label class="label">Password</label>
            <div class="control has-icons-left">
             <input
                type="password"
                :class="`input ${v$.credentials.password.$invalid ? 'is-danger' : ''}`"
                placeholder="Your password"
                v-model.trim="credentials.password"
              />
              <span class="icon is-small is-left">
                <i class="fas fa-lock"></i>
              </span>
              <p v-if="!v$.credentials.password.required" class="help is-danger">Field is required</p>
            </div>
          </div>
        </div>
        <div class="panel-block">
          <div class="field">
            <div class="control">
               <a
                class="button is-primary w-100"
                @click="loginBtnClicked()"
              >Login</a>
              <p v-if="wrongCredentials" class="help is-danger">Username or password are wrong</p>
            </div>
          </div>
        </div>
      </div>
      
    </div>
  </div>
</template>
<script>
import useVuelidate from '@vuelidate/core'
import { required } from '@vuelidate/validators'
import Users from '@/models/Users.js'
import router from '@/router/index.js'
export default {
   name: "SignIn",
  data() {
    return{
      credentials:{
        username: null,
        password: null
      },
      wrongCredentials: false
    };
  },
  setup () {
    return { v$: useVuelidate() }
  },
  validations() {
    return {
      credentials:{
        username:{
          required
        },
        password:{
          required
        }
      }
    }
  },
  methods: {
    
    async loginBtnClicked() {
      if (!this.v$.credentials.$invalid) {
        var users = Users;
        const user = users.find(x => x.username == this.credentials.username)
        if(user != undefined && user != '') {
          if(user.password == this.credentials.password) {
            sessionStorage.setItem('user', JSON.stringify(user))
            sessionStorage.setItem('isLoggedIn', true)
            this.wrongCredentials = true;
            router.push('/')
          }else{
            this.wrongCredentials = false;
            this.resetForm();
          }
        }else{
          this.wrongCredentials = false;
          this.resetForm();
        }

        
        
      }
      
    },
    resetForm(){
      this.credentials.username = null;
      this.credentials.password = null;
    }
  }
};
</script>
<style>

.w-100,
.field {
  width: 100%;
}
</style>