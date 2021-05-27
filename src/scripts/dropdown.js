export function activateDropdown(button, dropdown) {
  button.addEventListener("click", () => {
    dropdown.classList.toggle("dropdown__toggle");
  });

  // Closes dropdown if click event occurs outside currently open dropdown node
  document.addEventListener("click", (e) => {
    if (!button.contains(e.target)) {
      dropdown.classList.remove("dropdown__toggle");
    }
  });
}
