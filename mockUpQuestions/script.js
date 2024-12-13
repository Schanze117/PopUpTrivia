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
            stopTimer();
        }
    }, 1000);

    const stopTimer = () => {
        clearInterval(currentTimer);
        timerFill.style.animation = "none"; 
        currentTimer = null;
        nextButton.disabled = false; 
    };

    const options = document.querySelectorAll(".option");
    options.forEach((option) => {
        option.addEventListener("click", () => {
            stopTimer(); 
        });
    });

    nextButton.addEventListener("click", () => {
        startTimer();
    });
};

startTimer();

// fix infinte time after slecting an option 
// find a way to connect next btn to 5th box to display answer for 5-10 seconds after its shown 