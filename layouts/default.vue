<template>
  <div id="app"  :class="{ histerisch: isHisterisch }">
      <!-- <NavBar /> -->
      <Nuxt />
  </div>
</template>

<script>
import importeddata from '~/data/starwars.json';

export default {
  data: () => ({

  }),

  head () {
    return {
      title: 'Labday #5',
      meta: [
        {
          content: 'Application to learn dutch'
        }
      ]
    }
  },


  computed: {

    isHisterisch () {
      return this.$store.state.histerie.isHisterisch
    }
  },
  mounted () {
    setTimeout(() => {
    this.$store.commit('quiz/set', importeddata)
    }, 100)
  },

  methods: {

  }
}

</script>

<style lang="css">

  /* via https://www.gradient-animator.com/ */
  .histerisch {
      background: linear-gradient(270deg, #ff0000, #ffee00, #18ff00, #00ffeb, #0011ff, #f200ff, #ff0000);
      background-size: 1400% 1400%;

      animation: loony-rainbow 5s linear infinite;
  }
  @keyframes loony-rainbow {
      from {background-position:0% 50%}
      to {background-position:100% 50%}
      /* 100%{background-position:0% 50%} */
  }
</style>
