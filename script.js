// Assignment Code
var generateBtn = document.querySelector("#generate");
console.log(generateBtn);

// var RandomIndex
  var specialCharacters = " !#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
  var numbers = "1234567890";
  var lowercaseletters = "qwertyuiopasdfghjklzxcvbnm";
  var upperCaseLetters = "QWERTYUIOPASDFGHJKZXCVBNM";


function getRandomInt(specialCharacters) { 
  return Math.floor(Math.random() * Math.floor(specialCharacters));
   


}
console.log(getRandomInt(10));
console.log(getRandomInt(1));































// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// choices array... var specialCharacters = [" !"#$%&'()*+,-./:;<=>?@[\]^_`{|}~"];
// choices array.. var numbers = [1234567890]
// choices array ... var lowercaseletters = [qwertyuiopasdfghjklzxcvbnm]
// choices array... var upperCaseletters = [QWERTYUIOPASDFGHJKZXCVBNM]
// Random index for ComputerPassword criteria... var index = Math.floor(Math.random() * Choicesarray.length);
// I need to creat an array of array's that the computer will loop through
// until the desired number of charactiraistics is met no less than 8 as much as 128 characters

