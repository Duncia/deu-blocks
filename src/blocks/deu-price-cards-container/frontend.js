document.addEventListener("DOMContentLoaded", () => {
  const switcherButtonLeft = document.querySelector(".switcher__btn--left");
  const switcherButtonLeftBg = document.querySelector(
    ".switcher__btn--left-bg"
  );
  const switcherButtonRight = document.querySelector(".switcher__btn--right");
  const switcherButtonRightBg = document.querySelector(
    ".switcher__btn--right-bg"
  );
  const pricesNotUrgent = document.querySelectorAll(".content-not-urgent");
  const pricesUrgent = document.querySelectorAll(".content-urgent");

  switcherButtonRight.addEventListener("click", () => {
    switcherButtonLeftBg.style.left = "100%";
    switcherButtonLeft.style.color = "#353535";
    switcherButtonRightBg.style.left = "0";
    switcherButtonRight.style.color = "#fff";
    pricesNotUrgent.forEach((el) => {
      el.classList.add("hide-price");
    });
    pricesUrgent.forEach((el) => {
      el.classList.remove("hide-price");
    });
  });
  switcherButtonLeft.addEventListener("click", () => {
    switcherButtonLeftBg.style.left = "0";
    switcherButtonLeft.style.color = "#fff";
    switcherButtonRightBg.style.left = "-100%";
    switcherButtonRight.style.color = "#353535";
    pricesNotUrgent.forEach((el) => {
      el.classList.remove("hide-price");
    });
    pricesUrgent.forEach((el) => {
      el.classList.add("hide-price");
    });
  });
});
