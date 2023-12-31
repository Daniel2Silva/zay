function initMenu() {
  const menu = document.querySelector(".nav");
  const botaoMenu = document.querySelector(".js-menu-mobile");

  function ativarMenu() {
    menu.classList.toggle("ativo");
  }

  botaoMenu.addEventListener("click", ativarMenu);
}
initMenu();

function initScrollSuave() {
  const linksInternos = document.querySelectorAll('a[href^="#"]');
  function scrollSuave(event) {
    event.preventDefault();
    const href = event.currentTarget.getAttribute("href");
    const section = document.querySelector(href);

    section.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }

  linksInternos.forEach((link) => {
    link.addEventListener("click", scrollSuave);
  });
}
initScrollSuave();

const jsScroll = document.querySelectorAll(".js-scroll");
const windowTamanho = window.innerHeight * 0.7;

function animaScroll() {
  jsScroll.forEach((section) => {
    const sectionTop = section.getBoundingClientRect().top - windowTamanho;
    if (sectionTop < 0) {
      section.classList.add("ativo");
    } else {
      section.classList.remove("ativo");
    }
  });
}
animaScroll();
window.addEventListener("scroll", animaScroll);


const lista = document.querySelectorAll(".js-todolist");
lista[0].classList.add('ativo')
lista[0].nextElementSibling.classList.add('ativo')


function mostrarResposta(){
  this.classList.toggle('ativo')
  this.nextElementSibling.classList.toggle('ativo')
}

lista.forEach((item) => {
  item.addEventListener('click', mostrarResposta)
})
