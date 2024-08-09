import { renderHeader } from "../renderHeader";
import { renderNavigationMenu } from "../renderNavigationMenu";

describe("Given the header component", () => {
  const screen = document.createElement("div");

  describe("When the header is rendered", () => {
    test("Then it should show a 'Monuments!' as a heading", () => {
      const expectedTitle = "Monuments!";

      const header = renderHeader();

      screen.appendChild(header);

      const appTitle = screen.querySelector("h1");

      expect(appTitle?.textContent).toBe(expectedTitle);
    });
  });

  describe("When the navigation menu is rendered", () => {
    test("Then it should show 'List' as text", () => {
      const navigationMenu = renderNavigationMenu();

      screen.appendChild(navigationMenu);

      const listItem = screen.querySelector("li");

      expect(listItem?.textContent).toBe("List");
    });
  });
});
