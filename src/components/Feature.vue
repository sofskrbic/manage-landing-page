<template>
  <div class="container">
    <h4 class="heading" :data-id="id">{{title}}</h4>
    <p class="desc">{{description}}</p>
  </div>
</template>

<script>
export default {
  name: 'Feature',
  props: {
    id: {
      type: String,
      required: true
    },
    title: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    }
  }
}
</script>

<style scoped>
  .container {
    padding-inline: 0;
    margin-bottom: 1rem;
    padding-block: 1rem;
    display: flex;
    flex-direction: column;
  }

  .heading {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    margin-bottom: .8rem;
    border-radius: 25px 0 0 25px;
    width: 110%;
    background: var(--neutral-pale-red);
  }

  .heading::before {
    content: attr(data-id);
    background: var(--primary-red);
    color: var(--neutral-light-gray);
    padding: .5rem 1.1rem;
    border-radius: 50px;
    margin-right: .8rem;
  }

  @media (min-width: 1440px) {
    .container {
      padding-block: 0;
      margin-bottom: 2rem;
    }

    .heading {
      background-color: transparent;
      margin-bottom: .5rem;
      width: 100%;
    }

    .heading::before {
      margin-right: 1.5rem;
    }

    .desc {
      margin-left: 5rem;
      width: 100%;
    }
  }
</style>