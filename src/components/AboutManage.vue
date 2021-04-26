<template>
  <div class="container">
    <div class="split">
      <div class="left">
        <h2 class="heading">What's different about Manage?</h2>
        <p>Manage provides all the functionality your team needs, without 
           the complexity. Our software is tailor-made for modern digital 
           product teams.
        </p>
      </div>
      <div class="right">
        <FeatureList/>
      </div>
    </div>
  </div>
</template>

<script>
import FeatureList from './FeatureList'
export default {
  name: 'AboutManage',
  components: {
    FeatureList
  }
}
</script>

<style scoped>
  .container {
    margin-top: 3rem;
    padding-inline: .8rem;
  }

  .heading {
    margin-bottom: 1rem;
  }

  p {
    text-align: center;
    margin-bottom: 2rem;
  }
</style>