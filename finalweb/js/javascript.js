// Get the search input element
const searchInput = document.getElementById('search');

// Add event listener to clear the default value of the search input when focused
searchInput.addEventListener('focus', () => {
    if (searchInput.value === 'Search...') {
        searchInput.value = '';
    }
});

// Add event listener to restore the default value of the search input when blurred and empty
searchInput.addEventListener('blur', () => {
    if (searchInput.value === '') {
        searchInput.value = 'Search...';
    }
});

// Set up image slideshow
let slideIndex = 0;
const slides = document.getElementsByClassName('mySlides');
const showSlides = () => {
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = 'none';
    }
    slideIndex++;
    if (slideIndex > slides.length) {
        slideIndex = 1;
    }
    slides[slideIndex - 1].style.display = 'block';
    setTimeout(showSlides, 3000); // Change image every 3 seconds
};
showSlides();
