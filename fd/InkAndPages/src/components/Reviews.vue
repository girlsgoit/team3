<template>
<body>

<section>
    <div class="rectangle1">
        <img class="pfp" src="./img/profile_icon_reviews.png" alt="profile picture">
        <span class="content">
        <span class="book">
        <p class="author">{{author}}</p>
        <p class="title">, {{ bookName }}</p>
        </span>

        <p class="username">@{{userName}}</p>
        <p class="text">{{ text }}</p>            
        <span class="rating">
            <img id="stea1" :src="1 <= this.rating ? './stea_plina.png' : './stea_goala.png'" alt="plin">
            <img id="stea2" :src="2 <= this.rating ? './stea_plina.png' : './stea_goala.png'" alt="plin">
            <img id="stea3" :src="3 <= this.rating ? './stea_plina.png' : './stea_goala.png'" alt="plin">
            <img id="stea4" :src="4 <= this.rating ? './stea_plina.png' : './stea_goala.png'" alt="plin">
            <img id="stea5" :src="5 <= this.rating ? './stea_plina.png' : './stea_goala.png'" alt="gol">
        </span>
    </span>
    </div>

</section>
</body>
</template>

<script>
export default {
    name: "Reviews",
    props:{
        author:String,
        bookName:String,
        rating:Number,
        text:String,
        userName:String,
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
    margin-top: 22px;

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
font-weight:500;
}

.text {

font-weight:lighter;
letter-spacing: 0px;

}

</style>