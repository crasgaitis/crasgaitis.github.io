var slideIndex = 1;
var autoAdvance;

showSlides(slideIndex);

// advance to the next slide automatically
function autoNextSlide() {
  showSlides(slideIndex += 1);
}

// show specific slide
function currentSlide(n) {
  clearTimeout(autoAdvance); // reset the timer when user interacts with dots or slides
  showSlides(slideIndex = n); // update the slide index

  autoAdvance = setTimeout(autoNextSlide, 3000);
}

// display slides
function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");

  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }

  // hide all slides
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  // remove the 'active' class from all dots
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }

  // show the current slide and set the corresponding dot as 'active'
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";

  // auto advance to the next slide after 3 seconds (3000 milliseconds)
  autoAdvance = setTimeout(autoNextSlide, 3000);
}

autoNextSlide();