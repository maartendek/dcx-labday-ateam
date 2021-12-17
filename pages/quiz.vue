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
          <img :src="question.image" alt="sweet baby yoda">
		    </div>
		    <div class="question">
          <p>{{question.question}}
          </p>
		    </div>
	    </div>	
	    <div class="answer_field">
		    <div class="answer_btns">
          <button v-for="answer in question.answers" :key="answer" class="answer_btn" type="button"  >{{answer}}</button>
		    </div>
	    </div>
      <button class="continue_btn" type="button">Next!</button>
    </div>
    <Modal v-if="questionAnswered" text="Test" :image="require('~/assets/yoda-much-to-learn-you-still-have.gif')" altText="sweet baby yoda"/>
  </section>
</template>

<script>
export default {

  data: () => ({
    questionAnswered: false
  }),

  computed: {
    quiz () {
      const quiz = JSON.parse(JSON.stringify(this.$store.state.quiz.quiz));
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