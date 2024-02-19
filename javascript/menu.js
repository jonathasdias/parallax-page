const btn_menu = document.querySelector('.btn-menu');

const menu = document.querySelector('.menu');

function openMenu() {
    menu.style.display = 'flex';

    setTimeout(() => {
        btn_menu.classList.add('change');
        menu.classList.add('menu-active');
        btn_menu.ariaPressed = true;
    }, 1);
}

function clearMenu() {

    setTimeout(() => {
        menu.style.display = 'none';
    }, 300);

    btn_menu.classList.remove('change');
    menu.classList.remove('menu-active');
    btn_menu.ariaPressed = false;
}

btn_menu.addEventListener('click', ()=> {
    
    if(btn_menu.classList.contains('change')) {
        clearMenu();
    }else {
        openMenu();
    }

})