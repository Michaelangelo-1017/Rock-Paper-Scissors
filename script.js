function getComputerChoice(){
    const gameArray = ["rock","paper","scissors"];
    const choice = Math.floor(Math.random() * (3 - 0)) + 0;
    return gameArray[choice];
}

const getHumanChoice = () =>{
    const choice = prompt("Input your choice");
    return choice;
}

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice,computerChoice){
    humanChoice = humanChoice.toLowerCase();
    if(humanChoice === computerChoice){
        console.log("That's a tie! You both get a point.");
        computerScore++;
        humanScore++;
        return
    }
    if(humanChoice === "rock"){
        if(computerChoice === "paper"){
        console.log("You lose! Paper beats Rock");
        computerScore++;
        return
        }
    else if(computerChoice === "scissors"){
        console.log("You win! Rock beats Scissors");
        humanScore++;
        return
        }
    }
    if(humanChoice === "paper"){
        if(computerChoice === "scissors"){
        console.log("You lose! Scissors beats paper");
        computerScore++;
        return
        }
    else if(computerChoice === "rock"){
        console.log("You win! Paper beats rock");
        humanScore++;
        return
        }
    }
    if(humanChoice === "scissors"){
        if(computerChoice === "rock"){
        console.log("You lose! Rock beats Scissors");
        computerScore++;
        return
        }
    else if(computerChoice === "paper"){
        console.log("You win! Scissors beats Paper");
        humanScore++;
        return
        }
    }
    
}

function playGame(){
    let humanScore = 0;
        let computerScore = 0;

        function playRound(humanChoice,computerChoice){
            humanChoice = humanChoice.toLowerCase();
            if(humanChoice === computerChoice){
                console.log("That's a tie! You both get a point.");
                computerScore++;
                humanScore++;
                return
            }
            if(humanChoice === "rock"){
                if(computerChoice === "paper"){
                console.log("You lose! Paper beats Rock");
                computerScore++;
                return
                }
            else if(computerChoice === "scissors"){
                console.log("You win! Rock beats Scissors");
                humanScore++;
                return
                }
            }
            if(humanChoice === "paper"){
                if(computerChoice === "scissors"){
                console.log("You lose! Scissors beats paper");
                computerScore++;
                return
                }
            else if(computerChoice === "rock"){
                console.log("You win! Paper beats rock");
                humanScore++;
                return
                }
            }
            if(humanChoice === "scissors"){
                if(computerChoice === "rock"){
                console.log("You lose! Rock beats Scissors");
                computerScore++;
                return
                }
            else if(computerChoice === "paper"){
                console.log("You win! Scissors beats Paper");
                humanScore++;
                return
                }
            }
            
        }
    while(computerScore < 5 && humanScore < 5){
        const computerChoice = getComputerChoice();
        const humanChoice = getHumanChoice();
        playRound(humanChoice,computerChoice);
        console.log(`The score now is Computer ${computerScore} - ${humanScore} Human`)
    }
}
console.log(playGame());
;