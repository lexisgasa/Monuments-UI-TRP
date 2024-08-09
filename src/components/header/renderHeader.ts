export const renderHeader = (): HTMLElement => {
  const header = document.createElement("header");

  header.classList.add("header");

  header.innerHTML = `
    <h1 class="main-heading">Monuments!</h1>
  `;

  return header;
};
