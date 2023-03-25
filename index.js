// Botón para abrir y cerrar menú (div que lo contiene)
const barsBtn = document.querySelector(".menu-label");
// ||| logo menu responsive
const abrirMenu = document.querySelector(".menu-icon1");
// X logo cerrar menu responsive
const cerrarMenu = document.querySelector(".menu-icon2");
//  Menú (Hamburguesa)
const barsMenu = document.querySelector(".navbar-list");
//  Overlay para tirar facha abajo del menú hamburguesa y el cart.
const overlay = document.querySelector(".overlay");
// Logo menu responsive antes de abrirlo
const logoResponsive = document.querySelector(".menu-icon1");
// Logo menu responsive X para cerrarlo
const logoResponsiveX = document.querySelector(".menu-icon2");

// funcion para cerrar el Menu responsive y remover el difuminado de fondo ,al hacer click unicamente en algun enlace
const closeOnClick = (e) => {
  if (!e.target.classList.contains("navbar-link")) {
    return;
  }
  barsMenu.classList.remove("open-menu");
  overlay.classList.remove("show-overlay");
};

// funcion para ocultar el Menu responsive es caso de Scrolear
const closeMenuOnScroll = (e) => {
  if (!barsMenu.classList.contains("open-menu")) {
    return;
  }
  barsMenu.classList.remove("open-menu");
  overlay.classList.remove("show-overlay");
};

// funcion para cerrar el menu cuando hagamos click fuera ,es decir sobre el overlay
const closeMenuOnClickOut = (e) => {
  barsMenu.classList.remove("open-menu");
  overlay.classList.remove("show-overlay");
};

// funcion para cambiar de logo en el menu responsive de burguer (|||) a cerrar (X)
const cambiarLogo = () => {
  barsMenu.classList.toggle("open-menu");
  overlay.classList.toggle("show-overlay");
  if (barsMenu.classList.contains("open-menu")) {
    abrirMenu.src = "./assets/img/icon-menu-close.png";
  } else {
    abrirMenu.src = "./assets/img/icon-menu.png";
  }
};

// puerta de entrada
const init = () => {
  barsMenu.addEventListener("click", closeOnClick);
  window.addEventListener("scroll", closeMenuOnScroll);
  overlay.addEventListener("click", closeMenuOnClickOut);
  abrirMenu.addEventListener("click", cambiarLogo);
};
init();
