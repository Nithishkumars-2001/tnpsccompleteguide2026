//**************************** Select Sidenavbar  *****************************//

var sidenavbar = document.querySelector(".side-navbar")

function shownavbar() {
    sidenavbar.style.right = "0"
}
function closenavbar() {
    sidenavbar.style.right = "-100%"
}


//**  Header JS **//


// Slider Logic
const slider = document.querySelector('.slider');
const slides = document.querySelectorAll('.slide');
const arrowLeft = document.querySelector('.arrow-left');
const arrowRight = document.querySelector('.arrow-right');
const dots = document.querySelectorAll('.dot');
let currentIndex = 0;
const totalSlides = slides.length;

function updateSlider() {
    // Update transform
    slider.style.transform = `translateX(-${currentIndex * (100 / totalSlides)}%)`;

    // Update active dot
    dots.forEach((dot, index) => {
        dot.classList.toggle('active', index === currentIndex);
    });
}

function nextSlide() {
    currentIndex = (currentIndex + 1) % totalSlides;
    updateSlider();
}

function prevSlide() {
    currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
    updateSlider();
}

function goToSlide(index) {
    currentIndex = index;
    updateSlider();
}

// Event Listeners
arrowRight.addEventListener('click', nextSlide);
arrowLeft.addEventListener('click', prevSlide);
dots.forEach(dot => {
    dot.addEventListener('click', () => {
        goToSlide(parseInt(dot.getAttribute('data-slide')));
    });
});

// Auto-slide
let autoSlide = setInterval(nextSlide, 5000);

// Pause on hover
document.querySelector('.slider-container').addEventListener('mouseenter', () => {
    clearInterval(autoSlide);
});

document.querySelector('.slider-container').addEventListener('mouseleave', () => {
    autoSlide = setInterval(nextSlide, 5000);
});

// Initialize
updateSlider();