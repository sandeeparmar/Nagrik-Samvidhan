const quizData = [
    {
        question: "What is the capital of India?",
        a: "New Delhi",
        b: "Mumbai",
        c: "Kolkata",
        d: "Chennai",
        correct: "a",
    },
    {
        question: "Who is the President of India?",
        a: "Narendra Modi",
        b: "Ram Nath Kovind",
        c: "Draupdi Murmu",
        d: "Rajnath Singh",
        correct: "b",
    },
    {
        question: "Which article of the Constitution deals with the power of the President to dissolve the Lok Sabha?",
        a: "Article 356",
        b: "Article 365",
        c: "Article 352",
        d: "Article 83",
        correct: "d",
    },
    {
        question: "How many amendments does the Indian Constitution have?",
        a: "104",
        b: "105",
        c: "103",
        d: "106",
        correct: "a",
    },
];

const instructions = document.getElementById('instructions');
const userData = document.getElementById('user-data');
const quiz = document.getElementById('quiz');
const result = document.getElementById('result');
const usernameInput = document.getElementById('username');
const submitUsernameBtn = document.getElementById('submit-username');
const startGameBtn = document.getElementById('start-game');
const submitBtn = document.getElementById('submit');
const restartBtn = document.getElementById('restart');
const feedbackEl = document.getElementById('feedback');
const scoreEl = document.getElementById('score');
const totalEl = document.getElementById('total');
const currentEl = document.getElementById('current');
const totalQuestionsEl = document.getElementById('total-questions');
const progressBar = document.getElementById('progress-bar');
const timerEl = document.getElementById('time');
const highScoreEl = document.getElementById('high-score');

let currentQuiz = 0;
let score = 0;
let timer;
let username = localStorage.getItem('username') || '';
let highScore = localStorage.getItem('highScore') || 0;

function loadQuiz() {
    deselectAnswers();

    const currentQuizData = quizData[currentQuiz];
    document.getElementById('question').innerText = currentQuizData.question;
    document.getElementById('a_text').innerText = currentQuizData.a;
    document.getElementById('b_text').innerText = currentQuizData.b;
    document.getElementById('c_text').innerText = currentQuizData.c;
    document.getElementById('d_text').innerText = currentQuizData.d;

    currentEl.innerText = currentQuiz + 1;
    totalQuestionsEl.innerText = quizData.length;

    progressBar.style.width = `${(currentQuiz / quizData.length) * 100}%`;

    startTimer();
}

function deselectAnswers() {
    document.querySelectorAll('.answer').forEach(answerEl => answerEl.checked = false);
}

function getSelected() {
    let answer;
    document.querySelectorAll('.answer').forEach(answerEl => {
        if (answerEl.checked) {
            answer = answerEl.id;
        }
    });
    return answer;
}

function startTimer() {
    let timeLeft = 20;
    timerEl.innerText = timeLeft;

    timer = setInterval(() => {
        timeLeft--;
        timerEl.innerText = timeLeft;

        if (timeLeft <= 0) {
            clearInterval(timer);
            submitAnswer();
        }
    }, 1000);
}

function submitAnswer() {
    clearInterval(timer);
    const answer = getSelected();

    if (answer === quizData[currentQuiz].correct) {
        score++;
        feedbackEl.innerText = "Correct!";
    } else {
        feedbackEl.innerText = `Wrong! The correct answer was ${quizData[currentQuiz][quizData[currentQuiz].correct]}.`;
    }

    feedbackEl.classList.remove('hidden');
    setTimeout(() => {
        feedbackEl.classList.add('hidden');
        currentQuiz++;

        if (currentQuiz < quizData.length) {
            loadQuiz();
        } else {
            quiz.classList.add('hidden');
            result.classList.remove('hidden');
            scoreEl.innerText = score;
            totalEl.innerText = quizData.length;
            highScoreEl.innerText = highScore;
            if (score > highScore) {
                localStorage.setItem('highScore', score);
                highScoreEl.innerText = score;
            }
        }
    }, 2000); // Show feedback for 2 seconds
}

startGameBtn.addEventListener('click', () => {
    instructions.classList.add('hidden');
    userData.classList.remove('hidden');
});

submitUsernameBtn.addEventListener('click', () => {
    username = usernameInput.value;
    if (username) {
        localStorage.setItem('username', username);
        userData.classList.add('hidden');
        quiz.classList.remove('hidden');
        loadQuiz();
    } else {
        alert("Please enter your name.");
    }
});

submitBtn.addEventListener('click', submitAnswer);

restartBtn.addEventListener('click', () => {
    score = 0;
    currentQuiz = 0;
    result.classList.add('hidden');
    quiz.classList.remove('hidden');
    loadQuiz();
});
