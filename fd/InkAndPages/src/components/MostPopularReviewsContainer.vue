<template>
<body>
    
    <section class="popreview">

        <h1>Most popular reviews</h1>
        <UserReview />
        <Reviews v-for="r in reviews" :author="r.author" :bookName="r.bookName" :rating="r.rating" :text="r.text" :userName="r.userName" />
 
    </section>


</body>

</template>
<script>
import { db } from '../firebase/index.js';
import { getFirestore, collection, getDocs } from 'firebase/firestore';
import UserReview from './UserReview.vue'
import Reviews from './Reviews.vue';

export default {
    name: "MostPopularReviewsContainer",
    data: function () {
        return {
            reviews: []
        };
    },
    methods: {
        async getData(reviewsCol) {
            const querySnapshot = await getDocs(reviewsCol);
            return querySnapshot.docs.map((doc) => doc.data());
        }
    },
    async beforeMount() {
        try {
            const reviewsCol = collection(db, "Reviews");
            this.reviews = await this.getData(reviewsCol);
            console.log(this.reviews);
        }
        catch (error) {
            console.error("Error fetching data:", error);
        }
    },
    components: { UserReview, Reviews }
}
</script>
<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Koh+Santepheap&display=swap');

body {


}

.popreview {

font-family:"koh santepheap";
font-weight: bolder;
font-size: 20px;

letter-spacing: 2px;

position:relative;
left:50px;

}
</style>
