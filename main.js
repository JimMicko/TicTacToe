const cells = document.querySelectorAll(".cell");
const statusText = document.getElementById("statusText")
const finalText = document.getElementById("finalText")
const finalWinner = document.getElementById("finalWinner")
const round = document.getElementById("round")
const xScore = document.getElementById("xScore")
const oScore = document.getElementById("oScore")
const newGameBtn = document.getElementById("newGame")
const quitGameBtn = document.getElementById("quitGame")
const newRoundBtn = document.getElementById("newRound")
const winConditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];
let options = ["", "", "", "", "", "", "", "", ""];
let currentPlayer = "X";
let running = false;

initializeGame();

function initializeGame(){
    cells.forEach(cell => cell.addEventListener("click", cellClicked));
    newRoundBtn.addEventListener("click", newRound);
    newGameBtn.addEventListener("click", newGame);
    statusText.textContent = `Player ${currentPlayer}'s turn`;
    running = true
}
function cellClicked(){
    const cellIndex = this.getAttribute("cellIndex")

    if(options[cellIndex] != "" || !running){
        return;
    }

    updateCell(this, cellIndex);
    checkWinner();
}
function updateCell(cell, index){
    options[index] = currentPlayer;
    cell.textContent = currentPlayer;
}
function changePlayer(){
    currentPlayer = (currentPlayer == "X") ? "O" : "X";
    statusText.textContent = `Player ${currentPlayer}'s turn`;
}
function checkWinner(){
    let roundWon = false

    for(i=0 ; i<winConditions.length ; i++){
        const condition = winConditions[i];
        const cellA =  options[condition[0]];
        const cellB =  options[condition[1]];
        const cellC =  options[condition[2]];

        if(cellA == "" || cellB == "" || cellC == ""){
            continue;
        }
        if(cellA == cellB && cellB == cellC){
            roundWon = true;
            break
        }
    }
    if(roundWon){
        let xScoreNo = parseInt(xScore.innerHTML);
        let oScoreNo = parseInt(oScore.innerHTML);    
        statusText.textContent = `Round Winner: Player ${currentPlayer}`;
        running = false;
        if(currentPlayer == "O"){
            oScore.innerHTML = oScoreNo + 1;
            console.log(currentPlayer)
            if(round.innerHTML == 5){
                if(oScore.innerHTML > xScore.innerHTML){
                    finalText.innerHTML = "Game Over"
                    finalWinner.innerHTML = "Game Winner: Player O"
                    newGameBtn.setAttribute("style", "font-size: 20px; width: 150px; background-color: green; display block !important")
                    quitGameBtn.setAttribute("style", "font-size: 20px; width: 150px; background-color: red; display block !important")    
                }
                else if(oScore.innerHTML < xScore.innerHTML){
                    finalText.innerHTML = "Game Over"
                    finalWinner.innerHTML = "Game Winner: Player X"
                    newGameBtn.setAttribute("style", "font-size: 20px; width: 150px; background-color: green; display block !important")
                    quitGameBtn.setAttribute("style", "font-size: 20px; width: 150px; background-color: red; display block !important")    
                }
                else if(oScore.innerHTML == xScore.innerHTML){
                    finalText.innerHTML = "Game Over"
                    finalWinner.innerHTML = "Draw"
                    newGameBtn.setAttribute("style", "font-size: 20px; width: 150px; background-color: green; display block !important")
                    quitGameBtn.setAttribute("style", "font-size: 20px; width: 150px; background-color: red; display block !important")    
                }              
            }
            else if(round.innerHTML<5){
                newRoundBtn.setAttribute("style", "margin-top: 90px; font-size: 20px; width: 150px; background-color: rgb(22, 91, 240); display block !important")
            }
        }
        else if(currentPlayer == "X"){
            xScore.innerHTML = xScoreNo + 1;
            console.log(currentPlayer)
            if(round.innerHTML == 5){
                if(oScore.innerHTML > xScore.innerHTML){
                    finalText.innerHTML = "Game Over"
                    finalWinner.innerHTML = "Game Winner: Player O"
                    newGameBtn.setAttribute("style", "font-size: 20px; width: 150px; background-color: green; display block !important")
                    quitGameBtn.setAttribute("style", "font-size: 20px; width: 150px; background-color: red; display block !important")    
                }
                else if(oScore.innerHTML < xScore.innerHTML){
                    finalText.innerHTML = "Game Over"
                    finalWinner.innerHTML = "Game Winner: Player X"
                    newGameBtn.setAttribute("style", "font-size: 20px; width: 150px; background-color: green; display block !important")
                    quitGameBtn.setAttribute("style", "font-size: 20px; width: 150px; background-color: red; display block !important")    
                }
                else if(oScore.innerHTML == xScore.innerHTML){
                    finalText.innerHTML = "Game Over"
                    finalWinner.innerHTML = "Draw"
                    newGameBtn.setAttribute("style", "font-size: 20px; width: 150px; background-color: green; display block !important")
                    quitGameBtn.setAttribute("style", "font-size: 20px; width: 150px; background-color: red; display block !important")    
                }              
            }
            else if(round.innerHTML<5){
                newRoundBtn.setAttribute("style", "margin-top: 90px; font-size: 20px; width: 150px; background-color: rgb(22, 91, 240); display block !important")
            }
        }
    }
    else if(!options.includes("")){
        statusText.textContent = "Draw!";
        running = false;
        if(round.innerHTML == 5){
            if(oScore.innerHTML > xScore.innerHTML){
                finalText.innerHTML = "Game Over"
                finalWinner.innerHTML = "Game Winner: Player O"
                newGameBtn.setAttribute("style", "font-size: 20px; width: 150px; background-color: green; display block !important")
                quitGameBtn.setAttribute("style", "font-size: 20px; width: 150px; background-color: red; display block !important")    
            }
            else if(oScore.innerHTML < xScore.innerHTML){
                finalText.innerHTML = "Game Over"
                finalWinner.innerHTML = "Game Winner: Player X"
                newGameBtn.setAttribute("style", "font-size: 20px; width: 150px; background-color: green; display block !important")
                quitGameBtn.setAttribute("style", "font-size: 20px; width: 150px; background-color: red; display block !important")    
            }
            else if(oScore.innerHTML == xScore.innerHTML){
                finalText.innerHTML = "Game Over"
                finalWinner.innerHTML = "Draw"
                newGameBtn.setAttribute("style", "font-size: 20px; width: 150px; background-color: green; display block !important")
                quitGameBtn.setAttribute("style", "font-size: 20px; width: 150px; background-color: red; display block !important")    
            }              
        }
        else if(round.innerHTML<5){
            newRoundBtn.setAttribute("style", "margin-top: 90px; font-size: 20px; width: 150px; background-color: rgb(22, 91, 240); display block !important")
        }
    }
    else{
        changePlayer();
    }
}
function newRound(){
    let roundNo = parseInt(round.innerHTML);
    currentPlayer = "X";
    options = ["", "", "", "", "", "", "", "", ""];
    statusText.textContent = `Player ${currentPlayer}'s turn`;
    cells.forEach(cell => cell.textContent = "");
    running = true
    round.innerHTML = roundNo + 1;
    newRoundBtn.setAttribute("style","display: none !important")
}
function newGame(){
    location.reload()
}