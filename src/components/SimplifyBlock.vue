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

  @media (min-width: 1440px) {
    .container {
      background: url(../assets/bg-simplify-section-desktop.svg) no-repeat bottom left 15rem, var(--primary-red);
      background-size: cover;
      padding-inline: 8rem;
      height: 25vh;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
    }

    h2 {
      font-size: 2.3rem;
      flex-basis: 40%;
      text-align: start;
    }

    .btn {
      margin-inline: unset;
      flex-basis: 15%;
    }
  }

  @media (min-width: 768px) and (max-width: 1440px) {
    .container {
      height: 35vh; 
    }
  }
</style>
