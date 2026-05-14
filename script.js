document.addEventListener("DOMContentLoaded", () => {
  // --- Preloader ---
  const preloader = document.getElementById("preloader");
  setTimeout(() => {
    preloader.style.opacity = "0";
    setTimeout(() => {
      preloader.style.display = "none";
    }, 800);
  }, 1500);

  // --- Navbar Scroll Effect ---
  const navbar = document.querySelector(".navbar");
  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    }
  });

  // --- Mobile Menu Toggle ---
  const hamburger = document.querySelector(".hamburger");
  const navLinks = document.querySelector(".nav-links");
  const navIcon = document.querySelector(".hamburger i");

  hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("active");
    if (navLinks.classList.contains("active")) {
      navIcon.classList.remove("fa-bars");
      navIcon.classList.add("fa-xmark");
    } else {
      navIcon.classList.remove("fa-xmark");
      navIcon.classList.add("fa-bars");
    }
  });

  // Close mobile menu when link is clicked
  document.querySelectorAll(".nav-links a").forEach((link) => {
    link.addEventListener("click", () => {
      navLinks.classList.remove("active");
      navIcon.classList.remove("fa-xmark");
      navIcon.classList.add("fa-bars");
    });
  });

  // --- ScrollReveal Animations ---
  const sr = ScrollReveal({
    distance: "60px",
    duration: 1500,
    delay: 200,
    reset: false,
    easing: "cubic-bezier(0.25, 0.1, 0.25, 1)",
  });

  // Up animations
  sr.reveal(".reveal-up", { origin: "bottom" });
  sr.reveal(".reveal-up.delay-1", { origin: "bottom", delay: 300 });
  sr.reveal(".reveal-up.delay-2", { origin: "bottom", delay: 400 });
  sr.reveal(".reveal-up.delay-3", { origin: "bottom", delay: 500 });
  sr.reveal(".reveal-up.delay-4", { origin: "bottom", delay: 600 });

  // Side animations
  sr.reveal(".reveal-left", { origin: "left", distance: "100px" });
  sr.reveal(".reveal-right", { origin: "right", distance: "100px" });
  // --- Scroll to Top Button ---
  const scrollTopBtn = document.getElementById("scrollTopBtn");
  
  window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
      scrollTopBtn.classList.add("show");
    } else {
      scrollTopBtn.classList.remove("show");
    }
  });

  scrollTopBtn.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  });
});
