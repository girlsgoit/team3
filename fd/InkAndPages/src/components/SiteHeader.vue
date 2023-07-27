<template>
<!--Header-->
<header class="header_container">
    <a class="header_item1" href="index.html">
        <img src="./img/logo.png" alt="logo" width="50%">
        </a> 
    <img src="./img/searchbar.png.png" id="searchbar" alt="searchbar" width="30%">
    <nav class="header_item2">
        <ul class="menu_container">
            <li>
                <a href="index.html">Home</a>
            </li>
            <li>
                <a href="index.html">Books</a>
            </li><li>
                <a href="index.html">Reviews</a>
            </li>
            <li>
                <a href="index.html">Sign In</a>
            </li>
            <li>
                <a href="index.html">Community</a>
            </li>
        
        </ul>
    </nav>
</header>
    
</template>
<script>
export default {}


</script>
<style>
@import url('https://fonts.googleapis.com/css2?family=Oswald:wght@600&display=swap');
.header_container {
    background-color:  #713E5A;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-left: 200px;
    
}

#searchbar{
    position: relative;
    top:20px;
}

.header_container a img{
    height: 50px;
    width: auto;
    align-items: center ;

}

.header_item1{
    display: flex;
}

.menu_container{
    display: flex;
    justify-content: space-between;
    list-style: none;
    font-family: 'Oswald', sans-serif;
    padding-right: 200px;

}

.menu_container li a{
    display: flex;
    max-width: 960px;
    margin: 0 auto;
    justify-content: space-around;
    list-style-type: none;
    text-decoration: none;
     text-align: center;
    color: white;
    padding: 15px;
    text-transform: uppercase;
    
}
</style>