

let homeusscore = sessionStorage.getItem("homeusscore")||0;
let homecoscore = sessionStorage.getItem("homecoscore")||0;



let userscore = sessionStorage.getItem("userscoree")||0;
let totalPlays = sessionStorage.getItem("totalplayee")||0 ;
let compscore = sessionStorage.getItem("compscoree")||0;
let draws = sessionStorage.getItem("drawss")||0;


let message = document.querySelector("#msg");
let Uscore = document.querySelector("#user-score"); 
let Cscore = document.querySelector("#comp-score");
const winSound = new Audio("Images&Sound/WIN.mp3");
const loseSound = new Audio("Images&Sound/LOSE.mp3");
const drawSound = new Audio("Images&Sound/DRAW.mp3");
const options = document.querySelectorAll(".choices");


options.forEach((Option)=>{
    Option.addEventListener("click",()=>{
        let userchoice = Option.getAttribute("id") ;
    playgame(userchoice);
  })
})


// computer choice
const getcompchoice = ()=>{
    let arr = ["scissor","rock","paper"];
    let indx = Math.floor(Math.random()*3);
    return arr[indx];
}


const playgame =  (user)=>{
    const comp = getcompchoice();
    if(user===comp){
        message.innerText = "game is draw!";
        message.style.backgroundColor = "grey";
        drawSound.play();
        draws++;
        totalPlays++;
        sessionStorage.setItem("drawss" ,draws);
        sessionStorage.setItem("totalplayee",totalPlays);

    }
    else{
        let win = true;
        if (user=="rock") {
           win = comp=="paper"? false:true;
        }
        else if (user=="paper") {
            win = comp=="scissor"? false:true;
         }
        else{
            win = comp=="rock"? false:true;
         }
         showWinner(win , user ,comp);
    }
}

showWinner = (winner ,userchoice , compchoice ) =>{
    if(winner){
        message.innerText = `you win! ${userchoice} beats ${compchoice}`;
        message.style.backgroundColor = "green";
        winSound.play();
        userscore++;
        totalPlays++;
        homeusscore++;
        sessionStorage.setItem("homeusscore",homeusscore);
        Uscore.innerText = sessionStorage.getItem("homeusscore");
        sessionStorage.setItem("userscoree",userscore);
        sessionStorage.setItem("totalplayee",totalPlays);
    }
    else{
        message.innerText = `you lose! ${compchoice} beats ${userchoice}`;
        message.style.backgroundColor = "red";
        loseSound.play();
        compscore++;
        totalPlays++;
        homecoscore++;
        sessionStorage.setItem("homecoscore",homecoscore);
        Cscore.innerText = sessionStorage.getItem("homecoscore");
        sessionStorage.setItem("compscoree",compscore);
        sessionStorage.setItem("totalplayee",totalPlays);

    }
    
}


Uscore.innerText = sessionStorage.getItem("homeusscore")||0;
Cscore.innerText = sessionStorage.getItem("homecoscore")||0;




 




