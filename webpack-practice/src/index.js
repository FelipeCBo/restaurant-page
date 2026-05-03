import loadHome from "./home.js";
import loadMenu from "./menu.js";
import loadAbout from "./about.js";
import "./styles.css"

const content = document.getElementById("content");

function clearContent() {
  content.innerHTML = "";
}

function render(page) {
  clearContent();
  content.appendChild(page());
}

render(loadHome);

document.getElementById("home").addEventListener("click", () => {
  render(loadHome);
});

document.getElementById("menu").addEventListener("click", () => {
  render(loadMenu);
});

document.getElementById("about").addEventListener("click", () => {
  render(loadAbout);
});