// CHECK EMAIL LIST 
// Create email list
const emailsList = ["email1@gmail.com", "email2@gmail.com", "email3@gmail.com", "email4@gmail.com", "email5@gmail.com"];
// store user email
let userEmail = document.getElementById("user-email").value;
// check if the email is in the list
const checkEmailsList = () => {
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

