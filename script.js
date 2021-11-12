
var uppercaseletters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

var lowercaseletters = "abcdefghijklmnopqrstuvwxyz";

var numberoptions = "0123456789";

var specialcharacteroptions = "!@#$%^&*";

var passwordoptions = "";


document.getElementById('generate').addEventListener('click', writePassword)

function writePassword() {
  var password = passGenerate();
  var passwordText = document.getElementById("password");

  passwordText.value = password;
}

  // alert("*Note* Password Length must be 8-128 characters.")

var passwordlength = ""
var uppercase;
var lowercase;
var numbers;
var specialcharacter;

function passGenerate() {

  passwordlength = prompt("How many characters would you like your password to be");
  while (passwordlength < 8 || passwordlength > 128)
    passwordlength = (prompt("Length must be 8-128 characters. How many characters would you like your password to be?"))

  upperCase = confirm("would you like your password to include uppercase")
  lowerCase = confirm("would you like your password to include lowercase")
  numbers = confirm("would you like your password to include numbers")
  specialcharacter = confirm("would you like your password to include specialcharacter")

  var randomCharacter = "";

  if (!uppercase && !lowercase && !numbers && !specialcharacter) {

    alert("please choose at least one option")
  }


    if (uppercase) {
      passwordoptions = passwordoptions + uppercaseletters

    }

    if (lowercase) {

      passwordoptions = passwordoptions + lowercaseletters
    }

    if (numbers) {

      passwordoptions = passwordoptions + numberoptions
    }

    if (specialcharacter) {

      passwordoptions = passwordoptions + specialcharacteroptions
    }
    console.log(passwordoptions)

    for (let i = 0; i < passwordlength; i++) {

      randomCharacter = randomCharacter + passwordoptions[Math.floor(Math.random() * passwordoptions.length)
      ]

      console.log(randomCharacter)

    }
    return randomCharacter

  }


  

   




