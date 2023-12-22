<script setup>
import { ContentLoader } from "vue-content-loader"

const props = defineProps({
  isGrid: Boolean,
})

</script>

<template>
  <div v-if="isGrid" class="card">
    <content-loader viewBox="0 0 308 400" :speed="1" primaryColor="#d1d1d1" secondaryColor="#ecebeb">
      <rect x="0" y="204" rx="3" ry="3" width="308" height="14" />
      <rect x="0" y="229" rx="3" ry="3" width="308" height="14" />
      <rect x="0" y="378" rx="3" ry="3" width="150" height="16" />
      <rect x="0" y="0" rx="6" ry="6" width="308" height="180" />
      <rect x="0" y="346" rx="3" ry="3" width="200" height="10" />
      <rect x="0" y="269" rx="3" ry="3" width="308" height="10" />
      <rect x="0" y="294" rx="3" ry="3" width="308" height="10" />
      <rect x="0" y="318" rx="3" ry="3" width="308" height="10" />
    </content-loader>
  </div>

  <div v-else class="card_row">
    <content-loader viewBox="0 0 1080 212" :speed="1" primaryColor="#d1d1d1" secondaryColor="#ecebeb">
      <rect x="0" y="0" rx="6" ry="6" width="180" height="180" />
      <rect x="204" y="2" rx="3" ry="3" width="400" height="16" />
      <rect x="204" y="36" rx="3" ry="3" width="840" height="14" />
      <rect x="204" y="58" rx="3" ry="3" width="840" height="14" />
      <rect x="204" y="84" rx="3" ry="3" width="840" height="14" />
      <rect x="204" y="114" rx="3" ry="3" width="180" height="14" />
      <rect x="204" y="160" rx="3" ry="3" width="150" height="18" />
    </content-loader>
  </div>
</template>

<style lang="scss" scoped>
@import '../scss/settings/variables';

.card {
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  max-height: 433px;
  padding: 16px;
  border-radius: 16px;
  background-color: $white;
  box-shadow: 0 3px 8px 0px rgba(14, 24, 80, 0.2);

  svg {
    width: 100%;
  }
}

.card_row {
  position: relative;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  max-height: 212px;
  padding: 16px;
  border-radius: 16px;
  background-color: $white;
  box-shadow: 0 3px 8px 0px rgba(14, 24, 80, 0.2);

  svg {
    // width: 100%;
    // height: 100%;
    // object-fit: cover;
  }
}
</style>