const menuBtn = document.getElementById('menu-btn');
const navbar = document.querySelector('.navbar');
menuBtn.addEventListener('click', () => {
  navbar.classList.toggle('active');
});

let currentIndex = 0;

function showSlide(index) {
    const slides = document.querySelector('.slides');
    const dots = document.querySelectorAll('.dot');
    const totalSlides = slides.children.length;

    // Handle circular navigation
    if (index >= totalSlides) {
        currentIndex = 0;
    } else if (index < 0) {
        currentIndex = totalSlides - 1;
    } else {
        currentIndex = index;
    }

    // Update slide position
    slides.style.transform = `translateX(-${currentIndex * 100}%)`;

    // Update active dot
    dots.forEach((dot, i) => {
        dot.classList.toggle('active', i === currentIndex);
    });
}

function moveSlide(step) {
    showSlide(currentIndex + step);
}

function currentSlide(index) {
    showSlide(index - 1);
}

// Initialize the slider
showSlide(0);

