<template>
  <section id="settings">
    <div class="settings_page">
        <div class="settings_text">
          <h1>Settings</h1>
          <p> What does it do
          </p>
        </div>
        <div class="settings_selection">
          <div class="settings_mode">
            <p>Choose your color
            </p>
            <div class="mode_btns">
              <input class="mode_btn" type="radio">Choice 1</input>
              <input class="mode_btn" type="radio">Choice 2</input>
              <input class="mode_btn" type="radio">Choice 3</input>
              <input class="mode_btn" type="radio">Choice 4</input>
            </div>
          </div>
          <div class="settings_lang">
            <p>Choose your language
            </p>
              <div class="lang_btns">
                <input class="lang_btn" type="radio">Choice 1</input>
                <input class="lang_btn" type="radio">Choice 2</input>
                <input class="lang_btn" type="radio">Choice 3</input>
                <input class="lang_btn" type="radio">Choice 4</input>
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