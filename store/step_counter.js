export const state = () => ({
    curr_step : 0
})
export const mutations = {
    next_step (state) {
        state.curr_step +=5
    },
    few_steps: (state, i) => {
        state.curr_step += 10
    },
}
export const actions = {

}