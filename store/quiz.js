export const state = () => ({
  quiz: {
      title: 'no quiz'
  },
})

export const mutations = {
  set(state, quiz) {
      console.log('set', quiz)
    state.quiz = quiz
  },

}
