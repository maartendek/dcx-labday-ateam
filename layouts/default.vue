<template>
  <div id="app">
      <NavBar />
      <Nuxt />
  </div>
</template>

<script>
export default {

  head () {
    return {
      title: 'Team Uitbehandeld',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'informatie voor uitbehandelde mensen en hun families'
        }
      ]
    }
  },

  data: () => ({

  }),

  computed: {

  },
  mounted () {

  },

  methods: {

  }
}

</script>

<style lang="scss">

</style>
