let inputValue, stringSelector, outputText, clickButton;
let outputValue;

document.addEventListener("DOMContentLoaded", init);

function init() {
  outputText = document.getElementById("outputfield");
  clickButton = document.getElementById("generate");

  clickButton.addEventListener("click", readInput);
}

function readInput() {
  //reads what is written in the input field + which line in the dropdown is chosen.
  const inputValue = document.getElementById("inputfield").value;
  const stringSelector = document.getElementById("dropdown").value;

  console.log(inputValue);
  console.log(stringSelector);

  //deciding what should happen when the different lines are chosen in the dropdown menu.
  switch (stringSelector) {
    case 0: //make the first letter upper case.
      outputValue = inputValue.substring(0, 1).toUpperCase() + inputValue.substring(1, inputValue.length).toLowerCase();

      console.log(outputValue);
      break;
    case 1: //find the first name of a full name.
      outputValue = inputValue.substring(0, inputValue.indexOf(" "));
  }
}
