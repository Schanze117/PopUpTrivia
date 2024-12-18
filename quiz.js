let currentTimer = null;
const homebtn = document.getElementById("restartButton");
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
        categoryTitle.innerText = "Harry Potter Trivia";
        console.warn("Category not found in localStorage. Defaulting to 'Harry Potter Trivia'.");
    }
};

const questions = {
    "Harry Potter": [
      {
        question: 'In what year was the first Harry Potter movie released?',
        answers: ['1999', '2001', '2002', '2000'],
        correctAnswerIndex: 1
      },
      {
        question: 'What does the acronym O.W.L. stand for?',
        answers: ['Original Wizarding Latitudes', 'Ordinary Witching Lights', 'Ordinary Wizarding Levels', 'Original Witching Loans'],
        correctAnswerIndex: 2
      },
      {
        question: 'What kind of creature does the groundskeeper, Hagrid, love most of all?',
        answers: ['Thestral', 'Mandrake', 'Hippogriff', 'Dragon'],
        correctAnswerIndex: 3
      },
      {
        question: 'How many staircases does Hogwarts have?',
        answers: ['245', '74', '142', '1482'],
        correctAnswerIndex: 2
      },
      {
        question: 'What is the real name of the Dark Lord Voldemort?',
        answers: ['Tom Marvolo Riddle', 'Lucious Malfoy', 'Gelert Grindelvald', 'Aberforth Dumbledore'],
        correctAnswerIndex: 0
      },
      {
        question: 'In the Harry Potter universe; Who wrote the book "Hogwarts, A History"?',
        answers: ['Bathilda Bagshot', 'Gildory Lockheart', 'Severus Snape', 'Newt Skemander'],
        correctAnswerIndex: 0
      },
      {
        question: 'When using the killing curse, what words would you speak?',
        answers: ['Bombarda', 'Sectumsempra', 'Expecto Patronus', 'Avada Kedavra'],
        correctAnswerIndex: 3
      },
      {
        question: 'What is the name of the bank in Diagon Alley?',
        answers: ['Olivanders', 'Gringotts', 'Borgin & Burkes', 'The Three Broomsticks'],
        correctAnswerIndex: 1
      },
      {
        question: 'Who is Sirius Black?',
        answers: ['Harry`s Dad', 'Harry`s Uncle', 'Harry`s Brother', 'Harry`s Godfather'],
        correctAnswerIndex: 3
      },
      {
        question: 'What is the name of someone born into the wizarding world who CANNOT do magic?',
        answers: ['Muggle', 'Squib', 'Mudblood', 'Noob'],
        correctAnswerIndex: 1
      }
    ],
    "Human Body": [
      {
        question: 'Which muscle in the body is the strongest, by weight?',
        answers: ['Heart', 'Gluteous Maximus', 'Masseter', 'Quadricep'],
        correctAnswerIndex: 2
      },
      {
      question: 'Which bone is the longest in the human body?',
      answers: ['Femur', 'Humerus', 'Tibia', 'Radius'],
      correctAnswerIndex: 0
      },
      {
        question: 'How many pairs of chromosomes are in the body?',
        answers: ['24', '26', '22', '23'],
        correctAnswerIndex: 3
      },
      {
        question: 'How many bones does an adult human, normally, have?',
        answers: ['198', '206', '244', '136'],
        correctAnswerIndex: 1
      },
      {
        question: 'How many cells does the body contain?',
        answers: ['10 trillion', '30 trillion', '80 trillion', '100 trillion'],
        correctAnswerIndex: 1
      },
      {
        question: 'The kidney cycles how many quarts of blood through your body per day?',
        answers: ['4', '35', '100', '200'],
        correctAnswerIndex: 3
      },
      {
        question: 'What percent of your body is water?',
        answers: ['70%', '32%', '87%', '50%'],
        correctAnswerIndex: 0
      },
      {
        question: 'When you sneeze, air rushes out of your body at approximately what speed?',
        answers: ['30 mph', '200 mph', '70 mph', '100 mph'],
        correctAnswerIndex: 3
      },
      {
        question: 'How many muscles in your face do you use to smile?',
        answers: ['7', '20', '11', '1'],
        correctAnswerIndex: 2
      },
      {
        question: 'How many muscles in your face do you use to frown?',
        answers: ['43', '29', '1', '22'],
        correctAnswerIndex: 0
      }
    ],
    "Middle School Literature": [
      {
        question: 'Which of the following was NOT written by Charles Dickens?',
        answers: ['David Copperfield', 'A Tale Of Two Cities', 'As You Like I', 'The Old Curiosity Shop'],
        correctAnswerIndex: 2
      },
      {
        question: 'Which of the following characters can be found in Robert Louis Stevenson`s "Treasure Island"?',
        answers: ['Captain Kidd', 'Anne Boney', 'Long John Silver', 'Blackbeard'],
        correctAnswerIndex: 2
      },
      {
        question: 'How many books are in the "Chronicles of Narnia" series?',
        answers: ['3', '6', '9', '7'],
        correctAnswerIndex: 3
      },
      {
        question: 'In the book "Alice In Wonderland" what is strange about the white knight?',
        answers: ['He speaks backwards.', 'He walks in circles.', 'He has two heads.', 'He has no arms or legs.'],
        correctAnswerIndex: 0
      },
      {
        question: 'In the novel "Redwall" what kind of animal is Matthias?',
        answers: ['Rat', 'Owl', 'Cat', 'Mouse'],
        correctAnswerIndex: 3
      },
      {
        question: 'Who wrote the book "1984"?',
        answers: ['Stephen King', 'George Orwell', 'Anne Rice', 'J.R.R. Tolkein'],
        correctAnswerIndex: 1
      },
      {
        question: 'Which of the following fictional characters travels around the world on a bet?',
        answers: ['Lemuel Gulliver', 'Mr. Pickwick', 'Professor Challenger', 'Phileas Fogg'],
        correctAnswerIndex: 3
      },
      {
        question: 'What is the name of the fairy tale that inspired the movie "Frozen"?',
        answers: ['Sleeping Beauty', 'The Princess of Winter', 'The Snow Queen', 'In The Heart of Winter'],
        correctAnswerIndex: 2
      },
      {
        question: 'In the book "Madeline" how many little girls lived in the old house?',
        answers: ['2', '33', '12', '100'],
        correctAnswerIndex: 2
      },
      {
        question: 'Esther Grace Earl`s life and death inspired John Green to write what book?',
        answers: ['The Fault In Our Stars', 'The Perks Of Being A WallFlower', 'The Giver', 'This Star Won`t Go Out'],
        correctAnswerIndex: 0
      }
    ],
    "Star Wars": [
      {
        question: 'What Imperial order brought about the death of most of the jedi?',
        answers: ['Order 55', 'Order 77', 'Order 66', 'Order 88'],
        correctAnswerIndex: 2
      },
      {
        question: 'What is the name of Bobba Fett`s father?',
        answers: ['Jango Fett', 'Mace Windu', 'Bilbo Fett', 'Jupiter Fett'],
        correctAnswerIndex: 0
      },
      {
        question: 'What race of furry creature lives on the forest moon of Endor?',
        answers: ['Wookie', 'Ewok', 'Mandalorian', 'Twi`Lek'],
        correctAnswerIndex: 1
      },
      {
        question: 'Emperor Palpatine was a dark lord of the Sith known by what moniker?',
        answers: ['Darth Vader', 'Darth Plageaus', 'Darth Maul', 'Darth Sideous'],
        correctAnswerIndex: 3
      },
      {
        question: 'Han Solo made the Kessel run in how many parsecs?',
        answers: ['4', '7', '12', '13'],
        correctAnswerIndex: 2
      },
      {
        question: 'Who composed the Star Wars theme?',
        answers: ['John Williams', 'John Phillips Suza', 'Jeff Williams', 'Michael Williams'],
        correctAnswerIndex: 0
      },
      {
        question: 'How many Death Star props were blown up during the filming of "A New Hope"?',
        answers: ['1', '0', '100', '2'],
        correctAnswerIndex: 1
      },
      {
        question: 'What color is Mace Windu`s lightsaber?',
        answers: ['Red', 'Blue', 'Purple', 'Green'],
        correctAnswerIndex: 2
      },
      {
        question: 'What planet do Wookies hail from?',
        answers: ['Endor', 'Tattoine', 'Naboo', 'Kashyyyk'],
        correctAnswerIndex: 3
      }
    ],
    "5th Grade Science": [
      {
        question: 'Where are the bones in the body made?',
        answers: ['Brain', 'Bone marrow', 'Lungs', 'Kidneys'],
        correctAnswerIndex: 1
      },
      {
        question: 'Which of the following will grow the fastest?',
        answers: ['Potato', 'Carrot', 'Cactus', 'Apple'],
        correctAnswerIndex: 0
      },
      {
        question: 'The nucleus of a cell is found where?',
        answers: ['In the Ribosome', 'In the Golgi Body', 'In the Mitochondria', 'In the Cytoplasm'],
        correctAnswerIndex: 2
      },
      {
        question: 'What is the primary source of energy for Earth?',
        answers: ['The Sun', 'The Moon', 'The Earth itself', 'The Wind'],
        correctAnswerIndex: 0
      },
      {
        question: 'What makes up 3/4 of the Earth’s surface?',
        answers: ['Land', 'Forests', 'Mountains', 'Water'],
        correctAnswerIndex: 3
      },
      {
        question: 'What does it mean when a solution is acidic?',
        answers: ['It has a high pH level', 'It has a low pH level', 'It is neutral', 'It has a high density'],
        correctAnswerIndex: 1
      },
      {
        question: 'What are cells that are responsible for carrying oxygen in the body?',
        answers: ['Red Blood Cells', 'White Blood Cells', 'Platelets', 'Nerve Cells'],
        correctAnswerIndex: 0
      },
      {
        question: 'What is the most common gas in Earth’s atmosphere?',
        answers: ['Oxygen', 'Carbon Dioxide', 'Argon', 'Nitrogen'],
        correctAnswerIndex: 3
      },
      {
        question: 'What is the liquid phase of water called?',
        answers: ['Water', 'Snow', 'Ice', 'Steam'],
        correctAnswerIndex: 0
      },
      {
        question: 'What planet is closest to the Sun?',
        answers: ['Earth', 'Venus', 'Mars', 'Mercury'],
        correctAnswerIndex: 3
      }
    ]
  };

  function shuffleArray(arr) {
    return arr.sort(() => Math.random() - 0.5);
}
function showQuestion(questionIndex) {
    const category = localStorage.getItem('category') || "Harry Potter";
    const question = questions[category][questionIndex];

    const $questionText = document.getElementById("questionText");
    const $answers = document.querySelectorAll(".option");

    const shuffledAnswers = shuffleArray([...question.answers]);
    const correctAnswerIndex = question.correctAnswerIndex; 

    const shuffledCorrectAnswerIndex = shuffledAnswers.indexOf(question.answers[correctAnswerIndex]);

    $questionText.textContent = question.question;

    $answers.forEach((button, index) => {
        button.textContent = shuffledAnswers[index];
        button.disabled = false;
        button.className = "button option";
        button.style = "";

        const newButton = button.cloneNode(true);
        button.parentNode.replaceChild(newButton, button);

        newButton.addEventListener("click", handleOptionClick.bind(null, index, shuffledCorrectAnswerIndex));
    });

    updateQuestionNumber();
}

function updateQuestionNumber() {
    const scoreElement = document.getElementById('score');
    scoreElement.innerText = `Question ${state.currentQuestionIndex + 1}/10`;
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
}

function handleTimeOut(correctAnswerIndex) {
    const options = document.querySelectorAll(".option");

    stopTimer();

    options.forEach(option => option.disabled = true);

    options[correctAnswerIndex].setAttribute("class", "option is-success");

    document.querySelector(".next-button").disabled = false;
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

            const category = localStorage.getItem('category') || "Harry Potter";
            const correctAnswerIndex = questions[category][state.currentQuestionIndex].correctAnswerIndex;
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
    const category = localStorage.getItem('category') || "Harry Potter";
    if (state.currentQuestionIndex < questions[category].length - 1) {
        state.currentQuestionIndex++;
        showQuestion(state.currentQuestionIndex);
        startTimer();
    } else {
        showEndModal();
    }
});

function showEndModal() {
    const modal = document.createElement("div");
    modal.innerHTML = `
        <div class="modal is-active">
            <div class="modal-background"></div>
            <div class="modal-content box">
                <h2 class="title has-text-centered">Quiz Complete!</h2>
                <p class="subtitle has-text-centered">Your Final Score: ${state.score}/10</p>
                <button class="button is-success is-fullwidth" id="restartButton">Restart</button>
            </div>
        </div>
    `;
    document.body.appendChild(modal);

    document.getElementById("restartButton").addEventListener("click", function() {
        window.location.href = "index.html";  
    });    
}

function resetOptions() {
    const options = document.querySelectorAll(".option");
    options.forEach(option => {
        option.disabled = false;
        option.classList.remove("is-success", "is-danger", "correct", "incorrect");
    });
}


const category = localStorage.getItem('category') || "Harry Potter";
questions[category] = shuffleArray(questions[category]);

showQuestion(state.currentQuestionIndex);
startTimer();
setCategoryTitle();