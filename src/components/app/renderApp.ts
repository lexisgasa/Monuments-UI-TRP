import { getMonuments } from "../../api/getMonuments";
import { renderCardList } from "../../monument/cardList/renderCardList";
import { renderHeader } from "../../monument/header/renderHeader";

export const renderApp = async (): Promise<HTMLElement> => {
  const app = document.createElement("div");

  app.classList.add("container");

  const header = renderHeader();

  const monuments = await getMonuments();

  const cardList = renderCardList(monuments.monuments);

  app.appendChild(header);
  app.appendChild(cardList);

  return app;
};
