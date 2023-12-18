<template>
  <header class="header">
    <div class="header_wrapper">
      <img class="logo_img" src="./assets/images/logo.png" alt="Логотип">

      <!-- <div class="input_wrapper">
        <input class="search_input" type="text" placeholder="Поиск товара">
      </div> -->

      <form @submit.prevent="searchStore.getVitamins(searchVitamin)">
        <div class="input_wrapper">
          <input class="search_input" type="text" placeholder="Поиск товара" v-model="searchVitamin" />
        </div>
      </form>


      <div class="user_block">
        <div class="cart">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="#5F5F5F" fill="none"
            stroke-linecap="round" stroke-linejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path
              d="M6.331 8h11.339a2 2 0 0 1 1.977 2.304l-1.255 8.152a3 3 0 0 1 -2.966 2.544h-6.852a3 3 0 0 1 -2.965 -2.544l-1.255 -8.152a2 2 0 0 1 1.977 -2.304z" />
            <path d="M9 11v-5a3 3 0 0 1 6 0v5" />
          </svg>
        </div>
        <div class="favorites">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="#5F5F5F" fill="none"
            stroke-linecap="round" stroke-linejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M19.5 12.572l-7.5 7.428l-7.5 -7.428a5 5 0 1 1 7.5 -6.566a5 5 0 1 1 7.5 6.572" />
          </svg>
        </div>
        <div class="login">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="#5F5F5F" fill="none"
            stroke-linecap="round" stroke-linejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0" />
            <path d="M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" />
          </svg>
        </div>
      </div>
    </div>
  </header>

  <main class="main_container">

    <div class="title_block">
      <h2 class="main_title">Витамины и минералы</h2>
    </div>

    <Loader v-if="vitaStore.loader || searchStore.loader" />

    <div v-else class="card_wrapper">
      <Vitamins v-for="vitamin of displayedVitamins" :key="vitamin.id" :vitamin="vitamin" />
    </div>

  </main>
</template>

<script setup>
import Vitamins from './components/Vitamins.vue'
import Loader from './components/Loader.vue';
import { useVitaStore } from './store/VitaStore';
import { useSearchStore } from './store/SearchStore';

import { ref, onMounted, computed } from 'vue';

const searchVitamin = ref('');

const vitaStore = useVitaStore();
const searchStore = useSearchStore();

const displayedVitamins = computed(() => {
  return searchStore.vitamins.length > 0 ? searchStore.vitamins : vitaStore.vitamins;
})

onMounted(() => {
  vitaStore.getVitamins();
})

</script>

<style lang="scss" scoped>
@import './scss/settings/variables';

.header {
  position: fixed;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  background-color: #ffffff;
  margin-bottom: 40px;
  box-shadow: 0 4px 12px 3px rgba(21, 153, 32, 0.1);
  z-index: 2;

  .header_wrapper {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 1080px;
    padding: 12px 0;

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

    @keyframes changeOutlineColor {
      0% {
        outline: 1px solid transparent;
      }

      100% {
        outline: 1px solid $green_light;
      }
    }

    .search_input {
      border: none;
      padding: 8px 16px;
      width: 340px;
      border-radius: 30px;
      box-shadow: 0 4px 8px 3px rgba(21, 153, 32, 0.1);

      &:hover {
        animation: changeOutlineColor 0.6s ease-out forwards;
      }

      &:focus {
        outline: 1px solid $green_light;
      }
    }

    .user_block {
      display: flex;
      flex-direction: row;
      gap: 24px;
      margin-left: 81px;

      svg {
        cursor: pointer;
        width: 28px;
        height: 28px;

        path {
          transition: stroke 0.3s ease-in-out, stroke-width 0.3s ease-in-out;
        }

        &:hover {
          stroke: $green;
        }
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
  // padding-top: calc($header-default-height + 40px); //вернуть, когда Сёрч перенесу в Хэдер
  padding-top: 140px;


  .title_block {
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    margin-bottom: 24px;
    color: #5F5F5F;

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
    padding: 0 16px;
    background-color: $background-color_light-grey;

    &::after {
      content: "";
      background: url("./assets/images/icons/leaf.svg");
      background-size: auto;
      background-repeat: no-repeat;
      position: absolute;
      top: -6px;
      right: -7px;
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
