// Tunggu sampai DOM ready
document.addEventListener("DOMContentLoaded", function () {

    // ============================================
    // SELECT DOM ELEMENTS (hanya 1x deklarasi!)
    // ============================================
    const header = document.querySelector("header");
    const menuIcon = document.querySelector('#menu-icon');
    const navbar = document.querySelector('.navbar');
    const navLinks = document.querySelectorAll('.navbar a');

    // Cek apakah semua element ada
    if (!header || !menuIcon || !navbar) {
        console.error("DOM element missing:", { header, menuIcon, navbar });
        return;
    }

    console.log("✅ All elements found:", { header, menuIcon, navbar, navLinks: navLinks.length });

    // ============================================
    // STICKY HEADER ON SCROLL
    // ============================================
    window.addEventListener("scroll", function () {
        if (window.scrollY > 80) {
            header.classList.add("sticky");
        } else {
            header.classList.remove("sticky");
        }
    });

    // ============================================
    // HAMBURGER MENU TOGGLE
    // ============================================
    menuIcon.addEventListener('click', (e) => {
        e.stopPropagation(); // Prevent document click event
        navbar.classList.toggle('open');
        
        // Toggle icon antara bars (☰) dan times (✕)
        if (navbar.classList.contains('open')) {
            menuIcon.classList.remove('fa-bars');
            menuIcon.classList.add('fa-times');
            console.log("Menu opened");
        } else {
            menuIcon.classList.remove('fa-times');
            menuIcon.classList.add('fa-bars');
            console.log("Menu closed");
        }
    });

    // ============================================
    // AUTO CLOSE MENU SAAT LINK DIKLIK (Mobile UX)
    // ============================================
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navbar.classList.remove('open');
            menuIcon.classList.remove('fa-times');
            menuIcon.classList.add('fa-bars');
            console.log("Menu closed via link click");
        });
    });

    // ============================================
    // CLOSE MENU SAAT KLIK DI LUAR NAVBAR
    // ============================================
    document.addEventListener('click', (e) => {
        // Jika klik bukan di navbar dan bukan di menu icon
        if (!navbar.contains(e.target) && !menuIcon.contains(e.target)) {
            if (navbar.classList.contains('open')) {
                navbar.classList.remove('open');
                menuIcon.classList.remove('fa-times');
                menuIcon.classList.add('fa-bars');
                console.log("Menu closed via outside click");
            }
        }
    });

    // =========================
    // TESTIMONI: FILTER + AUTOSLIDE
    // =========================
    (function () {
    const track = document.querySelector(".testi-track");
    const slider = document.querySelector(".testi-slider");
    const buttons = document.querySelectorAll(".filter-btn");

    if (!track || !slider || buttons.length === 0) return;

    let index = 0;
    let timer = null;

    function visibleCards() {
        return Array.from(track.querySelectorAll(".testi-card")).filter(
        (c) => !c.classList.contains("is-hidden")
        );
    }

    function cardsPerView() {
        const w = window.innerWidth;
        if (w <= 600) return 1;
        if (w <= 1050) return 2;
        return 3;
    }

    function slideTo(i) {
        const cards = visibleCards();
        if (cards.length === 0) return;

        const perView = cardsPerView();
        const maxIndex = Math.max(0, cards.length - perView);

        index = Math.min(Math.max(i, 0), maxIndex);

        const first = cards[0];
        const cardW = first.getBoundingClientRect().width;
        const gap = parseFloat(getComputedStyle(track).gap || "16") || 16;

        const x = index * (cardW + gap);
        track.style.transform = `translateX(-${x}px)`;
    }

    function startAuto() {
        stopAuto();
        timer = setInterval(() => {
        const cards = visibleCards();
        if (cards.length === 0) return;

        const perView = cardsPerView();
        const maxIndex = Math.max(0, cards.length - perView);

        if (maxIndex === 0) {
            slideTo(0);
            return;
        }

        index = index >= maxIndex ? 0 : index + 1;
        slideTo(index);
        }, 3200);
    }

    function stopAuto() {
        if (timer) clearInterval(timer);
        timer = null;
    }

    function applyFilter(type) {
        const all = Array.from(track.querySelectorAll(".testi-card"));
        all.forEach((card) => {
        const t = card.getAttribute("data-type");
        const show = type === "Semua" || t === type;
        card.classList.toggle("is-hidden", !show);
        });

        // reset posisi
        track.style.transform = "translateX(0px)";
        index = 0;
        startAuto();
    }

    // init filter click
    buttons.forEach((btn) => {
        btn.addEventListener("click", () => {
        buttons.forEach((b) => b.classList.remove("active"));
        btn.classList.add("active");
        applyFilter(btn.dataset.filter);
        });
    });

    // pause ketika hover/pegang slider
    slider.addEventListener("mouseenter", stopAuto);
    slider.addEventListener("mouseleave", startAuto);
    slider.addEventListener("touchstart", stopAuto, { passive: true });
    slider.addEventListener("touchend", startAuto);

    // handle resize biar nggak “lompat”
    window.addEventListener("resize", () => slideTo(index));

    // default
    applyFilter("Semua");
    })();


});