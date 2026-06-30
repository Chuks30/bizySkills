
// FAQ toggle
function toggleFAQ(btn) {
  const item = btn.closest('.faq-item');
  const isOpen = item.classList.contains('open');
  document.querySelectorAll('.faq-item').forEach(i => i.classList.remove('open'));
  if (!isOpen) item.classList.add('open');
}

// Theme switcher
function toggleThemePanel() {
  document.getElementById('themePanel').classList.toggle('open');
}
function setTheme(theme) {
  document.documentElement.setAttribute('data-theme', theme === 'dark' ? '' : theme);
  document.querySelectorAll('.theme-btn').forEach(b => b.classList.remove('active'));
  document.getElementById('btn-' + theme).classList.add('active');
  localStorage.setItem('bizy-theme', theme);
  // close panel
  document.getElementById('themePanel').classList.remove('open');
}
// Restore saved theme
const savedTheme = localStorage.getItem('bizy-theme');
if (savedTheme && savedTheme !== 'dark') setTheme(savedTheme);

// Close theme panel when clicking outside
document.addEventListener('click', function(e) {
  if (!e.target.closest('.theme-switcher')) {
    document.getElementById('themePanel').classList.remove('open');
  }
});

// Scroll reveal
const observer = new IntersectionObserver((entries) => {
  entries.forEach(e => { if (e.isIntersecting) { e.target.style.opacity = '1'; e.target.style.transform = 'translateY(0)'; } });
}, { threshold: 0.1 });
document.querySelectorAll('.course-card, .service-col, .why-point, .process-step, .t-card').forEach(el => {
  el.style.opacity = '0'; el.style.transform = 'translateY(20px)'; el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
  observer.observe(el);
});
document.querySelectorAll('.services-grid .service-col, .courses-grid .course-card').forEach((el, i) => { el.style.transitionDelay = (i * 0.06) + 's'; });
