const navbarMenu = document.querySelector(".header__navbar");
const hamburgerMenu = document.querySelector(".hamburger__menu");

hamburgerMenu.addEventListener("click", () => {
    navbarMenu.classList.toggle("active");

    if (navbarMenu.classList.contains("active")) {
        hamburgerMenu.innerHTML = '<i class="fa-solid fa-xmark"></i>';
    } else {
        hamburgerMenu.innerHTML = '<i class="fa-solid fa-bars"></i>';
    }
});
