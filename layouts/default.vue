<template>
  <div id="app">
      <NavBar />
      <Nuxt />
  </div>
</template>

<script>
import importeddata from '~/data/starwars.json';

export default {
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

  data: () => ({

  }),

  computed: {

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

<style lang="scss">

</style>
