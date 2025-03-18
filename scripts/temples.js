// Dynamic Footer: Last modified date
document.getElementById("lastModified").textContent = document.lastModified;

// Dynamic current year for footer
document.getElementById("currentyear").textContent = new Date().getFullYear();

const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('nav-links');

hamburger.addEventListener('click', () => {
    // Toggle the 'active' class to show/hide nav links
    navLinks.classList.toggle('active');

    // Toggle the hamburger icon with 'X' icon
    if (navLinks.classList.contains('active')) {
        hamburger.innerHTML = '&#10006;'; // Show X when nav is open
    } else {
        hamburger.innerHTML = '&#9776;'; // Show hamburger when nav is closed
    }
});
