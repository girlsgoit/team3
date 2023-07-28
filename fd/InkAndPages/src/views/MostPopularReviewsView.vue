<template>
    <section id="review-page">
        <MostPopularReviewsContainer id="review-section"/>
        <DidYouKnow id="know-section" />
    </section>

</template>
<script>
import MostPopularReviewsContainer from  '../components/MostPopularReviewsContainer.vue'
import DidYouKnow from '../components/DidYouKnow.vue';

</script>
<style scoped>
#review-page{
    display: flex;
    
}
#review-section{
    min-width: 70%;
}

#know-section{
    min-width: 30%;
}
</style>