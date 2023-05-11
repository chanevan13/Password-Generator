// Assignment code here
//function to generate passdword
function getPasswordOptions() {
  var length = Number(prompt("How many characters will your password be? Enter a number between 8 and 128"));

  // check if password length is a number and between 8 and 128
  if (isNaN(length) === true || length < 8 || length > 128) {
    alert("Password length must be a number between 8 and 128 characters");
    return;
  }

  var hasLowercase = confirm("Click OK to confirm including lowercase characters.");
  var hasUppercase = confirm("Click OK to confirm including uppercase characters.");
  var hasNumeric = confirm("Click OK to confirm including numeric characters.");
  var hasSpecial = confirm("Click OK to confirm including special characters.");

  // check if user has included at least one character type
  if (
    hasLowercase === false &&
    hasUppercase === false &&
    hasNumeric === false &&
    hasSpecial === false
  ) {
    alert("Must select at least one character type");
    return;
  }

  var passwordOptions = {
    length: length,
    hasLowercase: hasLowercase,
    hasUppercase: hasUppercase,
    hasNumeric: hasNumeric,
    hasSpecial: hasSpecial,
  };

  return passwordOptions;
}
//function to generate password
function generatePassword() {
  var options = getPasswordOptions();
  var password = "";
  var possibleCharacters = [];
  var guaranteedCharacters = [];
  //conditionals for options selected ****need to look up how to create no options for conditionals
  if (!options) return password;

  if (options.hasLowercase) {
    possibleCharacters = possibleCharacters.concat("abcdefghijklmnopqrstuvwxyz".split(''));
    guaranteedCharacters.push(getRandom("abcdefghijklmnopqrstuvwxyz".split('')));
  }

  if (options.hasUppercase) {
    possibleCharacters = possibleCharacters.concat("ABCDEFGHIJKLMNOPQRSTUVWXYZ".split(''));
    guaranteedCharacters.push(getRandom("ABCDEFGHIJKLMNOPQRSTUVWXYZ".split('')));
  }

  if (options.hasNumeric) {
    possibleCharacters = possibleCharacters.concat("0123456789".split(''));
    guaranteedCharacters.push(getRandom("0123456789".split('')));
  }

  if (options.hasSpecial) {
    possibleCharacters = possibleCharacters.concat("!@#$%^&*()_+~`|}{[]:;?><,./-=".split(''));
    guaranteedCharacters.push(getRandom("!@#$%^&*()_+~`|}{[]:;?><,./-=".split('')));
  }

  for (var i = 0; i < options.length; i++) {
    var possibleCharacter = getRandom(possibleCharacters);
    password += possibleCharacter;
  }

  for (var i = 0; i < guaranteedCharacters.length; i++) {
    password[i] = guaranteedCharacters[i];
  }

  return password;
}
//random generator funtion 
function getRandom(arr) {
  var randIndex = Math.floor(Math.random() * arr.length);
  var randElement = arr[randIndex];
  return randElement;
}
//prints password
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}