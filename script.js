// Custom cursor
const cursor = document.getElementById('cursor');

document.addEventListener('mousemove', e => {
  cursor.style.left = e.clientX - 6 + 'px';
  cursor.style.top = e.clientY - 6 + 'px';
});

document.querySelectorAll('a, button, .project-card, .skill-group, .stat-card').forEach(el => {
  el.addEventListener('mouseenter', () => { cursor.style.transform = 'scale(2)'; });
  el.addEventListener('mouseleave', () => { cursor.style.transform = 'scale(1)'; });
});

// Scroll reveal
const reveals = document.querySelectorAll('.reveal');
const observer = new IntersectionObserver(entries => {
  entries.forEach((entry, i) => {
    if (entry.isIntersecting) {
      setTimeout(() => entry.target.classList.add('visible'), i * 80);
    }
  });
}, { threshold: 0.1 });
reveals.forEach(el => observer.observe(el));

// Nav active state
window.addEventListener('scroll', () => {
  const nav = document.querySelector('nav');
  nav.style.background = window.scrollY > 50
    ? 'rgba(10,10,15,0.95)'
    : 'rgba(10,10,15,0.85)';
});

// Smooth nav clicks
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});
