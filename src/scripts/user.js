import { fetchUserData, displayFetchError } from "./fetchData";
import { activateDropdown } from "./dropdown";
import { renderMisc, renderProfile, renderRepoList } from "./render";
import { observeProfileAvatar } from "./observer";

import "../styles/user.css";

document.addEventListener("DOMContentLoaded", () => {
  // Fetch and render data
  const user = localStorage.getItem("github:user");

  if (!user) {
    return displayFetchError();
  }

  const { data } = JSON.parse(user);

  hideLoader();
  renderProfile(data.user);
  renderRepoList(data.user.repositories.nodes);
  renderMisc(data.user);

  observeProfileAvatar();

  // Mobile menu
  const hamburgerButton = document.getElementById("hamburger-button");
  const navMenu = document.getElementById("nav-menu");

  hamburgerButton.addEventListener("click", () => {
    navMenu.classList.toggle("nav__open");
  });

  // Dropdowns
  const siteLinksBtn = document.querySelector("#site-links-btn");
  const siteLinksDropdown = document.querySelector("#site-links-dropdown");

  const settingsBtn = document.querySelector("#settings-btn");
  const settingsDropdown = document.querySelector("#settings-dropdown");

  activateDropdown(siteLinksBtn, siteLinksDropdown);
  activateDropdown(settingsBtn, settingsDropdown);
});

function hideLoader() {
  const loaders = document.querySelectorAll(".loader");

  loaders.forEach((loader) => loader.classList.add("hide__loader"));
}
