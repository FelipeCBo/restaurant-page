export default function loadHome() {
  const div = document.createElement("div");

  const title = document.createElement("h1");
  title.textContent = "🍽️ Meu Restaurante";

  const subtitle = document.createElement("h2");
  subtitle.textContent = "Comida incrível, todos os dias";

  const text = document.createElement("p");
  text.textContent =
    "Venha experimentar pratos deliciosos em um ambiente acolhedor.";

  div.appendChild(title);
  div.appendChild(subtitle);
  div.appendChild(text);

  return div;
}