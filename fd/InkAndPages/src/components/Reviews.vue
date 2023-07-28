<template>
<body>

<section>
    <div class="rectangle1">
        <img class="pfp" src="../img/profile_icon_reviews.png" alt="profile picture">
        <span class="content">
        <span class="book">
        <p class="author">Jane Austen</p>
        <p class="title">, Pride and prejudice</p>
        </span>

        <p class="username">@user3932890</p>
        <p class="text">Best book ever! This is my favourite book! Although, lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis esse facilis odio temporibus cum, quae enim ad ex, tempore inventore amet!</p>            
        <span class="rating">
            <img id="stea1" src="../img/stea_plina.png" alt="plin">
            <img id="stea2" src="../img/stea_plina.png" alt="plin">
            <img id="stea3" src="../img/stea_plina.png" alt="plin">
            <img id="stea4" src="../img/stea_plina.png" alt="plin">
            <img id="stea5" src="../img/stea_goala.png" alt="gol">
        </span>
    </span>
    </div>

</section>
</body>
</template>

<script>

</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Inter&display=swap');
body {
font-family: inter;
font-size: 12px;
}

textarea {
    font-family: inter;
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