import { getMonuments } from "./api/getMonuments.js";
import { renderApp } from "./components/app/renderApp.js";
import "@fontsource/montserrat/400.css";
import "@fontsource/montserrat/700.css";
import "./styles/styles.css";

const root = document.querySelector(".root");

if (!root) {
  throw new Error("Can't find the root element");
}

const app = renderApp();

root.appendChild(app);

await getMonuments("monuments");
