<template>
<head>

<title>footer</title>


</head>


<body>

<section>

<ul class="company">

<li>
    <span>Company</span>
</li>

<li>
    <RouterLink :to="{name:'about'}">About us</RouterLink>
</li>

<li>
    <RouterLink :to="{name:'terms'}">Terms</RouterLink>
</li>

<li>
    <RouterLink :to="{name:'privacy'}">Privacy</RouterLink>
</li>

<li>
    <RouterLink :to="{name:'help'}">Help</RouterLink>
</li>

</ul>

<ul class="connect">

<li>
    <span>Connect</span>
</li>

<li>
    <a href="https://instagram.com/girlsgoit_moldova?igshid=MzRlODBiNWFlZA==">Instagram</a>
</li>

<li>
    <a href="https://www.facebook.com/GGITmoldova">Facebook</a>
</li>

<li>
    <a href="https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=&cad=rja&uact=8&ved=2ahUKEwj8wtzs766AAxU60QIHHXHrAzkQFnoECBAQAQ&url=https%3A%2F%2Fmd.linkedin.com%2Fcompany%2Fgirlsgoit&usg=AOvVaw1b6EXOkYmWpsITaEvcW89i&opi=89978449">LinkedIn</a>
</li>

<li>
    <a href="https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=&cad=rja&uact=8&ved=2ahUKEwj0nfX7766AAxWQ2gIHHRpxAWkQFnoECA8QAQ&url=https%3A%2F%2Ftwitter.com%2FGirlsGoIT&usg=AOvVaw0M2dH3m2qQZOUor4elfY6c&opi=89978449">Twitter</a>
</li>

</ul>

<div class="copyright">

<p>
    &copy; 2023, Ink & Pages Inc.

    <br>

    Desktop version
</p>

</div>

</section>

</body>
</template>
<script>
import { RouterLink } from 'vue-router';

export default {
    name: 'SiteFooter',
    components: { RouterLink }

}
</script>
<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Inter&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@800&display=swap');

body {

background-color: #F5F2F0;

border-style: solid;
border-width: 1px;
border-color: #e5ded8;

font-family:inter;
font-size: medium;
line-height:25px;

padding:20px;
margin:0 auto;

}

body li{

color:black;
list-style-type: none;

}

a{

text-decoration: none;
color: black

}

span {

font-weight:bolder;
font-family: 'Inter';
font-weight: 800;

}

section {

display: flex;
justify-content: space-between;

}

.connect {

position: relative;
right:25vw;

}

.copyright {

position: relative;
right:5vw;

}

a:hover {

font-weight: 800;

}
</style>