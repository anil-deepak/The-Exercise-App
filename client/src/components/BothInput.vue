<template>
  <div class="panel is-success">
    <div class="panel-heading">Exercise/Food input</div>
    <div class="panel-tabs">
      <a class="panelShown ? `is-active` : ``" @click="panelShown = true">Exercise</a>
      <a class="panelShown ? `` : `is-active`" @click="panelShown = !panelShown">Food</a>
    </div>
    <div class="panel-block">
      <InputComponent v-if="panelShown"/>
      <OtherComponent v-if="!panelShown"/>
    </div>
    
  </div>
</template>

<script>
import InputComponent from './InputComponent'
import OtherComponent from './OtherComponent'
export default {
  name: "BothInput",
  components:{
    InputComponent,
    OtherComponent,
  },
  data(){
    return{
      panelShown: true,
    }
  }
};
</script>

<style>
  .panel-height-50{
    height: 50vh;
  }
</style>