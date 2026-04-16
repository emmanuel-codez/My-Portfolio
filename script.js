const popup = document.querySelector(".pop-up-cont");
const hero = document.querySelector(".My-Hero");

window.addEventListener("scroll", () => {
  if (window.scrollY > hero.offsetHeight - 100) {
    popup.classList.add("show");
  } else {
    popup.classList.remove("show");
  }
});
