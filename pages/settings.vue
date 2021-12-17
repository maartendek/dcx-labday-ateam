<template>
  <section id="settings">
    <div class="settings_page">
        <div class="settings_text">
          <h1>Instellingen</h1>
          <p> Hier kun je je instellingen veranderen volgens je persoonlijke voorkeur
          </p>
        </div>
      

      <input type="checkbox" id="checkbox" v-model="isHisterisch" @click="toggleHisterie">
      <label for="checkbox">Ik wil <span v-if="isHisterisch">veel</span><span v-else>geen</span> kleuren en animaties</label>
    </div>
  </section>
</template>

<script>
export default {

  data: () => ({

  }),

  computed: {

    isHisterisch () {
      return this.$store.state.histerie.isHisterisch
    }

  },
  mounted () {

  },

  methods: {

    toggleHisterie (e) {
      console.log("toggle of component")
      this.$store.commit('histerie/toggle', e.target.value)
       // e.target.value = ''
       // zou automatisch moeten togglen
    }

  }
}

</script>

<style lang="scss">

</style>