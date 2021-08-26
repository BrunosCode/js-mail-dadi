// CHECK EMAIL LIST 
// Create email list
const emailsList = ["email1@gmail.com", "email2@gmail.com", "email3@gmail.com", "email4@gmail.com", "email5@gmail.com"];
// check if the email is in the list
const checkEmailsList = () => {
    for (let i = 0; i < emailsList.length; i++) {
        // store user email
        let userEmail = document.getElementById("user-email").value;
        // if true close popup
        if (userEmail == emailsList[i]) {
            document.getElementById("login-overlay").classList.add("l-overlay--close");
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
    document.getElementById("login-overlay").classList.add("l-overlay--close");
});

// DICE GAME
let gamesCounter = 0;
let userCounter = 0;
let computerCounter = 0;
const diceGame = () => {
    // update games counter
    gamesCounter++
    document.getElementById("games-counter").innerHTML = gamesCounter;
    // generate user number
    let userScore = Math.floor(Math.random() * 6) + 1;
    console.log(userScore)
    // generate computer number
    let computerScore = Math.floor(Math.random() * 6) + 1;
    console.log(computerScore)
    // cheat
    if (gamesCounter > 10 && userScore > computerScore) {
        // generate user number
        userScore = Math.floor(Math.random() * 6) + 1;
        console.log("cheated " + userScore)
        // generate computer number
        computerScore = Math.floor(Math.random() * 6) + 1;
        console.log("cheated " + computerScore)
    }
    // print and display dice score 
    document.getElementById("user-score").innerHTML = userScore;
    document.getElementById("user-dice").setAttribute("data-number", userScore)
    document.getElementById("computer-score").innerHTML = computerScore;
    document.getElementById("computer-dice").setAttribute("data-number", computerScore)
    // check who has won
    // tie
    if (userScore == computerScore) {
        console.log("tie")
        document.getElementById("match-winner").innerHTML = "Tie";
        // update user points
        userCounter++
        document.getElementById("user-counter").innerHTML = userCounter;
        // update computer points
        computerCounter++
        document.getElementById("computer-counter").innerHTML = computerCounter;
    // Computer win
    } else if (userScore < computerScore) {
        console.log("computer win")
        document.getElementById("match-winner").innerHTML = "Computer Won";
        // update computer points
        computerCounter++
        document.getElementById("computer-counter").innerHTML = computerCounter;
    // User win
    } else if (userScore > computerScore) {
        console.log("user win")
        document.getElementById("match-winner").innerHTML = "You Won";
        // update user points
        userCounter++
        document.getElementById("user-counter").innerHTML = userCounter;
    }
}

document.getElementById('start-game').addEventListener('click', diceGame);