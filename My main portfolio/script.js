const mobileMenuButton = document.getElementById('mobileMenuButton');
const mobileMenu = document.getElementById('mobileMenu');

if (mobileMenuButton && mobileMenu) {
  mobileMenuButton.addEventListener('click', () => {
    const isOpen = mobileMenu.classList.toggle('show');
    mobileMenuButton.setAttribute('aria-expanded', String(isOpen));
  });
}

document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener('click', (e) => {
    const href = anchor.getAttribute('href');
    if(href && href !== '#') {
      e.preventDefault();
      const target = document.querySelector(href);
      if(target) target.scrollIntoView({ behavior:'smooth', block:'start' });
      if (mobileMenu && mobileMenu.classList.contains('show')) {
        mobileMenu.classList.remove('show');
        mobileMenuButton.setAttribute('aria-expanded', 'false');
      }
    }
  });
});

// Reveal animations
const revealElements = document.querySelectorAll('.section-reveal');
const revealObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if(entry.isIntersecting) entry.target.classList.add('revealed');
  });
}, { threshold:0.2 });

revealElements.forEach(el => revealObserver.observe(el));