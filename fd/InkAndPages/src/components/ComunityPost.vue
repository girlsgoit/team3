<template>
<div class="book1">
            <h4 >
                {{ Title }}
            </h4>
            <h4 class="name1">
                @{{ UserName }}
            </h4>
            <h3>
                {{Data}}
            </h3>
            <p>
                {{ Text }}
            </p>
        </div>
        
</template>

<script>
export default{
    props:{
     Data:String,
     Text:String,
     Title:String,
     UserName:String,
    }
}
</script>

<style scoped>
.book1 h4{
    font-size:medium !important;
    color: black;
    text-align: left;
    font-size: 20px;
    padding-left: 60px;
    padding-top: 5px;
    padding-bottom: 0px;
    height: 0.1vh;
    
}


.name1{
    font-size:medium !important;
    color: black;
    text-align: left;
    font-size: 20px;
   padding-left: 60px;
   height: 0.1vh;
}

.book1 h3{
    color: black;
    text-align: left;
    font-size: 20px;
   padding-left: 60px;
   height: 0.1vh;
}

p{

    font-family: 'Roboto Condensed', sans-serif; 
    color: black;
    text-align: left;
   padding-left: 60px;
   padding-right: 60px;
}

</style>