<template>
  <div class="container">
    <h2 class="heading">What they've said</h2>
    <div class="testimonials">
      <Testimonial class="testimonial" v-for="testimonial in testimonials" :key="testimonial.id"
        :id="testimonial.id"
        :img="testimonial.img"
        :fullName="testimonial.fullName"
        :testimonialText="testimonial.testimonialText"/>
    </div>
    <div class="pagination">
      <span class="dot" v-for="item in testimonials" :key="item.id"
        :class="{active: currentIndex == item.id}"></span>
    </div>
    <div class="btn"><span>Get Started</span></div>
  </div>
</template>

<script>
import Testimonial from './Testimonial'
export default {
  name: 'TestimonialsList',
  components: {
    Testimonial
  },
  data() {
    return {
      testimonials: [
        {
          id: 0,
          img: "avatar-anisha.png",
          fullName: 'Anisha Li',
          testimonialText: '“Manage has supercharged our team’s workflow. The ability to maintain visibility on larger milestones at all times keeps everyone motivated.”'
        },
        {
          id: 1,
          img: "avatar-ali.png",
          fullName: 'Ali Bravo',
          testimonialText: '“We have been able to cancel so many other subscriptions since using Manage. There is no more cross-channel confusion and everyone is much more focused.”'
        },
        {
          id: 2,
          img: "avatar-richard.png",
          fullName: 'Richard Watts',
          testimonialText: '“Manage allows us to provide structure and process. It keeps us organized and focused. I can’t stop recommending them to everyone I talk to!”'
        },
        {
          id: 3,
          img: "avatar-shanai.png",
          fullName: 'Shanai Gough',
          testimonialText: '“Their software allows us to track, manage and collaborate on our projects from anywhere. It keeps the whole team in-sync without being intrusive.”'
        }
      ],
      currentIndex: 0
    }
  }, 
  methods: {

  }
}
</script>

<style scoped>
  .container {
    padding-inline: 1rem;
  }

  .heading {
    margin-bottom: 6rem;
    margin-top: -2rem;
    font-size: 1.8rem;
    font-weight: var(--fw-extra-bold);
  }

  .testimonials {
    flex-basis: 100%;
    display: inline-flex;
    transform: translateX(0);
    transition: transform 0.3s ease-out;
    cursor: grab;
  }

  .testimonial {
    max-height: 100%;
    width: 90vw;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 2rem;
    user-select: none;
  }

  .grabbing {
    cursor: grabbing;
  }

  .grabbing .testimonial {
    transform: scale(.9);
  }

  .pagination {
    display: flex;
    justify-content: center;
  }

  .dot {
    width: 1rem;
    height: 1rem;
    border-radius: 50%;
    border: 2px solid;
    border-color: var(--primary-red);
    margin-right: .8rem;
    display: inline-block;
  }

  .dot.active {
    background-color: var(--primary-red);
    border: none;
  }

  .btn {
    margin-inline: auto;
    margin-top: 2rem;
  }
</style>