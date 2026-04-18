// NAV BAR
const headLinks = document.getElementById("headLinks");
const toggle = document.getElementById("toggle");

//
// let toggleBtn = true;

toggle.addEventListener("click", function () {
  headLinks.classList.toggle("active");

  // if (toggleBtn) {
  //   // toggle.style.backgroundColor = "blue";
  //   toggle.textContent = "❌";
  //   toggle.style.fontSize = "30px";
  // } else {
  //   // toggle.style.backgroundColor = "green";
  //   toggle.textContent = "☰";
  // }

  // toggleBtn = !toggleBtn;
});

// AOS HEADER

const popup = document.querySelector(".pop-up-cont");
const hero = document.querySelector(".My-Hero");

window.addEventListener("scroll", () => {
  if (window.scrollY > hero.offsetHeight - 100) {
    popup.classList.add("show");
  } else {
    popup.classList.remove("show");
  }
});
