<template>
  <div class="card">

    <div class="vitamin">
      <img class="vitamin_img" :src="`${favorites.imageUrl}`" :alt="favorites.name">
    </div>
    <div class="vitamin_details">
      <div class="vitamin_name">
        {{ favorites.name }}
      </div>

      <div class="vitamin_descr">
        <span class="item_title">Описание:</span> {{ favorites.descr }}
      </div>

      <div class="vitamin_country">
        <span class="item_title">Производство:</span> {{ favorites.prod }}
      </div>
    </div>
  </div>
</template>


<script setup>
import { ref, onMounted } from 'vue';
import axios from 'axios';


const favorites = ref([]);

onMounted(async () => {
  try {
    const { data } = await axios.get(
      'https://692caae35f87239b.mokky.dev/favorites?_relations=items'
    );

    favorites.value = data.map(obj => obj.item);
    console.log('favorites.value===>>>', favorites.value); // Остановился тут. Данные получаю, но нужно как-то передать их в Home для рендера
  } catch (error) {
    console.error('Error axios.get to favorites:', error.message);
    throw error;
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
