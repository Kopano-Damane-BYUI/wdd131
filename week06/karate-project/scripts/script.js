// === Responsive Nav Toggle ===
const navToggle = document.getElementById("nav-toggle");
const nav = document.getElementById("nav");

navToggle.addEventListener("click", () => {
  nav.classList.toggle("active");
});

// === Schedule Filter ===
const buttons = document.querySelectorAll('.filter-buttons button');
const classCards = document.querySelectorAll('.class-card');
const scheduleContainer = document.querySelector('.schedule-container');

buttons.forEach(button => {
  button.addEventListener('click', () => {
    const filter = button.getAttribute('data-filter');

    // Update active button styling
    buttons.forEach(btn => btn.classList.remove('active'));
    button.classList.add('active');

    let visibleCount = 0;

    classCards.forEach(card => {
      if (filter === 'all' || card.classList.contains(filter)) {
        card.style.display = 'block';
        visibleCount++;
      } else {
        card.style.display = 'none';
      }
    });

    if (visibleCount === 1) {
      scheduleContainer.classList.add('single-visible');
    } else {
      scheduleContainer.classList.remove('single-visible');
    }
  });
});

// Open modal by ID
function openModal(id) {
  document.getElementById('modal-' + id).style.display = 'block';
}

// Close modal by ID
function closeModal(id) {
  document.getElementById('modal-' + id).style.display = 'none';
}

// Optional: Close modal when clicking outside the box
window.onclick = function(event) {
  const modals = document.querySelectorAll('.modal');
  modals.forEach(modal => {
    if (event.target === modal) {
      modal.style.display = 'none';
    }
  });
};
