function computerPlay() {
    let selection = ['Rock', 'Paper', 'Scissors'];
    let idx = Math.floor(Math.random()*3);
    return selection[idx];
}

function oneRound(playerSelection, computerSelection){
    // Capitalize first letter and ensures the rest of the letters are lower case
    playerSelection = playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1).toLowerCase();
    
    


}