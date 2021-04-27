<template>
  <div class="container">
    <div class="split">
      <div class="left">
        <img src="@/assets/logo-white.svg" alt="Manage logo" class="logo">
        <div class="social-media">
          <img src="@/assets/icon-facebook.svg" alt="Facebook icon">
          <img src="@/assets/icon-youtube.svg" alt="Youtube icon">
          <img src="@/assets/icon-twitter.svg" alt="Twitter icon">
          <img src="@/assets/icon-pinterest.svg" alt="Pinterest icon">
          <img src="@/assets/icon-instagram.svg" alt="Instagram icon">
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
        <div class="btn" @click="validateNewsletterForm"><span>Go</span></div>
      </div>
    </div>
    <span class="copyright">Copyright 2020. All Rights Reserved</span>
    <ErrorModal v-show="getError" @closeModal="resetForm" id="modal"/>
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

  .copyright {
    color: var(--neutral-light-gray);
    opacity: .3;
    font-size: .7215rem;
    text-align: center;
    display: flex;
    justify-content: center;
    margin-top: 2rem;
  }
</style>