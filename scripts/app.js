const menuBtn = document.querySelector(".menu-btn");
const menuBtnIcon = menuBtn.querySelector("i");
let isNavOpen = false;
const mainNav = document.querySelector(".main-nav");
menuBtn.addEventListener("click", (e) => {
    isNavOpen = !isNavOpen;
    if(isNavOpen) {
        menuBtnIcon.classList.replace("bi-list", "bi-x-lg")
    }
    else {
        menuBtnIcon.classList.replace("bi-x-lg", "bi-list");
    }
    mainNav.classList.toggle("show-nav"); 
    
});

const menuLinks = document.querySelector(".main-nav ul");
menuLinks.addEventListener("click", (e) => {
    if(e.target.nodeName == "A") {
        isNavOpen = !isNavOpen;
        menuBtnIcon.classList.replace("bi-x-lg", "bi-list");
        mainNav.classList.toggle("show-nav");
    }
});

const themeBtn = document.querySelector(".theme-btn");
themeBtn.addEventListener("click", (e) => {
    document.body.classList.toggle("dark-mode");
    themeBtn.classList.toggle("btn-dark");
    themeBtn.querySelector("i").classList.toggle("bi-moon-stars");
    themeBtn.querySelector("i").classList.toggle("bi-sun");
    document.querySelector(".logo").classList.toggle("btn-dark");
    
});