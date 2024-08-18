import type { Monument } from "../types.js";
import "./renderCard.css";

export const renderCard = (monument: Monument): HTMLElement => {
  const card = document.createElement("article");

  card.classList.add("cards__card");

  card.innerHTML = `
    <h2>${monument.name}</h2>
  `;

  return card;
};
