var burger = document.getElementById("js-burger");
var menu = document.getElementById("js-menu");

burger.addEventListener("click", function (e) {
  e.stopPropagation();
  menu.classList.toggle("active");
  burger.classList.toggle("active");
});

document.addEventListener("click", function (e) {
  menu.classList.remove("active");
  burger.classList.remove("active");
});
