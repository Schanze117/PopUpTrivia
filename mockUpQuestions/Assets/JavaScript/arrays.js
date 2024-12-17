const state = {
    currentQuestionIndex: 0,
    score: 0
};
const questions = [
    // Harry Potter Trivia 
    {
        question: 'In what year was the first Harry Potter movie released?',
        answers: ['A. 1999', 'B. 2001', 'C. 2002', 'D. 2000'],
        correct: 1,
    },
    {
        question: 'What does the acronym O.W.L. stand for?',
        answers: ['A. Original Wizarding Latitudes', 'B. Ordinary Witching Lights', 'C. Ordinary Wizarding Levels', 'D. Original Witching Loans'],
        correct: 2,
    },
    {
        question: 'What kind of creature does the groundskeeper, Hagrid, love most of all?',
        answers: ['A. Thestral', 'B. Mandrake', 'C. Hippogriff', 'D. Dragon'],
        correct: 3,
    },
    {
        question: 'How many staircases does Hogwarts have?',
        answers: ['A. 245', 'B. 74', 'C. 142', 'D. 1482'],
        correct: 2,
    },
    {
        question: 'What is the real name of the Dark Lord Voldemort?',
        answers: ['A. Tom Marvolo Riddle', 'B. Lucious Malfoy', 'C. Gelert Grindelvald', 'D. Aberforth Dumbledore'],
        correct: 0,
    },
    {
        question: 'In the Harry Potter universe; Who wrote the book "Hogwarts, A History"?',
        answers: ['A. Bathilda Bagshot', 'B. Gildory Lockheart', 'C. Severus Snape', 'D. Newt Skemander'],
        correct: 0,
    },
    {
        question: 'When using the killing curse, what words would you speak?',
        answers: ['A. Bombarda', 'B. Sectumsempra', 'C. Expecto Patronus', 'D. Avada Kedavra'],
        correct: 3,
    },
    {
        question: 'What is the name of the bank in Diagon Alley?',
        answers: ['A. Olivanders', 'B. Gringotts', 'C. Borgin & Burkes', 'D. The Three Broomsticks'],
        correct: 1,
    },
    {
        question: 'Who is Sirius Black?',
        answers: ['A. Harry`s Dad', 'B. Harry`s Uncle', 'C. Harry`s Brother', 'D. Harry`s Godfather'],
        correct: 3,
    },
    {
        question: 'What is the name of someone born into the wizarding world who CANNOT do magic?',
        answers: ['A. Muggle', 'B. Squib', 'C. Mudblood', 'D. Noob'],
        correct: 2,
    },
    // Human Body Trivia 
    {
        question: 'Which muscle in the body is the strongest, by weight?',
        answers: ['A. Heart', 'B. Gluteous Maximus', 'C. Masseter', 'D. Quadricep'],
        correct: 2,
    },
    {
        question: 'How many pairs of chromosomes are in the body?',
        answers: ['A. 24', 'B. 26', 'C. 22', 'D. 23'],
        correct: 3,
    },
    {
        question: 'How any bones does an adult human, normally, have?',
        answers: ['A. 198', 'B. 206', 'C. 244', 'D. 136'],
        correct: 1,
    },
    {
        question: 'How many cells does the body contain?',
        answers: ['A. 1 trillion', 'B. 10 trillion', 'C. 100 trillion', 'D. 2 trillion'],
        correct: 2,
    },
    {
        question: 'The kidney cycles how many quarts of blood through your body per day?',
        answers: ['A. 4', 'B. 35', 'C. 100', 'D. 200'],
        correct: 3,
    },
    {
        question: 'Which muscle in the body is the strongest, by weight?',
        answers: ['A. Heart', 'B. Gluteous Maximus', 'C. Masseter', 'D. Quadricep'],
        correct: 2,
    },
    {
        question: 'What percent of your body is water?',
        answers: ['A. 70%', 'B. 32%', 'C. 87%', 'D. 50%'],
        correct: 0,
    },
    {
        question: 'When you sneeze, air rushes out of your body at approxiamtely what speed?',
        answers: ['A. 30 mph', 'B. 200 mph', 'C. 70 mph', 'D. 100 mph'],
        correct: 3,
    },
    {
        question: 'How many muscles in your face do you use to smile?',
        answers: ['A. 7', 'B. 20', 'C. 13', 'D. 1'],
        correct: 2,
    },
    {
        question: 'How many muscles in your face do you use to frown?',
        answers: ['A. 43', 'B. 29', 'C. 1', 'D. 22'],
        correct: 0,
    },
    // Middle School Literature Trivia 
    {
        question: 'Which of the following was NOT written by Charles Dickens?',
        answers: ['A. David Copperfield', 'B. A Tale Of Two Cities', 'C. As You Like I', 'D. The Old Curiosity Shop'],
        correct: 2,
    },
    {
        question: 'Which of the following characters can be found in Robert Louis Stevenson`s "Treasure Island"?',
        answers: ['A. Captain Kidd', 'B. Anne Boney', 'C. Long John Silver', 'D. Blackbeard'],
        correct: 2,
    },
    {
        question: 'How many books are in the "Chronicles of Naria" series?',
        answers: ['A. 3', 'B. 6', 'C. 9', 'D. 7'],
        correct: 3,
    },
    {
        question: 'In the book "Alice In Wonderland" what is strange about the white knight?',
        answers: ['A. He speaks backwards.', 'B. He walks in circles.', 'C. He has two heads.', 'D. He has no arms or legs.'],
        correct: 0,
    },
    {
        question: 'In the novel "Redwall" what kind of animal is Matthias?',
        answers: ['A. Rat', 'B. Owl', 'C. Cat', 'D. Mouse'],
        correct: 3,
    },
    {
        question: 'Who wrote the book "1984"?',
        answers: ['A. Stephen King', 'B. George Orwell', 'C. Anne Rice', 'D. J.R.R. Tolkein'],
        correct: 1,
    },
    {
        question: 'Which of the following fictional characters travels around the world on a bet?',
        answers: ['A. Lemuel Gulliver', 'B. Mr. Pickwick', 'C. Professor Challenger', 'D. Phileas Fogg'],
        correct: 3,
    },
    {
        question: 'What is the name of the fairy tale that inspired the movie "Frozen"?',
        answers: ['A. Sleeping Beauty', 'B. The Princess of Winter', 'C. The Snow Queen', 'D. In The Heart of Winter'],
        correct: 3,
    },
    {
        question: 'In the book "Madeline" how many little girls lived in the old house?',
        answers: ['A. 2', 'B. 33', 'C. 12', 'D. 100'],
        correct: 2,
    },
    {
        question: 'Esther Grace Earl`s life and death inspired John Green to write what book?',
        answers: ['A. The Fault In Our Stars', 'B. The Perks Of Being A WallFlower', 'C. The Giver', 'D. This Star Won`t Go Out'],
        correct: 0,
    },
    // Star Wars Trivia 
    {
        question: 'What Imperial order brought about the death of most of the jedi?',
        answers: ['A. Order 55', 'B. Order 77', 'C. Order 66', 'D. Order 88'],
        correct: 2,
    },
    {
        question: 'What is the name of Bobba Fett`s father?',
        answers: ['Jango Fett', 'Mace Windu', 'Bilbo Fett', 'Jupiter Fett'],
        correctAnswerIndex: 0,
    },
    {
        question: 'What race of furry creature lives on the forest moon of Endor?',
        answers: ['Wookie', 'Ewok', 'Mandalorian', 'Twi`Lek'],
        correctAnswerIndex: 1,
    },
    {
        question: 'Emperor Palpatine was a dark lord of the Sith known by what moniker',
        answers: ['Darth Vader', 'Darth Plageaus', 'Darth Maul', 'Darth Sideous'],
        correctAnswerIndex: 3,
    },
    {
        question: 'Han Solo made the Kessel run in how many parsecs?',
        answers: ['4', '7', '12', '13'],
        correctAnswerIndex: 2,
    },
    {
        question: 'Who composed the Star Wars theme?',
        answers: ['John Williams', 'John Phillips Suza', 'Jeff Williams', 'Michael Williams'],
        correctAnswerIndex: 0,
    },
    {
        question: 'How many Death Star props were blown up during the filming of "A New Hope"?',
        answers: ['1', '0', '100', '2'],
        correctAnswerIndex: 1,
    },
    {
        question: 'How many Death Star props were blown up during the filming of "A New Hope"?',
        answers: ['John Williams', 'John Phillips Suza', 'Jeff Williams', 'Michael Williams'],
        correctAnswerIndex: 0,
    },
    {
        question: 'What color is MAce Windu`s lightsaber?',
        answers: ['Red', 'Blue', 'Purple', 'Green'],
        correctAnswerIndex: 2,
    },
    {
        question: 'What planet do Wookies hail from?',
        answers: ['Endor', 'Tattoine', 'Naboo', 'Kashyyyk'],
        correctAnswerIndex: 3,
    },
    // 5th Grade Science 
    {
        question: 'Where does Sound travel the fastest?',
        answers: ['Air', 'Space', 'Water', 'Rock'],
        correctAnswerIndex: 2,
    },
    {
        question: 'Which of these is not a rock type?',
        answers: ['Magmamorphic', 'Sedimentary', 'Igneous', 'Metamorphic'],
        correctAnswerIndex: 0,
    },
    {
        question: 'Pollen is produced in which part of the flower?',
        answers: ['Pistil', 'Stamen', 'Petal', 'Stem'],
        correctAnswerIndex: 1,
    },
    {
        question: 'How long does it take Light from the sun to reach earth?',
        answers: ['8 minutes', '8 seconds', '8 hours', 'instantaneously'],
        correctAnswerIndex: 0,
    },
    {
        question: 'What is the most common gas in Earth`s Atmosphere?',
        answers: ['Oxygen', 'Nitrogen', 'Carbon', 'Hydrogen'],
        correctAnswerIndex: 1,
    },
    {
        question: 'In classical mechanics, what is defined as the product of an object`s mass and velocity?',
        answers: ['Kinetic Energy', 'Acceleration', 'Momentum', 'Force'],
        correctAnswerIndex: 2,
    },
    {
        question: 'Who discovered the double helix pattern in DNA?',
        answers: ['Albert Einstein and Charles Darwin', 'James Watsons and Francis Crick', 'Albert Einstein and James Watsons', 'Francis Crick and Charles Darwin'],
        correctAnswerIndex: 1,
    },
    {
        question: 'What type of cloud that is large, puffy, and low flying?',
        answers: ['Nimbus', 'Stratus', 'Cirrus', 'Cumulous'],
        correctAnswerIndex: 3,
    },
    {
        question: 'What kind of energy is stored inside an object?',
        answers: ['Intrinsic', 'Potential', 'Kinetic', 'Ready-Made'],
        correctAnswerIndex: 1,
    },
    {
        question: 'What is the chemical symbol for Iron?',
        answers: ['Ir', 'Io', 'Fe', 'Na'],
        correctAnswerIndex: 2,
    },
];

function showQuestion(questionIndex) {
    const question = questions[questionIndex];

    const $question = document.getElementById("question");
    const div = document.createElement("div");
    const p = document.createElement("p");

    $question.innerHTML = "";
    $answers.innerHTML = "";

    $question.appendChild(div);
    div.appendChild(p);
    p.textContent = question.question;

    question.answers.forEach((answer, answerIndex) => {
        const input = document.createElement("input");
        const label = document.createElement("label");

        label.appendChild(input);
        label.appendChild(document.createTextNode(answer));

        input.name = `Question${questionIndex}`;
        input.type = "radio";
        input.value = answerIndex;

        $answers.append(label);
    });
}

const nextQuestion = document.getElementById("nextQuestion");
nextQuestion.addEventListener("click", function () {
    state.currentQuestionIndex += 1;

    if (state.currentQuestionIndex === questions.length) {
        console.log(`Quiz complete: ${state.score} / ${questions.length}`);
    } else {
        showQuestion(state.currentQuestionIndex);
    }
});

const $answers = document.getElementById("answers");
$answers.addEventListener("change", (event) => {
    const currentQuestion = questions[state.currentQuestionIndex];
    const selectedAnswerIndex = Number(event.target.value);
    const correctAnswerIndex = currentQuestion.correct;
    const isCorrect = selectedAnswerIndex === correctAnswerIndex;

    state.score += isCorrect ? 1 : 0;

    if (isCorrect) {
        console.log("correct answer");
    } else {
        console.log("wrong answer");
    }
});

showQuestion(0);
