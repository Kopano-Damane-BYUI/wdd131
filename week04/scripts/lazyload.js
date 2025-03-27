// Set the last modified date of the page
document.getElementById("last-modified").textContent = document.lastModified;

// Intersection Observer to handle lazy loading
const images = document.querySelectorAll('img[loading="lazy"]');

// IntersectionObserver options
const options = {
    root: null, // use viewport as the root
    rootMargin: "0px",
    threshold: 0.1 // trigger when 10% of the image is in view
};

// Callback function for the IntersectionObserver
const handleImageLoad = (entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('loaded');
            observer.unobserve(entry.target);
        }
    });
};

// Create the IntersectionObserver
const observer = new IntersectionObserver(handleImageLoad, options);

// Observe each image
images.forEach(image => {
    observer.observe(image);
});
