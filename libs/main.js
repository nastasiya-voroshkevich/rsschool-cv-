const menuBurger = document.querySelector(".menu__burger");
const menuBody = document.querySelector(".menu-body");

const anchors = document.querySelectorAll('a[href*="#"]');
for (let anchor of anchors) {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const blockID = anchor.getAttribute("href").substr(1);

    if (menuBurger.classList.contains("_active")) {
      document.body.classList.remove("_lock");
      menuBurger.classList.remove("_active");
      menuBody.classList.remove("_active");
    }
    document.getElementById(blockID).scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  });
}

menuBurger.addEventListener("click", function (e) {
  document.body.classList.toggle("_lock");
  menuBurger.classList.toggle("_active");
  menuBody.classList.toggle("_active");
});
