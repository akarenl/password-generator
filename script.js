// Assignment Code
var generateBtn = document.querySelector("#generate");
//  password length
var charLength = prompt("Please enter desired password length");
if (charLength > 7 && charLength < 129) {

  // Ask for Lowercase
  var lowerResult = ("");
  var lowerCase = ("abcdefghijklmnopqrstuvwxyz");
  var lowerUser = confirm("Do you want lowercase characters?");
  if (lowerUser === true) {
    for (var i = 0; i < charLength; i++) {
      lowerResult += lowerCase.charAt(Math.floor(Math.random() * charLength));
    }
    console.log(lowerResult);
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
