const mobileMenuBtn = document.querySelector("nav button");
const mobileMenu = document.querySelector("nav ul");
const mobileMenuItems = document.querySelectorAll("nav ul li");
const body = document.querySelector("body");

let mobileMenuOpen = false;

mobileMenuBtn.addEventListener("click", () => {
  if (!mobileMenuOpen) {
    mobileMenu.classList.add("open");
    mobileMenuBtn.classList.add("close");
    mobileMenuItems.forEach((item) => item.classList.add("container"));
    body.classList.add("mm-open");
    mobileMenuOpen = true;
  } else {
    mobileMenu.classList.remove("open");
    mobileMenuBtn.classList.remove("close");
    body.classList.remove("mm-open");
    mobileMenuOpen = false;
    setTimeout(() => {
      mobileMenuItems.forEach((item) => item.classList.remove("container"));
    }, "1000");
  }
});
