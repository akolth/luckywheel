// Function to handle smooth scrolling when clicking on navigation links
function scrollToSection(targetId) {
    const targetSection = document.getElementById(targetId);

    if (targetSection) {
        window.scrollTo({
            top: targetSection.offsetTop,
            behavior: 'smooth' // Smooth scrolling behavior
        });
    }
}

// Add click event listeners to navigation links
document.addEventListener('DOMContentLoaded', function () {
    const navLinks = document.querySelectorAll('.header-nav a');

    navLinks.forEach(function (link) {
        link.addEventListener('click', function (e) {
            e.preventDefault(); // Prevent default link behavior
            const targetId = this.getAttribute('href').substring(1); // Remove the '#' from the href
            scrollToSection(targetId); // Scroll to the target section
        });
    });
});
