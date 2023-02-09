// ** Code to Open and Close Navigation Menu

const navIcon = document.getElementById("nav-open");
const navCloseIcon = document.getElementById("nav-close");
const nav = document.getElementById("main-nav");

openNav = () => {
  nav.classList.add("active");
}

closeNav = () => {
  nav.classList.remove("active");
}

navIcon.addEventListener("click", openNav);
navCloseIcon.addEventListener("click", closeNav);

navIcon.addEventListener("click", ()=>{
  console.log("open the menu");
});
navCloseIcon.addEventListener("click", ()=>{
  console.log("close the menu");
});
