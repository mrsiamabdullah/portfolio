// SHOW MENU MOBILE
let navMenu = document.getElementById("nav-menu"),
  navToggle = document.getElementById("nav-toggle"),
  navClose = document.getElementById("nav-close");

if (navToggle) {
  navToggle.addEventListener("click", () => {
    navMenu.classList.add("show");
  });
}

// MENU HIDDEN MOBILE
if (navClose) {
  navClose.addEventListener("click", () => {
    navMenu.classList.remove("show");
  });
}

window.onscroll = () => {
  navMenu.classList.remove("show");
};

// REMOVE MENU MOBILE
let navLink = document.querySelectorAll(".nav__link");

let linkAction = () => {
  let navMenu = document.getElementById("nav-menu");
  navMenu.classList.remove("show");
};
navLink.forEach((n) => n.addEventListener("click", linkAction));

// SHADOW HEADER
let shadowHeader = () => {
  let header = document.getElementById("header");
  this.scrollY >= 50
    ? header.classList.add("shadow-header")
    : header.classList.remove("shadow-header");
};
window.addEventListener("scroll", shadowHeader);
