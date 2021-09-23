// burger options

const burger = document.querySelector('.burger');
const nav = document.querySelector('.nav-links');
const navLinks =document.querySelectorAll('.nav-links li')

burger.addEventListener('click',()=>{
        //Toggle Nav
        nav.classList.toggle('nav-active');
         
        //Animate Links
        navLinks.forEach((link,index)=>{
        
            if(link.style.animation){
                link.style.animation = '';
            }else{
                link.style.animation = `navLinkFade 0.5s ease forwards ${index/5 + 0.5}s` ; 
            }
            })

        //Animate Lines (Making Cross)
        burger.classList.toggle('toggle')
});

// carousel
var slides = document.querySelector('.slider-items').children;
var nextSlide = document.querySelector(".right-slide");
var prevSlide = document.querySelector(".left-slide");
var totalSlides = slides.length;
var index = 0;

nextSlide.onclick = function () {
    next("next");
}
prevSlide.onclick = function () {
    next("prev");
}

function next(direction) {

    if (direction == "next") {
        index++;
        if (index == totalSlides) {
            index = 0;
        }
    } else {
        if (index == 0) {
            index = totalSlides - 1;
        } else {
            index--;
        }
    }

    for (i = 0; i < slides.length; i++) {
        slides[i].classList.remove("active");
    }
    slides[index].classList.add("active");

}