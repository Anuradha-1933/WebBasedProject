let gameSeq=[];
let userSeq=[];
let btns=["yellow","red","purple","green"];
let started=false;
let level=0;
let h2=document.querySelector("h2");
document.addEventListener("keypress",function(){
    if(started==false){
        console.log("Game is started");
        started=true;
        levelup();
    }
});
function gameFlash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash")
    },250); 
} 
function userFlash(btn){
    btn.classList.add("userflash");
    setTimeout(function(){
        btn.classList.remove("userflash")
    },250); 
} 
function levelup(){
    userSeq=[];
    level++;  
    h2.innerText=`Level ${level}`;
    let ranIdx=Math.floor(Math.random()*3);
    // console.log(ranIdx);
    let ranColor=btns[ranIdx];
    // console.log(ranColor);
    let ranbtn=document.querySelector(`.${ranColor}`);
    // console.log(ranbtn);
    gameSeq.push(ranColor);
    console.log(gameSeq);  
    gameFlash(ranbtn);
}
function checkAns(idx){
    // console.log("curr level : ", level);
    // let idx=level-1;
    if(userSeq[idx]==gameSeq[idx]){
        if(userSeq.length==gameSeq.length){
            // levelup();
            setTimeout(levelup,1000);
        }
    } else{
        h2.innerHTML=`Game over ! Your score was<br>${level}</br> <br>Press any key to start `;
        document.querySelector("body").style.backgroundColor="red";
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor="white";
        },150);
        reset();
    }
}
function btnPress(){
    // console.log(this);
    let btn=this;
    userFlash(btn); 
    userColor=btn.getAttribute("id");
    userSeq.push(userColor);
    checkAns(userSeq.length-1);
}
let allbtns=document.querySelectorAll(".btn");
for(btn of allbtns){
    btn.addEventListener("click",btnPress);
}
function reset(){
    started=false;
    gameSeq=[];
    userSeq=[];
    level=0;
}