<template>
  <header class="header">
    <div class="header_wrapper">

      <router-link to="/">
        <img class="logo_img" src="../assets/images/logo.png" alt="Логотип">
      </router-link>

      <form>
        <div class="input_wrapper">
          <input class="search_input" type="text" placeholder="Поиск товара" v-model="searchVitamin" @input="handleSearchInput" />
        </div>
      </form>

      <div class="user_block">
        <div class="cart">
          <el-badge :value="0" class="item" type="warning">
            <el-icon :size="28" color="#5F5F5F">
              <Goods />
            </el-icon>
          </el-badge>
        </div>

        <router-link to="/favorites">
          <div class="favorites">
            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" stroke-width="1.6" stroke="#5F5F5F" fill="none"
              stroke-linecap="round" stroke-linejoin="round">
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M19.5 12.572l-7.5 7.428l-7.5 -7.428a5 5 0 1 1 7.5 -6.566a5 5 0 1 1 7.5 6.572" />
            </svg>
          </div>
        </router-link>

        <div class="login">
          <el-icon :size="28" color="#5F5F5F">
            <User />
          </el-icon>
        </div>
      </div>
    </div>
  </header>
</template>

<script setup>

import { ref } from 'vue';
const searchVitamin = ref('');

import { useSearchStore } from '../store/SearchStore';
const searchStore = useSearchStore();



let searchTimer;
let abortController;
const debounceDelay = 500;

const handleSearchInput = async () => {
  clearTimeout(searchTimer);
  abortController?.abort();
  abortController = new AbortController();

  searchTimer = setTimeout(async () => {
    try {
      const response = await searchStore.getSearchVitamins(searchVitamin.value, abortController.signal);
    } catch (error) {
      if (error.name === 'AbortError') {
        console.log('Запрос был отменен');
      } else {
        console.error('Произошла ошибка:', error.message);
      }
    }
  }, debounceDelay);
};

</script>


<style lang="scss" scoped>
@import '../scss/settings/variables';

.header {
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  background-color: #ffffff;
  box-shadow: 0 4px 12px 3px rgba(21, 153, 32, 0.1);
  z-index: 2;

  .header_wrapper {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 1080px;
    padding: 24px 0;
    transition: all 0.3s ease-in-out;

    @media (max-width: 1120px) {
      padding: 24px;
    }

    @media (max-width: 632px) {
      flex-direction: column;
      gap: 12px;
      padding: 16px 24px 12px;
    }

    .logo_img {
      cursor: pointer;
      width: 148px;
      transition: all 0.3s ease-in-out;

      @media (max-width: 632px) {
        align-self: flex-start;
        width: 128px;
      }
    }

    .input_wrapper {
      position: relative;
      transition: all 0.3s ease-in-out;

      &::before {
        content: "";
        background: url("./assets/images/icons/search.svg");
        background-size: contain;
        background-repeat: no-repeat;
        position: absolute;
        top: 5px;
        right: 12px;
        width: 24px;
        height: 24px;
        color: $green;

        @media (max-width: 632px) {
          top: 4px;
          width: 20px;
          height: 20px;
        }
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
      transition: all 0.3s ease-in-out;

      @media (max-width: 768px) {
        max-width: 280px;
      }

      @media (max-width: 632px) {
        box-shadow: none;
        outline: 1px solid $light_grey;
        padding: 4px 16px;
      }

      @keyframes changeOutlineColor {
        0% {
          outline: 1px solid transparent;
        }

        100% {
          outline: 1px solid $green_light;
        }
      }

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
      gap: 32px;
      transition: all 0.3s ease-in-out;

      .item {
        --el-color-warning: #e6a23c;
      }

      @media (max-width: 632px) {
        align-self: flex-end;
        position: absolute;
        top: 22px;
        right: 20px;
        gap: 22px;
      }

      svg {
        cursor: pointer;

        transition: color 0.3s ease-in-out;

        path {
          transition: stroke 0.3s ease-in-out, stroke-width 0.3s ease-in-out;
        }

        &:hover {
          color: $green;
          stroke: $green;
        }
      }
    }
  }
}
</style>