const menuToggle = document.querySelector(".menu-toggle");
const siteNav = document.querySelector("#siteNav");

function closeMenu() {
    siteNav?.classList.remove("is-open");
    menuToggle?.setAttribute("aria-expanded", "false");
    menuToggle?.setAttribute("aria-label", "Buka navigasi");
}

menuToggle?.addEventListener("click", () => {
    const isOpen = siteNav.classList.toggle("is-open");
    menuToggle.setAttribute("aria-expanded", String(isOpen));
    menuToggle.setAttribute(
        "aria-label",
        isOpen ? "Tutup navigasi" : "Buka navigasi",
    );
});

siteNav?.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
        closeMenu();
    });
});

document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") closeMenu();
});

document.addEventListener("click", (event) => {
    if (
        siteNav?.classList.contains("is-open") &&
        !siteNav.contains(event.target) &&
        !menuToggle.contains(event.target)
    ) {
        closeMenu();
    }
});

const filterButtons = document.querySelectorAll(".filter-button");
const projectCards = document.querySelectorAll(".project-card");

filterButtons.forEach((button) => {
    button.addEventListener("click", () => {
        const filter = button.dataset.filter;
        filterButtons.forEach((item) => {
            const active = item === button;
            item.classList.toggle("is-active", active);
            item.setAttribute("aria-pressed", String(active));
        });
        projectCards.forEach((card) => {
            card.classList.toggle(
                "is-hidden",
                filter !== "all" && card.dataset.category !== filter,
            );
        });
    });
});

document.querySelectorAll("[data-photo-slider]").forEach((slider) => {
    const photos = [...slider.querySelectorAll(".photo-slide")];
    const counter = slider.querySelector(".photo-counter b");
    let currentPhoto = 0;

    const showPhoto = (index) => {
        currentPhoto = (index + photos.length) % photos.length;
        photos.forEach((photo, photoIndex) =>
            photo.classList.toggle("is-active", photoIndex === currentPhoto),
        );
        if (counter)
            counter.textContent = String(currentPhoto + 1).padStart(2, "0");
    };

    slider
        .querySelector(".photo-prev")
        ?.addEventListener("click", () => showPhoto(currentPhoto - 1));
    slider
        .querySelector(".photo-next")
        ?.addEventListener("click", () => showPhoto(currentPhoto + 1));
});

const showcase = document.querySelector(".project-showcase");
const slides = [...document.querySelectorAll(".showcase-slide")];
const dots = [...document.querySelectorAll(".showcase-dot")];
const counter = document.querySelector(".showcase-counter b");
let currentSlide = 0;
let slideTimer;

function showSlide(index) {
    if (!slides.length) return;
    currentSlide = (index + slides.length) % slides.length;
    slides.forEach((slide, slideIndex) => {
        slide.classList.toggle("is-active", slideIndex === currentSlide);
    });
    dots.forEach((dot, dotIndex) => {
        const active = dotIndex === currentSlide;
        dot.classList.toggle("is-active", active);
        dot.setAttribute("aria-pressed", String(active));
    });
    if (counter)
        counter.textContent = String(currentSlide + 1).padStart(2, "0");
}

function startSlideshow() {
    if (
        window.matchMedia("(prefers-reduced-motion: reduce)").matches ||
        slides.length < 2
    )
        return;
    window.clearInterval(slideTimer);
    slideTimer = window.setInterval(() => showSlide(currentSlide + 1), 5000);
}

document.querySelector(".showcase-prev")?.addEventListener("click", () => {
    showSlide(currentSlide - 1);
    startSlideshow();
});
document.querySelector(".showcase-next")?.addEventListener("click", () => {
    showSlide(currentSlide + 1);
    startSlideshow();
});
dots.forEach((dot) =>
    dot.addEventListener("click", () => {
        showSlide(Number(dot.dataset.slideTo));
        startSlideshow();
    }),
);
showcase?.addEventListener("mouseenter", () =>
    window.clearInterval(slideTimer),
);
showcase?.addEventListener("mouseleave", startSlideshow);
showcase?.addEventListener("focusin", () => window.clearInterval(slideTimer));
showcase?.addEventListener("focusout", (event) => {
    if (!showcase.contains(event.relatedTarget)) startSlideshow();
});
showcase?.addEventListener("keydown", (event) => {
    if (event.key === "ArrowLeft") showSlide(currentSlide - 1);
    if (event.key === "ArrowRight") showSlide(currentSlide + 1);
});
startSlideshow();

const revealItems = document.querySelectorAll(".reveal");
if ("IntersectionObserver" in window) {
    const revealObserver = new IntersectionObserver(
        (entries, observer) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("is-visible");
                    observer.unobserve(entry.target);
                }
            });
        },
        { threshold: 0.12 },
    );

    revealItems.forEach((item) => revealObserver.observe(item));
} else {
    revealItems.forEach((item) => item.classList.add("is-visible"));
}
