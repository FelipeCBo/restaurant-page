export default function loadHome() {
  const content = document.getElementById("content");

  const title = document.createElement("h1");
  title.textContent = "Meu Restaurante";

  const text = document.createElement("p");
  text.textContent = "O melhor lugar para comer bem!";

  content.appendChild(title);
  content.appendChild(text);
}