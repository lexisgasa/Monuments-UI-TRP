import type { Monument } from "../types.js";

export const renderCard = (monument: Monument): HTMLElement => {
  const card = document.createElement("article");

  card.classList.add("card");

  card.innerHTML = `
    <h2>${monument.name}</h2>
    <p>descripcion falsika</p>
  `;

  return card;
};
