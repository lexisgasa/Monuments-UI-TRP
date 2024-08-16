import { renderNavigationMenu } from "../renderNavigationMenu.js";

describe("Given the navigation menu component", () => {
  describe("When it is rendered", () => {
    test("Then it should show 'List' as link", () => {
      const screen = document.createElement("div");
      const navigationMenu = renderNavigationMenu();

      screen.appendChild(navigationMenu);

      const linksArray = screen.querySelectorAll("a");
      const createMonumentLink = linksArray[0];

      expect(createMonumentLink).not.toBeNull();
      expect(createMonumentLink?.textContent).toBe("List");
    });

    test("Then it should show 'Create monument' as a link", () => {
      const screen = document.createElement("div");
      const navigationMenu = renderNavigationMenu();

      screen.appendChild(navigationMenu);

      const linksArray = screen.querySelectorAll("a");
      const createMonumentLink = linksArray[1];

      expect(createMonumentLink).not.toBeNull();
      expect(createMonumentLink?.textContent).toBe("Create monument");
    });
  });
});
