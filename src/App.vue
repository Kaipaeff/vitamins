<template>
  <Header />

  <router-view></router-view>
  <main class="main_container">
  </main>
</template>

<script setup>
import Header from './components/Header.vue';

</script>


<style lang="scss" scoped>
@import './scss/settings/variables';

.main_container {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
}
</style>