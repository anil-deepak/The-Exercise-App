<template>
  <div class="section">
    <div class="container">
      <div class="panel">
        <div class="panel-heading">
          <div class="level">
            <div class="level-left">My inputs:</div>
            <div class="level-right">
              <div class="field">
                <div class="control">
                  <div class="select">
                    <select  v-model="selectedFilter">
                      <option v-for="type in filterOptions" :key="type.value" :value="type.value">{{type.name}}</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="panel-block" v-for="input in filteredInputs" :key="input._id">
            <Input :input="input"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Input from '../components/Input'
export default {
  name: "MyInputs",
  components:{
      Input
  },
  computed: {
    
    //filters visible inputs
    filteredInputs(){
        var inputs = []
        
        return inputs
    }
  },
  data() {
    return {
      filterOptions: [
        {
          name: "Food input",
          value: "FoodInput"
        },
        {
          name: "Exercise input",
          value: "ExerciseInput"
        },
        {
          name: "Bmi input",
          value: "BmiInput"
        },
        {
          name: "All",
          value: null
        }
      ],
      selectedFilter: null,
      state : {
          inputTypes: {
              'BmiInput': {
                  icon: 'fas fa-burn',
                  sufix: 'bmi',
                  name: 'Bmi input'
              },
              'FoodInput': {
                  icon: 'fas fa-hamburger',
                  sufix: 'calories added',
                  name: 'Food input'
              },
              'ExerciseInput': {
                  icon: 'fas fa-dumbbell',
                  sufix: 'calories burned',
                  name: 'Exercise input'
              }
          },
          foodTypes: [
              'Vegan',
              'Non vegan'
          ],
          exerciseTypes: [
            
          ],
      }
    };
  },
  methods:{
      
  },
  mounted(){
      
  }
};
</script>

<style>
</style>