export const state = () => ({
    curr_step : 0,
    opened : false
})
export const mutations = {
    next_step (state) {
        state.curr_step++
    },
    few_steps: (state, i) => {
        state.curr_step += 10
    },
    open_checkbox(state){
        if(state.opened == false){
            state.opened = true}
        else {state.opened = false}                                        
    }
}
export const actions = {

}