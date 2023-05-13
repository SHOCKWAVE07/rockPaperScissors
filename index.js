
function getComputerChoice() {
  const a = ["Rock", "Paper", "Scissor"];
  const choice = Math.floor(Math.random() * a.length);
  return a[choice];
}

function playerSelection(selection) {
  return selection;
}

function playRound(player, pc) {
  if (player === pc) {
    return -1;
  } else if (
    (player === "Rock" && pc === "Scissor") ||
    (player === "Paper" && pc === "Rock") ||
    (player === "Scissor" && pc === "Paper")
  ) {
    return 1;
  } else {
    return 0;
  }
}

function game() {
  let yourounds = 5;
  let pcrounds = 5;
  let playerScore = 0;
  let pcScore = 0;
  let gameOngoing = true;

  const bans = document.querySelectorAll(".container button");
  bans.forEach((btn) =>
    btn.addEventListener("click", function () {
      if (!gameOngoing) {
        return;
      }

      const playerChoice = playerSelection(btn.id);

      const pcChoice = getComputerChoice();

      const play = playRound(playerChoice, pcChoice);

      const pcchoice = document.querySelector(".pcChoice");
      pcchoice.textContent = `${pcChoice}`;

      const userChoice = document.querySelector(".userChoice");
      userChoice.textContent = `${playerChoice}`;

      if (play === 1) {
        playerScore++;
        yourounds--;
      } else if (play === 0) {
        pcScore++;
        pcrounds--;
      }

      const results = document.querySelector(".results");
      results.textContent = `Player: ${playerScore}  PC: ${pcScore}`;

      if (pcrounds === 0 || yourounds === 0) {
        let winner = null;
        if (playerScore > pcScore) {
          winner = "Player";
        } else {
          winner = "PC";
        }
        const final = document.querySelector(".finalResults");
        final.textContent = `Final Score:-  Player: ${playerScore}  PC: ${pcScore}  The ${winner} wins`;
        gameOngoing = false;

        const timer = document.querySelector('.timer')
        let timeLeft = 5; // set timer for 3 seconds
        const countdown = setInterval(() => {
          timer.textContent = `  Reloading in ${timeLeft}...`;
          timeLeft--;
          if (timeLeft < 0) {
            clearInterval(countdown);
            location.reload();
          }
        }, 1000);
      }
    })
  );
}

game();
