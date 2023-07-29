<template>
    <section class="community_container" id="right">
        <ul>
            <h1 id="title">Community</h1>
            <ComunityPost v-for="p in posts" :Data="p.Data.toDate().toDateString()" :Text="p.Text" :Title="p.Title" :UserName="p.UserName"/>
        </ul>
    </section>
</template>


<script>
import { db } from '../firebase/index.js';
import { collection, getDocs } from 'firebase/firestore';
import ComunityPost from './ComunityPost.vue';
export default {
    name: 'Comunity',
    data: function () {
        return {
            posts:[]
        }
    },
    methods: {
        async getData(postsCol) {
            const querySnapshot = await getDocs(postsCol);
            return querySnapshot.docs.map((doc) => doc.data());
        }
    },
    async beforeMount() {
        try {
            const postsCol = collection(db, "Community");
            this.posts = await this.getData(postsCol);
            console.log(this.posts);
        }
        catch (error) {
            console.error("Error fetching data:", error);
        }
    },
    components: { ComunityPost }
}
</script>




<style scoped>
#right {
    position: absolute;
    left: 0px;
    top: 0px;
    bottom: 0px;
    width: 70%;
    height: 100%;
    background-color: rgba(255, 229, 180, 0.2);
}

#title {
    font-weight: bold;

    color: black;
    text-align: left;
    font-size: 50px;
    padding-left: 60px;
    padding-top: 10px;
}

#dystopiandreams {
    color: black;
    text-align: left;
    font-size: 20px;
    padding-left: 60px;
    padding-top: 5px;
    padding-bottom: 0px;
}

#h4 {
    color: black;
    text-align: left;
    font-size: 20px;
    padding-left: 60px;
}
</style>