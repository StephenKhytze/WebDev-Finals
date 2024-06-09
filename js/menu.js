const menu = document.querySelector("#burger_button")
const mobileNav = document.querySelector("#mobile_nav")
menu.addEventListener("click", () => {
    menu.classList.toggle("active");
    mobileNav.classList.toggle("active");
})