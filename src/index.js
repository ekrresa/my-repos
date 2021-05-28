import { fetchUserData, displayFetchError } from "./scripts/fetchData";
import { activateDropdown } from "./scripts/dropdown";
import { renderMisc, renderProfile, renderRepoList } from "./scripts/render";
import { observeProfileAvatar } from "./scripts/observer";

import "./style.css";

// Fetch and render data
fetchUserData()
  .catch(displayFetchError)
  .then(({ data }) => {
    hideLoader();
    renderProfile(data.viewer);
    renderRepoList(data.viewer.repositories.nodes);
    renderMisc(data.viewer);
  })
  .then(observeProfileAvatar)
  .catch((err) => {
    console.error(err);
  });

function hideLoader() {
  const loaders = document.querySelectorAll(".loader");

  loaders.forEach((loader) => loader.classList.add("hide__loader"));
}

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
