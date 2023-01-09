// Assignment code here
function writePassword() {
  let chars = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%^&*()_+"
  let passwordLength= 16;
  let result ="";
  let element = document.getElementById("password")
  
  


for (var i = 0; i <= passwordLength; i++){
  let randomNumber = Math.floor(Math.random() * chars.length);

  result += chars.substring(randomNumber,randomNumber + 1)
  element.value = result;
}
  



}
 

