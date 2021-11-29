// Overlay-header

var h = document.getElementById("overlay");
var readout = document.getElementById("back");
var stuck = false;
var stickPoint = getDistance();

function getDistance() {
    var topDist = h.offsetTop;
    return topDist;
}

window.onscroll = function(e) {
    var distance = getDistance() - window.pageYOffset;
    var offset = window.pageYOffset;
    readout.innerHTML = stickPoint + '   ' + distance + '   ' + offset + '   ' + stuck;
    if ( (distance <= 0) && !stuck) {
        h.style.position = 'fixed';
        h.style.top = '0px';
        stuck = true;
    } else if (stuck && (offset <= stickPoint)){
        h.style.position = 'static';
        stuck = false;
    }
}


// Swiper
var swiper = new Swiper(".swiper-gallery", {
    spaceBetween: 50,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
});
const swiper2 = new Swiper(".swiper-gallery-vertical", {
    direction: "vertical",
    spaceBetween: 50,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
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

