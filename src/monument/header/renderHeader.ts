import { renderNavigationMenu } from "../navigationMenu/renderNavigationMenu.js";
import "./renderHeader.css";

export const renderHeader = (): HTMLElement => {
  const header = document.createElement("header");

  header.classList.add("header");

  const navigationMenu = renderNavigationMenu();

  header.innerHTML = `
    <h1 class="main-heading">Monuments!</h1>
    ${navigationMenu.outerHTML}
  `;

  return header;
};
