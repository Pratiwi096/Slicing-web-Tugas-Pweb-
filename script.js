// Menu mobile
const menuBtn = document.getElementById('menuBtn');
const nav = document.getElementById('nav');

menuBtn.addEventListener('click', () => {
  const isOpen = nav.classList.toggle('open');
  menuBtn.setAttribute('aria-expanded', isOpen);
});

// Tutup nav kalau klik link
nav.addEventListener('click', (e) => {
  if (e.target.tagName === 'A') {
    nav.classList.remove('open');
    menuBtn.setAttribute('aria-expanded', 'false');
  }
});

// Tahun footer
document.getElementById('year').textContent = new Date().getFullYear();
