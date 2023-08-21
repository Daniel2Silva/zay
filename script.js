const menu = document.querySelector('.js-menu');
const botaoMenu = document.querySelector('.js-menu-mobile');

function ativarMenu(){
    menu.classList.toggle('ativo');
}


botaoMenu.addEventListener('click', ativarMenu)