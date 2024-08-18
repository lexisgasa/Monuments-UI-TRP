import { type Monument } from "../../types";
import { renderCardList } from "../renderCardList";

describe("Given the function renderCardList", () => {
  describe("When it receives 2 monuments", () => {
    test("Then it should return that the length of the monuments array is 2", () => {
      const screen = document.createElement("div");
      const monuments: Monument[] = [
        {
          name: "Sagrada Familia",
          description: "",
          imageUrl: "",
          country: "",
          city: "",
        },
        {
          name: "Casa Batllo",
          description: "",
          imageUrl: "",
          country: "",
          city: "",
        },
      ];
      const expectedCardListLength = 2;

      const cardList = renderCardList(monuments);
      screen.appendChild(cardList);
      const cardListLength = screen.querySelectorAll("li").length;

      expect(cardListLength).toBe(expectedCardListLength);
    });
  });
});
