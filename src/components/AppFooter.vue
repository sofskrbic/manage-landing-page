<template>
  <div class="container">
    <div class="split">
      <div class="left">
        <img src="../assets/logo-white.svg" alt="Manage logo" class="logo">
        <div class="social-media">
          <img src="../assets/icon-facebook.svg" alt="Facebook icon">
          <img src="../assets/icon-youtube.svg" alt="Youtube icon">
          <img src="../assets/icon-twitter.svg" alt="Twitter icon">
          <img src="../assets/icon-pinterest.svg" alt="Pinterest icon">
          <img src="../assets/icon-instagram.svg" alt="Instagram icon">
        </div>
      </div>
      <div class="middle">
          <div>
            <ul>
              <li><a href="#">Home</a></li>
              <li><a href="#">Pricing</a></li>
              <li><a href="#">Products</a></li>
              <li><a href="#">About Us</a></li>
            </ul>
          </div>
          <div>
            <ul>
              <li><a href="#">Careers</a></li>
              <li><a href="#">Community</a></li>
              <li><a href="#">Privacy Policy</a></li>
            </ul>
          </div>
      </div>
      <div class="right">
        <input type="email" id="email-form" v-model="inputEmail" placeholder="Updates in your inbox...">
        <label v-show="desktopView && getError" class="error">Please insert a valid email</label>
        <div class="btn" @click="validateNewsletterForm" :class="{disabled: getError}"><span>Go</span></div>
      </div>
    </div>
    <span class="copyright">Copyright 2020. All Rights Reserved</span>
    <ErrorModal v-show="getError && !desktopView" @closeModal="resetForm" id="modal"/>
  </div>
</template>

<script>
import ErrorModal from './ErrorModal'
export default {
  name: 'AppFooter',
  components: {
    ErrorModal
  },
  data(){
    return {
      inputEmail: '',
      error: false
    }
  },
  computed: {
    getError() {
      return this.error
    },
    desktopView() {
      let windowSize = window.innerWidth
      if(windowSize >= 1440) {
        return true
      }
      return false
    }
  },
  methods: {
    validateEmail() {
      const re = /^[^\s@]+@[^\s@]+$/;
      return re.test(String(this.inputEmail).toLowerCase());
    },
    validateNewsletterForm() {
      if(this.inputEmail == '' || !this.validateEmail()){
        this.error = true
        this.scrollToBottom()
        if(this.desktopView){
          setTimeout(() => {
            this.resetForm()
            this.error = false
          }, 2000)
        }
        return
      }
      this.resetForm()
      return
    },
    resetForm() {
      this.error = false
      this.inputEmail = ''
      document.getElementById('email-form').value = ''
    },
    scrollToBottom(){
      this.$nextTick(document.getElementById('modal').scrollIntoView({behavior: "smooth", block: "end", inline: "nearest"}))
    }
  }
}
</script>

<style scoped>
  .container {
    background: var(--neutral-dark-blue);
    padding-bottom: 1.5rem;
    position: relative;
  }

  .split {
    display: flex;
    flex-direction: column-reverse;
  }

  .left {
    display: flex;
    flex-direction: column-reverse;
    margin-block: 1rem;
  }

  .logo {
    width: 50%;
    margin-inline: auto;
    margin-top: .5rem;
  }

  .social-media {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    margin-bottom: 2rem;
  }

  .social-media img {
    height: 100%;
    margin-right: 2rem;
  }

  .social-media img:hover {
    cursor: pointer;
    filter: invert(.175) sepia(.85) hue-rotate(300deg) saturate(29) ;
  }

  .social-media img:last-child {
    margin-right: 0;
  }

  .middle{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding-inline: 1.5rem;
    margin-inline: auto;
    margin-block: 1rem;
    width: 100%;
  }

  .middle div {
    display: flex;
    align-items: flex-start;
    flex-direction: column;
  }

  .middle a {
    color: var(--neutral-light-gray);
    opacity: .8;
  }

  .middle li:hover {
    border-bottom: 1px solid var(--primary-red);
    transition: border-bottom .5s ease-out;
  }

  .middle li {
    padding-block: .5rem;
  }

  .right {
    display: flex;
    margin-block: .5rem;
  }

  input {
    border-radius: 50px;
    border: none;
    background-color: var(--neutral-light-gray);
    padding-inline: 2rem;
    flex-basis: 80%;
    margin-right: .5rem;
    font-family: var(--ff-default);
  }

  input:focus {
    outline: 2px solid var(--primary-red);
  }

  .btn {
    box-shadow: unset;
    padding: .8rem 1.5rem;
    width: unset;
  }

  .btn:hover {
    transform: unset;
  }

  .btn.disabled {
    cursor: not-allowed;
    background-color: var(--neutral-gray-blue);
    opacity: .6;
  }

  .copyright {
    color: var(--neutral-light-gray);
    opacity: .3;
    font-size: .7215rem;
    text-align: center;
    display: flex;
    justify-content: center;
    margin-top: 2rem;
  }

  @media (min-width: 1440px) {
    .container {
      background: var(--neutral-dark-blue);
      padding-bottom: 4rem;
      position: relative;
    }

    .split {
      flex-direction: row;
    }

    .left {
      flex-direction: column;
      flex-basis: 25%;
      justify-content: space-between;
      align-items: flex-start;
    }

    .middle, .right {
      flex-basis: 33.3%;
    }

    .logo {
      margin-inline: unset;
      margin-top: 0;
      width: 70%;
    }

    .social-media {
      margin-bottom: 0rem;
      margin-inline: unset;
    }

    .social-media img {
      min-width: 15%;
      margin-right: 1.1rem;
    }

    .social-media img:first-child {
      margin-left: 1rem;
    }

    .middle {
      margin-block: 0rem;
    }

    .right {
      margin-bottom: auto;
      justify-content: flex-end;
      position: relative;
    }

    input {
      flex-basis: 50%;
    }

    label {
      position: absolute;
      top: 3.5rem;
      left: 7.5rem;
    }

    .btn {
      box-shadow: unset;
      padding: .8rem 1.5rem;
      width: unset;
    }

    .copyright {
      justify-content: flex-end;
      margin-top: -2rem;
    }

    .error {
      font-size: .7rem;
      color: var(--primary-red);
    }
  }

  @media (min-width: 768px) and (max-width: 1440px) {
    .container {
      padding-inline: 4rem;
    }

    .logo {
      width: 30%;
    }

    .social-media {
      width: 50%;
      margin-inline: auto;
    }

    .middle{
      padding-inline: 10rem;
    }

    .right {
      margin-inline: auto;
    }

    input {
      border-radius: 50px;
      border: none;
      background-color: var(--neutral-light-gray);
      padding-inline: 2rem;
      flex-basis: 70%;
      margin-right: .5rem;
      font-family: var(--ff-default);
    }
  }
</style>
