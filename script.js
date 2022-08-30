"use-strict";
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
      break;

    case 2: //find the lenght of the first name in a full name.
      outputValue = inputValue.substring(0, inputValue.indexOf(" ").length);
      break;

    case 3: //find start and end position of the middel name out of a full name.
      outputValue = inputValue.substring(inputValue.indexOf(" ") + 1, inputValue.lastIndexOf(" "));
      break;

    case 4: //check if a filename is either .jpg or .png.
      inputValue.endsWith(".jpg") || inputValue.endsWith(".png") ? (outputValue = "That's a good image file name") : (outputValue = "Incorrect file ending...");
      break;

    case 5: //hide a password with the right amount of *.
      outputValue = "*".repeat(inputValue.length);
      break;

    default:
      outputValue = "Not implimentet yet";
  }
  outputText.value = outputValue;
}
