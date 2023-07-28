<template>
<section id="books-page">
    <Books id="books-section" />
    <ChooseByGeanres id="genres-section"/>
</section>
</template>

<script>
import Books from '../components/Books.vue'
import ChooseByGeanres from '../components/ChooseByGeanres.vue';
</script>

<style scoped> 
#books-page{
    display: flex;
    max-height: 80vh;
    overflow: scroll;
    background-color:  rgba(248, 140, 167, 0.4);
    -ms-overflow-style: none;  /* IE and Edge */
  scrollbar-width: none;  /* Firefox */

    
}
#books-page::-webkit-scrollbar {
  display: none;
}



#books-section{
    min-width: 70%;
    background-color: #FFE5B455;

    height: 100%;
    padding: 5px 0 5px 90px;
    margin: 0;
    border-right: 2px solid black;

}

#genres-section{
    min-width: 23%;
    min-height: 100%;
    margin: 0 0;
}


 
</style>