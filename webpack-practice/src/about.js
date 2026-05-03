export default function loadAbout() {
  const div = document.createElement("div");

  const title = document.createElement("h1");
  title.textContent = "Sobre nós";

  const text = document.createElement("p");
  text.textContent =
    "Desde 1990 oferecendo qualidade e sabor. Nossa missão é servir você com excelência.";

  div.appendChild(title);
  div.appendChild(text);

  return div;
}