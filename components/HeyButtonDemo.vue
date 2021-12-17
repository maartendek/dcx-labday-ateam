<template>
  <div>
    <div class="overlay"></div>
  </div>
</template>

<script>
export default {
  data: () => ({}),

  computed: {},
  mounted() {},

  methods: {
    hey: async function displayHey() {
      const img = document.createElement('img')
      img.src = './img/starwarsgifs/4.gif'
      const overlay = document.querySelector('.overlay')
      img.classList.add('heyhey-animation')
      overlay.appendChild(img)
      await new Promise((resolve) => setTimeout(resolve, 2900))
      img.remove()
    },
  },
}
</script>

<style scoped>
.overlay {
  position: absolute;
}
</style>
