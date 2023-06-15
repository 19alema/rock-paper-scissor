// Modal Functionality
const rulesBtn = document.querySelector('.rule-btn');
const restartBtn = document.querySelector('.restart-btn');
const closeRulesBtn = document.querySelector('.close-btn');
const modalContainer = document.querySelector('.modal-container');

function showModal() {
    modalContainer.style.height = '100%';
}
function closeModal() {
    modalContainer.style.height = '0';
}

rulesBtn.addEventListener('click', showModal);
closeRulesBtn.addEventListener('click', closeModal);

// This button helps to restart the game by reloading the window

restartBtn.addEventListener('click', () => location.reload());

// Timer and Game Funtionality
const timer = document.querySelector('.timer');

// Game Play Activator
const playBtn = document.querySelector('.play-btn');

const gameButtons = document.querySelectorAll('.img');

let timerInNumber = Number(timer.textContent);
const gameChoices = ['Rock', 'Paper', 'Scissor']

const computerScore = document.querySelector(".computer-score");
const humanScore = document.querySelector(".human-score");

const gameMessage = document.querySelector(".message");


let userScore = Number(humanScore.textContent);
let compScore = Number(computerScore.textContent);

function displayMessage(message) {
    gameMessage.textContent = message;
}

// Start Game
function startGame() {
    let randomNumber = Math.trunc(Math.random() * 3);
    let computerSelection = gameChoices[randomNumber];
    let userSelection = getAttributes(gameButtons);
    gameLogic(userSelection, computerSelection);
}
// Getting Attributes for Each Clicked Button
function getAttributes(data) {
    data.forEach((data) => data.dataset.choice)
}

// Removing Eventlistener after Time has Elapsed
function stopGame(buttons) {
    buttons.forEach((btn) => {
        btn.removeEventListener('click', startGame);
    } )
}
// Activate Play
playBtn.addEventListener('click', playGame)


function playGame() {
    gameButtons.forEach((button) => {
            button.addEventListener('click', startGame);
    });

    setInterval(() => {
        if (timerInNumber > 0) {
            timerInNumber -= 1;
            if (timerInNumber < 10) {
                timer.innerText = '0' + timerInNumber;
            } else {
            timer.innerText =  timerInNumber;
            }
        }

        if (timerInNumber === 0) {
            stopGame(gameButtons);

            let humanFinalScore = humanScore.textContent;
            let computerFinalScore = computerScore.textContent;

            determineWinner(humanFinalScore, computerFinalScore)

        }
    }, 1000);
}

// Determine Winner

function determineWinner(xScore, yScore) {
    gameMessage.classList.add('game-winner');
    if (xScore > yScore) {
        displayMessage(`You 👤 have won the game by ${ xScore - yScore} points, congrats! 🥳🎆`)
    } else if (xScore === yScore) {
        displayMessage(`It's a draw game with Equal Points, Well done 🤝`);
    } else {
        determineWinner(`The computer 🖥️ has won the game by ${yScore - xScore} points, You Lost! 😭`)
    }
}


// Game Brain and Logic

function gameLogic(user, computer) {
    if (user === 'Scissor' || computer === "Paper") {
        displayMessage("Scissor beats Paper, User wins");
        userScore += 1;
        humanScore.textContent = userScore;
    }
    else if (user === "Paper" || computer === "Scissor") {
        displayMessage("Scissor beats Paper, Computer wins");
        compScore += 1;
        computerScore.textContent = compScore;
    }
    else if (user === 'Paper' || computer === "Paper") {
        displayMessage("Draw Game");
    }
    else if (user === 'Scissor' || computer === "Scissor") {
displayMessage("Draw Game");
    }
    else if(user === 'Rock' || computer === "Paper") {
        displayMessage("Paper beats Rock, Computer wins");
        compScore += 1;
        computerScore.textContent = compScore;
    }
    else if (user === "Paper" || computer === "Rock") {
        displayMessage("Paper beats Rock, User wins");
        userScore += 1;
        humanScore.textContent = userScore;
    }
    else if (user === 'Paper' || computer === "Paper") {
        displayMessage("Draw Game");
    }
    else if (user ==='Rock' || computer === 'Rock') {
        displayMessage("Draw Game");
    }
        // 
    else if(user === 'Rock' || computer === "Scissor") {
        displayMessage("Rock beats Scissor, User wins");
        userScore += 1;
        humanScore.textContent = userScore;
    }
    else if (user === "Scissor" || computer === "Rock") {
        displayMessage("Rock beats Scissor, Computer Wins");
        compScore += 1;
        computerScore.textContent = compScore;
    }
    else if (user === 'Rock' || computer === "Rock") {
        displayMessage("Draw Game");
    }
    else {
        displayMessage("Draw Game");
    }
}
