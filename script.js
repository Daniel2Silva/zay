const menu = document.querySelector('.nav');
const botaoMenu = document.querySelector('.js-menu-mobile');

function ativarMenu(){
    menu.classList.toggle('ativo');
}


botaoMenu.addEventListener('click', ativarMenu)