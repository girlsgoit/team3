<template>
<body>

    
<section id="welcome">
<ul>
    <li>
        <img src="./img/books.jpg" alt="books">
        <RouterLink :to="{name:'books', params:{genre: 'new'}}">
            <h3>Books & Facts</h3>
            <span>Explore the world through books and facts, where knowledge meets enchantment.</span>
        </RouterLink>
    </li>
    
    <li>
        <img src="./img/reviews_landing.jpg" alt="reviews">
        <RouterLink  :to="{name:'reviews'}">
            <h3>Reviews</h3>
            <span>Words from avid readers, your gateway to honest book reviews.</span>
        </RouterLink>
    </li>

    <li>
        <img src="./img/community_landing.jpg" alt="community">
        <RouterLink :to="{name:'community'}">
            <h3>Community</h3>
            <span>Join our literary community and let the words unite us.</span>
        </RouterLink>
    </li>
</ul>
</section>

<section id="quote-block">
<q class="cite">Books and doors are the same thing.
    You open them, and you go through into another world.</q>
<br> <h1>Jeanette Winterson</h1>
</section>

</body>
</template>

<script>
import { RouterLink } from 'vue-router';

</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Kaisei+Decol&family=Raleway:wght@300&family=Roboto:wght@300&display=swap');

body {background-color: #FFE5B4;
margin: 0 auto;}

#welcome a{
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.8);

    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    color: white;
    text-decoration: none;

    opacity: 0;
    transition: 0.5s;


}
#welcome a:hover {
    transition: 0.5s;
    opacity: 1;
}

#welcome {
    max-width: 965px;
    margin:auto;
}

#welcome ul {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    padding: 0;
    margin: 0;

}

#welcome li{
font-family: 'Kaisei Decol', serif;
    padding-top: 25px;
    margin: 10px;
    display: block;
    width: 300px !important;
    height: 300px !important;
    position: relative;
    text-align: center;
    
}
  
#welcome img {
    height: 100%;
    width: 100%;

    object-fit: cover !important;
    object-position: center center;
}


#quote-block {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    row-gap: 5px;
    font-family: 'Kaisei Decol', serif;
    padding: 100px 0;
    margin: 2px auto;
     
    color: black;
}

.cite {
    width: 960px;
    text-align: center;
    font-size: 22px;
}
</style>