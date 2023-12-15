<template>
  <div class="card">
    <div class="vitamin">
      <img class="vitamin_img" :src="`${vitamin.imageUrl}`" :alt="vitamin.name">
    </div>
    <div class="vitamin_name">
      {{ vitamin.name }}
    </div>
    <div class="vitamin_descr">
      <span class="item_title">Описание:</span> {{ vitamin.descr }}
    </div>
    <div class="vitamin_price">
      <span class="item_title">Цена:</span> {{ vitamin.price }} &#8381
    </div>
    <div class="vitamin_country">
      <span class="item_title">Производство:</span> {{ vitamin.country }}
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  vitamin: {
    type: Object,
    required: true,
    default: () => { }
  }
})
</script>

<style lang="scss" scoped>
@import '../scss/settings/variables';

.card {
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 340px;
  padding: 16px;
  border-radius: 8px;
  background-color: $white;
  box-shadow: 0 4px 10px 0px rgba(14, 24, 80, 0.2);

  &:hover {
    box-shadow: 0 8px 14px 3px rgba(21, 153, 32, 0.2);
    transform: translateY(-2px);
    transition: transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out;
    cursor: pointer;

    &::before {
      content: "";
      background: url("../assets/images/icons/favorites.svg");
      background-size: cover;
      background-repeat: no-repeat;
      position: absolute;
      top: 16px;
      right: 16px;
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
  }

  .vitamin_name {
    font-size: 18px;
    font-weight: 700;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    color: $green;
  }

  .vitamin_descr {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .vitamin_country {}

  .item_title {
    font-weight: 700;
  }
}
</style>