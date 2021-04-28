<template>
  <div class="container">
    <h2 class="heading">What they've said</h2>
    <div class="testimonials" v-show="!desktopView">
      <Testimonial class="testimonial" v-for="testimonial in testimonials" :key="testimonial.id"
        :id="testimonial.id"
        :img="testimonial.img"
        :fullName="testimonial.fullName"
        :testimonialText="testimonial.testimonialText"
        v-show="selectedTestimonial === testimonial.id"
        />
    </div>
    <div class="h-scroll" v-show="desktopView">
      <div class="testimonials-desktop" id="desktop-list" @mousemove="scrollTestimonials">
        <Testimonial class="testimonial-desktop" v-for="testimonial in testimonials" :key="testimonial.id"
          :id="testimonial.id"
          :img="testimonial.img"
          :fullName="testimonial.fullName"
          :testimonialText="testimonial.testimonialText"
          />
      </div>
    </div>
    <div class="pagination" v-show="!desktopView">
      <span class="dot" v-for="item in testimonials" :key="item.id"
        :class="{active: selectedTestimonial == item.id}"
        @click="selectSlide(item.id)">
      </span>
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
      currentIndex: 0,
      windowSize: window.innerWidth
    }
  }, 
  methods: {
    selectSlide(id) {
      this.currentIndex = id
    },
    scrollTestimonials(event) {
      var hider = document.getElementById('desktop-list')
      var mousePositionX = event.clientX - this.$el.scrollLeft
      var delta = 2000 - this.getWindowWidth
      var percent = 100 / this.getWindowWidth * mousePositionX
      var offset = -1 * delta / 100 * percent
      hider.style.marginLeft = `${offset}px`
    },
    windowListener() {
      window.addEventListener('resize', ()=>{
        this.windowSize = window.innerWidth
      })
    }
  },
  computed: {
    selectedTestimonial() {
      return this.currentIndex
    },
    desktopView() {
      if(this.getWindowWidth >= 1440) {
        return true
      }
      return false
    },
    getWindowWidth() {
      return this.windowSize
    }
  },
  updated() {
    this.windowListener()
  },
  created() {
    this.windowListener()
    this.isOpen = false
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
  }

  .testimonial {
    width: 90vw;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 2rem;
    user-select: none;
    background-color: var(--neutral-light-gray);
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
    cursor: pointer;
  }

  .dot:hover {
    transform: translateY(-.2rem);
    transition: transform .1s ease-in-out;
  }

  .dot.active {
    background-color: var(--primary-red);
    border: none;
  }

  .btn {
    margin-inline: auto;
    margin-top: 2rem;
  }

  @media (min-width: 1440px) {
    .container {
      padding-inline: 0;
      display: flex;
      flex-direction: column;
      align-items: center;
      background: transparent;
    }

    .heading {
      font-size: 2.3rem;
    }

    .pagination {
      display: none;
    }

    .btn {
      width: 10%;
    }

    .h-scroll {
      width: 100%;
      overflow: hidden;
    }

    .testimonials-desktop {
      display: flex;
      width: 2000px;
      overflow: hidden;
      padding-block: 3rem;
      float: left;
    }

    .testimonial-desktop {
      margin-inline: 1rem;
      padding: 2rem;
      user-select: none;
      background-color: var(--neutral-light-gray);
    }
  }

  @media (min-width: 768px) and (max-width: 1440px) {
    .testimonials {
      transform: translateX(1.3rem);
    }
  }
</style>
