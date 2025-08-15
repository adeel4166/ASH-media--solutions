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
// team section founder wala


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

  if (typeof initShapeAnimations === 'function') initShapeAnimations();
  if (typeof initScrollAnimations === 'function') initScrollAnimations();
  if (typeof initNavbarLinkEffects === 'function') initNavbarLinkEffects();
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

// === NAV: single, conflict-free toggle ===
document.addEventListener("DOMContentLoaded", function () {
  const btn      = document.getElementById("menuToggle") || document.getElementById("hamburger");
  const navUL    = document.getElementById("navLinks");

  // Drawer bits (optional)
  const drawer   = document.getElementById("mobileDrawer");
  const overlay  = document.getElementById("drawerOverlay");
  const closeBtn = document.getElementById("drawerClose");

  if (!btn) return;

  // Ensure initial state (hidden on page load)
  if (overlay) overlay.hidden = true;
  if (drawer) {
    drawer.classList.remove("active");
    drawer.setAttribute("aria-hidden", "true");
  }
  if (btn) btn.setAttribute("aria-expanded", "false");

  function openDrawer() {
    if (!drawer || !overlay) return false;
    overlay.hidden = false;
    overlay.classList.add("active");
    drawer.classList.add("active");
    drawer.setAttribute("aria-hidden", "false");
    btn.setAttribute("aria-expanded", "true");
    document.documentElement.style.overflow = "hidden";
    return true;
  }

  function closeDrawer() {
    if (!drawer || !overlay) return;
    overlay.classList.remove("active");
    drawer.classList.remove("active");
    drawer.setAttribute("aria-hidden", "true");
    btn.setAttribute("aria-expanded", "false");
    document.documentElement.style.overflow = "";
    setTimeout(() => (overlay.hidden = true), 250);
  }

  function toggleDrawerOrUL() {
    // If drawer exists, toggle it; otherwise toggle UL
    if (drawer && overlay) {
      if (drawer.classList.contains("active")) {
        closeDrawer();
      } else {
        openDrawer();
      }
    } else if (navUL) {
      navUL.classList.toggle("open");
    }
  }

  btn.addEventListener("click", toggleDrawerOrUL);
  if (closeBtn) closeBtn.addEventListener("click", closeDrawer);
  if (overlay)  overlay.addEventListener("click", closeDrawer);

  // Close on Esc
  window.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeDrawer();
  });

  // Close drawer when a link inside is clicked (any descendant of <a>)
  if (drawer) {
    drawer.addEventListener("click", (e) => {
      if (e.target.closest("a")) closeDrawer();
    });
  }
});
// === NAV: hidden-based drawer toggle (conflict-free) ===
document.addEventListener("DOMContentLoaded", function () {
  const btn      = document.getElementById("menuToggle");   // hamburger
  const navUL    = document.getElementById("navLinks");      // desktop/mobile inline UL

  const drawer   = document.getElementById("mobileDrawer");  // slide drawer
  const overlay  = document.getElementById("drawerOverlay"); // page overlay
  const closeBtn = document.getElementById("drawerClose");   // × button

  if (!btn) return;

  // Initial state: force hidden
  if (overlay) overlay.hidden = true;
  if (drawer) {
    drawer.hidden = true;
    drawer.classList.remove("active");
    drawer.setAttribute("aria-hidden", "true");
  }
  btn.setAttribute("aria-expanded", "false");

  function openDrawer() {
    if (!drawer || !overlay) return false;
    overlay.hidden = false;
    drawer.hidden  = false;         // unhide so transition can run
    drawer.offsetHeight;            // reflow
    overlay.classList.add("active");
    drawer.classList.add("active");
    drawer.setAttribute("aria-hidden", "false");
    btn.setAttribute("aria-expanded", "true");
    document.documentElement.style.overflow = "hidden";
    return true;
  }

  function closeDrawer() {
    if (!drawer || !overlay) return;
    overlay.classList.remove("active");
    drawer.classList.remove("active");
    drawer.setAttribute("aria-hidden", "true");
    btn.setAttribute("aria-expanded", "false");
    document.documentElement.style.overflow = "";
    setTimeout(() => { overlay.hidden = true; drawer.hidden = true; }, 280);
  }

  function toggle() {
    // Drawer present? use it. Otherwise fallback: toggle UL for small screens.
    if (drawer && overlay) {
      drawer.classList.contains("active") ? closeDrawer() : openDrawer();
    } else if (navUL) {
      navUL.classList.toggle("open");
    }
  }

  btn.addEventListener("click", toggle);
  if (closeBtn) closeBtn.addEventListener("click", closeDrawer);
  if (overlay)  overlay.addEventListener("click", closeDrawer);
  window.addEventListener("keydown", (e) => { if (e.key === "Escape") closeDrawer(); });

  // Close when a drawer link is clicked
  if (drawer) {
    drawer.addEventListener("click", (e) => { if (e.target.closest("a")) closeDrawer(); });
  }
});
// === Drawer-only nav (kills UL dropdown) ===
document.addEventListener('DOMContentLoaded', () => {
  const btn     = document.getElementById('menuToggle');
  const drawer  = document.getElementById('mobileDrawer');
  const overlay = document.getElementById('drawerOverlay');
  const closeBtn= document.getElementById('drawerClose');
  const navUL   = document.getElementById('navLinks');

  if (!btn || !drawer || !overlay) return;

  // initial state
  overlay.hidden = true;
  drawer.hidden  = true;
  drawer.classList.remove('active');
  btn.setAttribute('aria-expanded','false');
  if (navUL) navUL.classList.remove('open');   // ensure UL closed

  function open() {
    overlay.hidden = false;
    drawer.hidden  = false;
    drawer.offsetHeight; // reflow for transition
    overlay.classList.add('active');
    drawer.classList.add('active');
    btn.setAttribute('aria-expanded','true');
    document.documentElement.style.overflow = 'hidden';
    if (navUL) navUL.classList.remove('open'); // keep UL shut
  }
  function close() {
    overlay.classList.remove('active');
    drawer.classList.remove('active');
    btn.setAttribute('aria-expanded','false');
    document.documentElement.style.overflow = '';
    setTimeout(() => { overlay.hidden = true; drawer.hidden = true; }, 280);
  }

  btn.addEventListener('click', (e) => {
    e.preventDefault(); e.stopPropagation();
    drawer.classList.contains('active') ? close() : open();
  });
  if (closeBtn) closeBtn.addEventListener('click', close);
  overlay.addEventListener('click', close);
  window.addEventListener('keydown', (e) => { if (e.key === 'Escape') close(); });
  drawer.addEventListener('click', (e) => { if (e.target.closest('a')) close(); });
});

// service section
document.addEventListener("DOMContentLoaded", () => {
    const cards = document.querySelectorAll(".service-card");

    const revealOnScroll = () => {
        const triggerBottom = window.innerHeight * 0.85;
        cards.forEach(card => {
            const cardTop = card.getBoundingClientRect().top;
            if (cardTop < triggerBottom) {
                card.style.opacity = "1";
                card.style.transform = "translateY(0)";
                card.style.transition = "all 0.6s ease-out";
            }
        });
    };

    window.addEventListener("scroll", revealOnScroll);
    revealOnScroll();
});


// our experts

document.addEventListener("DOMContentLoaded", () => {
    const cards = document.querySelectorAll(".expert-card");

    const revealOnScroll = () => {
        const triggerBottom = window.innerHeight * 0.85;
        cards.forEach(card => {
            const cardTop = card.getBoundingClientRect().top;
            if (cardTop < triggerBottom) {
                card.style.opacity = "1";
                card.style.transform = "translateY(0)";
                card.style.transition = "all 0.6s ease-out";
            }
        });
    };

    window.addEventListener("scroll", revealOnScroll);
    revealOnScroll();
});

// pakages section
document.querySelector(".carousel").addEventListener("mouseover", function(){
    this.style.animationPlayState = "paused";
});
document.querySelector(".carousel").addEventListener("mouseout", function(){
    this.style.animationPlayState = "running";
});
