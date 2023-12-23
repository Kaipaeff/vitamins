<template>
  <div class="main_wrapper">

    <div class="title_block">
      <h2 class="main_title" v-if="!vitaStore.oneVitamin || vitaStore.oneVitamin.length === 0">Витамины и минералы</h2>
      <h2 class="main_title" v-else>{{ vitaStore.oneVitamin[0].name }}</h2>
    </div>

    <div class="filters">

      <div class="back">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none"
          stroke-linecap="round" stroke-linejoin="round">
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path d="M15 15l-3 -3l3 -3" />
          <path d="M11 15l-3 -3l3 -3" />
          <path d="M12 3c7.2 0 9 1.8 9 9s-1.8 9 -9 9s-9 -1.8 -9 -9s1.8 -9 9 -9z" />
        </svg>
        <span class="back_text" @click="handleBack">назад</span>
      </div>

      <div class="controls">
        <div class="filter">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor"
            fill="none" stroke-linecap="round" stroke-linejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M14 6m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
            <path d="M4 6l8 0" />
            <path d="M16 6l4 0" />
            <path d="M8 12m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
            <path d="M4 12l2 0" />
            <path d="M10 12l10 0" />
            <path d="M17 18m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
            <path d="M4 18l11 0" />
            <path d="M19 18l1 0" />
          </svg>
        </div>

        <div class="layout" @click="handleLayout">
          <svg v-if="isGrid" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" stroke-width="2"
            stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v2a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z" />
            <path d="M4 14m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v2a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z" />
          </svg>

          <svg v-else xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-grid-dots" width="24" height="24"
            viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M5 5m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
            <path d="M12 5m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
            <path d="M19 5m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
            <path d="M5 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
            <path d="M12 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
            <path d="M19 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
            <path d="M5 19m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
            <path d="M12 19m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
            <path d="M19 19m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
          </svg>
        </div>
      </div>

    </div>

    <div class="card_wrapper" :class="{ 'grid-layout': isGrid, 'row-layout': !isGrid }">
      <!-- <template v-if="vitaStore.oneVitamin"> -->
      <!-- <Vitamin v-for="vitamin of vitaStore.oneVitamin" :key="vitamin.id" :vitamin="vitamin" /> -->
      <Vitamin v-if="vitaStore.oneVitamin" :vitamin="vitaStore.oneVitamin" />
      <!-- </template> -->

      <template v-else>
        <template v-if="vitaStore.loader || searchStore.loader">
          <Skeleton v-for="skeleton in 6" :isGrid="isGrid" />
        </template>

        <template v-else>
          <template v-if="displayedVitamins && displayedVitamins.length > 0">
            <Vitamins v-for="vitamin of displayedVitamins" :key="vitamin.id" :vitamin="vitamin" :isGrid="isGrid" />
          </template>
          <p v-else>Нет данных для отображения</p>
        </template>


        <!-- <template>
          <template v-if="displayedVitamins && displayedVitamins.length > 0">
          <Favorites v-for="favorite of favorites" :key="favorite.id" :favorite="favorite" :isGrid="isGrid" />
          </template>
          <p v-else>Нет данных для отображения</p>
        </template> -->

      </template>
    </div>

  </div>
</template>

<script setup>
import { ref, onMounted, computed } from 'vue';

import Vitamins from '../components/Vitamins.vue';
import Vitamin from '../components/Vitamin.vue';
import Favorites from '../pages/Favorites.vue';
import Skeleton from '../components/Skeleton.vue';


import { useVitaStore } from '../store/VitaStore';
import { useSearchStore } from '../store/SearchStore';

import { useRouter } from 'vue-router';
const router = useRouter();

const isGrid = ref(getLayoutFromLocalStorage() === 'grid');

const localStorageKey = 'layoutMode';


const vitaStore = useVitaStore();
const searchStore = useSearchStore();


const displayedVitamins = computed(() => {
  return searchStore.vitamins.length > 0 ? searchStore.vitamins : vitaStore.vitamins;
});


const handleLayout = () => {
  isGrid.value = !isGrid.value;
  saveLayoutToLocalStorage(isGrid.value ? 'grid' : 'row');
};

const handleBack = () => {
  console.log('clicked on Back Btn');
  router.go(-1)
}

const card_wrapper = computed(() => {
  return isGrid.value ? 'grid-layout' : 'row-layout';
});

function getLayoutFromLocalStorage() {
  return localStorage.getItem(localStorageKey) || 'default';
};

function saveLayoutToLocalStorage(layout) {
  localStorage.setItem(localStorageKey, layout);
};

onMounted(async () => {
  isGrid.value = getLayoutFromLocalStorage() === 'grid';
  await vitaStore.getAllVitamins();
  await vitaStore.getFavoriteVitamins();
});

</script>

<style lang="scss" scoped>
@import '../scss/settings/_variables.scss';

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

.main_wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 1080px;
  margin-bottom: 64px;
  padding-top: calc($header-default-height + 30px);
  transition: all 0.3s ease-in-out;

  @media (max-width: 1120px) {
    padding: calc($header-default-height + 30px) 24px 0 24px;
    width: 100%;
  }

  @media (max-width: 632px) {
    padding-top: calc($header-default-height + 40px);
  }

  .filters {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 20px;
    width: 100%;
    margin-bottom: 16px;
    // margin-left: auto;
    // padding-right: 14px;

    svg {
      cursor: pointer;
      stroke: $text_grey;
      stroke-width: 1.6;
      width: 28px;
      height: 28px;
    }

    .back {
      display: flex;
      align-items: center;
      font-size: 18px;
      cursor: pointer;

      .back_text {
        margin-bottom: 1px;
      }
    }

    .controls {
      display: flex;
      align-items: center;
      gap: 16px;
      font-size: 18px;
      cursor: pointer;
    }
  }

  .title_block {
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    color: #5F5F5F;

    @media (max-width: 632px) {
      margin-bottom: 8px;
    }

    &::before {
      content: '';
      display: block;
      position: absolute;
      border-bottom: 1px solid #38ce38;
      top: 15px;
      top: 11px;
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
    transition: all 0.3s ease-in-out;


    @media (max-width: 768px) {
      font-size: 18px;
      padding: 0 8px;
    }

    &::after {
      content: "";
      background: url("./assets/images/icons/leaf.svg");
      background-size: contain;
      background-repeat: no-repeat;
      position: absolute;
      top: -12px;
      right: -7px;
      width: 24px;
      height: 24px;
      color: $green;

      @media (max-width: 768px) {
        top: -5px;
        right: -6px;
        width: 14px;
        height: 14px;
      }

      @media (max-width: 685px) {
        display: none;
      }
    }
  }

  .card_wrapper {
    display: grid;
    justify-content: space-between;
    gap: 30px;
    margin: 0;
    padding: 0;
    width: 100%;
    transition: all 0.3s ease-in-out;

    &.grid-layout {
      grid-template-columns: repeat(3, 1fr);
    }

    &.row-layout {
      grid-template-columns: repeat(1, 1fr);
    }


    @media (max-width: 1120px) {
      &.grid-layout {
        grid-template-columns: repeat(3, 1fr);
        justify-items: center;
      }
    }

    @media (max-width: 824px) {
      &.grid-layout {
        grid-template-columns: repeat(2, 1fr);
      }
    }

    @media (max-width: 768px) {
      &.grid-layout {
        grid-template-columns: repeat(2, 1fr);
      }
    }

    @media (max-width: 685px) {
      &.grid-layout {
        grid-template-columns: repeat(2, 1fr);
      }
    }

    @media (max-width: 620px) {
      &.grid-layout {
        grid-template-columns: repeat(2, 1fr);
      }
    }

    @media (max-width: 578px) {
      &.grid-layout {
        grid-template-columns: repeat(1, 2fr);
      }
    }
  }

}
</style>