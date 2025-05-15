const ham = document.querySelector(".ham");
const nav = document.querySelector("nav");
ham.addEventListener("click", toggle);

function toggle() {
  const isOpen = ham.src.includes("assets/ham-close.svg");
  ham.src = isOpen ? "assets/ham-open.svg" : "assets/ham-close.svg";
  nav.classList.toggle("show");
}
