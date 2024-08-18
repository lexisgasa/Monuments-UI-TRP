import { renderCard } from "../card/renderCard";
import type { Monument } from "../types";
import "./renderCardList.css";

export const renderCardList = (monuments: Monument[]): HTMLElement => {
  const cardList = document.createElement("ul");
  cardList.classList.add("cards");

  const card = renderCard(monuments[0]);

  cardList.innerHTML = `
    <li>${card.outerHTML}</li>
    <li>${card.outerHTML}</li>
    <li>${card.outerHTML}</li>
  `;

  return cardList;
};
