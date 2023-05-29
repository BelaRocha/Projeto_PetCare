const slides = document.querySelectorAll(".slide");
const slideInterval = 6000;
let currentSlide = 0;
let slideTimer;

function nextSlide() {
  slides[currentSlide].classList.remove("active");
  currentSlide = (currentSlide + 1) % slides.length;
  slides[currentSlide].classList.add("active");
}

function startSlideTimer() {
  slideTimer = setInterval(nextSlide, slideInterval);
}

startSlideTimer();
slides[0].classList.add("active");