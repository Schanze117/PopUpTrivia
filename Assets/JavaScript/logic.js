const questions = [
    {
        question: 'In what year was the first Harry Potter movie released?',
        selection: ['A. 1999', 'B. 2001', 'C. 2002', 'D. 2000'],
        answer: 'B.2001'
    },
    {
        question: 'What does the acronym O.W.L. stand for?',
        selection: ['A. Original Wizarding Latitudes', 'B. Ordinary Witching Lights', 'C. Ordinary Wizarding Levels', 'D. Original Witching Loans'],
        answer: 'C. Ordinary Wizarding Levels'
    },
    {
        question: 'What kind of creature does the groundskeeper, Hagrid, love most of all?',
        selection: ['A. Thestral', 'B. Mandrake', 'C. Hippogriff', 'D. Dragon'],
        answer: 'D. Dragon'
    },
    {
        question: 'How many staircases does Hogwarts have?',
        selection: ['A. 245', 'B. 74', 'C. 142', 'D. 1482'],
        answer: 'C. 142'
    },
    {
        question: 'What is the real name of the Dark Lord Voldemort?',
        selection: ['A. Tom Marvolo Riddle', 'B. Lucious Malfoy', 'C. Gelert Grindelvald', 'D. Aberforth Dumbledore'],
        answer: 'A. Tom Marvolo Riddle'
    },
    {
        question: 'In the Harry Potter universe; Who wrote the book "Hogwarts, A History"?',
        selection: ['A. Bathilda Bagshot', 'B. Gildory Lockheart', 'C. Severus Snape', 'D. Newt Skemander'],
        answer: 'A. Bathilda Bagshot'
    },
    {
        question: 'When using the killing curse, what words would you speak?',
        selection: ['A. Bombarda', 'B. Sectumsempra', 'C. Expecto Patronus', 'D. Avada Kedavra'],
        answer: 'D. Avada Kedavra'
    },
    {
        question: 'What is the name of the bank in Diagon Alley?',
        selection: ['A. Olivanders', 'B. Gringotts', 'C. Borgin & Burkes', 'D. The Three Broomsticks'],
        answer: 'B. Gringotts'
    },
    {
        question: 'Who is Sirius Black?',
        selection: ['A. Harry`s Dad', 'B. Harry`s Uncle', 'C. Harry`s Brother', 'D. Harry`s Godfather'],
        answer: 'D. Harry`s Godfather'
    },
    {
        question: 'What is the name of someone born into the wizarding world who CANNOT do magic?',
        selection: ['A. Muggle', 'B. Squib', 'C. Mudblood', 'D. Noob'],
        answer: 'B. Squib'
    }
];

let currentQuestionIndex = 0;

function loadQuestion() {
    const currentQuestion = questions[currentQuestionIndex];

    const questionArea = document.querySelector('.question-area');
    questionArea.innerHTML = `<p>${currentQuestion.question}</p>`;

    const optionsArea = document.querySelector('.options-area');
    optionsArea.innerHTML = ''; 

    currentQuestion.selection.forEach((option, index) => {
        const button = document.createElement('button');
        button.classList.add('button', 'is-success', 'option');
        button.textContent = option;
        button.onclick = () => moveToNextQuestion();
        optionsArea.appendChild(button);
    });
}

function moveToNextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        loadQuestion();
    } else {
        alert('Quiz Finished!');
    }
}
loadQuestion();
