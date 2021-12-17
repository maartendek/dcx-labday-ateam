<template>
  <section id="settings">
    <div class="settings_page">
        <div class="settings_text">
          <h1>Settings</h1>
          <p> Hier een uitleg wat het is en kan
          </p>
        </div>
        <div class="settings_selection">
          <div class="settings_field">
            <div class="settings_btns">
              <button class="settings_btn" type="button">Choice 1</button>
              <button class="settings_btn" type="button">Choice 2</button>
              <button class="settings_btn" type="button">Choice 3</button>
              <button class="settings_btn" type="button">Choice 4</button>
            </div>
          </div>
        </div>
      <button class="continue_btn" type="button">Next!</button>
      
      <button @click="toggleHisterie">toggle histerie {{isHisterisch}}</button>
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