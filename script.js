const forwardBtn = document.querySelector('.forward');
const backwardBtn = document.querySelector('.backward');
const image = document.querySelector('#image');

const images = [
  'Anthony-Acosta.jpg',
  'freedom.webp',
  'istockphoto-1322104312-612x612.jpg',
  'istockphoto-1330738572-170667a.jpg',
  'luca-micheli-r9RW20TrQ0Y-unsplash.jpg',
  'modestas-urbonas-vj_9l20fzj0-unsplash.jpg',
  'vincentiu-solomon-ln5drpv_ImI-unsplash.jpg',
];

let slideIndex = 0;

//event listener
forwardBtn.addEventListener('click', nextSlide);
backwardBtn.addEventListener('click', previousSlide);

function nextSlide() {
  //increase slide index
  slideIndex++;

  //set change image by setting src attribute to srcs on images array using slideIndex as index of the array
  image.setAttribute('src', images[slideIndex]);

  //add animation by setting class of set class of sliding from css
  image.classList.add('slide-in');

  //remove slide in animation
  animationTimeout('slide-in');

  //if slideIndex is equal to number of images, go back to beginning of slide
  slideIndex >= images.length
    ? ((slideIndex = 0), image.setAttribute('src', images[slideIndex]))
    : //else slide index
      slideIndex;
}

function previousSlide() {
  //decrease slide index
  slideIndex--;

  //set change image by setting src attribute to srcs on images array using slideIndex as index of the array
  image.setAttribute('src', images[slideIndex]);

  //add animation by setting class of slide out from css
  image.classList.add('slide-out');

  //remove animation
  animationTimeout('slide-out');

  //if slideIndex is less than 0, go back to ending of slide
  slideIndex < 0
    ? ((slideIndex = images.length - 1),
      image.setAttribute('src', images[slideIndex]))
    : //else slide index
      slideIndex;
}
//remove animation by setting class to nothing after 1s
function animationTimeout(animation) {
  setTimeout(() => {
    image.classList.remove(animation);
  }, 1000);
}
