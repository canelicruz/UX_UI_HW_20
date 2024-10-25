window.onload = function() {
    const logo = document.getElementById('logo');
    logo.classList.add('bigger'); // Trigger the logo to rotate once on page load
};



// smooth scrolling 
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        const target = document.querySelector(this.getAttribute('href'));
        target.scrollIntoView({
            behavior: 'smooth'
        });
    });
});



// Scroll to Top Button
const scrollToTopButton = document.getElementById('scrollToTop');

// Show the button when scrolling down
window.onscroll = function() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        scrollToTopButton.style.display = 'block';
    } else {
        scrollToTopButton.style.display = 'none';
    }
};

// Scroll to top smoothly when the button is clicked
scrollToTopButton.addEventListener('click', function() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Get the scroll dot element
const scrollDot = document.getElementById('scrollDot');

// Update the position of the dot when the user scrolls
window.addEventListener('scroll', function() {
    // Calculate how much the user has scrolled
    const scrollTop = window.scrollY || document.documentElement.scrollTop;
    const documentHeight = document.documentElement.scrollHeight - window.innerHeight;

    // Calculate the percentage of the page that has been scrolled
    const scrollPercent = scrollTop / documentHeight;

    // Move the dot relative to the window height (so it stays within the viewport)
    const maxScrollHeight = window.innerHeight - scrollDot.clientHeight;
    const newTopPosition = scrollPercent * maxScrollHeight;

    // Update the dot's top position
    scrollDot.style.top = newTopPosition + 'px';
});
// JavaScript for toggling the mobile navigation
document.querySelector('.hamburger').addEventListener('click', function() {
    document.querySelector('nav').classList.toggle('active');
});
