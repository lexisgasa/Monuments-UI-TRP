import { renderHeader } from "../renderHeader";

describe("Given the header component", () => {
  describe("When it is rendered", () => {
    test("Then it should show a 'Monuments!' as a heading", () => {
      const expectedTitle = "Monuments!";

      const screen = document.createElement("div");

      const header = renderHeader();

      screen.appendChild(header);

      const appTitle = screen.querySelector("h1");

      expect(appTitle?.textContent).toBe(expectedTitle);
    });
  });
});
