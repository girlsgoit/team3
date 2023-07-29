<template>
<section class="share" id="left">
       
       <div class="img">

           <textarea v-model="Title" class="thoughts" placeholder="Share your thoughts"></textarea>
          <img class="pfp" src="./img/profile_icon_comm.png">
          <textarea v-model="UserName" class="user" placeholder="@username"></textarea>

       </div>

   <div class="youranswer" id="left2">
       <textarea v-model="Text" class="answer" placeholder="Type your comment here..."></textarea>

   </div>
       
   <button v-on:click="displayThoughts">POST</button>
   </section>


</template>


<script>
import { vModelCheckbox } from 'vue';
import { db } from '../firebase/index.js';
import { getFirestore, collection, addDoc, Timestamp } from 'firebase/firestore';
export default {
    name: 'ShareYourThoughts',
    data: function () {
        return {
            Data: '',
            Text: '',
            Title: '',
            UserName: ''
        }
    },
    methods: {
        displayThoughts: async function () {
            const thought = await addDoc(collection(db, "Community"), {
                Data: Timestamp.now(),
                Text: this.Text,
                Title: this.Title,
                UserName: this.UserName
            });
            console.log(" ", thought.id);
            this.Data =""
            this.Text=""
            this.Title=""
            this.UserName="" 
            this.$router.go()
        }
    }
}
</script>


<style scoped>

@import url('https://fonts.googleapis.com/css2?family=Koh+Santepheap&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Judson&display=swap');
#left {
    min-height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    width: 30%;
    color:white;
    border-radius:20px;
   
}


/* h1 {
    align-items: center;
    text-align: center;

    margin-top:5px;

    font-family: "koh santepheap";
    font-weight:900;

    color: black;
} */


.img{
    align-items: center;
    display: flex;
    flex-direction: column;
    padding: 50px;
    padding-top:20px;
    max-height:100px;
}

h5{
    
    color: black;
}

#left2 {
    /* position:absolute;

    right:20px;
    left: 25px;
    top: 300px;
    bottom: 20px; */
    margin-top: 125px;
    color:white;
    border-radius:20px;
    align-self: center;
   
}

.youranswer_container h5{
    color: black;
    padding-left: 25px;
    
}

.thoughts{
    font-family: 'judson';
font-size:28px;

line-height: 25px;
min-height: 54px;
    width: 250px;
    text-align: center;
    box-sizing: border-box;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    -o-box-sizing: border-box;
    -ms-box-sizing:border-box;
}


textarea {
    background: rgba(248, 140, 167, 0.2);
    border: none;
    outline: 0;
    cursor: text;
    resize:none;
    border-radius:20px;
    min-height: 64px;
    /* font-size: 28px; */
    margin-top: 10px;
    text-align: center;
    box-sizing: border-box;
    text-align: center;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    -o-box-sizing: border-box;
    -ms-box-sizing:border-box;-ms-overflow-style: none;  /* IE and Edge */
  scrollbar-width: none;  /* Firefox */

    
}
textarea::-webkit-scrollbar {
  display: none;
}

::placeholder {

position: relative;


font-family: 'judson';
font-size:20px;
text-align: center;

line-height: 40px;

}

.user {

position: relative;

text-align: center;
margin-top:5px;

font-family: 'judson';
font-size:28px;

line-height: 25px;
min-height: 54px;
text-align: center;
box-sizing: border-box;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    -o-box-sizing: border-box;
    -ms-box-sizing:border-box;

}

.pfp {

margin-bottom:10px;
margin-top: 20px;

}

.answer {

    margin-top: 20px;
    text-align: left;
    margin-left: 90px;
    
    font-family: 'judson';
    font-size:28px;
    
    line-height: 25px;
    
    height:250px;
    width:339px;
    text-align: center;
    box-sizing: border-box;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    -o-box-sizing: border-box;
    -ms-box-sizing:border-box;

}

button {

margin-left:210px;
margin-top: 75px;
margin-bottom: 20px;

background-color: rgba(245, 128, 143, 0.39);
border: none;
color: rgb(56, 9, 9);
font-family: 'judson';
font-size: 20px;
padding: 15px 32px;
text-align: center;
text-decoration: none;

border-radius: 15px;

}
</style>