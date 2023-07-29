<template>
    <section  id="comunity-page">
        <Comunity id="comunity-section" />
        <ShareYourThoughts id="thoughts-section" />
    </section>
</template>
<script setup>
import ShareYourThoughts from '../components/ShareYourThoughts.vue';
import Comunity from '../components/Comunity.vue'
</script>
<style scoped>
#comunity-page{
    display: flex;
    max-height: 80vh;
    overflow: scroll;
    background-color:  rgba(248, 140, 167, 0.4);
    -ms-overflow-style: none;  /* IE and Edge */
  scrollbar-width: none;  /* Firefox */

    
}
#comunity-page::-webkit-scrollbar {
  display: none;
}



#comunity-section{
    min-width: 65%;
    background-color: #FFE5B455;

    min-height: 100%;
    padding: 5px 0 5px 90px;
    margin: 0;
    border-right: 2px solid black;

}

#thoughts-section{
    min-width: 32%;
    min-height: 100%;
    margin: 0 0;
}
</style>