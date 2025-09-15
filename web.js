function menubtn(){
    document.getElementById("menu-content").classList.toggle("hidden")
}
function navbtn(){
    document.getElementById("nav-content").classList.toggle("hidden")
}

// // beginnig auto slide
// let index = 0
// const slides = document.getElementById("slides")
// const total = slides.children.length
// // auto slide every seconds
// setInterval(nextSlide, 4000)

// function showSlide(i) {
//     index = (i + total) % total;
//     slides.style.transform = `translateX(-${index * 100}%)`
// }
// function nextSlide(){
//     showSlide(index + 1)
// }
// function prevSlide(){
//     showSlide(index - 1)
// }
// let startX = 0
// slides.addEventListener("touchstart", (e) =>{
//     startX = e.touches[0].clientX
// })
// slides.addEventListener("touchend", (e) =>{
//     let endX = e.changedTouches[0].clientX
//     if (endX < startX - 100) nextSlide()
//     if (endX > startX + 100) prevSlide()
// })

// function tabswt(sectionId, btn){
//     document.getElementById("all").style.display = "none"   
//     document.getElementById("bouqet").style.display = "none"   
//     document.getElementById("flower").style.display = "none"   
//     document.getElementById("flowershelf").style.display = "none"   
//     document.getElementById("basket").style.display = "none"   
//     document.getElementById("gift").style.display = "none"   
//     document.getElementById(sectionId).style.display = "block"

//     document.querySelectorAll(".activelinks").forEach(button =>{
//         button.classList.remove("active")
//     })
//     btn.classList.add("active")
// }

// testimonial section

const testimonials = [
      {
        text: "I just wanted to say thank you for making such gorgeous arrangements for our birthday celebration. I couldn’t get over how perfect they were for the party. You did a fantastic job, and I appreciate it very much.",
        author: "Alejandro Houston",
        role: "Businessman"
      },
      {
        text: "The flowers were absolutely stunning, and everyone kept complimenting them. You truly exceeded our expectations!",
        author: "Samantha Lee",
        role: "Event Planner"
      },
      {
        text: "Working with you was such a pleasant experience. The attention to detail was phenomenal.",
        author: "Michael Johnson",
        role: "Designer"
      }
    ];

    let index = 0;
    const textEl = document.getElementById("testimonial-text");
    const authorEl = document.getElementById("testimonial-author");
    const roleEl = document.getElementById("testimonial-role");

    function showTestimonial(i) {
      // Start fade out
      [textEl, authorEl, roleEl].forEach(el => el.classList.remove("show"));

      setTimeout(() => {
        textEl.textContent = "“" + testimonials[i].text + "”";
        authorEl.textContent = testimonials[i].author;
        roleEl.textContent = testimonials[i].role;

        // Fade in
        [textEl, authorEl, roleEl].forEach(el => el.classList.add("show"));
      }, 300); // small delay for smooth transition
    }

    document.getElementById("next").addEventListener("click", () => {
      index = (index + 1) % testimonials.length;
      showTestimonial(index);
    });

    document.getElementById("prev").addEventListener("click", () => {
      index = (index - 1 + testimonials.length) % testimonials.length;
      showTestimonial(index);
    });

    // Autoplay every 5 seconds
    setInterval(() => {
      index = (index + 1) % testimonials.length;
      showTestimonial(index);
    }, 5000);

let labels = document.querySelectorAll(".label");
let contents = document.querySelectorAll(".label-con");

labels.forEach((label, index) => {
  label.addEventListener("click", () => {
    // First, close all content
    contents.forEach(content => content.classList.add("hidden"));
    
    // Then, open only the one that was clicked
    contents[index].classList.remove("hidden");
  });
});


