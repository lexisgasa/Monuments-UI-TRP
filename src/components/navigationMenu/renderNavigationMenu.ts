export const renderNavigationMenu = (): HTMLElement => {
  const navigationMenu = document.createElement("nav");

  navigationMenu.classList.add("navigation-menu");

  navigationMenu.innerHTML = `
    <ul class="navigation-menu">
      <li class="navigation-menu__item navigation-menu__item--active"><a href="#">List</a></li>
      <li class="navigation-menu__item"><a href="#">Create monument</a></li>
    </ul>
  `;

  return navigationMenu;
};
