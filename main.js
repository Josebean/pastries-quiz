document.getElementById('start-button').addEventListener('click', function () {
    document.getElementById('start-page').style.display = "none";
    document.getElementById('question-page').style.display = "flex";
}) 

let currentQuestionIndex = 0;
let score = {A: 0, B: 0, C: 0, D: 0, E: 0, F: 0, G: 0};

const quiz = [

    {
        question: "This is question 1",
        choices: [
            { id: 1, text: "Choice 1", type: 'A'},
            { id: 2, text: "Choice 2", type: 'B'},
            { id: 3, text: "Choice 3", type: 'C'},
        ]
    },

    {
        question: "This is question 2",
        choices: [
            { id: 1, text: "Choice 1", type: 'D'},
            { id: 2, text: "Choice 2", type: 'E'}
        ]
    },

    {
        question: "This is question 3",
        choices: [
            { id: 1, text: "Choice 1", type: 'F'},
            { id: 2, text: "Choice 2", type: 'G'}
        ]
    }
    

]

function showQuestion(text) {
    const questionText = document.createElement('div');
    questionText.classList.add('question-text');
    questionText.textContent = text;
    document.getElementById('question').appendChild(questionText);
}

function showChoices(choices) {
    const choicesContainer = document.getElementById('choices');

    choices.forEach(choice => {
        const choiceButton = document.createElement('button');
        choiceButton.classList.add('choice-button');
        choiceButton.textContent = choice.text;
        choiceButton.onclick = () => handleChoice(choice.type, choice.type2, choice.type3, choice.id);
        choicesContainer.appendChild(choiceButton);
    })
}

function showResult() {
    document.getElementById('question-page').style.display = "none";
    document.getElementById('result-page').style.display = "flex";
}

function handleChoice(type, type2, type3, id) {
    const chosenChoice = quiz[currentQuestionIndex].choices.find(choice => choice.type === type && choice.id === id)
    score[type] += 1;
    score[type2] += 1;
    score[type3] += 1;
    
    const str = JSON.stringify(score);
    console.log("Current Score: " + str);
    currentQuestionIndex += 1;
   
    if (currentQuestionIndex < quiz.length) {

        
        console.log("Current Question Index: " + currentQuestionIndex);
        

        document.getElementById('choices').innerHTML = '';
        document.getElementById('question').innerHTML = '';
    


        showQuestion(quiz[currentQuestionIndex].question);
        showChoices(quiz[currentQuestionIndex].choices);

    } else {
        console.log("Done");
        showResult();
    }
    

}

function startQuiz() {
    showQuestion(quiz[0].question);
    showChoices(quiz[0].choices);
}

startQuiz();
