let currentTimer = null;

const startTimer = () => {
    let timeLeft = 30;
    const timerFill = document.querySelector(".timer-fill");
    const nextButton = document.querySelector(".next-button");

    timerFill.style.animation = "none";
    setTimeout(() => {
        timerFill.style.animation = "timer 30s linear forwards";
    }, 0);

    nextButton.disabled = true;

    currentTimer = setInterval(() => {
        if (timeLeft > 0) {
            timeLeft--;
        } else {
            console.log("Time up");
            stopTimer();
        }
    }, 1000);

    const stopTimer = () => {
        console.log("Timer stopped.");
        clearInterval(currentTimer);
        timerFill.style.animation = "none"; 
        currentTimer = null;
        nextButton.disabled = false;
    };

    const options = document.querySelectorAll(".option");
    options.forEach((option) => {
        option.addEventListener("click", () => {
            console.log("Option selected!");
            stopTimer(); 
        });
    });

    nextButton.addEventListener("click", () => {
        console.log("next question");
        startTimer(); 
    });
};

startTimer();

//make it so once picking an option timer countinues to next question
//fix getting infinte time after slecting an option 
var div =document.getElementById('invisibleBox');
var display = 0;


function showAnswer(){
    if(display == 1){
        div.style.display = 'none';
        display = 0;
    }
    else{
        div.style.display = 'block';
        div.style.visibility = 'visible';
        display = 1;
    }
}
