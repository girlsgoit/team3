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
    height: 80vh;
    
    
}
#review-section{
    min-width: 70%;
    background-color: #FFE5B455;
    padding: 5px;
    margin: 0;

}

#know-section{
    min-width: 30%;
    height: 80vh;
    margin: 0 0;
}
</style>