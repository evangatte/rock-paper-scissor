let computerScore = 0;
let playerScore = 0
let winner = ''
const roundScreen = document.querySelector('.round-winner')
let compPointsScreen = document.querySelector('.computer-score')
let playPointsScreen = document.querySelector('.player-score')
let topContainer = document.querySelector('.round-winner-container')
let introModal = document.querySelector('.intro-modal-container');
let introButton = document.querySelector('.intro-button');

introButton.addEventListener('click', () => {
    introModal.style.display = 'none'
    resetGame();
})

   

function updateScreen() {
    playPointsScreen.innerText = playerScore;
    compPointsScreen.innerText = computerScore;


    if ((playerScore === 5 || computerScore === 5)) {
        createModal()
        
    }
}


  


function game(value) {
    roundScreen.innerText = playRound(value)
}



document.querySelector('.button-container').addEventListener('click', function(event) {
    if (event.target.tagName.toLowerCase() === 'button') {
        //console.log(event.target.innerText)
        game(event.target.innerText);
        updateScreen()
    }
});

const choices = ['Rock', 'Paper', 'Scissors']

function computerRandom() {
    let val = Math.floor(Math.random() * choices.length);
    return choices[val];
}




function playRound(playerSelection) {
    let computerSelection = computerRandom();
    console.log(computerSelection);
    if (computerSelection == playerSelection){
        return winner = 'tie round!';
    } 
    if (
        (computerSelection == 'Rock' && playerSelection == 'Scissors') || 
        (computerSelection == 'Paper' && playerSelection == 'Rock') ||
        (computerSelection == 'Scissors' && playerSelection == 'Paper')
    ) {
        computerScore++
        return 'computer wins!';
    } 

    if ((playerSelection == 'Rock' && computerSelection =='Scissors') ||
        (playerSelection == 'Paper' && computerSelection == 'Rock') ||
        (playerSelection = 'Scissors' && computerSelection == 'Paper')
    ) {
        playerScore++
        return winner = 'player wins!';
    } 
}




function resetGame() {
    computerScore = 0;
    playerScore = 0;
    playPointsScreen.innerText = 0;
    compPointsScreen.innerText = 0;
    roundScreen.innerText = 'Pick your weapon!'
}






function createModal() {
    let matchModal = document.createElement('div')
    matchModal.setAttribute('class', 'match-winner-modal')
    
    let modalText = document.createElement('div')
    modalText.setAttribute('class', 'modal-text')
    
    let modalButtonContainer = document.createElement('div');
    modalButtonContainer.setAttribute('class', 'modal-button-container');

    let modalButton = document.createElement('button')
    modalButton.setAttribute('class','modal-button')
    let buttonText = document.createTextNode('Play Again?')
    modalButton.appendChild(buttonText);
    modalButtonContainer.appendChild(modalButton);
    matchModal.appendChild(modalText);
    matchModal.appendChild(modalButtonContainer);


    function playerWinsText() {
        let playerWinsMatch = document.createTextNode('Player wins the match!');
        modalText.appendChild(playerWinsMatch);
    }
    
    function computerWinsText() {
        let computerWinsMatch = document.createTextNode('Computer wins the match!');
        modalText.appendChild(computerWinsMatch);
    }

    topContainer.appendChild(matchModal);


    if (playerScore === 5) {
        matchModal.style.display = 'block';
        playerWinsText()
       
    }   else if (computerScore === 5) {
        matchModal.style.display = 'block';
        computerWinsText()
    }

    modalButton.addEventListener('click', function() {
        matchModal.style.display = 'none';
        resetGame()
    })
}


















