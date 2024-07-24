let userScore=0;
let computerScore=0;

const choices=document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");

const userScorepara=document.querySelector("#user-score");
const computerScorepara=document.querySelector("#computer-score");

const genComputerChoice=()=>{
    const options=["rock","paper","scissors"];
    const randomidx=Math.floor(Math.random() *3);        //(1)
    return options[randomidx];
};


const drawGame=()=>{
    console.log("game was draw");
    msg.innerText="Game Was Draw. play again.";
    msg.style.backgroundColor="aqua";
};

const showWinner=(userWin , userchoice , ComputerChoice)=>{
    if(userWin){
        userScore++;
        userScorepara.innerText=userScore;
        console.log("you win!");
        msg.innerText=`you win! your ${userchoice} beats ${ComputerChoice}`;
        msg.style.backgroundColor="green";
    }else{
        computerScore++;
        computerScorepara.innerText=computerScore;
        console.log("you lose");
        msg.innerText=`you lose.${ComputerChoice} beats your ${userchoice}`;
        msg.style.backgroundColor="red";
    }
;}



const playGame=(userchoice)=>{
   console.log("user choice =",userchoice);   //(this is user choice )      //(2)

   const ComputerChoice=genComputerChoice();
   console.log("computer choice =",ComputerChoice);   //(computer choice)     //(2)

   if(userchoice === ComputerChoice){
      drawGame();
   }else{
    let userWin=true;

    if(userchoice==="rock"){
    //scissors,paper are left

    userWin=ComputerChoice=== "paper" ? false:true;
    }else if(userchoice=== "paper"){
         // rock,scissor are left

     userWin=ComputerChoice=== "scissors"? false:true;
    }else{
          //paper,scissors are left

       userWin= ComputerChoice==="rock"? false:true;
    }
    showWinner(userWin,userchoice,ComputerChoice);
   }


};


choices.forEach((choice)=>{
    //console.log(choice);        //(we can write or not its your wish (extra))           // (1)
    choice.addEventListener("click",()=>{
        const userchoice=choice.getAttribute("id")
        //console.log("choice was clicked",userchoice);   //(its your choice (extra))

        playGame(userchoice);
    });
});