const mobMenu = document.querySelector('.mob-menu');
const mobMenuToggleBtns = document.querySelectorAll('.open-menu-btn, .menu-close-btn');

function toggleMobMenu() {
    mobMenu.classList.toggle('is-open');
};

mobMenuToggleBtns.forEach(btn => btn.addEventListener('click', toggleMobMenu));