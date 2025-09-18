// main.js

const headers = document.querySelectorAll(".header-bottom");
const toggleClass = "is-sticky";

window.addEventListener("scroll", () => {
  const currentScroll = window.pageYOffset;

  headers.forEach((header) => {
    if (currentScroll > 150 && !header.classList.contains(toggleClass)) {
      header.classList.add(toggleClass);
    } else if (
      currentScroll <= 150 &&
      header.classList.contains(toggleClass)
    ) {
      header.classList.remove(toggleClass);
    }
  });
});