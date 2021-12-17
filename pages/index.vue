<template>
  <section id="home">
    <div class="start_page container container-fluid mt-5">
      <div class="welkom_text text-center">
        <h2>Welcome!</h2>
        <form>
          <div class="form-group mb-3">
            <label for="inputName" class="h2-size">What's your name?</label>
            <input type="name" class="form-control" id="inputName" placholder="Enter your name here">
          </div>

          <div class="what-language"> 
            <label class="h2-size">What language would you like to learn?</label>
            <div class="form-check text-left">          
              <input class="form-check-input" type="radio" name="languageRadios" id="languageRadios1" value="option1" checked>
              <label class="form-check-label" for="languageRadios1">
                Default radio
              </label>
            </div>
            <div class="form-check text-left">
              <input class="form-check-input" type="radio" name="languageRadios" id="languageRadios2" value="option2">
              <label class="form-check-label" for="languageRadios2">
                Second default radio
              </label>
            </div>
          </div>

          <div class="what-theme mt-3"> 
            <label class="h2-size">Which theme do you want?</label>
            <div class="form-check text-left">            
              <input class="form-check-input" type="radio" name="themeRadios" id="themeRadios1" value="option1" checked>
              <label class="form-check-label" for="themeRadios1">
                Default radio
              </label>
            </div>
            <div class="form-check text-left">
              <input class="form-check-input" type="radio" name="themeRadios" id="themeRadios2" value="option2">
              <label class="form-check-label" for="themeRadios2">
                Second default radio
              </label>
            </div>
          </div>
          <button type="submit" class="btn btn-primary mt-5">Continue</button>
        </form>
      </div>
    </div>
  </section>
</template>

<script>
export default {

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
