export const state = () => ({
    isHisterisch: false
  })
  
export const mutations = {
    toggle(state, isHisterisch) {
        console.log("toggle of store")
        state.isHisterisch = !state.isHisterisch;
    }
}
  