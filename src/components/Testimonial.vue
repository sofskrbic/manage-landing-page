<template>
  <div class="container">
    <img :src="require(`../assets/${img}`)" class="profile" alt="Profile picture">
    <h3 class="heading">{{fullName}}</h3>
    <p>{{testimonialText}}</p>
  </div>
</template>

<script>
export default {
  name: 'Testimonial',
  props: {
    id: {
      type: Number,
      required: true
    },
    img: {
      type: String,
      required: true
    },
    fullName: {
      type: String,
      required: true
    },
    testimonialText: {
      type: String,
      required: true
    }
  },
  data(){
    return {
      imageSrc: this.img
    }
  }
}
</script>

<style scoped>
  .container {
    background-color: var(--neutral-light-gray);
    padding-inline: 1rem;
    display: flex;
    width: 80%;
    flex-direction: column;
    margin-bottom: 1rem;
  }

  .profile {
    width: 30%;
    margin-inline: auto;
    margin-top: -5rem;
  }

  p {
    text-align: center;
  }

  @media (min-width: 1440px) {
    .container {
      padding-inline: 1.5rem;
      background-color: var(--neutral-light-gray);
      max-width: 30%;
    }

    .profile {
      width: 18%;
      margin-inline: auto;
      margin-top: -5rem;
      margin-bottom: 1rem;
    }

    .heading {
      margin-bottom: 1rem;
    }
  }

  @media (min-width: 768px) and (max-width: 1440px) {
    .profile {
      width: 15%;
      margin-top: -5.2rem;
      margin-bottom: 1.5rem;
    }

    .heading {
      margin-bottom: 1rem;
    }
  }
</style>
