<template>
  <div class="section">
    <div class="container">
      <div class="box">
        <div class="profile-container">
          <div class="image-container">
            <figure>
              <img class="profile-image" src="@/assets/1.png" alt="Profile picture" />
              
            </figure>
          </div>
          <div class="profile-info-container">
            <div class="profile-info-element">Username:</div>
            <div class="profile-info-element">{{getCurrentUser.username}}</div>
            <div class="profile-info-element">Full name:</div>
            <div class="profile-info-element">{{getCurrentUserFullName}}</div>
            <div class="profile-info-element">Email:</div>
            <div class="profile-info-element">{{getCurrentUser.email}}</div>
            <div class="profile-info-element">Change Password:</div>
            <div class="profile-info-element">
              <div class="field">
                <div class="control">
                  <input
                    class="input"
                    type="password"
                    placeholder="Change password"
                    v-model="changePasswordData.password"
                  />
                  <p v-if="!v$.changePasswordData.password.required" class="help is-danger">Required</p>
                  <p
                    v-if="!v$.changePasswordData.password.minLength"
                    class="help is-danger"
                  >Needs to be 8 or more charachters</p>
                  <p
                    v-if="!v$.changePasswordData.password.maxLength"
                    class="help is-danger"
                  >Cant be more than 64 chars</p>
                  <p
                    v-if="!v$.changePasswordData.password.alphaNum"
                    class="help is-danger"
                  >Needs to be alphanumeric</p>
                </div>
              </div>
            </div>
            <div class="profile-info-element">Repeat Password:</div>
            <div class="profile-info-element">
              <div class="field">
                <div class="control">
                  <input
                    class="input"
                    type="password"
                    placeholder="Repeat password"
                    v-model="changePasswordData.repeatPassword"
                  />
                  <p
                    v-if="!v$.changePasswordData.repeatPassword.required"
                    class="help is-danger"
                  >Required</p>
                  <p
                    v-if="!v$.changePasswordData.repeatPassword.sameAs"
                    class="help is-danger"
                  >Not same as password</p>
                </div>
              </div>
              <div class="field is-grouped is-grouped-right">
                <button
                  class="button is-danger"
                  
                  @click="changePasswordBtnClicked()"
                >Change the password</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    
  </div>
</template>

<script>
  import useVuelidate from '@vuelidate/core'
  import {
    required,
    minLength,
    maxLength,
    alphaNum,
    sameAs
  } from '@vuelidate/validators'
  export default {
    name: "v$ettings",
    computed: {
      getCurrentUser:function(){
        return JSON.parse(sessionStorage.getItem('user'))
      },
      getCurrentUserFullName(){
        return this.getCurrentUser.firstname + '' + this.getCurrentUser.lastname
      }
    },
    setup () {
      return { v$: useVuelidate() }
    },
    data() {
      return {
        changePasswordData: {
          password: "",
          repeatPassword: ""
        },
        changeProfileImageData: {
          file: null,
          uploadInProgress: false,
          uploadPercent: 0
        },
        
      }
    },
    validations: {
      changePasswordData: {
        password: {
          required,
          minLength: minLength(8),
          alphaNum,
          maxLength: maxLength(64)
        },
        repeatPassword: {
          required,
          sameAs: sameAs("password", this)
        }
      },
      changeProfileImageData: {
        file: {
          required
        }
      }
    },
    methods: {
      changePasswordBtnClicked() {
        
      },
      pictureSelected(e) {
        this.changeProfileImageData.file = e.target.files[0];
      },
      setUploadProgress(uploadEvent){
        this.changeProfileImageData.uploadPercent = Math.round(
          (uploadEvent.loaded / uploadEvent.total) * 100
        )
      }
    }
  };
</script>

<style>
.profile-container {
  display: grid;
  grid-template-columns: 4fr 8fr;
}
.image-container {
  padding: 12px;
}
.profile-info-container {
  display: grid;
  grid-template-columns: 4fr 8fr;
  padding: 12px;
}
.profile-image {
  width: 384px;
  height: 384px;
}
@media (max-width: 1024px) {
    .profile-container {
      grid-template-columns: 1fr;
      
    }
    .profile-info-container{
      grid-template-columns: 1fr;
    }
    .profile-info-element:nth-child(odd){
      margin-top: 20px;
    }
}
</style> 