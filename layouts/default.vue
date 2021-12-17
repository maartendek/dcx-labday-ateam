<template>
  <div id="app"  :class="{ histerisch: isHisterisch }">
      <NavBar />
      <Nuxt />
  </div>
</template>

<script>
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
