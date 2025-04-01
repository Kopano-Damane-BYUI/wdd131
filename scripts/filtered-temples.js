// Temple data array with 9 temples
const temples = [
    {
        templeName: "Aba Nigeria",
        location: "Aba, Nigeria",
        dedicated: "2005, August, 7",
        area: 11500,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
    },
    {
        templeName: "Manti Utah",
        location: "Manti, Utah, United States",
        dedicated: "1888, May, 21",
        area: 74792,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
    },
    {
        templeName: "Payson Utah",
        location: "Payson, Utah, United States",
        dedicated: "2015, June, 7",
        area: 96630,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
    },
    {
        templeName: "Yigo Guam",
        location: "Yigo, Guam",
        dedicated: "2020, May, 2",
        area: 6861,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
    },
    {
        templeName: "Washington D.C.",
        location: "Kensington, Maryland, United States",
        dedicated: "1974, November, 19",
        area: 156558,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
    },
    {
        templeName: "Lima Perú",
        location: "Lima, Perú",
        dedicated: "1986, January, 10",
        area: 9600,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
    },
    {
        templeName: "Mexico City Mexico",
        location: "Mexico City, Mexico",
        dedicated: "1983, December, 2",
        area: 116642,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
    },
    {
        templeName: "Manila Philippines",
        location: "Quezon City, 1110 Metro Manila, Philippines",
        dedicated: "1984, September, 25–27",
        area: 12700,
        imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/manila-philippines-temple/manila-philippines-temple-48891.jpg"
    },
    {
        templeName: "Maceió Brazil",
        location: "Jardim Petropolis, Maceió–AL, Brazil",
        dedicated: "2022, April, 3",
        area: 104000,
        imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/maceio-brazil-temple/maceio-brazil-temple-48800-main.jpg"
    }
];

// Function to create a temple card
function createTempleCard(temple) {
    const card = document.createElement('figure');
    card.innerHTML = `
        <img src="${temple.imageUrl}" alt="Image of ${temple.templeName}" loading="lazy">
        <figcaption>
            <h3>${temple.templeName}</h3>
            <p>${temple.location}</p>
            <p>Dedicated: ${temple.dedicated}</p>
            <p>Area: ${temple.area} sqft</p>
        </figcaption>
    `;
    return card;
}

// Function to filter and display temples
function displayTemples(filter) {
    const templeGallery = document.getElementById('temple-gallery');
    templeGallery.innerHTML = ''; // Clear current gallery

    let filteredTemples = temples;
    
    if (filter === 'old') {
        filteredTemples = temples.filter(temple => new Date(temple.dedicated).getFullYear() < 1900);
    } else if (filter === 'new') {
        filteredTemples = temples.filter(temple => new Date(temple.dedicated).getFullYear() > 2000);
    } else if (filter === 'large') {
        filteredTemples = temples.filter(temple => temple.area > 90000);
    } else if (filter === 'small') {
        filteredTemples = temples.filter(temple => temple.area < 10000);
    }

    filteredTemples.forEach(temple => {
        templeGallery.appendChild(createTempleCard(temple));
    });
}

// Event listeners for navigation links
document.querySelectorAll('#nav-links a').forEach(link => {
    link.addEventListener('click', (event) => {
        event.preventDefault();
        const filter = event.target.getAttribute('data-filter');
        displayTemples(filter);
    });
});

// Dynamic Footer: Last modified date
document.getElementById("lastModified").textContent = document.lastModified;

// Dynamic current year for footer
document.getElementById("currentyear").textContent = new Date().getFullYear();

// Default display all temples
displayTemples('all');

// Hamburger functionality for mobile menu
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('nav-links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    if (navLinks.classList.contains('active')) {
        hamburger.innerHTML = '&#10006;'; // Show X when nav is open
    } else {
        hamburger.innerHTML = '&#9776;'; // Show hamburger when nav is closed
    }
});
