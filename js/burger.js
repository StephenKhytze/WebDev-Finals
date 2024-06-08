const burger = document.querySelector("#burger_button")
const mobileNav = document.querySelector("#mobile_nav")
burger.addEventListener("click", () => {
    burger.classList.toggle("active");
    mobileNav.classList.toggle("active");
})