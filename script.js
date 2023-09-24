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




document.addEventListener("DOMContentLoaded", function () {
  // Function to toggle the visibility of a specific collapsible section
  function toggleCollapsible(sectionId) {
      const section = document.getElementById(sectionId);
      if (section) {
          section.style.display = section.style.display === "none" ? "block" : "none";
      }
  }

  // Add click event listeners to the buttons
  const toggleSection1Button = document.getElementById("toggleSection1");
  if (toggleSection1Button) {
      toggleSection1Button.addEventListener("click", function () {
          toggleCollapsible("section1");
      });
  }

  const toggleSection2Button = document.getElementById("toggleSection2");
  if (toggleSection2Button) {
      toggleSection2Button.addEventListener("click", function () {
          toggleCollapsible("section2");
      });
  }
});

document.addEventListener("DOMContentLoaded", function () {
  // Get the buttons and collapsible sections
  const toggleSection1Button = document.getElementById("toggleSection1");
  const toggleSection2Button = document.getElementById("toggleSection2");
  const section1 = document.getElementById("section1");
  const section2 = document.getElementById("section2");

  // Function to toggle the visibility of a specific section
  function toggleSection(section) {
      if (section.style.display === "none") {
          section.classList.add("active"); // Add the "active" class for fade-in
      } else {
          section.classList.remove("active"); // Remove the "active" class for fade-out
      }
  }

  // Add click event listeners to the buttons
  toggleSection1Button.addEventListener("click", function () {
      toggleSection(section1);
  });

  toggleSection2Button.addEventListener("click", function () {
      toggleSection(section2);
  });
});

