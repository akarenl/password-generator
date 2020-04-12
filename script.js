// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword() {
  //  password length
  var charLength = prompt("Please enter desired password length");
  if (charLength > 7 && charLength < 129) {

    // Ask for Lowercase
    var lowerResult = ("");
    var lowerCase = ("abcdefghijklmnopqrstuvwxyz");
    var lowerUser = confirm("Do you want lowercase letters?");
    if (lowerUser === true) {
      for (var i = 0; i < charLength; i++) {
        lowerResult += lowerCase.charAt(Math.floor(Math.random() * charLength));
      }
      console.log(lowerResult);
    }

    // Ask for Uppercase
    var upperResult = ("");
    var upperCase = ("ABCDEFGHIJKLMNOPQRSTUVWXYZ");
    var upperUser = confirm("Do you want uppercase letters?");
    if (upperUser === true) {
      for (var j = 0; j < charLength; j++) {
        upperResult += upperCase.charAt(Math.floor(Math.random() * charLength));
      }
      console.log(upperResult);
    }

    // ask if adding numbers
    var numResult = ("");
    var numChoice = ("0123456789");
    var numUser = confirm("Do you want nummeric characters?");
    if (numUser === true) {
      for (var k = 0; k < charLength; k++) {
        numResult += numChoice.charAt(Math.floor(Math.random() * charLength));
      }
      console.log(numResult);
    }

    // ask if wanting special characters
    var specialResult = ("");
    var specialChoice = ("!@#$%^&*()?/-,.");
    var specialUser = confirm("Do you want special characters?");
    if (specialUser === true) {
      for (var l = 0; l < charLength; l++) {
        specialResult += specialChoice.charAt(Math.floor(Math.random() * charLength));
      }
      console.log(specialResult);
    }

    // var result = ("");
    // if (lowerUser === true && upperUser === true && numUser === true && specialUser === true) {
    //   var result [lowerUser,upperUser,numUser,specialUser]
    // }


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
