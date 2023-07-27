<template>
<head>

<title>footer</title>

<link rel="stylesheet" href="style.css">

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
    <a href="#">Terms</a>
</li>

<li>
    <a href="#">Privacy</a>
</li>

<li>
    <a href="#">Help</a>
</li>

</ul>

<ul class="connect">

<li>
    <span>Connect</span>
</li>

<li>
    <a href="#">Instagram</a>
</li>

<li>
    <a href="#">Facebook</a>
</li>

<li>
    <a href="#">LinkedIn</a>
</li>

<li>
    <a href="#">Twitter</a>
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
<style>
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