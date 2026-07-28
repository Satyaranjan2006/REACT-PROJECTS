const questions = [
    {//first question
        question: "Which is the largest animalin the world?",
        answers: [
            { Text: "shark", correct: false },
            { Text: "shark", correct: true },
            { Text: "shark", correct: false },
            { Text: "shark", correct: false },
        ]
    },
    {
        question: "Which is the largest animalin the world?",
        answers: [
            { Text: "shark", correct: false },
            { Text: "shark", correct: true },
            { Text: "shark", correct: false },
            { Text: "shark", correct: false },
        ] 
    },
    {
         question: "Who is the cteater of react?",
        answers: [
            { Text: "facebook", correct: true },
            { Text: "shark", correct: true },
            { Text: "shark", correct: false },
            { Text: "shark", correct: false },
        ]
    },
    {
         question: "Integration of Cosx?",
        answers: [
            { Text: "cosecx", correct: false },
            { Text: "sinx", correct: true },
            { Text: "cotx", correct: false },
            { Text: "secx", correct: false },
        ]
    },
    {
         question: "Prime minister of India?",
        answers: [
            { Text: "Mohan Majhi", correct: false },
            { Text: "PM Modi", correct: true },
            { Text: "Rahul Gandi", correct: false },
            { Text: "Nabin Pattanaik", correct: false },
        ]
    },
    {
     question: "Which is the largest animalin the world?",
        answers: [
            { Text: "shark", correct: false },
            { Text: "shark", correct: true },
            { Text: "shark", correct: false },
            { Text: "shark", correct: false },
        ]
    }
];

const questionElement=document.getElementById("question");
const answerButton=document.getElementById("answer-buttons");
const nextButton=document.getElementById("next-btn");


let currentQuestionIndex=0;
let score=0;

function startQuiz(){
    currentQuestionIndex=0;
    score=0;
    nextButton.innerHTML="Next";
    showQuestions();
}


