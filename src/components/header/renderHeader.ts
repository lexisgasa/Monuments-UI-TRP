import { renderNavigationMenu } from "./renderNavigationMenu.js";

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
