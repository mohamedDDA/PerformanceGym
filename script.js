// Get the dropdown icon element
const dropdownIcon = document.querySelector('.drop-icon');

// Get the dropdown menu element
const dropNav = document.querySelector('.drop-nav');

// Add a click event listener to the dropdown icon
dropdownIcon.addEventListener('click', function () {
    dropNav.classList.toggle('open'); // Toggle the "open" class on the dropdown menu
});

function toggleAnimation(animationClass, targetElements) {
    targetElements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const elementBottom = element.getBoundingClientRect().bottom;

        if (elementTop < window.innerHeight - 100 && elementBottom >= 0) {
            element.classList.remove(animationClass);
            element.classList.add('reset');
        } else if (element.classList.contains('reset')) {
            element.classList.remove('reset');
        } else {
            element.classList.add(animationClass);
            element.classList.remove('reset');
        }
    });
}
const animateUpElements = document.querySelectorAll('.animate-up');
const animateLeftElements = document.querySelectorAll('.animate-left');
const animateRightElements = document.querySelectorAll('.animate-right');

// Call toggleAnimation() once immediately after page load
document.addEventListener('DOMContentLoaded', () => {
    toggleAnimation('animate-up', animateUpElements);
    toggleAnimation('animate-left', animateLeftElements);
    toggleAnimation('animate-right', animateRightElements);

    // Scroll to the top of the page
    window.scrollTo(0, 0);
});

window.addEventListener('scroll', () => {
    toggleAnimation('animate-up', animateUpElements);
    toggleAnimation('animate-left', animateLeftElements);
    toggleAnimation('animate-right', animateRightElements);
});



window.addEventListener('load', function () {
    var loadingContainer = document.querySelector('.loading-container');
    var duration = 3800; // Set the duration in milliseconds (e.g., 3500 = 3.5 seconds)
    var fadeOutDuration = 500; // Set the fade out duration in milliseconds (e.g., 500 = 0.5 seconds)
    var body = document.querySelector('body')
    setTimeout(function () {
        loadingContainer.style.opacity = '0';

        body.style.overflowY = 'visible'
        setTimeout(function () {
            loadingContainer.style.display = 'none';
        }, fadeOutDuration);
    }, duration);
});