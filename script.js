


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

const p1_score = document.querySelector("#score1");
const p2_score = document.querySelector("#score2");
const msg = document.querySelector(".msg");
const startOver = document.querySelector("#start-over");

function displayScore(){
    console.log(`Score. You: ${score1}, Computer: ${score2}`);
    p1_score.textContent = score1;
    p2_score.textContent = score2;
}

const btnContainer = document.querySelector(".btn-container");

function malFunction(e){
    play = document.querySelector("#input").value;
    const p = document.createElement("p");
    const adiv = document.querySelector("div");
    adiv.appendChild(p);
    //if (e.isTrusted)
    adiv.innerHTML = play;
    p.textContent = play;

    
}

function handleStartOver() {
    score1 = score2 = 0;
    displayScore();
    msg.textContent = "Let's Play!";
}

function handleShit(e){
    msg.textContent = "";
    if(score1 >= 3 || score2 >= 3)
        return;

    play = e.target.id;
    // play = document.querySelector("#input").value; //I had forgotten to put .value, which was why it 
    // //wasn't working for a bit
    console.log(`You played: ${play}`);

    if (play !== "rock" && play !== "paper" && play !== "scissors") {
        console.log("wrong entry");
        return;
    }

    let comp = getComputerChoice();
    console.log("Computer played: "+ comp);

    if (play == comp) {
        displayScore();
        msg.textContent = "Draw";
        return;
    }
    if ((play == "rock" && comp == "scissors") || (play == "paper" && comp == "rock") || 
    (play == "scissors" && comp == "paper")) score1++;
    else {
        score2++;
    } 
    displayScore();
    
    if (score2 == 3) 
        msg.textContent = "You Suck! LMAO";

    if(score1 == 3 || score2 == 3){
        if(score1 > score2) msg.textContent="You Win!";
        else msg.textContent= "YOU LOSE :/";
    }
}

//btn.addEventListener("click", (e) => malFunction(e)); // you just put the name of the function with no ()
                                           // in JS, a function() will execute wherever it is placed.
btnContainer.addEventListener("click", (e) => handleShit(e));
startOver.addEventListener("click", handleStartOver);
