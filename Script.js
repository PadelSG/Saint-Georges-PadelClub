// ================== MENU HAMBURGER ==================
function toggleMenu() {
  const navLinks = document.querySelector('.nav-links');
  navLinks.classList.toggle('active');
}

// Fermer le menu quand on clique sur un lien
document.addEventListener('DOMContentLoaded', function() {
  document.querySelectorAll('.nav-links ul li a').forEach(link => {
    link.addEventListener('click', () => {
      const navLinks = document.querySelector('.nav-links');
      navLinks.classList.remove('active');
    });
  });
});
