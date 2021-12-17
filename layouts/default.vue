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
  .histerisch {
    background: red
  }
</style>
