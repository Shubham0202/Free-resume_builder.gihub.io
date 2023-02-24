let hammer = document.querySelector('.hammer');
navLinks = document.querySelector('.nav-links');
hammer.addEventListener('click',()=>{
    navLinks.classList.toggle('nav-links-add');
let h1 = document.querySelector('.hammer .h1');
let h2 = document.querySelector('.hammer .h2');
let h3 = document.querySelector('.hammer .h3');
h1.classList.toggle('cross');
h2.classList.toggle('cross2');
h3.classList.toggle('cross');
});

// copyright 
let copyright = document.querySelector('.current-year');
let year= new Date();
copyright.innerHTML=year.getFullYear();
console.log(copyright);

