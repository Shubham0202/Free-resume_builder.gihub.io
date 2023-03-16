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

// FAQS

let FQestion = document.querySelectorAll('.q-list');
let arrow = document.querySelector('.que-dnarw');
let activeAns = document.querySelector('.ans');
FQestion.forEach(e=>{
    e.addEventListener('click',()=>{
            activeAns.classList.toggle('ans');
            arrow.classList.toggle('up-arw');

            
        })
    })
