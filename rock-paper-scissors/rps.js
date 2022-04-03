/* ************************************************************************************************* */
/* ******************************                                    ******************************* */
/* ******************************      ROCK-PAPER-SCISSORS GAME      ******************************* */
/* ******************************                                    ******************************* */
/* ************************************************************************************************* */


const playButtons = document.querySelectorAll('.play-button');
playButtons.forEach(x => x.addEventListener('click',playGame));

function playGame(choice) {

  function cleanClassList(x) {
    const posPrevs = ['fas', 'fa-hand-paper', 'fa-hand-scissors', 'fa-hand-rock' ];

    let toBeCleared = x.classList;
    let i = 0;
    while (i < toBeCleared.length) {
      if (posPrevs.indexOf(toBeCleared[i]) > -1) toBeCleared.remove(toBeCleared[i]);
      else i++;
    }
  }

  const header = document.querySelector('.who-won-last-round'); 


  const computerChoiceField = document.querySelector('.computers-last-move-display');
  cleanClassList(computerChoiceField); 
  
  const playerChoiceField = document.querySelector('.humans-last-move-display');
  cleanClassList(playerChoiceField);
 
  const computerScoreField = document.querySelector('.computer-score-display');
  const playerScoreField = document.querySelector('.human-score-display');


  playerChoice = this.id;
  let youWon = false; 
  const randomNumber = (Math.ceil(Math.random()*3));
  switch (randomNumber) {
    case 1:
      computerChoice = 'paper';
      computerChoiceField.classList.add('fas','fa-hand-paper');
      switch (playerChoice) {
        case 'paper':
          playerChoiceField.classList.add('fas','fa-hand-paper');
          header.innerText = `Last round: Tie!`;
          break;
        case 'scissors':
          playerChoiceField.classList.add('fas','fa-hand-scissors');
          header.innerText = `Last round: You won!`;
          playerScoreField.innerText = +playerScoreField.innerText + 1;
          break;
        case 'rock':
          playerChoiceField.classList.add('fas','fa-hand-rock');
          header.innerText = `Last round: Computer won!`
          computerScoreField.innerText = +computerScoreField.innerText + 1;
          break;
        default:
          playerChoice = '';
      }
      break;

    case 2:
      computerChoice = 'scissors';
      computerChoiceField.classList.add('fas','fa-hand-scissors');
      switch (playerChoice) {
        case 'paper':
          playerChoiceField.classList.add('fas','fa-hand-paper');
          header.innerText = `Last round: Computer won!`
          computerScoreField.innerText = +computerScoreField.innerText + 1;
          break;
        case 'scissors':
          playerChoiceField.classList.add('fas','fa-hand-scissors');
          header.innerText = `Last round: Tie!`;
          break;
        case 'rock':
          playerChoiceField.classList.add('fas','fa-hand-rock');
          header.innerText = `Last round: You won!`;
          playerScoreField.innerText = +playerScoreField.innerText + 1;
          break;
        default:
          playerChoice = '';
      }
      break;

    case 3:
      computerChoice = 'rock';
      computerChoiceField.classList.add('fas','fa-hand-rock');
      switch (playerChoice) {
        case 'paper':
          playerChoiceField.classList.add('fas','fa-hand-paper');
          header.innerText = `Last round: You won!`;
          playerScoreField.innerText = +playerScoreField.innerText + 1;
          break;
        case 'scissors':
          playerChoiceField.classList.add('fas','fa-hand-scissors');
          header.innerText = `Last round: Computer won!`;
          computerScoreField.innerText = +computerScoreField.innerText + 1;
          break;
        case 'rock':
          playerChoiceField.classList.add('fas','fa-hand-rock');
          header.innerText = `Last round: Tie!`;
          break;
        default:
          playerChoice = '';
      }
      break;

    default:
      computerChoice = '';
  }
}
