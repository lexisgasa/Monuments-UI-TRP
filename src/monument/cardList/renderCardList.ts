import { renderCard } from "../card/renderCard";
import type { Monument } from "../types";
import "./renderCardList.css";

export const renderCardList = (monuments: Monument[]): HTMLElement => {
  const cardList = document.createElement("ul");
  cardList.classList.add("cards");

  monuments.forEach((monument) => {
    const card = renderCard(monument);
    const listItem = document.createElement("li");
    listItem.classList.add("cards__container");
    listItem.appendChild(card);
    cardList.appendChild(listItem);
  });

  return cardList;
};
