const section = document.querySelector(".section");
const btns = document.getElementById("buttons");

btns.addEventListener("click", function () {
  section.classList.toggle("resize");
});
