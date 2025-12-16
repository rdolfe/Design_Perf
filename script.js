// ===== BURGER MENU FUNCTIONALITY =====
const burgerMenu = document.querySelector('.burger-menu');
const navLinks = document.querySelector('.nav-links');

burgerMenu.addEventListener('click', () => {
    burgerMenu.classList.toggle('active');
    navLinks.classList.toggle('active');

    // Update ARIA attribute for accessibility
    const isExpanded = burgerMenu.getAttribute('aria-expanded') === 'true';
    burgerMenu.setAttribute('aria-expanded', !isExpanded);
});

// Close menu when clicking on a link (better UX on mobile)
const navItems = document.querySelectorAll('.nav-links a');
navItems.forEach(item => {
    item.addEventListener('click', () => {
        burgerMenu.classList.remove('active');
        navLinks.classList.remove('active');
        burgerMenu.setAttribute('aria-expanded', 'false');
    });
});

// Close menu when clicking outside
document.addEventListener('click', (e) => {
    if (!burgerMenu.contains(e.target) && !navLinks.contains(e.target)) {
        burgerMenu.classList.remove('active');
        navLinks.classList.remove('active');
        burgerMenu.setAttribute('aria-expanded', 'false');
    }
});

// ===== FORM VALIDATION & SUBMISSION =====
const contactForm = document.querySelector('.contact-form');

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Basic validation
    if (email && message) {
        alert('Merci pour votre message ! Nous vous répondrons dans les plus brefs délais.');
        contactForm.reset();
    } else {
        alert('Veuillez remplir tous les champs du formulaire.');
    }
});

// ===== RESERVATION FORM =====
const reservationForm = document.querySelector('.reservation-form');

if (reservationForm) {
    reservationForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const prenom = document.getElementById('prenom').value;
        const nom = document.getElementById('nom').value;
        const places = document.getElementById('places').value;
        const pass = document.getElementById('pass');
        const passText = pass.options[pass.selectedIndex].text;

        if (prenom && nom) {
            alert(`Merci ${prenom} ${nom} !\n\nVotre réservation de ${places} place(s) (${passText}) a bien été enregistrée.\n\nÀ très bientôt au RockFest 2026 ! 🎸`);
            reservationForm.reset();
        }
    });
}

// ===== SMOOTH SCROLL ENHANCEMENT =====
// Additional smooth scroll behavior for older browsers
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// ===== PERFORMANCE OPTIMIZATION =====
// Native lazy loading is handled via HTML attribute (loading="lazy")
// No additional JavaScript needed for modern browsers

// ===== NAVBAR SCROLL EFFECT =====
// Add shadow to navbar on scroll for better visual separation
let lastScroll = 0;
const navbar = document.querySelector('header');

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;

    if (currentScroll > 50) {
        navbar.style.boxShadow = '0 5px 20px rgba(0, 0, 0, 0.5)';
    } else {
        navbar.style.boxShadow = 'none';
    }

    lastScroll = currentScroll;
});

// ===== ACCESSIBILITY ENHANCEMENT =====
// Focus trap for mobile menu when open
const focusableElements = navLinks.querySelectorAll('a, button');
const firstFocusable = focusableElements[0];
const lastFocusable = focusableElements[focusableElements.length - 1];

burgerMenu.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && navLinks.classList.contains('active')) {
        burgerMenu.classList.remove('active');
        navLinks.classList.remove('active');
        burgerMenu.setAttribute('aria-expanded', 'false');
        burgerMenu.focus();
    }
});
