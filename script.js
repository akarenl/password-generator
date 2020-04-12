// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword(charLength, lowerResult, upperResult, numResult, specialResult) {
  //  password length
  var charLength = prompt("Please enter desired password length");
  if (charLength > 7 && charLength < 129) {

    // Ask for Lowercase
    var lowerResult = ("");
    var lowerCase = ("abcdefghijklmnopqrstuvwxyz");
    var lowerUser = confirm("Do you want lowercase letters?");


    // Ask for Uppercase
    var upperResult = ("");
    var upperCase = ("ABCDEFGHIJKLMNOPQRSTUVWXYZ");
    var upperUser = confirm("Do you want uppercase letters?");


    // ask if adding numbers
    var numResult = ("");
    var numChoice = ("0123456789");
    var numUser = confirm("Do you want numeric characters?");


    // ask if wanting special characters
    var specialResult = ("");
    var specialChoice = ("!@#$%^&*()?/-,.");
    var specialUser = confirm("Do you want special characters?");


  } else {
    alert("Must be between 8 and 128 characters!");

  }
}



// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

  // ************^^Don't Touch ^^******







}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
