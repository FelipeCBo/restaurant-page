export default function loadMenu() {
  const content = document.getElementById("content");

  const title = document.createElement("h1");
  title.textContent = "Menu";

  const item = document.createElement("p");
  item.textContent = "Pizza - R$ 30";

  content.appendChild(title);
  content.appendChild(item);
}