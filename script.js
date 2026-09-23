const botaoMenu = document.getElementById('btnMenu');
const menuLinks = document.getElementById('menuLinks');
const mainContent = document.querySelector('main');
const footerContent = document.querySelector('footer');

botaoMenu.addEventListener("click", function() {
    const imagem = botaoMenu.querySelector("img");

    menuLinks.classList.toggle("active");

    mainContent.classList.toggle("menu-aberto")
    footerContent.classList.toggle("menu-aberto")

    if (imagem.src.includes("icon-menu.svg")) {
        imagem.src = "assets/images/icon-close.svg";
    } else {
        imagem.src = "assets/images/icon-menu.svg";
    }
});