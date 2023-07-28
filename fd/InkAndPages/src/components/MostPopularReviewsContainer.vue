<template></template>
<script>
import { db } from '../firebase/index.js';
import { getFirestore, collection, getDocs } from 'firebase/firestore';

export default {
    name: "MostPopularReviewsContainer",
    data: function(){
        return{
            reviews:[ ]
        }
    },
    methods:{
        async getData(reviewsCol){
            const querySnapshot = await getDocs(reviewsCol);
            return querySnapshot.docs.map((doc) => doc.data());
        }
    },
    async beforeMount() {
    try {
            const reviewsCol = collection(db, "Reviews");
            this.reviews = await this.getData(reviewsCol);
            console.log(this.reviews);
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    }
}
</script>
<style></style>
