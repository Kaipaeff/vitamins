<template>
  <h1>Тут когда-нибудь будут избранные товары</h1>
</template>


<script setup>
import { ref, onMounted } from 'vue';
import axios from 'axios';


const favorites = ref([]);

onMounted(async () => {
  try {
    const { data } = await axios.get('https://692caae35f87239b.mokky.dev/favorites')
    console.log('data===>>>', data);
  } catch (error) {
    console.log(error);
  }
})

</script>


<style lang="scss" scoped>
@import '../scss/settings/_variables.scss';

h1 {
  margin-top: 200px;
  color: $text_grey;
}
</style>
