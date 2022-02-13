const readline = require("readline");

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

console.log("Welcome to password validator");
reader.questions("Would you please enter your password?", function (password) {
  console.log(password);
});

let password = "1234567890";

if (password.length === 10) {
  console.log("Success, Welcome ");
} else {
  console.log("Invalid, mistakes are common please try again");
}
