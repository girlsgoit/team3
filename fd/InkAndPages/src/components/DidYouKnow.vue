<template>
<body>
    <section class="know_container" id="left">
        <ul title="Did you know?">
            <li  v-for="item in funFacts">{{ item.text }}</li>
        </ul>

    </section>
</body>
</template>
<script>
import { db } from '../firebase/index.js';
import { getFirestore, collection, getDocs } from 'firebase/firestore';

export default {
    name: "DidYouKnow",
    data: function(){
        return{
            funFacts:[ ]
        }
    },
    methods:{
        async getData(factsCol){
            const querySnapshot = await getDocs(factsCol);
            return querySnapshot.docs.map((doc) => doc.data());
        }
    },
    async beforeMount() {
    try {
            const factsCol = collection(db, "FunFacts");
            this.funFacts = await this.getData(factsCol);
            console.log(this.funFacts);
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    }
}

</script>
<style scoped>


#left {
    right:0px;
    top:0px;
    bottom:0px;
    background-color:  rgba(248, 140, 167, 0.2);
    color:white;
   
}

ul[title]::before {
    content: attr(title);
    
    font-weight: bold;

    color: black;
    text-align: center;
    font-size: 30px;
     
}

ul{
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    list-style-type: none;
    height: 100%;
}

li{
   
    color: black;
    text-align: center;
   font-size: 20px;
   
}
</style>