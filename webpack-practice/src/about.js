export default function loadAbout() {
  const content = document.getElementById("content");

  const title = document.createElement("h1");
  title.textContent = "Sobre";

  const text = document.createElement("p");
  text.textContent = "Somos o melhor restaurante da cidade!";

  content.appendChild(title);
  content.appendChild(text);
}