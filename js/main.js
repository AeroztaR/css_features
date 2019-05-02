const   menuBtn = document.querySelector('.menu-btn'),
        menuNav = document.querySelector('.menu__nav');

menuBtn.addEventListener('click', (e) => {
    e.preventDefault();
    menuBtn.classList.toggle('menu-btn--active');
    menuNav.classList.toggle('menu__nav--active');
});

const   slideMenuBtn = document.querySelector('.sliding-menu__btn'),
        slideMenu = document.querySelector('.sliding-menu');

slideMenuBtn.addEventListener('click', (e) => {
    e.preventDefault();
    slideMenu.classList.toggle('sliding-menu--active');
});