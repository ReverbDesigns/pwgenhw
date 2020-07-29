// User input variables: 
var enter;
var confirmNumber;
var confirmCharacter;
var confirmUppercase;
var confirmLowercase;
// Start Password variable values: 
// Special characters 
character = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", "\:", "\;", " < ", "=", " > ", " ? ", "@", "[", "\\", "]", " ^ ", "_", "`", "{", "|", "}", "~"];
// Numeric characters
number = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// Alphabetical characters
letter = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
// Space is for the Uppercase conversion
space = [];
// Choices declared outside the if statement so they can be concatenated upon condition
var choices;
// converts letters to uppercase 
var toUpper = function (x) {
    return x.toUpperCase();
};
// creates a variable for uppercase conversion
letter2 = letter.map(toUpper);

var get = document.querySelector("#generate");

get.addEventListener("click", function () {
    ps = generatePassword();
    document.getElementById("password").placeholder = ps;
});

// Start function to generate password
function generatePassword() {
    // Asks for user input
    enter = parseInt(prompt("How many characters would you like your password? Choose between 8 and 128"));
    // First if statement for user entry validation 
    if (!enter) {
        alert("This needs a value");
    } else if (enter < 8 || enter > 128) {
        // Validates user input
        // Start user input prompts
        enter = parseInt(prompt("You must choose between 8 and 128"));

    } else {
        // Continues once user input is validated
        confirmNumber = confirm("Would you like to use numbers?");
        confirmCharacter = confirm("Would you like to use special characters?");
        confirmUppercase = confirm("Would you like to incorporate Uppercase letters?");
        confirmLowercase = confirm("Would you like to incorporate Lowercase letters?");
    };

    // Else if for null parameters
    if (!confirmCharacter && !confirmNumber && !confirmUppercase && !confirmLowercase) {
        choices = alert("You must choose a criteria!");

    }
    // First if statement that uses user input prompts to determine choices
    // Else if for 4 positive options
    else if (confirmCharacter && confirmNumber && confirmUppercase && confirmLowercase) {

        choices = character.concat(number, letter, letter2);
    }
    // Else if for 3 positive options
    else if (confirmCharacter && confirmNumber && confirmUppercase) {
        choices = character.concat(letter, letter2);
    }
    else if (confirmCharacter && confirmNumber && confirmLowercase) {
        choices = character.concat(letter, letter2);
    }
    else if (confirmCharacter && confirmLowercase && confirmUppercase) {
        choices = character.concat(letter, letter2);
    }
    else if (confirmNumber && confirmLowercase && confirmUppercase) {
        choices = number.concat(letter, letter2);
    }
    // Else if for 2 positive options 
    else if (confirmCharacter && confirmNumber) {
        choices = character.concat(number);

    } else if (confirmCharacter && confirmLowercase) {
        choices = character.concat(letter);

    } else if (confirmCharacter && confirmUppercase) {
        choices = character.concat(letter2);
    }
    else if (confirmLowercase && confirmNumber) {
        choices = letter.concat(number);

    } else if (confirmLowercase && confirmUppercase) {
        choices = letter.concat(letter2);

    } else if (confirmNumber && confirmUppercase) {
        choices = number.concat(letter2);
    }
    // Else if for 1 positive option
    else if (confirmCharacter) {
        choices = character;
    }
    else if (confirmNumber) {
        choices = number;
    }
    else if (confirmLowercase) {
        choices = letter;
    }
    // Created space variable to fill uppercase conversion
    else if (confirmUppercase) {
        choices = space.concat(letter2);
    };

    // password variable is an array placeholder for user defined length
    var password = [];

    // Start random selection variables:
    // Random selection for all variables: 
    for (var i = 0; i < enter; i++) {
        var pickChoices = choices[Math.floor(Math.random() * choices.length)];
        password.push(pickChoices);
    }
    // This joins the password array and converts it to a string
    var ps = password.join("");
    UserInput(ps);
    return ps;
}
// This puts the password value into the textbox
function UserInput(ps) {
    document.getElementById("password").textContent = ps;

}

var copy = document.querySelector("#copy");
copy.addEventListener("click", function () {
    copyPassword();
});
// This function copies and stores generated password in clipboard
function copyPassword() {
    document.getElementById("password").select();
    document.execCommand("Copy");
    alert("Password copied to clipboard!");
}
