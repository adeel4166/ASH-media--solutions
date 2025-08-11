// === PRELOADER HIDE ===
window.addEventListener('load', () => {
  const preloader = document.getElementById('preloader');
  if (preloader) preloader.style.display = 'none';
});

// === HEADER SCROLL EFFECT ===
window.addEventListener('scroll', () => {
  const header = document.querySelector('header');
  if (!header) return;
  header.style.background = window.scrollY > 50 ? '#f9f9f9' : '#fff';
  header.style.boxShadow = window.scrollY > 50 
    ? '0 2px 20px rgba(0,0,0,0.2)' 
    : '0 2px 15px rgba(0,0,0,0.1)';
});

// === HAMBURGER NAVBAR TOGGLE ===
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');
if (hamburger && navLinks) {
  hamburger.addEventListener('click', () => navLinks.classList.toggle('show'));
}

// === IMAGE FADE-IN ===
document.querySelectorAll('img').forEach(img => {
  if (img.complete) img.classList.add('loaded');
  else img.addEventListener('load', () => img.classList.add('loaded'));
});


// === GSAP SCROLL ANIMATIONS ===
function initScrollAnimations() {
  gsap.utils.toArray("section").forEach(section => {
    gsap.from(section, { opacity: 0, y: 50, duration: 1, scrollTrigger: { trigger: section, start: "top 80%" } });
  });

  gsap.from(".service-card", { scrollTrigger: { trigger: ".services-grid", start: "top 80%" }, opacity: 0, y: 50, duration: 0.6, stagger: 0.3 });
  gsap.from(".gallery-item", { scrollTrigger: { trigger: ".gallery-grid", start: "top 80%" }, opacity: 0, scale: 0.8, duration: 0.8, stagger: 0.2 });
  gsap.from(".testimonial-card", { scrollTrigger: { trigger: ".testimonials-grid", start: "top 85%" }, opacity: 0, y: 40, duration: 0.6, stagger: 0.2 });

  document.querySelectorAll('.team-card').forEach((card, i) => {
    gsap.from(card, { opacity: 0, y: 50, duration: 0.8, delay: i * 0.1, scrollTrigger: { trigger: card, start: "top 85%" } });
  });

  const heading = document.querySelector(".section-heading.glow-text");
  if (heading) {
    gsap.from(heading, { opacity: 0, scale: 0.8, duration: 1, scrollTrigger: { trigger: heading, start: "top 90%" } });
  }

  const heroVideo = document.querySelector(".hero-video-container");
  if (heroVideo) {
    gsap.from(heroVideo, { opacity: 0, scale: 0.8, duration: 1.2, scrollTrigger: { trigger: heroVideo, start: "top 80%" } });
  }

  const heroContent = document.querySelector(".hero-content");
  if (heroContent) {
    gsap.from(heroContent, { opacity: 0, x: 50, duration: 1.2, scrollTrigger: { trigger: heroContent, start: "top 80%" } });
  }
}

// === GSAP NAVBAR LINK EFFECTS ===
function initNavbarLinkEffects() {
  gsap.from("header nav a", { opacity: 0, y: -20, stagger: 0.1, duration: 0.6, ease: "power2.out" });

  document.querySelectorAll("header nav a").forEach(link => {
    const underline = document.createElement('span');
    underline.style.position = 'absolute';
    underline.style.height = '2px';
    underline.style.width = '0%';
    underline.style.left = '0';
    underline.style.bottom = '-3px';
    underline.style.background = '#4ba3ff';
    underline.style.boxShadow = '0 0 8px rgba(75,163,255,0.8)';
    underline.style.transition = 'width 0.3s ease';
    link.style.position = 'relative';
    link.appendChild(underline);

    link.addEventListener("mouseenter", () => {
      gsap.to(link, { scale: 1.1, color: "#4ba3ff", textShadow: "0 0 10px rgba(75,163,255,0.7), 0 0 20px rgba(75,163,255,0.5)", duration: 0.3 });
      underline.style.width = '100%';
    });
    link.addEventListener("mouseleave", () => {
      gsap.to(link, { scale: 1, color: "#333", textShadow: "none", duration: 0.3 });
      underline.style.width = '0%';
    });
  });
}

// === CONTACT FORM AUTO CLEAR ===
const contactForm = document.querySelector('.contact form');
if (contactForm) {
  contactForm.addEventListener('submit', function() {
    setTimeout(() => this.reset(), 500);
  });
}

// === SWIPER (Clients Slider) ===
document.addEventListener("DOMContentLoaded", () => {
  new Swiper(".mySwiper", {
    slidesPerView: 5,
    spaceBetween: 20,
    loop: true,
    autoplay: { delay: 1500, disableOnInteraction: false },
    breakpoints: {
      320: { slidesPerView: 2, spaceBetween: 10 },
      768: { slidesPerView: 4, spaceBetween: 15 },
      1024: { slidesPerView: 5, spaceBetween: 20 },
    },
  });
});

// === INIT GSAP ANIMATIONS ===
if (typeof gsap !== 'undefined') {
  if (typeof ScrollTrigger !== 'undefined') gsap.registerPlugin(ScrollTrigger);
  initShapeAnimations();
  initScrollAnimations();
  initNavbarLinkEffects();
}

// Newsletter form submission success animation
document.getElementById('newsletterForm').addEventListener('submit', function(e) {
  e.preventDefault();
  const successMsg = document.querySelector('.success-msg');
  successMsg.style.display = 'block';
  this.querySelector('input').value = '';
  setTimeout(() => { successMsg.style.display = 'none'; }, 4000);
});

// GSAP Scroll Animation (Optional)
if (typeof gsap !== "undefined" && typeof ScrollTrigger !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
  gsap.from(".pro-footer .footer-container > div", {
    opacity: 0, y: 50, duration: 0.8, stagger: 0.2,
    scrollTrigger: { trigger: ".pro-footer", start: "top 90%" }
  });
}


// pakages section
// Swiper initialization
var swiper = new Swiper(".mySwiper", {
  slidesPerView: 3,
  spaceBetween: 30,
  centeredSlides: true,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  breakpoints: {
    1024: { slidesPerView: 3 },
    768: { slidesPerView: 1 },
  }
});

// Fade-in animation on page load
document.addEventListener("DOMContentLoaded", () => {
  document.querySelector(".packages-carousel").classList.add("show");
});


// Mobile drawer logic
(function () {
  const drawer = document.getElementById('mobileDrawer');
  const overlay = document.getElementById('drawerOverlay');
  const openBtn = document.getElementById('menuToggle');
  const closeBtn = document.getElementById('drawerClose');

  if (!drawer || !overlay || !openBtn || !closeBtn) return;

  function openDrawer() {
    drawer.classList.add('active');
    overlay.classList.add('active');
    overlay.hidden = false;
    drawer.setAttribute('aria-hidden', 'false');
    openBtn.setAttribute('aria-expanded', 'true');
    const firstLink = drawer.querySelector('a');
    setTimeout(() => firstLink && firstLink.focus(), 10);
    document.documentElement.style.overflow = 'hidden';
  }

  function closeDrawer() {
    drawer.classList.remove('active');
    overlay.classList.remove('active');
    drawer.setAttribute('aria-hidden', 'true');
    openBtn.setAttribute('aria-expanded', 'false');
    document.documentElement.style.overflow = '';
    setTimeout(() => { overlay.hidden = true; }, 250);
  }

  openBtn.addEventListener('click', openDrawer);
  closeBtn.addEventListener('click', closeDrawer);
  overlay.addEventListener('click', closeDrawer);
  window.addEventListener('keydown', e => {
    if (e.key === 'Escape' && drawer.classList.contains('active')) closeDrawer();
  });
})();
