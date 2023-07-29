<template>
    <body>
        <section>

            <div class="rectangle2">

                <div>

                    <img class="pfp" src="./img/profile_icon_reviews.png" alt="profile picture">


                    <button v-on:click="handleSubmit">POST</button>

                </div>

                <span class="content">

                    <span class="book">

                        <textarea class="author" placeholder="Author name" v-model="author"></textarea>

                        <p>,</p>

                        <textarea class="title" placeholder="Book name" v-model="title"></textarea>

                    </span>

                    <textarea class="username" placeholder="user1823719" v-model="userName"></textarea>
                    <textarea class="text2" placeholder="Write your review here..." v-model="text"></textarea>
                    <span class="rating">

                        <img v-on:click="handleRating" id="stea1" src="./img/stea_goala.png" alt="gol">
                        <img v-on:click="handleRating" id="stea2" src="./img/stea_goala.png" alt="gol">
                        <img v-on:click="handleRating" id="stea3" src="./img/stea_goala.png" alt="gol">
                        <img v-on:click="handleRating" id="stea4" src="./img/stea_goala.png" alt="gol">
                        <img v-on:click="handleRating" id="stea5" src="./img/stea_goala.png" alt="gol">
                    </span>
                </span>
            </div>
        </section>
    </body>
</template>
<script>
import { db } from '../firebase/index.js';
import { getFirestore, collection, addDoc } from 'firebase/firestore';

export default {
    name: "UserReview",
    data: function () {
        return {
            title: '',
            author: '',
            userName: '',
            text: '',
            rating: 0,
        }

    },
    methods: {
        handleSubmit: async function () {
            const review = await addDoc(collection(db, "Reviews"), {
                author: this.author,
                bookName: this.title,
                rating: this.rating,
                text: this.text,
                userName: this.userName
            });
            console.log(" ", review.id);
            this.author =""
            this.bookName=""
            this.rating=0
            this.text=""
            this.userName="" 
            this.changeCani()
            this.$router.go()
        },
        changeCani: function(){
            for (let i = 1; i <= this.rating; i++) {
                this.$el.querySelector("#stea" + i).src = "./stea_plina.png"
            }
            for (let i = this.rating + 1; i <= 5; i++) {
                this.$el.querySelector("#stea" + i).src = "./stea_goala.png"
            }
        },
        handleRating: function (event) {
            console.log(event.target.id)
            let nr = Number(event.target.id.replace("stea", ""))
            this.rating = nr
            this.changeCani()

        }
    }
}
</script>


<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Inter&display=swap');

body {

    font-family: 'inter';
    font-size: 12px;

}

textarea {

    font-family: 'inter';
    font-size: 12px;

}


.rectangle2 {

    min-height: 55px;
    width: 470px;
    background-color: #FFAE7033;

    position: relative;
    left: 50px;

    border-radius: 17px;
    padding: 5px 25px 20px 20px;

    position: relative;
    margin-top: 22px;

    display: flex;

}

.pfp {

    max-height: 80px;
    max-width: 80px;

    position: relative;

    margin-top: 10px;


}

.content {

    position: relative;

    margin-left: 18px;

    max-width: 400px;

}

.book {

    display: flex;
    padding-top: 4px;

}

.author {

    font-weight: bolder;

}

.username {

    font-weight: bolder;

    padding: 0;
    margin-top: 0;

}

.rating {
    display: flex;
}

.rating img {

    max-width: 15px;
    max-height: 15px;

}

.text2 {

    color: rgb(155, 122, 81);

    padding: 0;

}

textarea {

    background: rgba(0, 0, 0, 0);
    border: none;
    outline: 0;

    cursor: text;

    resize: none;

    padding-top: 10px;

}

.text2 {

    width: 380px;

    padding-bottom: 5px;

-ms-overflow-style: none;  /* IE and Edge */
  scrollbar-width: none;  /* Firefox */
    
}

.text2::-webkit-scrollbar {
  display: none;
}

.author {

    width: 100px;

}

.title {

    width: 260px;

}

button {

    display: flex;

    font-family: inter;
    font-weight: bolder;

    margin-top: 15px;
    margin-left: 15px;
    padding: 5px 7px 5px 7px;

    text-decoration: none;
    border: none;
    background-color: #f8a16744;

    border-radius: 7px;

}
</style>
