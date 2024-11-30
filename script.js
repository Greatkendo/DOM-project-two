document.addEventListener("DOMContentLoaded", () => {
  const COLOUR_BOX = document.getElementById("colour-box");
  const CHANGE_BTN = document.getElementById("change-colour-btn");

  function getRandomColour() {
    const letters = "012345678ABCDEF";
    let colour = "#";
    for (let i = 0; i < 6; i++) {
      colour += letters[Math.floor(Math.random() * 16)];
    }
    return colour;
  }

  CHANGE_BTN.addEventListener("click", function () {
    COLOUR_BOX.style.backgroundColor = getRandomColour();
  });
});
