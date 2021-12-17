<template>
  <section id="quiz">
    <div class="quiz_page">
      <h1>Quiz</h1>
	    <div class="question_field">
		    <div class="question_intro">
          <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum nec luctus nisl. Etiam gravida rhoncus urna nec congue. Aliquam blandit feugiat diam, eu lobortis orci feugiat eu. Sed enim nisl.
          </p>
		    </div>
		    <div class="question_img">
          <img src="../img/i_heart_grogu.jpg" alt="sweet baby yoda">
		    </div>
		    <div class="question">
          <p>There is no try
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