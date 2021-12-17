export const state = () => ({
  quiz: {
      title: 'no quiz'
  },
  currentQuestion: 0,
})

export const mutations = {
  set(state, quiz) {
    state.quiz = quiz
  },
  next(state) {
      state.currentQuestion++
  }
}
