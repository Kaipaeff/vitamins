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
    <div class="vitamin_country">
      <span class="item_title">Производство:</span> {{ vitamin.prod }}
    </div>
    <div class="vitamin_price">
      <span class="item_title">Цена:</span> {{ vitamin.price }} &#8381
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
  isSearch: {            // убрать позже, если не пригодится мысль!!!
    type: Boolean,
    required: false,
    default: false
  }
})
</script>

<style lang="scss" scoped>
@import '../scss/settings/variables';

.card {
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 340px;
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
</style>