var p1Display = document.getElementById("p1Display");
var p2Display = document.getElementById("p2Display");
var btn1= document.getElementById("btn1");
var btn2= document.getElementById("btn2");
var btnReset=document.getElementById("btnReset");
var numInput= document.querySelector("input");
var finalScore=document.querySelector("#finalScore")
var p1Score = 0;
var p2Score= 0;
var gameOver= false;
var winningScore=5;


btn1.addEventListener("click",function(){
    if(!gameOver){
        p1Score ++;
        if(p1Score===winningScore){
            gameOver=true;
            p1Display.classList.add("winner");
        }
        p1Display.textContent=p1Score;
    }
});

btn2.addEventListener("click",function(){
    if(!gameOver){
    p2Score ++;
    
    if(p2Score===winningScore){
        gameOver=true;
        p2Display.classList.add("winner");
    }
    p2Display.textContent=p2Score;
    }
});


btnReset.addEventListener("click",function(){
    reset();
});

function reset(){
    p1Score=0;
    p2Score=0;
    p1Display.textContent=p1Score;
    p2Display.textContent=p2Score;
    p1Display.classList.remove("winner");
    p2Display.classList.remove("winner");
    gameOver=false;
}


numInput.addEventListener("change",function(){
   finalScore.textContent =numInput.value;
   winningScore=Number(numInput.value);
   reset(); 
});




