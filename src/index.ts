import { renderApp } from "./components/app/renderApp.js";
import "@fontsource/montserrat/400.css";
import "@fontsource/montserrat/700.css";
import "./styles/styles.css";

const root = document.querySelector(".root");

if (!root) {
  throw new Error("Can't find the root element");
}

(async () => {
  const app = await renderApp();

  root.appendChild(app);
})();
