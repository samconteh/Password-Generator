// Assignment code here

// Get references to the #generate element
var generateBtn = document.querySelector('#generate')

// Function to generate password
function generatePassword() {

  // Created array of each character type
  var lowercaseSet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  var uppercaseSet = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
  var numberSet = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
  var specialcharSet = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "+", "?", "/", "-", ";", ":", "[", "]", "{", "}", ",", ".", "<", ">", "=", "_", "`", "~", "|"];

  // Created empty arrays
  var resultArray = [];
  var userArray = [];
  

  // Ask how many characters for password
  function charLength() {
    passwordLength = prompt("How many characters would you like your password? Choose a value between 8 and 128.");
    if (passwordLength < 8 || passwordLength > 128 || passwordLength == "") {
      // If user inputs value outside range, error message will appear
      alert("Error! Please input a value that is between 8 and 128.");
      charLength();
    }
  }
  charLength()
  // User must select at least one of the following password options
  function passwordOptions() {
    wantsLowercase = confirm("Do you want to include lowercase characters?");
    wantsUppercase = confirm("Do you want to include UPPERCASE characters?");
    wantsNumbers = confirm("Do you want to include numbers?");
    wantsSpecial = confirm("Do you want to include special characters?");
    // If user does not select at least one option, error message will appear
    if (wantsLowercase == false && wantsUppercase == false && wantsNumbers == false && wantsSpecial == false) {
      alert("Error! Please select at least one option.");
      passwordOptions();
    }
  }
  passwordOptions()

  // Condition of the arrays
  if (wantsLowercase) {
    resultArray = resultArray.concat(lowercaseSet);
  }
  if (wantsUppercase) {
    resultArray = resultArray.concat(uppercaseSet);
  }
  if (wantsNumbers) {
    resultArray = resultArray.concat(numberSet);
  }
  if (wantsSpecial) {
    resultArray = resultArray.concat(specialcharSet);
  }
  console.log(resultArray)

  // This is what generates a password
  for (var i = 0; i < passwordLength; i++) {
    userArray.push(resultArray[Math.floor(Math.random() * resultArray.length)]);
  }
  return userArray.join("");
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);