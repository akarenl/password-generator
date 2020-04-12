// Assignment Code
var generateBtn = document.querySelector("#generate");
//  password length
var charLength = prompt("Please enter desired password length");
if (charLength > 8 && charLength < 129) {
} else {
  alert("Must be between 8 and 128 characters!");
}

// Ask for Lowercase

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

  // ************^^Don't Touch ^^******



  // upper case
  var upperCase = ("ABCDEFGHIJKLMNOPQRSTUVWXYZ");
  // lower case
  var lowerCase = ("abcdefghijklmnopqrstuvwxyz");
  // special characters
  var specChar = ("");





}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
