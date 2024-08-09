import { renderApp } from "./components/app/renderApp.js";

const root = document.querySelector(".root");

if (!root) {
  throw new Error("Can't find the root element");
}

const app = renderApp();

root.appendChild(app);
