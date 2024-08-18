import { type Monument } from "../../types";
import { renderCard } from "../renderCard";

describe("Given the function renderCard", () => {
  describe("When it receives a monument named 'Sagrada familia'", () => {
    test("Then it should render a card component which has the title 'Sagrada familia'", () => {
      const screen = document.createElement("div");
      const monumentName = "Sagrada familia";
      const monument: Monument = {
        name: monumentName,
        description: "",
        imageUrl: "",
        country: "",
        city: "",
      };

      const card = renderCard(monument);
      screen.appendChild(card);
      const cardTitle = screen.querySelector("h2");

      expect(cardTitle).not.toBeNull();
      expect(cardTitle?.textContent).toBe(monumentName);
    });
  });
});
