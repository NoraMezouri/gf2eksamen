const slides = document.querySelectorAll(".slide")

let slideIndex = 1

window.setInterval(function(){
    showSlides(slideIndex += 1)
}, 3000)

function showSlides(num){
    if(num > slides.length){
        slideIndex = 1
    }
    if (num < 1){
        slideIndex = slides.length
    }

    slides.forEach(function(element){
        element.style.display = "none"
    })
    slides[slideIndex - 1].style.display = "block"

}