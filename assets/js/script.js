// Assignment code here
let lowercase = "abcdefghijklmnopqrstuvwxyz";
let uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let numeric = "1234567890";
let special = "!\"#$%&'()*+,-./:;<=>?@[]^_`{|}~\\";

let length;
function generatePassword() {
  let selectedString = "";

  //Length Prompt
  length = window.prompt(
    "Choose password length. Must be at least 8 characters but no more than 128"
  );
  //Loops until user gives valid response
  while (length < 8 || length > 128) {
    console.log(length < 8);
    length = window.prompt(
      "Invalid length! Must be at least 8 characters but no more than 128"
    );
  }
  //Lowercase Prompt
  let yesOrNo = window.prompt("Do you want lowercase? Enter Yes or No.");
  //Loops until user gives valid response
  while (yesOrNo !== "Yes" && yesOrNo !== "No") {
    yesOrNo = window.prompt(
      "Invalid response!! Do you want lowercase? Enter Yes or No."
    );
  }
  if (yesOrNo === "Yes") selectedString += lowercase;

  //Uppercase Prompt
  yesOrNo = window.prompt("Do you want uppercase? Enter Yes or No.");
  //Loops until user gives valid response
  while (yesOrNo !== "Yes" && yesOrNo !== "No") {
    yesOrNo = window.prompt(
      "Invalid response!! Do you want uppercase? Enter Yes or No."
    );
  }
  if (yesOrNo === "Yes") selectedString += uppercase;

  //Numeric Prompt
  yesOrNo = window.prompt("Do you want numbers? Enter Yes or No.");
  //Loops until user gives valid response
  while (yesOrNo !== "Yes" && yesOrNo !== "No") {
    yesOrNo = window.prompt(
      "Invalid response!! Do you want numbers? Enter Yes or No."
    );
  }
  if (yesOrNo === "Yes") selectedString += numeric;

  //Special Character Prompt
  yesOrNo = window.prompt("Do you want special characters? Enter Yes or No.");
  //Loops until user gives valid response
  while (yesOrNo !== "Yes" && yesOrNo !== "No") {
    yesOrNo = window.prompt(
      "Invalid response!! Do you want special characters? Enter Yes or No."
    );
  }
  if (yesOrNo === "Yes") selectedString += special;

  if (selectedString.length > 0) {
    let passwordStr = "";
    for (let i = 0; i < length; i++) {
      passwordStr +=
        selectedString[Math.floor(Math.random() * selectedString.length)];
    }
    return passwordStr;
  }
  return "No character types selected. Try again"
}
// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
