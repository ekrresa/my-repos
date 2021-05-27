import { fetchUserData } from "./scripts/fetchData";
import { activateDropdown } from "./scripts/dropdown";

// fetchUserData().then((res) => {
//   console.log({ res });
// });

const hamburgerButton = document.getElementById("hamburger-button");
const navMenu = document.getElementById("nav-menu");

hamburgerButton.addEventListener("click", () => {
  navMenu.classList.toggle("nav__open");
});

const siteLinksBtn = document.querySelector("#site-links-btn");
const siteLinksDropdown = document.querySelector("#site-links-dropdown");

const settingsBtn = document.querySelector("#settings-btn");
const settingsDropdown = document.querySelector("#settings-dropdown");

activateDropdown(siteLinksBtn, siteLinksDropdown);
activateDropdown(settingsBtn, settingsDropdown);
