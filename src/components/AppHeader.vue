<template>
  <div class="container">
    <div class="split">
      <img src="@/assets/logo.svg" alt="Manage logo" class="logo">
      <div class="navigation">
        <img src="@/assets/icon-close.svg" v-show="menuOpen"
         alt="Menu close icon" 
         id="close-icon"
         @click="toggleMenu">
        <img src="@/assets/icon-hamburger.svg" v-show="!menuOpen"
         alt="Menu icon"
         id="menu-icon"
         @click="toggleMenu">
        <nav v-show="menuOpen || desktopView">
          <ul class="navigation-links">
            <li><a href="#">Pricing</a></li>
            <li><a href="#">Product</a></li>
            <li><a href="#">About Us</a></li>
            <li><a href="#">Careers</a></li>
            <li><a href="#">Community</a></li>
          </ul>
          <div class="btn"><span>Get Started</span></div>
        </nav>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AppHeader',
  data() {
    return {
      isOpen: false,
      windowSize: window.innerWidth
    }
  },
  computed: {
    menuOpen() {
      return this.isOpen
    },
    getWindowSize(){
      return this.windowSize
    },
    desktopView() {
      if(this.getWindowSize >= 1440) {
        return true
      }
      return false
    }
  },
  methods: {
    toggleMenu() {
      this.isOpen = !this.isOpen
      this.$emit('menuAction', this.isOpen)
    },
    windowListener() {
      window.addEventListener('resize', ()=>{
        this.windowSize = window.innerWidth
        if(this.getWindowSize < 1440) {
          this.isOpen = false
        }
      })
    }
  },
  updated() {
    this.windowListener()
  }
}
</script>

<style scoped>
  .split {
    display: flex;
    justify-content: space-between;
  }

  .logo, #menu-icon {
    height: 100%;
    cursor: pointer;
    z-index: 20;
  }

  .logo {
    flex-basis: 40%;
  }

  .container {
    position: relative;
    z-index: 30;
  }

  .btn {
    display: none;
  }

  #close-icon {
    cursor: pointer;
  }

  nav {
    background-color: var(--neutral-light-gray);
    position: absolute;
    border-radius: 10px;
    padding-inline: 3rem;
    top: 5rem;
    left: 50%;
    transform: translateX(-50%);
    width: 85%;
    transition: transform 2000ms ease-in-out;
    z-index: 20;
  }

  .navigation-links {
    padding-block: 2rem;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    font-weight: var(--fw-bold);
    transition: display 3s ease-in-out;
    transition-delay: 2000;
  }

  .navigation-links li {
    padding-block: .8rem;
  }

  @media (min-width: 1440px) {

    .navigation {
      flex-basis: 85%;
    }

    nav {
      background-color: transparent;
      position: unset;
      transform: unset;
      transition: unset;
      width: 100%;
      display: flex;
      padding-block: unset;
    }

    .navigation-links {
      flex-direction: row;
      padding-block: 0;
      margin-left: auto;
    }

    .navigation-links li {
      padding-inline: 1.5rem;
      font-weight: var(--fw-medium);
      padding-block: 0;
    }

    .navigation-links li:last-child {
      margin-right: auto;
    }

    .navigation-links a:hover {
      color: var(--primary-red);
    }

    .btn {
      display: unset;
      margin-left: auto;
      flex-basis: 16%;
    }

    #menu-icon {
      display: none;
    }

    .logo {
      flex-basis: 15%;
      align-self: center;
    }
  }
</style>