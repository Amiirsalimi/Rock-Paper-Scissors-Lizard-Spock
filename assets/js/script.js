// Get elements
const gameContainer = document.querySelector(".container"),
    // userResult and cpuResult is the argumant that we store the clicked or choosed option.
    // defualt value would change when user or computer chosse rock, paper etc.
    userResult = document.querySelector(".user_result img"),
    cpuResult = document.querySelector(".cpu_result img"),
    // we'll define an array for result so that we would change it when someone wins
    result = document.querySelector(".result"),
    // an aray of all the images in the index.html
    optionImages = document.querySelectorAll(".option_image"),
    // an array for restart button - with this we could change the visibility when needed
    restart_button = document.querySelector(".restart_button");

// hiding restart button.
restart_button.style.display = "none";

// adding two arrays to count how much user or computer won.
var userWin = cpuWin = 0;

// Loop through each option image element
optionImages.forEach((image, index) => {
    image.addEventListener("click", (e) => {
        // stopping the loop if one score is 3 before going through the loop

        if ((userWin > 2) || (cpuWin > 2)) {
            return;
        }