<!--! Изначальный вариант. Оставляю для на случай, если пригодится -->

<!-- <template>
  <div class="loader">
    <div></div>
    <div></div>
    <div></div>
    <div></div>
  </div>
</template>

<style lang="scss" scoped>
@import '../scss/settings/_variables.scss';

.loader {
  display: block;
  margin: auto;
  position: relative;
  width: 104px;
  height: 80px;
  margin-top: 200px;
}

.loader div {
  display: inline-block;
  position: absolute;
  left: 8px;
  width: 16px;
  background: $text_grey;
  animation: loader 1.2s cubic-bezier(0, 0.5, 0.5, 1) infinite;
}

.loader div:nth-child(1) {
  left: 8px;
  animation-delay: -0.24s;
}

.loader div:nth-child(2) {
  left: 32px;
  animation-delay: -0.12s;
}

.loader div:nth-child(3) {
  left: 56px;
  animation-delay: 0;
}

.loader div:nth-child(4) {
  left: 80px;
  animation-delay: 0.12s;
}

@keyframes loader {
  0% {
    top: 8px;
    height: 64px;
  }

  50%,
  100% {
    top: 24px;
    height: 32px;
  }
}
</style> -->