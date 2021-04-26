<template>
  <div class="container">
    <div class="split">
      <img src="@/assets/logo.svg" alt="Manage logo" class="logo">
      <div class="navigation">
        <img src="@/assets/icon-hamburger.svg" alt="Menu icon" id="menu-icon">
        <nav>
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
  name: 'AppHeader'
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
  }

  .logo {
    flex-basis: 40%;
  }

  nav {
    display: none;
  }
</style>