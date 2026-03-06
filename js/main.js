// ===========================================
// MOBILE NAVIGATION TOGGLE
// ===========================================
document.addEventListener('DOMContentLoaded', () => {
  const navToggle = document.getElementById('navToggle');
  const navMenu = document.getElementById('navMenu');

  if (navToggle && navMenu) {
    navToggle.addEventListener('click', () => {
      navToggle.classList.toggle('active');
      navMenu.classList.toggle('active');
    });

    // Close menu when clicking on a link
    const navLinks = navMenu.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        navToggle.classList.remove('active');
        navMenu.classList.remove('active');
      });
    });

    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
      if (!navToggle.contains(e.target) && !navMenu.contains(e.target)) {
        navToggle.classList.remove('active');
        navMenu.classList.remove('active');
      }
    });
  }
});

// ===========================================
// HERO PARALLAX EFFECT
// ===========================================
window.addEventListener('scroll', () => {
  const scrolled = window.pageYOffset;
  const heroBg = document.getElementById('heroBg');

  if (heroBg) {
    heroBg.style.transform = `translateY(${scrolled * 0.5}px)`;
  }
});

// ===========================================
// ICE CRACKLE DETAIL ZOOM
// ===========================================
const iceDetail = document.getElementById('iceDetail');
if (iceDetail) {
  iceDetail.addEventListener('mousemove', (e) => {
    const rect = iceDetail.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;

    iceDetail.style.transformOrigin = `${x}% ${y}%`;
  });
}

// ===========================================
// SMOOTH SCROLL FOR ANCHOR LINKS
// ===========================================
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

// ===========================================
// INTERSECTION OBSERVER FOR FADE-IN ANIMATIONS
// ===========================================
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
    }
  });
}, observerOptions);

// Observe elements with fade-in class
document.querySelectorAll('.philosophy-card, .work-card, .feature-item').forEach(el => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(30px)';
  el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
  observer.observe(el);
});

// ===========================================
// WORK CARD TILT EFFECT (OPTIONAL ENHANCEMENT)
// ===========================================
const workCards = document.querySelectorAll('.work-card');
workCards.forEach(card => {
  card.addEventListener('mouseenter', function() {
    this.style.transition = 'transform 0.3s ease, box-shadow 0.3s ease';
  });

  card.addEventListener('mousemove', function(e) {
    const rect = this.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = (y - centerY) / 20;
    const rotateY = (centerX - x) / 20;

    this.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-8px)`;
  });

  card.addEventListener('mouseleave', function() {
    this.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) translateY(0)';
  });
});

// ===========================================
// CONSOLE MESSAGE (EASTER EGG)
// ===========================================
console.log('%c吳榮交趾陶 Wu Rong Cochin Ceramics', 'color: #B8315A; font-size: 20px; font-weight: bold;');
console.log('%c從天到地的藝術對話 · 葉王派系傳承 · 黃金寶石釉的極致淬鍊', 'color: #7DBFE8; font-size: 12px;');
console.log('%cWebsite designed with ❤️ for the preservation of traditional craftsmanship', 'color: #3F3F46; font-size: 10px;');
