document.addEventListener("DOMContentLoaded", () => {
  const burgerMenuDiv = document.querySelector("#burger");
  const burgerMenuIcon = document.querySelector("#burger__middle");
  const mainMenuClose = document.querySelector("#main-menu");
  //const headerMenu = document.querySelector("#header__menu");

  function events() {
    burgerMenuDiv.addEventListener("click", () => {
      toggleMenu();
    });
  }
  function toggleMenu() {
    burgerMenuIcon.classList.toggle("header__burger__middle--active");
    mainMenuClose.classList.toggle("main-menu--close");
    //headerMenu.classList.toggle("visibility-hidden");
  }
  events();
});
