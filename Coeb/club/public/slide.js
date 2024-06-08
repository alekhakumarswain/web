const slides = document.querySelectorAll('.slides img');
const intervalTime = 3000; // Change slide every 3 seconds

let slideInterval;

const nextSlide = () => {
  // Get the current slide with the 'current' class
  const current = document.querySelector('.slides img.current');

  // Remove 'current' class from the current slide
  current.classList.remove('current');

  // Get the next slide
  let nextSlide;

  if (current.nextElementSibling) {
    nextSlide = current.nextElementSibling;
  } else {
    // If the current slide is the last one, go back to the first slide
    nextSlide = slides[0];
  }

  // Add 'current' class to the next slide
  nextSlide.classList.add('current');

  // Reset interval
  clearInterval(slideInterval);
  slideInterval = setInterval(nextSlide, intervalTime);
}

// Run nextSlide function at interval
slideInterval = setInterval(nextSlide, intervalTime);
