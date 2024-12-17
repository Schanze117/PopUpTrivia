function showQuestion(questionIndex) {
    const question = questions[questionIndex];
    const $questionText = document.getElementById("questionText");
    const $answers = document.querySelectorAll(".option");

    $questionText.textContent = question.question;

    $answers.forEach((button, index) => {
        button.textContent = question.answers[index];
        button.disabled = false;
        button.className = "button option";  
        button.style = "";  

    });
}

function showQuestion(questionIndex) {
    const question = questions[questionIndex];
    const $questionText = document.getElementById("questionText");
    const $answers = document.querySelectorAll(".option");

    $questionText.textContent = question.question;

    $answers.forEach((button, index) => {
        button.textContent = question.answers[index];
        button.disabled = false;

        const newButton = button.cloneNode(true);
        button.parentNode.replaceChild(newButton, button);

        newButton.addEventListener("click", handleOptionClick.bind(null, index, question.correctAnswerIndex));
    });
}