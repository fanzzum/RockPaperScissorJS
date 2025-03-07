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

