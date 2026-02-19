// TravelTime - script.js
console.log("TravelTime scripts loaded");

// Smooth scroll for anchor links (in-page)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    const href = this.getAttribute('href');
    if (href && href.startsWith('#')) {
      const target = document.querySelector(href);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth' });
      }
    }
  });
});

// Navbar shadow on scroll
window.addEventListener('scroll', () => {
  const nav = document.querySelector('nav.navbar');
  if (!nav) return;
  if (window.scrollY > 40) nav.classList.add('shadow-sm');
  else nav.classList.remove('shadow-sm');
});

// Section fade-in fallback (for non-AOS users)
const secs = document.querySelectorAll('.section-animate');
function revealSections() {
  secs.forEach(s => {
    const top = s.getBoundingClientRect().top;
    if (top < window.innerHeight - 100) s.classList.add('section-visible');
  });
}
window.addEventListener('load', revealSections);
window.addEventListener('scroll', revealSections);

// Contact form demo behavior (no backend)
const contactForm = document.getElementById('contactForm');
if (contactForm) {
  contactForm.addEventListener('submit', function(e) {
    e.preventDefault();
    const alertBox = document.getElementById('contactAlert');
    if (alertBox) {
      alertBox.classList.remove('d-none');
      contactForm.reset();
      setTimeout(() => alertBox.classList.add('d-none'), 4500);
    } else {
      alert('Message sent (demo).');
      contactForm.reset();
    }
  });
}
