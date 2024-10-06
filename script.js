

  document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector('.hamburger_icon');
    const navMenu = document.querySelector('.nav_item');

    hamburger.addEventListener('click', () => {
      navMenu.classList.toggle('active');
    });
  });

