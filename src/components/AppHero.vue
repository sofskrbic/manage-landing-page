<template>
  <div class="container">
    <div class="split">
      <div class="hero-content">
        <h1 class="heading">Bring everyone together to build better products.</h1>
        <p class="desc">
          Manage makes it simple for software teams to plan day-to-day 
          tasks while keeping the larger team goals in view.
        </p>
        <div class="btn"><span>Get Started</span></div>
      </div>
      <img src="@/assets/illustration-intro.svg" alt="Three statistical charts" class="illustration">
    </div>
  </div>
</template>

<script>
export default {
  name: 'AppHero'
}
</script>

<style scoped>
  .container {
    padding-block: .2rem;
  }

  .split {
    display: flex;
    flex-direction: column-reverse;
  }

  .hero-content {
    text-align: center;
    margin-top: .5rem;
  }

  .heading {
    font-size: 2.2rem;
  }

  .hero-content p {
    margin-top: .8rem;
  }

  .btn {
    margin-top: 2rem;
    margin-inline: auto;
  }

  @media (min-width: 1440px) {
    .container {
      padding-block: 2rem;
    }

    .split {
      flex-direction: row;
      align-items: center;
    }

    .illustration {
      flex-basis: 45%;
    }

    .hero-content {
      flex-basis: 50%;
      padding-right: 2rem;
      margin-right: 2rem;
      text-align: start;
    }

    .heading {
      font-size: 3.5rem;
      line-height: 1.2;
    }

    .btn {
      margin-inline: unset;
      width: 30%;
    }
  }
</style>