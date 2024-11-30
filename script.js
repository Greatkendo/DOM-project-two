// Wait for the DOM to load
document.addEventListener("DOMContentLoaded", () => {
  // Select the color box and button elements
  const COLOUR_BOX = document.getElementById("colour-box");
  const CHANGE_BTN = document.getElementById("change-colour-btn");

  // Function to generate a random color in hexadecimal format
  function getRandomColour() {
    const letters = "012345678ABCDEF";
    let colour = "#";
    for (let i = 0; i < 6; i++) {
      colour += letters[Math.floor(Math.random() * 16)];
    }
    return colour;
  }

  // Add a click event listener to the button
  CHANGE_BTN.addEventListener("click", function () {
    COLOUR_BOX.style.backgroundColor = getRandomColour(); // Get a random color // Change the color of the box
  });
});
