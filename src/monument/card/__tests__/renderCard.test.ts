import { renderCard } from "../renderCard";

describe("Given the function renderCard", () => {
  describe("When it receives a monument named 'Sagrada familia'", () => {
    test("Then it should show a card with the title Sagrada familia", () => {
      const screen = document.createElement("div");
      const monumentName = "Sagrada familia";
      const monuments = {
        name: monumentName,
      };

      const card = renderCard(monuments);
      screen.appendChild(card);
      const cardTitle = screen.querySelector("h2");

      expect(cardTitle).not.toBeNull();
      expect(cardTitle?.textContent).toBe(monumentName);
    });
  });
});
