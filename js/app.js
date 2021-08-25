// CHECK EMAIL LIST 
// Create email list
const emailsList = ["email1@gmail.com", "email2@gmail.com", "email3@gmail.com", "email4@gmail.com", "email5@gmail.com"];
// store user email
let userEmail = document.getElementById("user-email").value;
// check if the email is in the list
const checkEmailsList = function() {
    for (let i = 0; i < emailsList.length; i++) {
        // if true close popup
        if (userEmail == emailsList[i]) {
            document.getElementById("login-overlay").classList.add("close");
            return;
        }
    }
    // else return error
    document.getElementById("email-error").innerHTML = "Unknown Email";
}
// add event listener to check the list
document.getElementById('login').addEventListener('click', checkEmailsList);
// close overlay without email
document.getElementById('close').addEventListener('click', () => {
    document.getElementById("login-overlay").classList.add("close");
});

// DICE GAME
let userPoints = 0;
let computerPoints = 0;
const diceGame = function() {
    // generate user number
    let userNumber = Math.floor(Math.random() * 6) + 1;
    console.log(userNumber)
    // generate computer number
    let computerNumber = Math.floor(Math.random() * 6) + 1;
    console.log(computerNumber)
    // check who has won
    if (userNumber == computerNumber) {
        // insert user score
        document.getElementById("user-number").innerHTML = userNumber;
        // insert computer score
        document.getElementById("computer-number").innerHTML = computerNumber;
        // insert games result
        document.getElementById("match-winner").innerHTML = "Tie";
        // update user points
        userPoints++
        document.getElementById("user-points").innerHTML = userPoints;
        // update computer points
        computerPoints++
        document.getElementById("computer-points").innerHTML = computerPoints;
    } else if (userNumber < computerNumber) {
        // insert user score
        document.getElementById("user-number").innerHTML = userNumber;
        // insert computer score
        document.getElementById("computer-number").innerHTML = computerNumber;
        // insert games result
        document.getElementById("match-winner").innerHTML = "Computer Won";
        // update computer points
        computerPoints++
        document.getElementById("computer-points").innerHTML = computerPoints;
    } else if (userNumber > computerNumber) {
        // insert user score
        document.getElementById("user-number").innerHTML = userNumber;
        // insert computer score
        document.getElementById("computer-number").innerHTML = computerNumber;
        // insert games result
        document.getElementById("match-winner").innerHTML = "You Won";
        // update user points
        userPoints++
        document.getElementById("user-points").innerHTML = userPoints;
    }
}

document.getElementById('start-game').addEventListener('click', diceGame);