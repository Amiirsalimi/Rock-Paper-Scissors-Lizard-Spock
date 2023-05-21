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


        image.classList.add("active");
        userResult.src = "assets/images/rock.png";
        cpuResult.src = "assets/images/rock.png";
        result.textContent = "HOLD ON";

        // Loop through each option image again
        optionImages.forEach((image2, index2) => {
            // If the current index doesn't match the clicked index
            // Remove the "active" class from the other option images
            index !== index2 && image2.classList.remove("active");
        });

        gameContainer.classList.add("start");

        // Set a timeout to delay the result.
        let time = setTimeout(() => {
            gameContainer.classList.remove("start");

            // Get the source of the clicked option image
            let imageSrc = e.target.querySelector("img").src;

            // Set the user image to the clicked option image
            userResult.src = imageSrc;

            // changing the defualt image for the lizard result.
            if (userResult.src.includes("lizardHtml.png")) {
                userResult.src = "images/lizard.png";
            }

            // Generate a random number between 0 and 5 for the cpu value to choose an object.
            let randomNumber = Math.floor(Math.random() * 5);

            // Create an array of CPU image options
            let cpuImages = ["assets/images/rock.png", "assets/images/paper.png", "assets/images/scissors.png", "assets/images/spock.png", "assets/images/lizard.png"];

            // choosing a random option (rock,paper ...) from the array for computer
            cpuResult.src = cpuImages[randomNumber];

            // Assign a number value to the clicked option (based on index) 
            let userValue = [0, 1, 2, 3, 4][index];

            // **algorithm to find the winner**
            // make a simple argument to check for the result
            let compare = userValue - randomNumber + 5;

            // check the result
            if (compare % 5 == 0) {
                var outComeValue = 0;
            } else if ((compare % 5 + 1) % 2 == 0) {
                userWin += 1;
            } else {
                cpuWin += 1;
            }

            if ((userWin > 2) || (cpuWin > 2)) {

                // showing result if score is 3.
                result.textContent = userWin > cpuWin ? "Congratulations, you've won." : "Sorry, you've lost.";

                // showing restart button
                restart_button.style.display = "";
            } else {

                // hiding the restart botton - if not included next round the restart button wont disappear.
                restart_button.style.display = "none";
                // Display the result
                result.textContent = outComeValue === 0 ? "tie" : `You: ${userWin}   computer: ${cpuWin}`;

            }
        }, 1000);
    });
});

// When the restart button gets clicked, set the user and CPU score to 0.
// This way, the if statement will allow to play again.
restart_button.addEventListener("click", () => {
    userWin = cpuWin = 0;
    result.textContent = '';
    restart_button.style.display = "none";

});