<template>
  <nav>
      <ul>
          <li><NuxtLink to="/">Home</NuxtLink></li>
          <li><NuxtLink to="/settings">Settings</NuxtLink></li>
          <li><NuxtLink to="/quiz">Quiz</NuxtLink></li>
          <li><NuxtLink to="/score">Score</NuxtLink></li>
      </ul>
  </nav>
</template>


<style scoped>
  ul{
    display: flex;
    flex-direction: row;
    justify-items: space-around;
  }
  li{
    width: 6rem;
    list-style: none;
  }
</style>