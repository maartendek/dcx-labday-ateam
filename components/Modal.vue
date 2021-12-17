<template>
  <div class="overlay-modal">
    <div class="container container-fluid the-modal">
      <h1>{{text}}</h1>
      <img :src="image" :alt="altText">
      <button>Continue</button>
      </div>
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
    div.overlay-modal{
        position:fixed;
        top:0;
        background:rgba(0,0,0,0.7);
        width:100vw;
        height:100vh;
    }

    div.the-modal{
      background: linear-gradient(180.05deg, #491C83 0.04%, #6226A2 94.06%);
      padding-top: 30px;
      padding-bottom:30px;
    }
</style>