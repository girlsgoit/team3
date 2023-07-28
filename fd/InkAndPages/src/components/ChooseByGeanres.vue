<template>
<body>
    <section class="know_container" id="left">
        <ul title="Choose by Genres">
            <li>
            <RouterLink :to="{name:'books', params:{genre: 'horror'}}">Horror</RouterLink>
            </li>
            <li>
            <RouterLink :to="{name:'books', params:{genre: 'tragedy'}}">Tragedy</RouterLink>
            </li>
            <li>
            <RouterLink :to="{name:'books', params:{genre: 'romance'}}">Romance</RouterLink>
            </li>
            <li>
            <RouterLink :to="{name:'books', params:{genre: 'western'}}">Western</RouterLink>
            </li>
            <li>
            <RouterLink :to="{name:'books', params:{genre: 'literary fiction'}}">Literary fiction</RouterLink>
            </li>
            <li>
            <RouterLink :to="{name:'books', params:{genre: 'science fiction'}}">Science fiction</RouterLink>
            </li>
            <li>
            <RouterLink :to="{name:'books', params:{genre: 'thriller'}}">Thriller</RouterLink>
            </li>
            <li>
            <RouterLink :to="{name:'books', params:{genre: 'mystery'}}">Mystery</RouterLink>
            </li>
            <li>
            <RouterLink :to="{name:'books', params:{genre: 'fantasy'}}">Fantasy</RouterLink>
            </li>
            <li>
            <RouterLink :to="{name:'books', params:{genre: 'fables'}}">Fables</RouterLink>
            </li>
        </ul>

    </section>
</body>
</template>

<script>
export default{
    name:'ChooseByGeanres'
}
</script>

<style scoped>

@import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Edu+SA+Beginner&family=Lobster&family=Oswald:wght@600&display=swap');
#left {
    right:0px;
    top:0px;
    bottom:0px;
    height: 100%;
    color:white;
   
}

ul[title]::before {
    font-family: 'Bebas Neue', sans-serif;


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
    margin: 0;
}

li{
    font-family: 'Oswald', sans-serif;
   
    color: black;
    text-align: center;
   font-size: 20px;
   
}

a:visited{
  color:#713E5A;
}

a {

color:#713E5A;
text-decoration: none;

}
 
</style>