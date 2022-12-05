const navToggle = document.querySelector(".nav_taggle")
const navMenu = document.querySelector(".nav_menu")
navToggle.addEventListener("click", (event) => {
    navToggle.classList.toggle("out")
    navMenu.classList.toggle("visible")
})
console.log(navToggle);
console.log(navMenu)
