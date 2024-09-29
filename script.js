// Select the Home link by its ID
const homeLink = document.getElementById('home-link');

// Add an event listener for the click event
homeLink.addEventListener('click', function (event) {
    event.preventDefault();  // Prevent the default link behavior
    window.scrollTo({
        top: 0, // Scroll to the top of the page
        behavior: 'smooth' // Smooth scrolling
    });
});


