


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

let play;


btn.addEventListener("click", function() {
    if(score1 >= 3 || score2 >= 3)
        return;
    play = document.querySelector("#input").value; //I had forgotten to put .value, which was why it 
    //wasn't working for a bit
    console.log(`You played: ${play}`);
    if (play !== "rock" && play !== "paper" && play !== "scissors") {
        console.error("wrong entry");
        return;
    }

    let comp = getComputerChoice();
    console.log(comp);

    if (play == comp) return;
    if ((play == "rock" && comp == "scissors") || (play == "paper" && comp == "rock") || 
    (play == "scissors" && comp == "paper")) score1++;
    else score2++;
    console.log(`Score. You: ${score1}, Computer: ${score2}`);
    
    if(score1 == 3 || score2 == 3){
        if(score1 > score2) console.log("YOU WIN");
        else console.log("YOU LOSE :/");
    }
});

