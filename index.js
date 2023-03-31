function getComputerChoice() {
    const a = ["rock", "paper", "scissors"];
    const choice = Math.floor(Math.random() * a.length);
    return a[choice];
  }
  
  function playerSelection(selection) {
    
    selection = selection.toLowerCase();
    
  
    return selection;
  }
  
  function playRound(player, pc) {
    if (player === pc) {
      return -1;
    } else if (
      (player === "rock" && pc === "scissor") ||
      (player === "paper" && pc === "rock") ||
      (player === "scissor" && pc === "paper")
    ) {
      return 1;
    } else {
      return 0;
    }
  }
  
  function game() {
    let rounds = 5;
    let playerScore = 0;
    let pcScore = 0;
    let gameover=false
    const bans = document.querySelectorAll(".container button");
    bans.forEach((btn) =>
      btn.addEventListener("click", function () {
        const playerChoice = playerSelection(btn.textContent);
        const pcChoice = getComputerChoice();
  
        const play = playRound(playerChoice, pcChoice);
        if(gameover==true){
            return;
        }
        if (play === 1) {
          playerScore++;
        } else if (play === -1) {
            const h3 = document.createElement("h3")
            const container = document.querySelector(".container");
            h3.textContent=`It's Tie`;
            container.appendChild(h3);
        } else {
          pcScore++;
        }
        rounds--;

        const h2 = document.createElement("h2")
        const container = document.querySelector(".container");
        h2.textContent=`Player: ${playerScore}  PC: ${pcScore}`;
        container.appendChild(h2);

        if (rounds === 0) {
          let winner = null;
          if (playerScore > pcScore) {
            winner = "Player";
          } else {
            winner = "PC";
          }
        const h1 = document.createElement("h1")
        const container = document.querySelector(".container");  
        h1.textContent=`Final Score:-  Player: ${playerScore}  PC: ${pcScore}  The ${winner} wins`;
        container.appendChild(h1);
        
        gameover=true

        setTimeout(function() {
        location.reload();
        }, 3000);
      
       

        }
      })
    );
  }
  game();