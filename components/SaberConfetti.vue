<template>
      <canvas id="saber-canvas"></canvas>
</template>

<script>

import ConfettiGenerator from "../static/confetti.js"

export default {

  data: () => ({

  }),

  computed: {

  },
  mounted () {
    const confettiSettings = {
    target: "saber-canvas",
    max: "180",
    size: "1",
    animate: true,
    props: [
        // "circle",
        // "square",
        // "triangle",
        // "line",
        { type: "svg", src: "./img/saber-blue.svg", size: 20, weight: 1 },
        { type: "svg", src: "./img/saber-red.svg", size: 20, weight: 1 },
        { type: "svg", src: "./img/saber-yellow.svg", size: 20, weight: 1 },
        { type: "svg", src: "./img/saber-green.svg", size: 20, weight: 1},

    ],
    colors: [
        [165, 104, 246],
        [230, 61, 135],
        [0, 199, 228],
        [253, 214, 126],
    ],
    clock: "25",
    rotate: true,
    width: screen.width,
    height: screen.height,
    start_from_edge: false,
    respawn: true,
    };

    const confetti = new ConfettiGenerator(confettiSettings);
    confetti.render();
  },

  methods: {

  }
}
</script>

<style scoped>
    #saber-canvas{
        position: absolute;
        width: 100vw;
        height: 100vh;
        z-index: -1;
    }
</style>