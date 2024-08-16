import { renderHeader } from "../renderHeader.js";

describe("Given the header component", () => {
  describe("When it is rendered", () => {
    test("Then it should show a 'Monuments!' as a heading", () => {
      const screen = document.createElement("div");
      const expectedTitle = "Monuments!";

      const header = renderHeader();

      screen.appendChild(header);

      const appTitle = screen.querySelector("h1");

      expect(appTitle).not.toBeNull();
      expect(appTitle?.textContent).toBe(expectedTitle);
    });
  });
});
