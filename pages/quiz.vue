<template>
  <section id="quiz">
    <div class="quiz_page">
      <h1>Quiz <span v-if="quiz">{{quiz.title}}</span></h1>
	    <div class="question_field">
		    <div class="question_intro">
          <p>{{question.intro}}
          </p>
		    </div>
		    <div class="question_img">
          <img src="../img/i_heart_grogu.jpg" alt="sweet baby yoda">
		    </div>
		    <div class="question">
          <p>{{question.title}}
          </p>
		    </div>
	    </div>	
	    <div class="answer_field">
		    <div class="answer_btns">
          <button class="answer_btn" type="button">Do!</button>
          <button class="answer_btn" type="button">Or Do Not!</button>
          <button class="answer_btn" type="button">Click Me!</button>
          <button class="answer_btn" type="button">No, Click Me!</button>
		    </div>
	    </div>
      <button class="continue_btn" type="button">Next!</button>
    </div>
  </section>
</template>

<script>
export default {

  data: () => ({

  }),

  computed: {
    quiz () {
      const quiz = JSON.parse(JSON.stringify(this.$store.state.quiz.quiz));
      console.log('quiz = ', JSON.parse(JSON.stringify(quiz)))
      return quiz
    },
    question () {
      const quiz = JSON.parse(JSON.stringify(this.$store.state.quiz.quiz));
      const question = quiz.questions ? quiz.questions[0] : [];
      console.log('question ', question)
      return question
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