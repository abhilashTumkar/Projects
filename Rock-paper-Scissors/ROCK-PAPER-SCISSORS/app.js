const startGameBtn = document.getElementById('start-game-btn');


//Storing values in a constants to avoid spell mistakes
const ROCK = 'ROCK';
const PAPER = 'PAPER';
const SCISSORS = 'SCISSORS';
const DRAW = 'DRAW';
const WIN = 'WIN';
const LOSS = 'LOSS';
const DEFAULT_SELECTION = 'ROCK';

//CHeck whether game Is Running
let gameIsRunning = false;

//Choose player move from prompt
const getPlayerChoice = () => {
    const selection = prompt(`${ROCK}, ${PAPER} or ${SCISSORS}?`, '').toUpperCase();
    if(selection != ROCK && selection != PAPER && selection != SCISSORS){
        alert(`Invalid Choice we chose ${DEFAULT_SELECTION} for you`);        //If you mistype any of the moves by default you will choose rock
        return DEFAULT_SELECTION;
    }
    return selection;   
};


//Get computer Choice code by random() methods
//random method generates a number between 0 to 1
const getComputerChoice = () => {
    const randomValue = Math.random();
    if(randomValue > 0 && randomValue <= 1/3){
        return ROCK;
    }
    else if(randomValue > 1/3 && randomValue <= 2/3){
        return PAPER;
    }
    else{
        return SCISSORS;
    }
};

//Display winner
const getWinner = (cChoice, pChoice) => cChoice === pChoice ? DRAW : ((cChoice === ROCK && pChoice === PAPER) || (cChoice === PAPER && pChoice === SCISSORS) || (cChoice === SCISSORS && pChoice === ROCK)) ? WIN : LOSS
    
    
    // if(cChoice === pChoice){
    //     return DRAW;
    // }
    // else if(cChoice === ROCK && pChoice === PAPER || cChoice === PAPER && pChoice === SCISSORS || cChoice === SCISSORS && pChoice === ROCK){
    //     return WIN;
    // }else{
    //     return LOSS;
    // }



//Start the Game function
startGameBtn.addEventListener('click', function (){
    if(gameIsRunning){
        return;
    }
    gameIsRunning = true;

    console.log('Game is Starting...');
    const playerChoice = getPlayerChoice();
    const computerChoice = getComputerChoice();
    console.log(`Computer Choice: ${computerChoice}`);
    let message =  `You Picked ${playerChoice}, computer picked ${computerChoice}`;

    if(winner === DRAW){
        message += ' had a draw';
    }
    else if(winner === WIN){
        message += ' You Won';
    }
    else{
        message += ' You Lost';
    }
    alert(message);
    gameIsRunning = false;
});