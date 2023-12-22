<template>
  <div class="card" :style="{ flexDirection: isGrid ? 'column' : 'row', display: isGrid ? 'grid' : 'flex' }" :class="{ 'card_row': !isGrid }">

    <div class="vitamin">
      <img class="vitamin_img" :src="`${vitamin.imageUrl}`" :alt="vitamin.name">
      <img class="favorite_icon" src="../assets/images/icons/favorites.svg" alt="favorites-icon" @click="handleAddToFavorite(vitamin)">
    </div>
    <div class="vitamin_details">
      <div class="vitamin_name">
        {{ vitamin.name }}
      </div>
      <div class="vitamin_descr">
        <span class="item_title">Описание:</span> {{ vitamin.descr }}
      </div>
      <div class="vitamin_country">
        <span class="item_title">Производство:</span> {{ vitamin.prod }}
      </div>
      <div class="vitamin_price">
        <span class="item_title">Цена:</span> {{ vitamin.price }} &#8381
      </div>
    </div>
  </div>
</template>

<script setup>

const props = defineProps({
  vitamin: {
    type: Object,
    required: true,
    default: () => { }
  },
  isGrid: Boolean,
})

const handleAddToFavorite = (item) => {
  console.log('vitamin===>>>', item);
  try {

  } catch (error) {
    console.error('Error axios.get to favorites:', error.message);
    throw error;
  }
}

</script>

<style lang="scss" scoped>
@import '../scss/settings/variables';

.card {
  position: relative;
  justify-content: space-between;
  padding: 16px;
  border-radius: 16px;
  background-color: $white;
  box-shadow: 0 3px 8px 0px rgba(14, 24, 80, 0.2);

  @media (max-width: 685px) {
    flex-direction: column !important;
  }

  &:hover {
    box-shadow: 0 6px 12px 4px rgba(21, 153, 32, 0.2);
    transform: translateY(-1px);
    transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
    cursor: pointer;

    &::before {
      content: "";
      background: url("../assets/images/icons/favorites.svg");
      background-size: cover;
      background-repeat: no-repeat;
      position: absolute;
      top: 16px;
      right: 17px;
      width: 24px;
      height: 24px;
    }
  }

  .vitamin {
    display: flex;
    justify-content: center;
    width: 100%;
    height: 200px;

    .vitamin_img {
      max-width: 200px;
      height: 100%;
    }

    .favorite_icon {
      position: absolute;
      top: 16px;
      right: 17px;
      width: 24px;
      height: 24px;
      opacity: 0;
      z-index: 3;
    }
  }

  .vitamin_name {
    height: 46px;
    font-size: 20px;
    font-weight: 700;
    margin-bottom: 16px;
    white-space: wrap;
    overflow: hidden;
    text-overflow: ellipsis;
    color: $green;
  }

  .vitamin_descr {
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    line-height: 1.5;
    margin-bottom: 8px;
    color: #5F5F5F;
  }

  .vitamin_country {
    margin-bottom: 16px;
    color: #5F5F5F;
  }

  .vitamin_price {
    font-size: 22px;
    font-weight: 900;
    color: #5F5F5F;
  }

  .item_title {
    font-weight: 700;
    color: #4b4b4b;
  }
}

.card_row {
  position: relative;
  justify-content: space-between;
  padding: 16px;
  border-radius: 16px;
  background-color: $white;
  box-shadow: 0 3px 8px 0px rgba(14, 24, 80, 0.2);



  &:hover {
    box-shadow: 0 6px 12px 4px rgba(21, 153, 32, 0.2);
    transform: translateY(-1px);
    transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
    cursor: pointer;

    &::before {
      content: "";
      background: url("../assets/images/icons/favorites.svg");
      background-size: cover;
      background-repeat: no-repeat;
      position: absolute;
      top: 16px;
      right: 17px;
      width: 24px;
      height: 24px;
    }
  }

  .vitamin_details {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  .vitamin {
    max-width: 180px;
    max-height: 180px;
    margin-right: 16px;
  }

  .vitamin_name {
    height: 20px;
    margin-bottom: 10px;
  }

  .vitamin_descr {
    margin-bottom: 8px;
  }

  .vitamin_country {
    margin-bottom: auto;
  }
}
</style>