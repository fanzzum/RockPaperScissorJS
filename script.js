const rockbutton = document.querySelector(".rock");
const paperbutton = document.querySelector(".paper");
const scissorsbutton = document.querySelector(".scissors");
const scorenum1 = document.querySelector(".scorenum1");
const scorenum2 = document.querySelector(".scorenum2");
const winmessage = document.querySelector(".winmessage");
const roundnum = document.querySelector(".roundnum");
const buttons = document.querySelectorAll(".rock,.paper,.scissors");
const choicemessage = document.querySelector(".choicemessage");
let humanScore =0;
let computerScore=0;
let round =1;

function getComputerChoice()

{
    let rand = Math.random()
    if(rand<0.33)
    {
        return "rock";
    }
    else if(rand<0.69)
    {
        return "paper";
    }
    else
    {
        return "scissors";
    }
}

function getHumanChoice()
{
    return prompt("Your Choice? ");
}



function playRound(humanChoice, computerChoice)
{
    choicemessage.textContent="Computer chose "+computerChoice;
    if(humanChoice===computerChoice)
    {
        winmessage.textContent="            Tie            ";
    }
    else if(humanChoice=="rock")
    {
        if(computerChoice=="scissors")
        {
            humanScore++;
            winmessage.textContent="Player Wins The Round";
            
        }
        else
        {
            computerScore++;
            winmessage.textContent="Computer Wins The Round";
        }
    }
    else if(humanChoice=="paper")
    {
        if(computerChoice=="scissors")
        {
            computerScore++;
            winmessage.textContent="Computer Wins The Round";
        }
        else
        {
            humanScore++;
            winmessage.textContent="Player Wins The Round";
        }
    }
    else if(humanChoice=="scissors")
    {
        if(computerChoice=="paper")
        {
            humanScore++;
            winmessage.textContent="Player Wins The Round";
        }
        else
        {
            computerScore++;
            winmessage.textContent="Computer Wins The Round";
        }
    }
    scorenum1.textContent = humanScore;
    scorenum2.textContent = computerScore;
    if(humanChoice!== computerChoice)
    {
        round++;
        roundnum.textContent=round;
    }
    if(round > 5) {
        localStorage.setItem("winner", humanScore > computerScore ? "Player" : "Computer");
        window.location.href = "resultpage.html";
    }
    
    



}
buttons.forEach(button=>
{
    button.addEventListener("click",(event)=>
    {
        const computerChoice=getComputerChoice();
        const humanChoice = event.currentTarget.classList[0];
        playRound(humanChoice,computerChoice);
    });
}
);
