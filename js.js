function computerPlay() {
    let selection = ['Rock', 'Paper', 'Scissors'];
    let idx = Math.floor(Math.random()*3);
    return selection[idx];
}

function playRound(playerSelection, computerSelection){
    // Win variable, 0 for lost, 1 for draw, and 2 for win
    let win = 0;

    // Capitalize first letter and ensures the rest of the letters are lower case
    playerSelection = playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1).toLowerCase();
    
    if(playerSelection==='Rock' && computerSelection==='Scissors'){
        win = 2;
    }else if(playerSelection==='Rock' && computerSelection==='Rock'){
        win = 1;
    }else if(playerSelection==='Paper' && computerSelection==='Rock'){
        win = 2;
    }else if(playerSelection==='Paper' && computerSelection==='Paper'){
        win = 1;
    }else if(playerSelection==='Scissors' && computerSelection==='Paper'){
        win = 2;
    }else if(playerSelection==='Scissors' && computerSelection==='Scissors'){
        win = 1;
    }

    if(win===2){
        return `You Win! ${playerSelection} beats ${computerSelection}`;
    }else if(win===1){
        return `Draw!`;
    }else{
        return `You Lose! ${computerSelection} beats ${playerSelection}`;
    }
}

