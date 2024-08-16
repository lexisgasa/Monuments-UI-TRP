import { renderCard } from "../card/renderCard";
import type { Monument } from "../types";

export const renderCardList = (monuments: Monument[]): HTMLElement => {
  const cardList = document.createElement("ul");

  const card = renderCard(monuments[0]);

  cardList.innerHTML = `
    <li>${card.outerHTML}</li>
  `;

  return cardList;
};
