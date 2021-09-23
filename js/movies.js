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

//search by using filter method

const btns = document.querySelectorAll(".btn");
const movieLists = document.querySelectorAll(".movie-lists");
const btn = document.getElementById("Genre");
const filterBox=document.getElementsByClassName("filter-box");
console.log(filterBox,btns)



for(i=0;i < btns.length;i++){
    btns[i].addEventListener('click',(e)=>{
        e.preventDefault();
        
        const filter= e.target.dataset.filter;
        console.log(filter);

        movieLists.forEach((movie)=>{
            if(filter == 'all'){
                movie.style.display="block"
            }else{
                if(movie.classList.contains(filter)){
                    movie.style.display="block";
                    btn.textContent = filter;          
                }
                else{
                    movie.style.display="none";
                }
            }
        })
    })
}

//search by filter (genre)

const search = document.getElementById('search');

search.addEventListener("keyup",(e)=>{
    e.preventDefault();

    const searchValue = search.value.toLowerCase().trim();

    for (i = 0; i< movieLists.length; i++){
        if(movieLists[i].classList.contains(searchValue)){
            movieLists[i].style.display = "block";

        }else if(searchValue == ""){
            movieLists[i].style.display = "block";
        }else{
            movieLists[i].style.display = "none";

        }
    }

})

// search by movie name

search.addEventListener('keyup',()=>{
    let filter =document.getElementById('search').value.toLowerCase();
    let movies = document.getElementById('movie-lists');
    let item = movies.getElementsByClassName('movie-lists');
    
    for(var i=0; i<item.length;i++){
        let title = item[i].getElementsByTagName('h3')[0].textContent.toLowerCase();

        if(title){

            if(title.indexOf(filter)>-1){
                item[i].style.display="block";
            }else{
                item[i].style.display="none";
            }
            
        }
    }

 })

 //burger options
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
