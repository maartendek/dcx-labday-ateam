<template>
  <div class="overlay-modal">
      <h1>{{text}}</h1>
      <img v-if="image" :src="image" :alt="altText">
  </div>
</template>

<script>
export default {

  props: ["text", "image", "altText", "callback"],

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