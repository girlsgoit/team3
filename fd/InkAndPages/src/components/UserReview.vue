<template>
<body>
<section>

<div class="rectangle2">

    <img class="pfp" src="./img/profile_icon_reviews.png" alt="profile picture">

    <span class="content"></span>

    <span class="book">

    <textarea class="author">Author name</textarea>

        <p>,</p>

    <textarea class="title">Book name</textarea>

    </span>

    <textarea class="username">@user1823719</textarea>
    <textarea class="text2">Write your review here...</textarea>            
    <span class="rating">

        <img v-on:click="handleRating" id="stea1" src="./img/stea_goala.png" alt="gol">
        <img v-on:click="handleRating" id="stea2" src="./img/stea_goala.png" alt="gol">
        <img v-on:click="handleRating" id="stea2" src="./img/stea_goala.png" alt="gol">
        <img v-on:click="handleRating" id="stea3" src="./img/stea_goala.png" alt="gol">
        <img v-on:click="handleRating" id="stea4" src="./img/stea_goala.png" alt="gol">
        <img v-on:click="handleRating" id="stea5" src="./img/stea_goala.png" alt="gol">
    </span>

</div>
</section>
</body>
</template>
<script>
export default {
    name: "UserReview",
    data: function(){
        return{
            title: '',
            author: '',
            userName: '',
            text: '',
            rating: 0,
     }
    
    },
    methods: {
        handleSubmit: function() {

        },
        handleRating: function(event) {
            console.log(event.target.id)

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

.rectangle1 {

    min-height: 55px;
    width: 470px;
    background-color: #FFAE7033;
    
    position:relative;
    left:50px;
    
    border-radius: 17px;
    padding: 5px 25px 20px 20px;
    
    position:relative;
    top:22px;

    display: flex;
    
    }
    
    .rectangle2 {
 
        min-height: 55px;
        width: 470px;
        background-color: #FFAE7033;
        
        position:relative;
        left:50px;
        
        border-radius: 17px;
        padding: 5px 25px 20px 20px;
        
        position:relative;
        top:22px;
    
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

max-width:400px;

}

.book {

display: flex;
padding-top:4px;

}

.author {

font-weight: bolder;

}

.username {

font-weight: bolder;

padding:0;
margin-top: 0;

}
.rating{
    display: flex;
}

.rating img{

max-width: 15px;
max-height: 15px;

}

.text2 {

color:rgb(155, 122, 81);

padding:0;

}

textarea {

    background: rgba(0, 0, 0, 0);
    border: none;
    outline: 0;

    cursor: text;

    resize:none;

    padding-top:10px;

  }

.text2 {

width:380px;

padding-bottom: 5px;

}

.author {

width:100px;

}

.title {

width:260px;

}

</style>
