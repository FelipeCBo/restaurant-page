export default function loadMenu() {
  const div = document.createElement("div");

  const title = document.createElement("h1");
  title.textContent = "Menu";

  div.appendChild(title);

  const items = [
    "🍕 Pizza - R$ 30",
    "🍔 Hambúrguer - R$ 25",
    "🍣 Sushi - R$ 40",
  ];

  items.forEach((item) => {
    const p = document.createElement("p");
    p.textContent = item;
    div.appendChild(p);
  });

  return div;
}