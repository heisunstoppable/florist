function menubtn(){
    document.getElementById("menu-content").classList.toggle("hidden")
}
function navbtn(){
    document.getElementById("nav-content").classList.toggle("hidden")
}

// beginnig auto slide
let index = 0
const slides = document.getElementById("slides")
const total = slides.children.length
// auto slide every seconds
setInterval(nextSlide, 4000)

function showSlide(i) {
    index = (i + total) % total;
    slides.style.transform = `translateX(-${index * 100}%)`
}
function nextSlide(){
    showSlide(index + 1)
}
function prevSlide(){
    showSlide(index - 1)
}
let startX = 0
slides.addEventListener("touchstart", (e) =>{
    startX = e.touches[0].clientX
})
slides.addEventListener("touchend", (e) =>{
    let endX = e.changedTouches[0].clientX
    if (endX < startX - 100) nextSlide()
    if (endX > startX + 100) prevSlide()
})

