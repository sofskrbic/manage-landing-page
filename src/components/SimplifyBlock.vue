<template>
  <div class="container">
    <h2>Simplify how your team works today.</h2>
    <div class="btn"><span>Get Started</span></div>
  </div>
</template>

<script>
export default {
  name: 'SimplifyBlock'
}
</script>

<style scoped>

  .container {
    background: url(../assets/bg-simplify-section-mobile.svg) no-repeat center left, var(--primary-red);
    height: 50vh;
    padding-inline: 1.5rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding-block: 4rem;
  }

  h2 {
    color: var(--neutral-light-gray);
    text-align: center;
    font-size: 2.5rem;
    margin-bottom: 1.5rem;
  }

  .btn {
    color: var(--primary-red);
    background: var(--neutral-light-gray);
    font-weight: var(--fw-bold);
    margin-inline: auto;
  }

</style>