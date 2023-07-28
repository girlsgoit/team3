<template>

<body>
    
    <section>
    
        <h1 class="books">Books</h1>
    
    </section>
    
    <section class="week">
    
        <div class="author">
    
        <div class="authortext">
    
        <p class="week2">Check this week's author</p>
    
        <p class="weekquote">"Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos officia temporibus, assumenda veniam magni pariatur harum iusto repellat molestias ratione sint similique. Quam possimus culpa quasi in molestias atque aut?"</p>
    
        <p class="weekbook">The kite runner</p>
    
        </div>
    
        <div class="authorphoto">
    
        <img class="weekphoto" src="https://pbs.twimg.com/profile_images/763266791543967744/uSAIvyK3_400x400.jpg" alt="khaled hosseini">
    
        <p class="weekauthor">KHALED HOSSEINI</p>
    
        </div>
    
        </div>
    
    </section>
    
    <section>
    
        <p class="news">What's {{this.$route.params.genre}}?</p>
    
        <ul class="list">
    
            <li v-for="book in bookList">
    
                <a href="#">
                <img class="image" :src="book.Link" alt="the collector">
                </a>
    
                <p class="book-text">{{ book.BookName }}
                    <br> By {{ book.Author }}
                </p>
    
            </li>
    
           
    
        </ul>
    
    </section>
    
    </body>
</template>

<script>
import { onUpdated } from 'vue';
import { db } from '../firebase/index.js';
import { getFirestore, doc, getDoc } from 'firebase/firestore';
export default {
    data: function(){
        return{
            bookList:[]
        }
    },
    methods:{
        async getData(reviewsCol) {
            const querySnapshot = await getDoc(reviewsCol);
            if(querySnapshot.data().BookList) return querySnapshot.data().BookList
            else if(querySnapshot.data().bookList) return querySnapshot.data().bookList

            return querySnapshot.data().BookLIst
        }

    },
    async beforeMount(){
        try {
            let g = this.$route.params.genre[0].toUpperCase() + this.$route.params.genre.slice(1)
            const reviewsCol = doc(db, "Books", g);
            let books = await this.getData(reviewsCol);
            this.bookList = books;
            console.log(this.bookList)
        }
        catch (error) {
            console.error("Error fetching data:", error);
        }

    },
    
}

</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Koh+Santepheap&display=swap');

@import url('https://fonts.googleapis.com/css2?family=Inika&display=swap');

@import url('https://fonts.googleapis.com/css2?family=Inika&family=Inria+Serif&display=swap');

body {

padding-left: 30px;
/* margin-left: 100px; */

}

.books {

font-family: "koh santepheap";
font-weight: bolder;
font-size: 48px;

margin:0;
padding-top:50px;

}

.week {

font-family: inika;

margin:0;

}

.weekquote {

font-style: italic;
font-family: "inria serif";
font-size:20px;

width:440px;

}

.weekbook {

font-style: italic;
font-weight: bolder;

font-family: "inria serif";
font-size:20px;

width:440px;


}

.week2 {

font-size: 36px;

}

.weekphoto {

display:flex;

border-radius:999px;

width:200px;
height:200px;

}

.weekauthor {

font-family:inika;
font-weight:bolder;

padding-left:25px;
padding-top:5px;

}

.author {

display:flex;

}

.authorphoto {

padding-left: 70px;
padding-top:20px;

}

.news {

font-family: inika;
font-size:36px;

}

.list {

list-style: none;

padding-left:0;

justify-content:space-between;
max-width:720px;

display:flex;

}
.book-text{
    max-width: 140px;
}
.image {

height:210px;

}

li {

font-size:18px;
line-height:24px;

}
</style>
