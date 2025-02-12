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

let humanScore=0;
let computerScore =0;
console.log(getComputerChoice());

function playRound(humanChoice, computerChoice)
{
    if(humanChoice===computerChoice)
    {
        console.log("Draw");
    }
    else if(humanChoice=="rock")
    {
        if(computerChoice=="scissors")
        {
            humanScore++;
        }
        else
        {
            computerScore++;
        }
    }
    else if(humanChoice=="paper")
    {
        if(computerChoice=="scissors")
        {
            computerScore++;
        }
        else
        {
            humanScore++;
        }
    }
    else if(humanChoice=="scissors")
    {
        if(computerChoice=="paper")
        {
            humanScore++;
        }
        else
        {
            computerScore++;
        }
    }
    
    
}

for(let i=0;i<5;i++)
{
    const humanChoice = getHumanChoice();
    const computerChoice = getComputerChoice();
    playRound(humanChoice,computerChoice);
    console.log(`Your Score : ${humanScore}\nComputer Score : ${computerScore}`);
}
if(humanScore>computerScore)
{
    console.log("You WIN");
}
else if(computerScore>humanScore)
{
    console.log("YOU LOSE");
}
else
{
    console.log("DRAW");
}