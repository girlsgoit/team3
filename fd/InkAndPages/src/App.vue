<script setup>
import SiteFooter from './components/SiteFooter.vue';
import SiteHeader from './components/SiteHeader.vue';
import MostPopularReviewsView from './views/MostPopularReviewsView.vue';
</script>

<template>

<SiteHeader />

  <RouterView :key="$route.fullPath" />

  <SiteFooter />

  

</template>

<style scoped>
html{
  padding: 0 auto;
}
</style>

