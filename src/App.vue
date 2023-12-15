<template>
  <header class="header">
    <div class="header_wrapper">
      <img class="logo_img" src="./assets/images/logo.png" alt="Логотип">

      <div class="input_wrapper">
        <input class="search_input" type="text" placeholder="Поиск товара">
      </div>

      <div class="user_block">
        <div class="cart"><img src="./assets/images/icons/bag.svg" alt="Корзина"></div>
        <div class="favorites"><img src="./assets/images/icons/favorites.svg" alt="Избранное"></div>
        <div class="login"><img src="./assets/images/icons/user.svg" alt="Личный кабинет"></div>
      </div>
    </div>
  </header>

  <main class="main_container">
    <div class="title_block">
      <h2 class="main_title">Витамины и минералы</h2>
    </div>
    <div class="card_wrapper">
      <Vitamin v-for="vitamin of vitaStore.vitamins" :key="vitamin.id" :vitamin="vitamin" />
    </div>
  </main>
</template>

<script setup lang="ts">
import Vitamin from './components/Vitamins.vue'
import { useVitaStore } from './store/VitaStore';

const vitaStore = useVitaStore();

</script>

<style lang="scss" scoped>
@import './scss/settings/variables';

.header {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  background-color: #ffffff;
  margin-bottom: 40px;
  padding: 16px 0;

  .header_wrapper {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 1080px;

    .logo_img {
      cursor: pointer;
    }

    .input_wrapper {
      position: relative;

      &::before {
        content: "";
        background: url("./assets/images/icons/search.svg");
        background-size: auto;
        background-repeat: no-repeat;
        position: absolute;
        top: 5px;
        right: 12px;
        width: 24px;
        height: 24px;
        color: $green;
      }
    }

    .search_input {
      border: none;
      padding: 8px 16px;
      width: 300px;
      border-radius: 30px;
      outline: 1px solid $light_grey;
    }

    .user_block {
      display: flex;
      flex-direction: row;
      gap: 24px;
      margin-left: 81px;

      img {
        cursor: pointer;
        width: 28px;
        height: 28px;
      }
    }
  }

}

.main_container {
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 1080px;
  margin: 0;
  margin: 0 auto 32px;

  .title_block {
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    margin-bottom: 24px;

    &::before {
      content: '';
      display: block;
      position: absolute;
      border-bottom: 1px solid #38ce38;
      top: 15px;
      left: 50%;
      transform: translateX(-50%);
      width: 100%;
      z-index: -1;
    }
  }

  .main_title {
    position: relative;
    margin: 0;
    padding: 0 12px;
    background-color: $background-color_light-grey;

    &::after {
      content: "";
      background: url("./assets/images/icons/leaf.svg");
      background-size: auto;
      background-repeat: no-repeat;
      position: absolute;
      top: -6px;
      right: -10px;
      width: 24px;
      height: 24px;
      color: $green;
    }
  }

  .card_wrapper {
    display: grid;
    grid-template-columns: repeat(3, 340px);
    grid-template-rows: repeat(1, 1fr);
    gap: 30px;
    justify-content: space-between;
    margin: 0;
    padding: 0;
    margin-bottom: 24px;

    @media (max-width: 1120px) {
      grid-template-columns: repeat(2, 340px);
    }

    @media (max-width: 740px) {
      grid-template-columns: repeat(1, 340px);
    }
  }
}
</style>
