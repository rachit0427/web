// =============================
// Navbar Scroll Effect
// =============================

const navbar = document.querySelector('nav');

window.addEventListener('scroll', () => {

    if (window.scrollY > 50) {

        navbar.classList.add('scrolled');

    } else {

        navbar.classList.remove('scrolled');

    }

});




// =============================
// Typing Animation
// =============================


const text = [
    "Frontend Web Developer",
    "UI Designer",
    "JavaScript Developer"
];


let index = 0;
let charIndex = 0;

const typingElement = document.querySelector(".hero-content h2");


function typeEffect(){

    if(charIndex < text[index].length){

        typingElement.textContent += text[index].charAt(charIndex);

        charIndex++;

        setTimeout(typeEffect,100);

    }

    else{

        setTimeout(eraseEffect,1500);

    }

}



function eraseEffect(){

    if(charIndex > 0){

        typingElement.textContent =
        text[index].substring(0,charIndex-1);

        charIndex--;

        setTimeout(eraseEffect,50);

    }

    else{

        index++;

        if(index >= text.length){

            index = 0;

        }


        setTimeout(typeEffect,500);

    }

}


typingElement.textContent="";

typeEffect();





// =============================
// Scroll Reveal Animation
// =============================


const sections = document.querySelectorAll("section");


window.addEventListener("scroll",()=>{


    sections.forEach(section=>{


        const top = section.getBoundingClientRect().top;


        if(top < window.innerHeight - 100){

            section.classList.add("show");

        }


    });


});