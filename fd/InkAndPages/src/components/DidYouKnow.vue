<template>
<head>
<title>Did you know</title>
<link rel="stylesheet" href="style.css">
</head>
<body>
    <section class="know_container" id="left">
        <ul title="Did you know?">
            <li>There are around 130 million published books.</li>
            <li>The most sold book is the Bible.</li>
            <li>The longest book in the world is ‘Remembrance of Things Past’.</li>
            <li>The first ever story written was‘The Epic of Gilgamesh’ .</li>
            <li>The fear of running out of something to read is called Abibliophobia.</li>
        </ul>

    </section>
</body>
</template>
<script>
</script>
<style scoped>


#left {
    position:absolute;
    right:0px;
    top:0px;
    bottom:0px;
    width: 30%;
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
    height: 100vh;
}

li{
   
    color: black;
    text-align: center;
   font-size: 20px;
   
}
</style>