let gameseq= [];
let userseq= [];

let started = false;
let level = 0;

let btns = ["yellow","green","red","blue"];

let h2 = document.querySelector('h2');

let btn =document.querySelector("button");

document.addEventListener("keypress" ,function () {
    if (started == false) {
        console.log("game started");
        started = true;

        levelUp();   
    }
    
});

function gameflash(btn){
    btn.classList.add("flash");
    setTimeout( function(){
        btn.classList.remove("flash");

    },150);

}

function userflash(btn){
    btn.classList.add("userflash");
    setTimeout( function(){
        btn.classList.remove("userflash");

    },150);

}
function levelUp(){
    userseq =[];
    level++;
    h2.innerText= `level ${level }`;

    let randidx = Math.floor(Math.random() *4) ;
    let randcolor = btns[randidx];
    let randBtn = document.querySelector(`.${randcolor}`);
    gameseq.push(randcolor);
    console.log(gameseq);
   gameflash(randBtn);
}
function checkColor(idx) {
 
   if (userseq[idx] === gameseq[idx]) {
    if (userseq.length == gameseq.length) {
      levelUp();  
    }
   }
   else{
    h2.innerHTML= `Game over! Your Score was <b>${level}</b> <br> press Any Key TO Start`;
    document.querySelector("body").style.backgroundColor = "red";
    setTimeout(function()
    {
        document.querySelector("body").style.backgroundColor = "white";   
    },150)
    reset();
   }
}
function btnpress (){
    let btn =this;
    userflash(btn);

  usercolor = btn.getAttribute("id");
  
  userseq.push(usercolor);
  console.log(usercolor);
  checkColor(userseq.length-1);
}

let allBtns = document.querySelectorAll(".btn");
for (btn of allBtns) {
    btn.addEventListener("click",btnpress)
}

function reset() {
    started = false;
    gameseq = [];
    userseq = [];
    level = 0;

}