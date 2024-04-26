let icon = document.querySelector(".bar");
let nav = document.querySelector("nav");
let click = 0;
icon.addEventListener("click", () => {
  click++;
  if (click === 2) {
    nav.style.display = "block";
    click = 0;
  } else {
    nav.style.display = "none";
  }
});
