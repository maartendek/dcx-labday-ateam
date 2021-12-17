<template>
  <div class="overlay-modal">
      <h1>{{text}}</h1>
      <img :src="image" :alt="altText">
      <button>Continue</button>
  </div>
</template>

<script>
export default {

  props: ["text", "image", "altText"],

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

<style>
    div.modal{
        color:black;
    }
</style>