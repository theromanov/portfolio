const hamburger = document.querySelector('.burger'),
    menu = document.querySelector('.menu'),
    closeElem = document.querySelector('.menu__block-close');
hamburger.addEventListener('click', () => {
    menu.classList.add('menu_active');
});

closeElem.addEventListener('click', () => {
    menu.classList.remove('menu_active');
});
