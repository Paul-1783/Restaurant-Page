import "./styles.css";
import { menu } from "./menu.js";
import { aboutMett } from "./about.js";
import { homeWelcome } from "./home.js";

const content = document.querySelector("#content");
const aboutButton = document.querySelector(".about");
const menuButton = document.querySelector(".menu");
const homeButton = document.querySelector(".home");

content.classList.add("centerMe");
content.innerText = homeWelcome;

menuButton.addEventListener("click", () => {
  content.innerText = "";
  content.classList.remove("centerMe");
  content.appendChild(menu);
});

aboutButton.addEventListener("click", () => {
  content.classList.add("centerMe");
  content.innerText = aboutMett;
});

homeButton.addEventListener("click", () => {
  content.classList.add("centerMe");
  content.innerText = homeWelcome;
});
