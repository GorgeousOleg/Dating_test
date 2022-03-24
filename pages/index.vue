<template>
  <div>
    <h1> Шаг: {{step}} 
    <button @click="next">Click</button>
    </h1>
    <div>
      <h1>Data:         
        {{$store.state.profiles.profiles}}
      </h1>
    </div>
  </div>
</template>

<script>
import vuex from 'vuex'
import {mapMutations} from 'vuex'
import {axios} from '@nuxtjs/axios'
export default {
  name: 'IndexPage',
  data(){
    return{
    }
  },
  computed: {
    step() {  
      return this.$store.state.step_counter.curr_step
    }    
  },
  methods:{
    next(){
      this.$store.commit('step_counter/next_step')
    },
  }, 
  mounted(){
  this.$store.commit('step_counter/few_steps')
  this.$store.dispatch('profiles/GET')      
  }, 
}
</script>
