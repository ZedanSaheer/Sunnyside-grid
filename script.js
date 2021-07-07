const menu = document.getElementById("menu");
const responsiveMenu = document.querySelector(".responsive")
menu.addEventListener('click',openMenu);

function openMenu(){
     responsiveMenu.classList.toggle("active");
}