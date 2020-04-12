// Assignment Code
var generateBtn = document.querySelector("#generate");
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



} else {
  alert("Must be between 8 and 128 characters!");

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
