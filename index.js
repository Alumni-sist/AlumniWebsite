// Get all the "View Profile" links
const viewProfileLinks = document.querySelectorAll('a[href="#"]');

// Add click event listener to each link
viewProfileLinks.forEach(link => {
  link.addEventListener('click', (event) => {
    event.preventDefault();
    const alumniName = link.parentNode.querySelector('h2').innerText;
    alert(`You clicked on the profile of ${alumniName}`);
  });
});

/* Slideshow */
document.addEventListener("DOMContentLoaded", function(event) {
  var slides = document.querySelectorAll(".slide");
  var prevButton = document.querySelector(".prev");
  var nextButton = document.querySelector(".next");
  var currentSlide = 0;
  var slideInterval = setInterval(nextSlide, 3000);

  function nextSlide() {
    slides[currentSlide].style.display = "none";
    currentSlide = (currentSlide + 1) % slides.length;
    slides[currentSlide].style.display = "block";
  }

  prevButton.addEventListener("click", function() {
    slides[currentSlide].style.display = "none";
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    slides[currentSlide].style.display = "block";
  });

  nextButton.addEventListener("click", nextSlide);
});

/*slide show end */