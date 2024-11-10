


//ensure that our js only after the HTML content is loaded 
document.addEventListener("DOMContentLoaded", function () {
  //Grab all the elements with class story-item 
  const buttons = document.querySelectorAll("[data-carousel-button]")

  function ahButt() {
    buttons.forEach(button => {
      button.addEventListener("click", () => {
        const offset = button.dataset.carouselButton === "next" ? 1 : -1
        const slides = button
          .closest("[data-carousel]")
          .querySelector("[data-slides]")

        const activeSlide = slides.querySelector("[data-active]")
        let newIndex = [...slides.children].indexOf(activeSlide) + offset
        if (newIndex < 0) newIndex = slides.children.length - 1
        if (newIndex >= slides.children.length) newIndex = 0

        slides.children[newIndex].dataset.active = true
        delete activeSlide.dataset.active
      })
    })
  }

    window.addEventListener("resize", ahButt); 

  ahButt(); 

})