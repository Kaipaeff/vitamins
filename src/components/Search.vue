<!-- <template>
  <div> -->
    <!-- <form @submit.prevent="searchStore.getVitamins(searchVitamin)">
      <div class="input_wrapper">
        <input class="search_input" type="text" placeholder="Поиск товара" v-model="searchVitamin" />
      </div>
    </form> -->

    <!-- <Loader v-if="searchStore.loader" />

    <div v-else class="card_wrapper">
      <Vitamins v-for="vitamin of searchStore.vitamins" :key="vitamin.id" :vitamin="vitamin" />
    </div>

  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useSearchStore } from '../store/SearchStore';
import Loader from '../components/Loader.vue';
import Vitamins from '../components/Vitamins.vue';

const searchVitamin = ref('');
const searchStore = useSearchStore();

</script>

<style lang="scss" scoped>
@import '../scss/settings/_variables.scss';

.input_wrapper {
  position: relative;

  &::before {
    content: "";
    background: url("../assets/images/icons/search.svg");
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
</style> -->