let score =JSON.parse(localStorage.getItem('score')) || {
  Wins : 0,
  Losses: 0,
  Ties : 0
};
const ShowResult = document.querySelector('.showResult');

const Moves = document.querySelector('.moves');

const scoreBoard = document.querySelector('.js-score');
 updateScoreBoard();


function playGame(playerMove){
    const computer =computerMove();
    let result = '';
    
    if(playerMove === "Scissors"){
      if(computer === 'Rock'){
        result = 'You Lose'; 
        }else if(computer === 'Paper'){
        result = 'You Win';
        }else if(computer === 'Scissors'){
        result = 'Tie';
        }
      }

      else if(playerMove === "Rock"){
        if(computer === 'Rock'){
          result = 'Tie'; 
          }else if(computer === 'Paper'){
          result = 'You Lose';
          }else if(computer === 'Scissors'){
          result = 'You Win';
          }

      }else if(playerMove === 'Paper'){
        if(computer === 'Rock'){
          result = 'You Win'; 
          }else if(computer === 'Paper'){
          result = 'Tie';
          }else if(computer === 'Scissors'){
          result = 'You Lose';
          }
          
      }
      /*code for Score Updater*/
      if(result === 'You Win'){
        score.Wins += 1;
      }else if( result === 'You Lose'){
        score.Losses += 1
      }else if(result === 'Tie'){
        score.Ties += 1
      }

      localStorage.setItem('score',JSON.stringify(score));

      updateScoreBoard();
      
      ShowResult.innerHTML = result;
      Moves.innerHTML = `You
      <img class="move-icon" src="images/${playerMove}-emoji.png" alt="">
      <img class="move-icon" src="images/${computer}-emoji.png" alt="">
      Computer`
      
    /*  alert(`You Picked ${playerMove}. Computer picked ${computer}. ${result} \n Score = Wins: ${score.Wins}, Losses: ${score.Losses}, Ties: ${score.Ties}`)*/
}

function updateScoreBoard(){
  scoreBoard.innerHTML = ` Wins: ${score.Wins}, Losses: ${score.Losses}, Ties: ${score.Ties}`
  localStorage.setItem('score',JSON.stringify(score));

}


function computerMove(){
  let computer = '';
  randomNumber = Math.random();
  if(randomNumber >= 0 && randomNumber < 1/3 ){
      computer = 'Rock';
    
  }else if(randomNumber >= 1/3 && randomNumber < 2/3){
      computer = 'Paper';
    
  }else if(randomNumber >= 2/3 && randomNumber <1){
      computer = 'Scissors';
    
  }
  return computer;
}
