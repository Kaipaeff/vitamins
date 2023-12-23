<template>
  <div class="card" :style="{ flexDirection: isGrid ? 'column' : 'row', display: isGrid ? 'grid' : 'flex' }" :class="{ 'card_row': !isGrid }">

    <div class="vitamin">
      <img class="vitamin_img" :src="`${vitamin.imageUrl}`" :alt="vitamin.name">

      <span class="favorite_icon" @click="handleAddToFavorite({ vitamin })">
        <svg v-if="!vitamin.isFavorite" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" stroke-width="2"
          stroke="#B5B6BC" fill="none" stroke-linecap="round" stroke-linejoin="round">
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path d="M19.5 12.572l-7.5 7.428l-7.5 -7.428a5 5 0 1 1 7.5 -6.566a5 5 0 1 1 7.5 6.572" />
        </svg>

        <svg v-else xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="#f29100"
          fill="#f29100" stroke-linecap="round" stroke-linejoin="round">
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path d="M19.5 12.572l-7.5 7.428l-7.5 -7.428a5 5 0 1 1 7.5 -6.566a5 5 0 1 1 7.5 6.572" />
        </svg>
      </span>

    </div>
    <div class="vitamin_details">
      <div class="vitamin_name">
        {{ vitamin.name }}
      </div>

      <div class="vitamin_descr">
        <span class="item_title">Описание:</span> {{ vitamin.descr }}
      </div>

      <!-- <div class="vitamin_country">
        <span class="item_title">Производство:</span> {{ vitamin.prod }}
      </div> -->

      <div class="more_block">
        <div class="vitamin_price">
          <span class="item_title">Цена:</span> {{ vitamin.price }} &#8381
        </div>

        <div class="vitamin_more" @click="handleMoreBtnClick({ vitamin })">
          <!-- <router-link :to="{ name: 'vitamins', params: { id: vitamin.id } }"> -->
          <el-button type="warning">Подробнее
            <el-icon>
              <ArrowRight />
            </el-icon>
          </el-button>
          <!-- </router-link> -->
        </div>

      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

import { useVitaStore } from '../store/VitaStore';

import { postFavorite } from '../services/api/rest/postFavoriteApi'

import { useRouter } from 'vue-router';
const router = useRouter();

const vitaStore = useVitaStore();


const props = defineProps({
  vitamin: {
    type: Object,
    required: true,
    default: () => { }
  },
  isGrid: Boolean,
  isFavorite: Boolean,
})


const handleMoreBtnClick = async ({ vitamin }) => {
  try {
    const response = await vitaStore.getOneVitamin(vitamin.id);
    console.log('vitamin.id from Vitamins==>>', vitamin.id);
    router.push({ name: 'Vitamin', params: { id: vitamin.id } })
  } catch (error) {
    console.error('Ошибка при получении деталей витамина:', error.message);
  }
};

const handleAddToFavorite = ({ vitamin }) => {
  try {
    const obj = {
      ...vitamin,
      item_id: vitamin.id,
    }
    postFavorite(vitamin)
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

  .vitamin_details {
    .more_block {
      display: flex;
      justify-content: space-between;
      align-items: center;

      .vitamin_price {
        font-size: 20px;
        font-weight: 900;
        color: #5F5F5F;
      }

      .el-button {
        display: inline-flex;
        align-items: center;
        font-size: 16px;
        width: 130px;
        padding: 16px 10px 16px 16px;
        border-radius: 8px;

        .el-icon {
          margin-left: 4px;
          transition: transform 0.3s ease-in-out;
        }

        &:hover {
          .el-icon {
            transform: translateX(5px);
          }
        }
      }
    }
  }

  @media (max-width: 685px) {
    flex-direction: column !important;
  }

  &:hover {
    box-shadow: 0 6px 12px 4px rgba(21, 153, 32, 0.2);
    transform: translateY(-1px);
    transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
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
      cursor: pointer;


      // &:hover svg {
      //   stroke: #00B453;
      // }
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

  // .vitamin_country {
  //  margin-bottom: 16px;
  // color: #5F5F5F;
  // }

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
    // cursor: pointer;

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