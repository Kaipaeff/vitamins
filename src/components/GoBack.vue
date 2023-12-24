<template>
  <div class="back" @click="$router.back()">
    <el-icon>
      <DArrowLeft />
    </el-icon>
    <span class="back_text">назад</span>
  </div>
</template>

<style lang="scss" scoped>
@import '../scss/settings/variables';

.back {
  display: flex;
  align-items: center;
  color: $text_grey;
  font-weight: 500;
  gap: 3px;
  cursor: pointer;

  .back_text {
    margin-bottom: 1px;
    font-size: 18px;
  }

  svg {
    width: 16px;
  }
}
</style>