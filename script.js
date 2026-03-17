/* =============================================
   SHAYILA MARICKAR — PORTFOLIO JS
   Theme · Mobile nav · Scroll animations
   ============================================= */

(function () {
  'use strict';

  const html = document.documentElement;

  // ---- THEME ----
  const saved = localStorage.getItem('sm-theme') || 'dark';
  html.setAttribute('data-theme', saved);

  document.getElementById('themeToggle').addEventListener('click', () => {
    const next = html.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
    html.setAttribute('data-theme', next);
    localStorage.setItem('sm-theme', next);
  });

  // ---- MOBILE NAV ----
  const hamburger = document.getElementById('hamburger');
  const navMobile = document.getElementById('navMobile');

  hamburger.addEventListener('click', () => {
    const open = navMobile.classList.toggle('open');
    hamburger.classList.toggle('open', open);
    hamburger.setAttribute('aria-expanded', open);
  });

  navMobile.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => {
      navMobile.classList.remove('open');
      hamburger.classList.remove('open');
    });
  });

  // ---- ACTIVE NAV LINK ON SCROLL ----
  const navLinks = document.querySelectorAll('.nav-links a');
  const sections = document.querySelectorAll('section[id]');

  const linkObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      navLinks.forEach(link => {
        const active = link.getAttribute('href') === '#' + entry.target.id;
        link.style.color = active ? 'var(--txt)' : '';
        if (active) {
          link.style.setProperty('--after-w', '100%');
        }
      });
    });
  }, { rootMargin: '-45% 0px -45% 0px' });

  sections.forEach(s => linkObserver.observe(s));

  // ---- SCROLL FADE IN ----
  const scrollEls = document.querySelectorAll(
    '.project-card, .future-card, .skill-group, .contact-card, ' +
    '.about-card, .fact-row, .edu-item, .contact-form, .cert-item'
  );

  scrollEls.forEach(el => el.classList.add('scroll-fade'));

  // Stagger grid children
  document.querySelectorAll(
    '.projects-grid, .future-grid, .skills-grid, .about-facts, .edu-timeline, .contact-info'
  ).forEach(grid => {
    grid.querySelectorAll('.scroll-fade').forEach((child, i) => {
      child.style.transitionDelay = (i * 70) + 'ms';
    });
  });

  const fadeObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        fadeObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  scrollEls.forEach(el => fadeObserver.observe(el));

})();