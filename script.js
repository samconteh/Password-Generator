// Assignment Code
var generateBtn = document.querySelector("#generate");
console.log(generateBtn);

var lowerCaseCharacter = "abcdefghijklmnopqrstuvwxyz";

var upperCaseCharacter = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

var numericCharacter = "0123456789";

var specialCharacter = "!@#$%^&*()_-+={[}]|:;<>.?/";

let everyCharacter = "";

function generatePassword() {
  everyCharacter = "";
  let passwordLength = prompt(
    "Please be mindfull that the password must be at least 8 characters and no more than 128 characters, How long do you want It to be?"
  );
}
  if (
    passwordLength < 8 ||
    passwordLength > 128 ||
    isNaN(parseInt(passwordLength))
  ) {
    alert(
      "You haven't entered the right lenght that you want your password to be, Please enter a number between 8 and 128."
    );
  } else {
    let askLowerCase = confirm(
      "Would you like to have Lower Case characters on your password ?"
    );
  }
    if (askLowerCase) {
      everyCharacter += lowerCaseCharacter;
    }
    let askUpperCase = confirm(
      "Would you like to have Upper Case characters on your password ?"
    );
    if (askUpperCase) {
      everyCharacter += upperCaseCharacter;
    }
    let askNumeric = confirm(
      "Would you like to have Numbers on your password ?"
    );
    if (askNumeric) {
      everyCharacter += numericCharacter;
    }
    let askSpecialCharacters = confirm(
      "Would you like to have Special Characters on your password?"
    );
    if (askSpecialCharacters) {
      everyCharacter += specialCharacter;
    }
 

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
