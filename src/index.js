import { fetchUserData } from "./scripts/fetchData";

import "./styles.css";
import "./styles/loader.css";

const userForm = document.getElementById("user-form");
const loader = document.getElementById("form-loading");
const errorDiv = document.getElementById("error");

userForm.addEventListener("submit", async (event) => {
  event.preventDefault();

  loader.classList.add("loader");

  const formData = new FormData(userForm);
  const username = formData.get("username");

  try {
    const response = await fetchUserData(username);

    loader.classList.remove("loader");

    if (!response.data.user) {
      errorDiv.classList.add("error");
      errorDiv.textContent = `User with username: ${username} does not exist on GitHub`;
      return;
    }

    localStorage.setItem("github:user", JSON.stringify(response));
    window.location.href = "/user.html";
  } catch (error) {
    console.log({ errorDiv });
    errorDiv.classList.add("error");
    errorDiv.textContent = error.message;
  }
});
