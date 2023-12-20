<script>
import { ContentLoader } from "vue-content-loader"

export default {
  components: { ContentLoader }
}
</script>

<template>
  <div class="card">
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
</template>

<style lang="scss" scoped>
@import '../scss/settings/variables';

.card {
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  height: 433px;
  padding: 16px;
  border-radius: 16px;
  background-color: $white;
  box-shadow: 0 3px 8px 0px rgba(14, 24, 80, 0.2);

  svg {
    width: 100%;
  }
}
</style>