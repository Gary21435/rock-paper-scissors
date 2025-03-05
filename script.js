
function getComputerChoice() {
    let num = Math.random();
    let pick = "";

    if (num <= 0.33)
        pick = "rock";
    else if (num > .33 && num <= .67) 
        pick = "paper";
    else
        pick = "scissors";

    return pick;
}

let score1 = 0;
let score2 = 0;

for(i=0; i < 6; i++)
{
    console.log(i);
}

while (score1 < 3 && score2 < 3) {
    let play = prompt("Rock, paper, scissors, SHOOT: ");
    console.log(`You played: ${play}`);
    if (play !== "rock" && play !== "paper" && play !== "scissors") {
        console.error("wrong entry");
        continue;
    }

    let comp = getComputerChoice();
    console.log(comp);

    if (play == comp) continue;
    if ((play == "rock" && comp == "scissors") || (play == "paper" && comp == "rock") || 
    (play == "scissors" && comp == "paper")) score1++;
    else score2++;
    console.log(`Score. You: ${score1}, Computer: ${score2}`);
}

if(score1 > score2) console.log("YOU WIN");
else console.log("YOU LOSE :/");