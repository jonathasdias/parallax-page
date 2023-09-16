const btn_menu = document.querySelector('.btn-menu');

const menu = document.querySelector('.menu');

btn_menu.addEventListener('click', function() {
    this.classList.toggle('change');
    menu.classList.toggle('menu-active');
})