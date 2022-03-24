import axios from '@nuxtjs/axios'

axios

export const state = () => ({
    // profile: 
        // {        
        // name: String, 
        // about: String, 
        // avatar: String, 
        // country: String, 
        // city: String
        // },
    profiles : [],
})
export const mutations = {
    SET_PROFILE: (state, id) => {
        state.profiles = id
    }
}
export const actions = {
    async GET ({ commit }) {
        const id = await this.$axios.$get('https://evilinsult.com/generate_insult.php?lang=en&type=json')
        //https://evilinsult.com/generate_insult.php?lang=en&type=json
        commit('SET_PROFILE', id)
      }
}