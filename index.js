
function getComputerChoice(){
    const a = ["rock","paper","scissors"]
    const choice = Math.floor(Math.random()*a.length)
    return a[choice]
}

function playerSelection(){
    const selection = prompt("Enter your choice").toLowerCase();
    return selection
}

function playRound(player,pc){
    if(player===pc){
        return -1
    }
    else if (
        (player === "rock" && pc === "scissors") ||
        (player === "paper" && pc === "rock") ||
        (player === "scissors" && pc === "paper")
      ) {
        return 1;
      } else {
        return 0;
      }
}

function game(){
    let rounds=5
    let player = 0
    let pc = 0
    while(rounds>0){
        const playerChoice = playerSelection()
        const pcChoice = getComputerChoice()
        const play=playRound(playerChoice,pcChoice)
        if(play===1){
            player++
        }
        else if(play===-1){
            console.log("It's a tie")
        }
        else{
            pc++
        }
        rounds--
        console.log(`Player: ${player}  PC: ${pc}`)
    }
    let winner = null
    if(player>pc){
        winner = "Player"
    }
    else{
        winner = "PC"
    }
    console.log(`Final Score:-  Player: ${player}  PC: ${pc}  The ${winner} wins`)
}

game()

