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
          <img :src="question.image" :alt="question.alt">
		    </div>
		    <div class="question">
          <p>{{question.question}}
          </p>
		    </div>
	    </div>	
	    <div class="answer_field">
		    <div class="answer_btns">
          <button v-for="answer in question.answers" :key="answer" class="answer_btn" type="button" @click="checkAnswer">{{answer}}</button>
		    </div>
	    </div>
      <button class="continue_btn" type="button">Next!</button>
    </div>
    <Modal v-if="questionStatus === 'fail'" text="Test" :image="require('~/assets/yoda-much-to-learn-you-still-have.gif')" altText="sweet baby yoda" />
    <Modal v-if="questionStatus === 'pass'" text="GOED!" />
    <SaberConfetti v-if="questionStatus === 'pass' && isHysterisch" />
  </section>
</template>

<script>
export default {

  data: () => ({
    questionAnswered: false,
    questionStatus: 'idle'
  }),

  computed: {
    isHysterisch () {
      const isHysterisch = this.$store.state.histerie.isHisterisch;
      return isHysterisch;
    },
    quiz () {
      const quiz = JSON.parse(JSON.stringify(this.$store.state.quiz.quiz));
      return quiz
    },
    current () {
      const current = JSON.parse(JSON.stringify(this.$store.state.quiz.currentQuestion));
      return current;
    },
    question () {
      const quiz = JSON.parse(JSON.stringify(this.$store.state.quiz.quiz));
      console.log(this.current)
      const question = quiz.questions && quiz.questions.length > this.current+1 ? quiz.questions[this.current] : [];
      return question;
    }
  },
  mounted () {

  },

  methods: {
    checkAnswer(e) {
      const givenAnswer = e.target.innerText;
      if (givenAnswer === this.question.correct) {
        this.questionStatus = 'pass'
      } else {
        this.questionStatus = 'fail'
      };
      setTimeout(() => {
        this.nextPage()
      }, 4000)
    },
    nextPage() {
      this.questionStatus = 'idle';
      if (this.quiz.questions.length === this.current) {
        this.$router.push('/store')
      }
      this.$store.commit('quiz/next')
    }
  }
}

</script>

<style lang="scss">

</style>