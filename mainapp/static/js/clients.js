// === Wait for DOM Ready ===
document.addEventListener("DOMContentLoaded", function () {

    // === Initialize Swiper Slider ===
    const swiper = new Swiper(".mySwiper", {
        slidesPerView: 5,
        spaceBetween: 10,
        loop: true,
        autoplay: {
            delay: 1,                // super fast autoplay
            disableOnInteraction: false
        },
        breakpoints: {
            320: { slidesPerView: 2, spaceBetween: 10 },
            768: { slidesPerView: 4, spaceBetween: 10 },
            1024: { slidesPerView: 5, spaceBetween: 10 }
        }
    });

    // === GSAP Animations for Clients (Page Load) ===
    if (typeof gsap !== "undefined") {
        const allCards = document.querySelectorAll(
            '#premiumClients .client-card, #localClients .client-card'
        );

        gsap.fromTo(
            allCards,
            { opacity: 0, y: 50, scale: 0.9 },
            {
                opacity: 1,
                y: 0,
                scale: 1,
                duration: 0.4,
                stagger: 0.05,       // fast stagger
                ease: "power2.out"
            }
        );
    } else {
        console.error("GSAP not loaded!");
    }
});
