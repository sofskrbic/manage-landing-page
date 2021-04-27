<template>
  <div id="app">
    <div class="hero">
      <AppHeader/>
      <AppHero/>
    </div>
    <AboutManage/>
    <TestimonialsList/>
    <SimplifyBlock/>
    <AppFooter/>
  </div>
</template>

<script>
import AppHeader from './components/AppHeader'
import AppHero from './components/AppHero'
import AboutManage from './components/AboutManage'
import TestimonialsList from './components/TestimonialsList'
import SimplifyBlock from './components/SimplifyBlock'
import AppFooter from './components/AppFooter'

export default {
  name: 'App',
  components: {
    AppHeader,
    AppHero,
    AboutManage,
    TestimonialsList,
    SimplifyBlock,
    AppFooter
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Be+Vietnam:wght@400;500;700;800&display=swap');
:root {
  /* COLORS */
  --primary-red: hsl(12, 88%, 59%);
  --primary-blue: hsl(228, 39%, 23%);

  --neutral-gray-blue: hsl(227, 12%, 61%);
  --neutral-dark-blue: hsl(233, 12%, 13%);
  --neutral-pale-red: hsl(13, 100%, 96%);
  --neutral-btn-shadow: hsla(12, 88%, 70%, 75%);
  --neutral-light-gray: hsl(0, 0%, 98%);

  /* TYPOGRAPHY */
  --ff-defaul: 'Be Vietnam', sans-serif;
  --fw-regular: 400;
  --fw-medium: 500;
  --fw-bold: 700;
  --fw-extra-bold: 800;
  --fs-body-copy: 16px;

  /* DEVICE SIZES */
  --ss-mobile: 375px;
  --ss-desktop: 1440px;
}

*, html {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  height: 100vh;
  width: 100%;
  overflow-x: hidden;
  font-size: var(--fs-body-copy);
  font-family: var(--ff-defaul);
  font-weight: var(--fw-regular);
}

li {
  list-style: none;
}

a, a:visited {
  text-decoration: none;
  color: var(--neutral-dark-blue);
}

img {
  width: 100%;
}

p {
  line-height: 1.7;
  color: var(--neutral-gray-blue);
}

.heading {
  color: var(--primary-blue);
  text-align: center;
}

.btn {
  cursor: pointer;
  background-color: var(--primary-red);
  color: var(--neutral-light-gray);
  box-shadow: 0 3px 7px var(--neutral-btn-shadow);
  border-radius: 50px;
  text-align: center;
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem 1.5rem;
  font-size: .875rem;
  font-weight: var(--fw-medium);
}

.btn:hover {
  transform: translateY(-.5rem);
  transition: transform .2s ease-in-out;
  opacity: .8;
}

.container {
    padding: 2.5rem 2rem;
  }

.hero {
  background: url(./assets/bg-tablet-pattern.svg) no-repeat top -7rem left 5rem;
  background-size: 120%;
}
</style>
