const menuBtn = document.querySelector('.menu-btn');

menuBtn.addEventListener('click', (e) => {
    e.preventDefault();
    menuBtn.classList.toggle('menu-btn--active');
});

