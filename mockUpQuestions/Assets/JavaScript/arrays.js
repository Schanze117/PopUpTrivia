const state = {
    currentQuestionIndex: 0,
    score: 0
};
const questions = [
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
        correct: 2,
    },
    {
        question: 'Who is Sirius Black?',
        answers: ['A. Harry`s Dad', 'B. Harry`s Uncle', 'C. Harry`s Brother', 'D. Harry`s Godfather'],
        correct: 3,
    },
    {
        question: 'What is the name of someone born into the wizarding world who CANNOT do magic?',
        answers: ['A. Muggle', 'B. Squib', 'C. Mudblood', 'D. Noob'],
        correct: 3,
    }
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
