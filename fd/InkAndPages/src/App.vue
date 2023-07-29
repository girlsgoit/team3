<script setup>
import SiteFooter from './components/SiteFooter.vue';
import SiteHeader from './components/SiteHeader.vue';

</script>

<template>

  <SiteHeader />

  <RouterView :key="$route.fullPath" />

  <SiteFooter />



</template>

<style scoped>

</style>

