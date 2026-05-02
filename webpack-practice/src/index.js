import loadHome from "./home.js";
import loadMenu from "./menu.js";
import loadAbout from "./about.js";

const content = document.getElementById("content");

function clearContent() {
  content.innerHTML = "";
}

loadHome();

document.getElementById("home").addEventListener("click", () => {
  clearContent();
  loadHome();
});

document.getElementById("menu").addEventListener("click", () => {
  clearContent();
  loadMenu();
});

document.getElementById("about").addEventListener("click", () => {
  clearContent();
  loadAbout();
});