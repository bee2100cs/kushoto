
// Code to Navigate page by clicking on the side navbar
const nav = document.querySelectorAll(".page-nav a");
const pagePart = document.querySelectorAll("#hero, .main-content [id]");
nav.forEach((e, i) => e.addEventListener("click", () => {
  nav.forEach(e => e.classList.remove("active"));
  e.classList.add("active");
  pagePart[i].scrollIntoView();
}));
