<template>
  <div class="container">
    <img :src="require(`@/assets/${img}`)" class="profile" alt="Profile picture">
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
    background: var(--neutral-light-gray);
    padding-inline: 1rem;
    display: flex;
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
</style>