<template>
  <div class="overlay" v-show="menu"></div>
</template>

<script>
export default {
  name: 'Overlay',
  props: {
    menu: {
      type: Boolean,
      required: true
    }
  }
}
</script>

<style scoped>
.overlay {
  position: fixed;
  width: 100vw;
  height: 100vh;
  background: linear-gradient(var(--neutral-light-gray), var(--neutral-dark-blue));
  opacity: .4;
  top: 0;
  left: 0;
  right: 0;
  z-index: 2;
}
</style>