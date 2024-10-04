
const hamburgerIcon = document.querySelector('.hamburger_icon');
const navItems = document.querySelector('.nav_item');

hamburgerIcon.addEventListener('click', () => {
  navItems.style.display = navItems.style.display === 'block' ? 'none' : 'block';
});
