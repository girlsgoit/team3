<template>
    <section id="review-page">
        <MostPopularReviewsContainer id="review-section"/>
        <DidYouKnow id="know-section"/>
    </section>

</template>
<script>
import MostPopularReviewsContainer from  '../components/MostPopularReviewsContainer.vue'
import DidYouKnow from '../components/DidYouKnow.vue';

</script>
<style scoped>
#review-page{
    display: flex;
    max-height: 80vh;
    overflow: scroll;
    background-color:  rgba(248, 140, 167, 0.4);
    -ms-overflow-style: none;  /* IE and Edge */
    scrollbar-width: none;  /* Firefox */

    
}

#review-page::-webkit-scrollbar {
  display: none;
}



#review-section{
    min-width: 70%;
    background-color: #FFE5B455;
    height: 100%;
    padding: 5px;
    margin: 0;
    border-right: 2px solid black;

}

#know-section{
    min-width: 28%;
    min-height: 100%;
    margin: 0 0;
}
</style>