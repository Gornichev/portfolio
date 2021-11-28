// Swiper
var swiper = new Swiper(".swiper-gallery", {
    spaceBetween: 50,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});
const swiper2 = new Swiper(".swiper-gallery-vertical", {
    direction: "vertical",
    spaceBetween: 50,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
})
// navigation
const btnMenu = document.querySelector("#btn-show-menu");
const hideMenu = document.querySelector("#btn-hide-menu");
const body = document.querySelector("body");
const menu = document.querySelector("#menu");

btnMenu.onclick = function() {
    btnMenu.classList.add("hide");
    body.classList.add("overlay");
    menu.classList.add("show");
}

hideMenu.onclick = function() {
    btnMenu.classList.remove("hide");
    body.classList.remove("overlay");
    menu.classList.remove("show");
}
