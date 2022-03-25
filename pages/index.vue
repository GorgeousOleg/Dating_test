<template>
  <div>
        <!-- {{$store.state.profiles.profiles}} -->
        <!-- <Form/> -->
        <client-only><Background/></client-only>       
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
    // step() {  
    //   return this.$store.state.step_counter.curr_step
    // }    
  },
  methods:{
    // next(){
    //   this.$store.commit('step_counter/next_step')
    // },
  }, 
  mounted(){
  // this.$store.dispatch('profiles/GET')      
  }, 
}
</script>
