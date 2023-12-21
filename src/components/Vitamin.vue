<template>
  <div class="single-card card">
    <div class="vitamin">
      <img class="vitamin_img" :src="`${vitamin.imageUrl}`" :alt="vitamin.name">
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
      <el-rate v-model="vitamin.points" disabled text-color="#ff9900" />


      <div class="vitamin_price">
        <span class="item_title">Цена:</span> {{ vitamin.price }} &#8381
      </div>

      <div class="vitamin_counter">
        <div class="counter">
          <el-icon class="minus" @click="decrement">
            <Minus />
          </el-icon>

          <span class="count">{{ count }}</span>

          <el-icon class="plus" @click="increment">
            <Plus />
          </el-icon>
        </div>

        <div class="orderBtn">
          <el-button type="warning">Заказать
            <el-icon>
              <ArrowRight />
            </el-icon>
          </el-button>
        </div>

      </div>

    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const count = ref(0);

const props = defineProps({
  vitamin: {
    type: Object,
    required: true,
    default: () => { }
  }
})

const decrement = () => {
  count.value >= 1 ? count.value -= 1 : 0;
}

const increment = () => {
  count.value += 1;
}

</script>

<style lang="scss" scoped>
@import '../scss/settings/variables';

.single-card {
  grid-column: span 3;
}

.card {
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  max-height: 100%;
  padding: 24px;
  border-radius: 16px;
  background-color: $white;
  box-shadow: 0 3px 8px 0px rgba(14, 24, 80, 0.2);
  transition: all 0.3s ease-in-out;


  @media (max-width: 685px) {
    flex-direction: column;
  }

  @media (max-width: 768px) {
    padding: 16px;
  }

  &::before {
    content: "";
    background: url("../assets/images/icons/favorites.svg");
    background-size: cover;
    background-repeat: no-repeat;
    position: absolute;
    top: 24px;
    right: 24px;
    width: 24px;
    height: 24px;
    cursor: pointer;
  }

  .vitamin {
    flex: 1;
    max-height: 400px;


    @media (max-width: 685px) {
      margin-bottom: 24px;
      max-height: 300px;
    }

    .vitamin_img {
      max-width: 100%;
      max-height: 100%;
      object-fit: cover;
    }
  }

  .vitamin_details {
    flex: 1;
    padding: 0 32px 0 16px;
    transition: all 0.3s ease;

    @media (max-width: 685px) {
      padding: 0;
    }

    .vitamin_name {
      display: none;
    }

    .vitamin_descr {
      font-size: 18px;
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 3;
      -webkit-box-orient: vertical;
      line-height: 1.5;
      margin-bottom: 12px;
      color: #5F5F5F;
    }

    .vitamin_country {
      font-size: 18px;
      margin-bottom: 12px;
      color: #5F5F5F;
    }

    .vitamin_price {
      font-size: 22px;
      font-weight: 900;
      margin-bottom: 32px;
      color: #5F5F5F;
    }

    .item_title {
      font-weight: 700;
      color: #4b4b4b;
    }

    .el-rate {
      margin-bottom: 32px;
      --el-rate-icon-size: 24px;
    }

    .el-button {
      display: inline-flex;
      align-items: center;
      font-size: 20px;
      width: 150px;
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

    .vitamin_counter {
      display: flex;
      flex-direction: row;
      gap: 30px;

      @media (max-width: 390px) {
        justify-content: space-between;
        gap: 10px;
      }

      .counter {
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 130px;
        height: 34px;
        padding: 0 8px;
        border: 1px solid $light_grey;
        border-radius: 8px;

        .minus {
          cursor: pointer;
          color: $orange;
        }

        .plus {
          cursor: pointer;
          color: $orange;
        }

        .count {
          color: $text_grey;
          font-weight: 600;
          padding-top: 3px;
        }
      }
    }
  }
}
</style>