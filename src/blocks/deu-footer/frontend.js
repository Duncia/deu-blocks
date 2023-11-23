document.addEventListener("DOMContentLoaded", () => {
  const footerYear = document.querySelector("#footerYear");
  const d = new Date();
  function showYear() {
    let yearNow = d.getFullYear();
    footerYear.innerHTML = `${yearNow}`;
  }
  showYear();
});
