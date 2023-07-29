<template></template>


<script>
import { FirebaseError } from 'firebase/app';
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
        }
    }
}
</script>


<style scoped>
#left {
    position: absolute;
    right: 0px;
    top: 0px;
    bottom: 0px;
    width: 30%;
    background-color: rgba(248, 140, 167, 0.2);
    color: white;

}

ul[title]::before {
    content: attr(title);
    font-weight: bold;
    color: black;
    /* text-align: right; */
    font-size: 30px;


}

h1 {
    align-items: center;
    color: black;
}


.img {
    align-items: center;
    display: flex;
    flex-direction: column;
    padding: 50px;
}

h5 {

    color: black;
}

#left2 {
    position: absolute;
    right: 20px;
    left: 25px;
    top: 300px;
    bottom: 20px;
    background-color: rgba(248, 140, 167, 0.2);
    color: white;

}

.youranswer_container h5 {
    color: black;
    padding-left: 25px;

}
</style>