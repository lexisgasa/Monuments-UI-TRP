import { renderHeader } from "../header/renderHeader.js";

export const renderApp = (): HTMLElement => {
  const app = document.createElement("div");

  app.classList.add("container");

  const header = renderHeader();

  app.appendChild(header);

  return app;
};
