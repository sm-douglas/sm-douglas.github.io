/* ============================================
   Portfólio — Douglas Santana Mendonça
   Interações: navbar, scroll suave, menu mobile,
   validação de formulário e reveal on scroll.
   ============================================ */

(function () {
  "use strict";

  /* -------- Ícones (Lucide) -------- */
  if (window.lucide && typeof window.lucide.createIcons === "function") {
    window.lucide.createIcons();
  }

  /* -------- Ano no rodapé -------- */
  var yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  /* -------- Navbar: sombra ao rolar + seção ativa -------- */
  var navbar = document.getElementById("navbar");
  var navLinks = document.querySelectorAll(".nav-links a[data-nav]");
  var sections = Array.prototype.map.call(navLinks, function (a) {
    var id = a.getAttribute("href").slice(1);
    return { id: id, el: document.getElementById(id), link: a };
  });

  function onScroll() {
    if (navbar) navbar.classList.toggle("scrolled", window.scrollY > 16);

    var mid = window.innerHeight / 3;
    var current = null;
    for (var i = 0; i < sections.length; i++) {
      var s = sections[i];
      if (!s.el) continue;
      var r = s.el.getBoundingClientRect();
      if (r.top <= mid && r.bottom >= mid) { current = s.id; break; }
    }
    sections.forEach(function (s) {
      s.link.classList.toggle("active", s.id === current);
    });
  }
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  /* -------- Menu mobile -------- */
  var menuToggle = document.getElementById("menuToggle");
  var navLinksList = document.getElementById("navLinks");

  function setMenu(open) {
    if (!navLinksList || !menuToggle) return;
    navLinksList.classList.toggle("open", open);
    menuToggle.setAttribute("aria-expanded", open ? "true" : "false");
    menuToggle.setAttribute("aria-label", open ? "Fechar menu" : "Abrir menu");
    menuToggle.innerHTML = '<i data-lucide="' + (open ? "x" : "menu") + '"></i>';
    if (window.lucide) window.lucide.createIcons();
  }

  if (menuToggle && navLinksList) {
    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.setAttribute("aria-controls", "navLinks");

    menuToggle.addEventListener("click", function () {
      setMenu(!navLinksList.classList.contains("open"));
    });
    // Fecha ao clicar num link
    navLinksList.addEventListener("click", function (e) {
      if (e.target.closest("a")) setMenu(false);
    });
    // Fecha ao clicar fora ou ao pressionar Esc
    document.addEventListener("click", function (e) {
      if (!navLinksList.classList.contains("open")) return;
      if (!e.target.closest("#navLinks") && !e.target.closest("#menuToggle")) setMenu(false);
    });
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape") setMenu(false);
    });
    // Fecha ao voltar para desktop
    window.addEventListener("resize", function () {
      if (window.innerWidth >= 821) setMenu(false);
    });
  }


  /* -------- Reveal on scroll -------- */
  var revealTargets = document.querySelectorAll(".section, .project-row, .skill-card, .timeline > li");
  revealTargets.forEach(function (el) { el.classList.add("reveal"); });
  if ("IntersectionObserver" in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });
    revealTargets.forEach(function (el) { io.observe(el); });
  } else {
    revealTargets.forEach(function (el) { el.classList.add("visible"); });
  }

  /* -------- Tema claro/escuro -------- */
  var themeToggle = document.getElementById("themeToggle");
  var rootEl = document.documentElement;

  function currentTheme() {
    return rootEl.getAttribute("data-theme") === "dark" ? "dark" : "light";
  }
  function renderThemeIcon() {
    if (!themeToggle) return;
    themeToggle.innerHTML = '<i data-lucide="' + (currentTheme() === "dark" ? "sun" : "moon") + '"></i>';
    themeToggle.setAttribute("aria-label",
      currentTheme() === "dark" ? "Mudar para modo claro" : "Mudar para modo escuro");
    if (window.lucide) window.lucide.createIcons();
  }

  if (themeToggle) {
    themeToggle.addEventListener("click", function () {
      var next = currentTheme() === "dark" ? "light" : "dark";
      rootEl.setAttribute("data-theme", next);
      try { localStorage.setItem("theme", next); } catch (e) {}
      renderThemeIcon();
    });
    renderThemeIcon();
  }

})();
