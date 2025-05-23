const menuBtn = document.querySelector(".menu-btn");
const menuBtnIcon = menuBtn.querySelector("i");
let isNavOpen = false;
const mainNav = document.querySelector(".main-nav");

// Toggle navigation menu
menuBtn.addEventListener("click", (e) => {
    isNavOpen = !isNavOpen;
    if(isNavOpen) {
        menuBtnIcon.classList.replace("bi-list", "bi-x-lg");
    }
    else {
        menuBtnIcon.classList.replace("bi-x-lg", "bi-list");
    }
    mainNav.classList.toggle("show-nav");
    // Update ARIA attribute for accessibility
    menuBtn.setAttribute('aria-expanded', isNavOpen); 
});

const menuLinks = document.querySelector(".main-nav ul");

// Event delegation for closing menu when a nav link is clicked
menuLinks.addEventListener("click", (e) => {
    // Check if the clicked element is a link
    if(e.target.nodeName == "A") {
        isNavOpen = false; // Set to false as menu is closing
        menuBtnIcon.classList.replace("bi-x-lg", "bi-list");
        mainNav.classList.remove("show-nav"); // Use remove instead of toggle for explicit close
        // Update ARIA attribute for accessibility
        menuBtn.setAttribute('aria-expanded', isNavOpen);
    }
});

const themeBtn = document.querySelector(".theme-btn");
const themeBtnIcon = themeBtn.querySelector("i"); // Cache the icon element
const logoElement = document.querySelector(".logo"); // Cache the logo element

// Toggle theme
themeBtn.addEventListener("click", (e) => {
    document.body.classList.toggle("dark-mode");
    themeBtn.classList.toggle("btn-dark"); // Assumes btn-dark is for light theme icon state
    themeBtnIcon.classList.toggle("bi-moon-stars");
    themeBtnIcon.classList.toggle("bi-sun");
    logoElement.classList.toggle("btn-dark"); // Assumes .logo also uses .btn-dark for styling
});