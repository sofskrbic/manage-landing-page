<template>
  <div class="container-modal">
    <div class="split">
      <div class="content">
        <h3>Oh, no!</h3>
        <p>Please, make sure to enter a valid email adress.</p>
      </div>
      <img src="@/assets/icon-close.svg" alt="X close icon" 
      class="close"
      @click="$emit('closeModal')">
    </div>
  </div>
</template>

<script>
export default {
  name: 'ErrorModal',
}
</script>

<style scoped>
  .container-modal {
    position: absolute;
    border-radius: 25px;
    padding: 1.5rem 2rem;
    margin-inline: .2rem;
    transform: translateY(-20rem);
    background: var(--primary-red);
    left: 5%;
    right: 5%;
    transition: transform cubic-bezier(0.785, 0.135, 0.15, 0.86) ease-in-out;
  }

  .close {
    cursor: pointer;
  }

  .split {
    display: flex;
    justify-content: space-between;
  }

  .split.content {
    flex-basis: 50%;
  }

  .split img {
    flex-basis: 10%;
    height: 100%;
    filter: invert(1) sepia(1) saturate(.1);
  }

  h3 {
    color: var(--neutral-light-gray);
  }

  p {
    font-size: .875rem;
    color: var(--neutral-light-gray);
    opacity: .7;
  }
</style>