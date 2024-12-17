let currentTimer = null;
const state = {
    currentQuestionIndex: 0,
    score: 0,
};

const setCategoryTitle = () => {
    const category = localStorage.getItem('category');
    const categoryTitle = document.getElementById('title');
    
    if (category) {
        categoryTitle.innerText = `${category.charAt(0).toUpperCase() + category.slice(1)} Trivia`; 
    } else {
        categoryTitle.innerText = "General Trivia"; 
        console.warn("Category not found in localStorage. Defaulting to 'General Trivia'.");
    }
};



let questions = [
    {
        question: 'In what year was the first Harry Potter movie released?',
        answers: ['1999', '2001', '2002', '2000'],
        correctAnswerIndex: 1,
    },
    {
        question: 'What does the acronym O.W.L. stand for?',
        answers: ['Original Wizarding Latitudes', 'Ordinary Witching Lights', 'Ordinary Wizarding Levels', 'Original Witching Loans'],
        correctAnswerIndex: 2,
    },
    {
        question: 'What kind of creature does the groundskeeper, Hagrid, love most of all?',
        answers: ['Thestral', 'Mandrake', 'Hippogriff', 'Dragon'],
        correctAnswerIndex: 3,
    },
    {
        question: 'How many staircases does Hogwarts have?',
        answers: ['245', '74', '142', '1482'],
        correctAnswerIndex: 2,
    },
    {
        question: 'What is the real name of the Dark Lord Voldemort?',
        answers: ['Tom Marvolo Riddle', 'Lucious Malfoy', 'Gelert Grindelwald', 'Aberforth Dumbledore'],
        correctAnswerIndex: 0,
    },
    {
        question: 'In the Harry Potter universe; Who wrote the book "Hogwarts, A History"?',
        answers: ['Bathilda Bagshot', 'Gilderoy Lockhart', 'Severus Snape', 'Newt Scamander'],
        correctAnswerIndex: 0,
    },
    {
        question: 'When using the killing curse, what words would you speak?',
        answers: ['Bombarda', 'Sectumsempra', 'Expecto Patronus', 'Avada Kedavra'],
        correctAnswerIndex: 3,
    },
    {
        question: 'What is the name of the bank in Diagon Alley?',
        answers: ['Ollivanders', 'Gringotts', 'Borgin & Burkes', 'The Three Broomsticks'],
        correctAnswerIndex: 1,
    },
    {
        question: 'Who is Sirius Black?',
        answers: ['Harry\'s Dad', 'Harry\'s Uncle', 'Harry\'s Brother', 'Harry\'s Godfather'],
        correctAnswerIndex: 3,
    },
    {
        question: 'What is the name of someone born into the wizarding world who CANNOT do magic?',
        answers: ['Muggle', 'Squib', 'Mudblood', 'Noob'],
        correctAnswerIndex: 1,
    }
];


function shuffleArray(arr) {
    return arr.sort(() => Math.random() - 0.5);
}

function showQuestion(questionIndex) {
    const question = questions[questionIndex];
    const $questionText = document.getElementById("questionText");
    const $answers = document.querySelectorAll(".option");

    const shuffledAnswers = shuffleArray([...question.answers]);
    const correctAnswerIndex = shuffledAnswers.indexOf(question.answers[question.correctAnswerIndex]);

    $questionText.textContent = question.question;

    $answers.forEach((button, index) => {
        button.textContent = shuffledAnswers[index];
        button.disabled = false;
        button.className = "button option"; 
        button.style = ""; 

        const newButton = button.cloneNode(true);
        button.parentNode.replaceChild(newButton, button);

        newButton.addEventListener("click", handleOptionClick.bind(null, index, correctAnswerIndex));
    });
}

function resetOptions() {
    const options = document.querySelectorAll(".option");
    options.forEach(option => {
        option.disabled = false;
        option.classList.remove("is-success", "is-danger", "correct", "incorrect");
        option.style.backgroundColor = ""; 
        option.style.color = ""; 
        option.style.transform = "";
    });
}

function handleOptionClick(selectedIndex, correctAnswerIndex) {
    const options = document.querySelectorAll(".option");

    stopTimer(); 

    options.forEach(option => option.disabled = true);

    if (selectedIndex === correctAnswerIndex) {
        options[selectedIndex].setAttribute("class", "option is-success");
        state.score++;
    } else {
        options[selectedIndex].setAttribute("class", "option is-danger"); 
        options[correctAnswerIndex].setAttribute("class", "option is-success");
    }

    document.querySelector(".next-button").disabled = false;
    updateScoreDisplay();
}

function handleTimeOut(correctAnswerIndex) {
    const options = document.querySelectorAll(".option");

    stopTimer();

    options.forEach(option => option.disabled = true);

    options[correctAnswerIndex].setAttribute("class", "option is-success");

    document.querySelector(".next-button").disabled = false;
}

function updateScoreDisplay() {
    const scoreElement = document.getElementById('score');
    scoreElement.innerText = `${state.score}/10`;
}

function startTimer() {
    let timeLeft = 30;
    const timerFill = document.querySelector(".timer-fill");
    const nextButton = document.querySelector(".next-button");

    timerFill.style.animation = "none"; 
    timerFill.style.width = "100%"; 
    setTimeout(() => {
        timerFill.style.animation = `timer ${timeLeft}s linear forwards`;
    }, 0);

    nextButton.disabled = true;

    currentTimer = setInterval(() => {
        if (timeLeft > 0) {
            timeLeft--;
        } else {
            clearInterval(currentTimer);

            const correctAnswerIndex = questions[state.currentQuestionIndex].correctAnswerIndex;
            handleTimeOut(correctAnswerIndex);
        }
    }, 1000);
}

function stopTimer() {
    const timerFill = document.querySelector(".timer-fill");

    const computedStyle = window.getComputedStyle(timerFill);
    const currentWidth = computedStyle.getPropertyValue("width");
    timerFill.style.animation = "none"; 
    timerFill.style.width = currentWidth;

    clearInterval(currentTimer);
}

const nextButton = document.querySelector(".next-button");
nextButton.addEventListener("click", () => {
    resetOptions();
    if (state.currentQuestionIndex < questions.length - 1) {
        state.currentQuestionIndex++;
        showQuestion(state.currentQuestionIndex);
        startTimer();
    } else {
        alert(`Quiz Complete! Final Score: ${state.score}`);
        localStorage.clear();
        state.score = 0;
        state.currentQuestionIndex = 0;
        updateScoreDisplay();
    }
});

questions = shuffleArray(questions);

showQuestion(state.currentQuestionIndex);
updateScoreDisplay();
startTimer();
setCategoryTitle();
