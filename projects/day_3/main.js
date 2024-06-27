/* quiz_qsn is an Array which is set of objects of all the questions with answer options */
const quiz_qsn = [
    {
        question: "Which one is Red?",
        answer: [
            {text: "#F00", correct: true},
            {text: "#0F0", correct: false},
            {text: "#00F", correct: false},
            {text: "#FF0", correct: false},
        ]
    },
    {
        question: "Which one is Paragraph tag?",
        answer: [
            {text: "'a' tag", correct: false},
            {text: "'p' tag", correct: true},
            {text: "'h1' tag", correct: false},
            {text: "'span' tag", correct: false},
        ]
    },
    {
        question: "Which one is first priority Heading?",
        answer: [
            {text: "h2", correct: false},
            {text: "h3", correct: false},
            {text: "h1", correct: true},
            {text: "h5", correct: false},
        ]
    },
    {
        question: "What do you think about JavaScript?",
        answer: [
            {text: "Sucks", correct: true},
            {text: "Moderate", correct: true},
            {text: "Very Easy", correct: false},
            {text: "Worst", correct: true},
        ]
    }
];


/* declaring varibles for '<h2 id="question"></h2>' = qeustion_el,
<div id="answer-buttons"> = answrt_btn,
<button id="next-btn" class="next-btn">Next</button> = next_btn */
const question_el = document.getElementById("question");
const answer_btn = document.getElementById("answer-buttons");
const next_btn = document.getElementById("next-btn");


/* defining varibles for storing object index and scores */
let index = 0;
let score = 0;


/* start_quiz funtion calls question display funtion to display the question and options */
function start_quiz(){
    index = 0;
    score = 0;
    next_btn.innerHTML = "Next";
    display_qsn();
}


/* display_qsn funtion firstly removes question and all the options to display freshly new question
ans options.

defining a variable to store question using quiz_qsn[index] ((index defines the question numbers,
index starts from 0, so question number is 'index + 1')) 
lastly concataning the question number and questions in question element variable*/
function display_qsn(){
    start_fresh();

    let current_qsn = quiz_qsn[index];
    let qsn_number = index + 1;
    question_el.innerHTML = qsn_number + ". " + current_qsn.question;

    /* for quiz_qsn calling function for each element.
    for each answer creating a HTML button element to display answer options.
    then adding a class named 'btn' inside the buttion tag.
    then append the button inside '<div id="answer-buttons">'.
    */
        current_qsn.answer.forEach(answer =>{
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answer_btn.appendChild(button);
        if(answer.correct){
            button.dataset.correct = answer.correct;
        }
        button.addEventListener('click', select_answer);
    });
}

function start_fresh(){
    next_btn.style.display = "none";
    while(answer_btn.firstChild){
        answer_btn.removeChild(answer_btn.firstChild);
    }
}

function select_answer(e){
    const select_answer_btn = e.target;
    const isCorrect = select_answer_btn.dataset.correct === "true";
    if (isCorrect) {
        select_answer_btn.classList.add("correct");
        score++;
    }else{
        select_answer_btn.classList.add("incorrect");
    }
    Array.from(answer_btn.children).forEach(button =>{
        if(button.dataset.correct === "true"){
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    next_btn.style.display = "block";
}

function showScore(){
    start_fresh();
    question_el.innerHTML = `You scored ${score} out of ${quiz_qsn.length}!`
    next_btn.innerHTML = "Play Again";
    next_btn.style.display = "block";
}

function handle_next_btn(){
    index++;
    if(index < quiz_qsn.length){
        display_qsn();
    }else{
        showScore();
    }
}

next_btn.addEventListener("click", ()=>{
    if(index < quiz_qsn.length){
        handle_next_btn();
    }else{
        start_quiz();
    }
});

start_quiz();