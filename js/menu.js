const iconToggle = document.querySelector(".icon-toggle");
const menu = document.querySelector(".menu-mobile__toggle");
const menuMobile = document.querySelector(".menu-mobile");

iconToggle.addEventListener("click", handleToggleMenu);

function handleToggleMenu(event) {
    event.target.classList.toggle("fa-times");
    event.target.classList.toggle("fa-bars");
    menu.classList.toggle("is-show");
    menuMobile.classList.toggle("is-show");
}

