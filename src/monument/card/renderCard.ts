import type { Monument } from "../types.js";
import "./renderCards.css";

export const renderCard = ({
  name,
  description,
  imageUrl,
  country,
  city,
}: Monument): HTMLElement => {
  const card = document.createElement("article");

  card.classList.add("cards__card");

  card.innerHTML = `
    <h2>${name}</h2>
    <img src="${imageUrl}" alt="Imagen de ${name}">
    <span class="card__location">${country}, ${city}</span>
    <p class="card__description">${description}</p>
  `;

  return card;
};
