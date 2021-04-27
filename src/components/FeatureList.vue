<template>
  <div class="container">
    <Feature v-for="(feature, index) in features" :key="index"
      :title="feature.title"
      :description="feature.description"
      :id="feature.id"
    />
  </div>
</template>

<script>
import Feature from './Feature'

export default {
  name: 'FeatureList',
  components: {
    Feature
  },
  data(){
    return {
      features: [
        {
          id: '01',
          title: "Track company-wide progress",
          description: "See how your day-to-day tasks fit into the wider vision. Go from tracking progress at the milestone level all the way done to the smallest of details. Never lose sight of the bigger picture again."
        },
        {
          id: '02',
          title: "Advanced built-in reports",
          description: "Set internal delivery estimates and track progress toward company goals. Our customisable dashboard helps you build out the reports you need to keep key stakeholders informed."
        },
        {
          id: '03',
          title: "Everything you need in one place",
          description: "Stop jumping from one service to another to communicate, store files, track tasks and share documents. Manage offers an all-in-one team productivity solution."
        }
      ]
    }
  }
}
</script>

<style scoped>
  .container {
    padding-inline: 0;
    padding-block: .5rem;
  }

  @media (min-width: 1440px) {
    .container {
      padding-block: 0;
    }
  }
</style>