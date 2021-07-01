const arr = [
    {
        ques: "Q1. HTML stands for ?",
        a: "HighText Machine Language",
        b: "HyperText and links Markup Language",
        c: "HyperText Markup Language",
        d: "None of these",
        ans: "ans3"
    }, 
    {
        ques: "Q2. The correct sequence of HTML tags for starting a webpage is ?",
        a: "Head, Title, HTML, body",
        b: "HTML, Body, Title, Head",
        c: "HTML, Body, Head, Title",
        d: "HTML, Head, Title, Body",
        ans: "ans4"
    },
    {
        ques: "Q3. Which of the following tag is used for inserting the largest heading in HTML?",
        a: "<h3>",
        b: "<h7>",
        c: "<h6>",
        d: "<h1>",
        ans: "ans3"
    },
    {
        ques: "Q4. CSS stands for ?",
        a: "Cascade style sheets",
        b: "Cascading style sheets",
        c: "Color and style sheets",
        d: "None of these",
        ans: "ans2"
    },
    {
        ques: "Q5. Which property in CSS is used to change the text color of an element ?",
        a: "color",
        b: "bgcolor",
        c: "background-color",
        d: "All of Above",
        ans: "ans1"
    }
];

const startQuiz = document.getElementById('start-btn');
const instructions = document.querySelector('#instructions');
const continueBtn = document.querySelector('.continue-btn');
const quitBtn = document.querySelector('.quit-btn');
const game = document.querySelector('.game');
const question = document.getElementById('question');
const option1 = document.getElementById('opt1');
const option2 = document.getElementById('opt2');
const option3 = document.getElementById('opt3');
const option4 = document.getElementById('opt4');
const submit = document.getElementById('submit');
const answers = document.querySelectorAll('.answer');
const scoreCard = document.querySelector('.score-card');
const countdown = document.getElementById('countdown');
const name = document.querySelector('.name');

let i = 0;
let score = 0;

const startingMinutes = 10;
let time = startingMinutes*60;
function updateCountdown() {
    const minutes = Math.floor(time/60);
    let seconds = time % 60;
    seconds = seconds < 10? '0' + seconds: seconds; 
    countdown.innerHTML = `<h3>Time : ${minutes}:${seconds}</h3>`;
    time--;
}

startQuiz.addEventListener('click', () => {
    startQuiz.style.display = "none";
    instructions.style.display = "block";

});

continueBtn.addEventListener('click', () => {
    instructions.style.display = "none";
    game.style.display = "block";
    loadQuestions();
    setInterval(updateCountdown, 1000);
})

submit.addEventListener('click', () => {
    let currAnswer = checkAnswer();
    if(currAnswer === arr[i].ans) {
        score++;
    }

    i++;
    deselectAll();
    if(i < arr.length) {
        loadQuestions();
    } else {
        game.style.display = "none";
        scoreCard.style.display = "block";
        scoreCard.innerHTML = `
        <h2>You scored ${score}/${arr.length} ✌️</h2>
        <button class="btn" onClick="location.reload()">Play Again</button>
        `
    }
});

function loadQuestions() {
    question.innerText = arr[i].ques;
    option1.innerText = arr[i].a;
    option2.innerText = arr[i].b;
    option3.innerText = arr[i].c;
    option4.innerText = arr[i].d;
}

function checkAnswer() {
    let answer;

    answers.forEach(curr => {
        if(curr.checked) {
            answer = curr.id;
        }
    });
    return answer;
}

function deselectAll() {
    answers.forEach(curr => curr.checked = false);
}
