const menuToggle = document.querySelector(".menu-toggle");
const mainNav = document.querySelector(".main-nav");
if (menuToggle && mainNav) {
  menuToggle.addEventListener("click", () => {
    const isOpen = mainNav.classList.toggle("open");
    menuToggle.setAttribute("aria-expanded", String(isOpen));
    menuToggle.setAttribute("aria-label", isOpen ? "Tutup menu" : "Buka menu");
  });
}
const year = document.getElementById("year");
if (year) year.textContent = new Date().getFullYear();


// Gentle scroll reveals on the landing page. Respects reduced-motion settings.
const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
if (!reduceMotion && "IntersectionObserver" in window) {
  document.documentElement.classList.add("motion-ready");
  const revealItems = document.querySelectorAll(
    ".hero-copy, .hero-art, .intro-grid, .intro-bottom, .stats-heading, .stat-card, .why-image, .why-copy, .explore-heading, .feature-card, .closing-card"
  );
  revealItems.forEach((item, index) => {
    item.classList.add("reveal-on-scroll");
    if (item.classList.contains("feature-card")) item.style.setProperty("--reveal-delay", `${index % 3 * 90}ms`);
  });
  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12, rootMargin: "0px 0px -35px 0px" });
  revealItems.forEach(item => revealObserver.observe(item));
}


// One-time counting animation for TB-in-Numbers; static values are the no-JS fallback.
(() => {
  const counters = Array.from(document.querySelectorAll('[data-count-target]'));
  if (!counters.length) return;
  const numberFormat = new Intl.NumberFormat('id-ID');
  const formatValue = (value, type) => {
    if (type === 'percent') return `${Math.round(value)}%`;
    if (type === 'million') return `${value.toFixed(1).replace('.', ',')} juta`;
    return numberFormat.format(Math.round(value));
  };
  const animateCounter = (element) => {
    if (element.dataset.counted === 'true') return;
    element.dataset.counted = 'true';
    const target = Number(element.dataset.countTarget);
    const type = element.dataset.countFormat;
    if (!Number.isFinite(target)) return;
    const duration = 1700;
    let started = null;
    const step = (timestamp) => {
      if (started === null) started = timestamp;
      const progress = Math.min(1, (timestamp - started) / duration);
      const eased = 1 - Math.pow(1 - progress, 3);
      element.textContent = formatValue(target * eased, type);
      if (progress < 1) requestAnimationFrame(step);
      else element.textContent = formatValue(target, type);
    };
    requestAnimationFrame(step);
  };
  if (reduceMotion || !('IntersectionObserver' in window)) return;
  const countObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(({ target, isIntersecting }) => {
      if (!isIntersecting) return;
      animateCounter(target);
      observer.unobserve(target);
    });
  }, { threshold: 0.3 });
  counters.forEach(counter => countObserver.observe(counter));
})();
