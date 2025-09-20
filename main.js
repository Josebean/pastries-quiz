document.getElementById('start-button').addEventListener('click', function () {
    document.getElementById('start-page').style.display = "none";
    document.getElementById('question-page').style.display = "flex";
}) 

const quiz = [

    {
        question: "This is question 1",
        choices: [
            { id: 1, text: "Choice 1", weight: 1},
            { id: 2, text: "Choice 2", weight: 2},
            { id: 3, text: "Choice 3", weight: 3},
        ]
    }

]

function showQuestion(text) {
    const questionText = document.createElement('div');
    questionText.classList.add('question');
    questionText.textContent = text;
    document.getElementById('question').appendChild(questionText);
}

function showChoices(choices) {
    const choicesContainer = document.getElementById('choices');

    choices.forEach(choice => {
        const choiceButton = document.createElement('button');
        choiceButton.classList.add('choice-button');
        choiceButton.textContent = choice.text;
        choicesContainer.appendChild(choiceButton);
    })
}

function startQuiz() {
    showQuestion(quiz[0].question);
    showChoices(quiz[0].choices);
}

startQuiz();
