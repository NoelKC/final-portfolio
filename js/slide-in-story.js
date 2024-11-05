

//PROF TIP TO FIX THE PROBLEM - to limit when the slide in works so it doens't turn on with phones so I can keep the resomiveness (use max-width)

//ensure that our js only after the HTML content is loaded 
document.addEventListener("DOMContentLoaded", function() {
    //Grab all the elements with class slide-item 
    const slideItem = document.querySelectorAll(".slide-item"); 

    function checkSlide() {
        //Loop through the slideItems 
        slideItem.forEach((slideItem) => {
            //Calculate the point where the top of the element is halfway into the viewport 
            const slideInAt = window.scrollY + window.innerHeight - slideItem.clientHeight/2; 
            //Calculate the bottom of the slide-item element 
            const itemBottom = slideItem.offsetTop + slideItem.clientHeight; 

            //Check if the element is halfway shown or scrollpast 
            const isHalfShown = slideInAt > slideItem.offsetTop; 
            const isNotScrollingPast = window.scrollY < itemBottom; 

            //if conditions are met, we add in slide-in class else we remove it 
            if (isHalfShown && isNotScrollingPast){
                slideItem.classList.add("slide-in"); 
            } else {
                slideItem.classList.remove("slide-in");
            }
        }) 
    }
    window.addEventListener("scroll", checkSlide); 
    window.addEventListener("resize", checkSlide); 

    checkSlide(); 
}) 