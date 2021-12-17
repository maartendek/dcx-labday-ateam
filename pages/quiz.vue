<template>
  <section id="quiz">
    <div class="quiz_page">
      <h1>Quiz <span v-if="quiz">{{quiz.title}}</span></h1>
	    <div class="question_field">
		    <div class="question_intro">
		    </div>
		    <div class="question_img">
		    </div>
		    <div class="question">
		    </div>
	    </div>	
	    <div class="answer_field">
		    <div class="answer_btns">
		    </div>
	    </div>
    </div>
  </section>
</template>

<script>
export default {

  asyncData: () => ({

  }),

  computed: {
    quiz () {
      const quiz = this.$store.state.quiz;
      console.log('quiz = ', quiz)
      return quiz
    }
  },
  mounted () {

  },

  methods: {

  }
}

</script>

<style lang="scss">

</style>