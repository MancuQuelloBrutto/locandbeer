const btn = document.querySelector(".list")
const navlinks = document.querySelector(".navlinks")
const links = document.querySelectorAll(".navlinks li a")

btn.addEventListener("click", () =>{
    navlinks.classList.toggle("open");
});