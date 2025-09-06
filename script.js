//Variables
const buttons = document.querySelectorAll(".choices > button");
let humanScore = 0;
let computerScore = 0;
const humanScoreText = document.getElementById("human-score");
const computerScoreText = document.getElementById("computer-score");
const resultsText = document.getElementById("results-text");
const results = document.querySelector(".results");
const choicesContainer = document.querySelector(".choices");

//Functions
function getComputerChoice(){
    const gameArray = ["rock","paper","scissors"];
    const choice = Math.floor(Math.random() * (3 - 0)) + 0;
    return gameArray[choice];
}

const getHumanChoice = () =>{
    const choice = prompt("Input your choice");
    return choice;
}

function playRound(humanChoice,computerChoice){
    humanChoice = humanChoice.toLowerCase();
    if(humanChoice === computerChoice){
        humanScoreText.textContent = humanScore;
        computerScoreText.textContent = computerScore;
        results.innerHTML += "<p class='result'>That's a tie! No one gets a point.</p>";
        return
    }
    if(humanChoice === "rock"){
        if(computerChoice === "paper"){
        computerScore++;
        computerScoreText.textContent = computerScore;
        results.innerHTML += "<p class='result lose'>You lose! Paper beats Rock</p>";
        gameWinner();
        return
        }
    else if(computerChoice === "scissors"){
        humanScore++;
        humanScoreText.textContent = humanScore;
        results.innerHTML += "<p class='result win'>You win! Rock beats Scissors</p>";
        gameWinner();
        return
        }
    }
    if(humanChoice === "paper"){
        if(computerChoice === "scissors"){
        computerScore++;
        computerScoreText.textContent = computerScore;
        results.innerHTML += "<p class='result lose'>You lose! Scissors beats paper</p>";
        gameWinner();
        return
        }
    else if(computerChoice === "rock"){
        humanScore++;
        humanScoreText.textContent = humanScore;
        results.innerHTML += "<p class='result win'>You win! Paper beats rock</p>";
        gameWinner();
        return
        }
    }
    if(humanChoice === "scissors"){
        if(computerChoice === "rock"){
        computerScore++;
        computerScoreText.textContent = computerScore;
        results.innerHTML += "<p class='result lose'>You lose! Rock beats Scissors</p>";
        gameWinner();
        return
        }
    else if(computerChoice === "paper"){
        humanScore++;
        humanScoreText.textContent = humanScore;
        results.innerHTML += "<p class='result win'>You win! Scissors beats Paper</p>";
        gameWinner();
        return
        }
    }
}

function gameWinner(){
    if(humanScore === 5 || computerScore === 5){
        results.innerHTML += `<p class='game-over'>Game Over!</p>`;
        choicesContainer.classList.toggle("hidden");
    }
    if(humanScore === 5){
        results.innerHTML += `<p class="winner-text win">Human Won!</p>
        <p class='game-over'>Restart Game?</p>
        <button type='button' id="restart-btn" onclick="restartGame()">Restart</button>`
    }
    else if(computerScore === 5){
        results.innerHTML += `<p class="winner-text lose">Computer Won!</p>
        <p class='game-over'>Restart Game?</p>
        <button type='button' id="restart-btn" onclick="restartGame()">Restart</button>`
    }
}

function restartGame(){
    humanScore = 0;
    computerScore = 0;
    computerScoreText.textContent = computerScore;
    humanScoreText.textContent = humanScore;
    choicesContainer.classList.toggle("hidden");
    results.innerHTML = `<p id="results-text">Results</p>`
}

//Event Listeners
buttons.forEach((button)=>{
    button.addEventListener("click", ()=>{
        const humanChoice = button.id;
        const computerChoice = getComputerChoice();
        gameWinner();
        playRound(humanChoice, computerChoice);
    })
})


//Testing Block
