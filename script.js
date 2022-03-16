'use strict';
let score0El=document.querySelector('#score--0');
let score1El=document.querySelector('#score--1');
let player0EL=document.querySelector('.player--0');
let player1EL=document.querySelector('.player--1');

let diceEl=document.querySelector('.dice');
let btnRoll=document.querySelector('.btn--roll');
let btnNew=document.querySelector('.btn--new');
let btnHold=document.querySelector('.btn--hold');
let current0El=document.querySelector('#current--0');
let current1El=document.querySelector('#current--1');
let scores,curentScore,activePlayer,playing
const init=function(){
    score0El.innerHTML=0;
    score1El.innerHTML=0;
    diceEl.classList.add('hidden');
    curentScore=0;
    activePlayer=0;
    scores=[0,0];
    playing=true;
    score0El.textContent=0;
    score1El.textContent=0;
    current0El.textContent=0;
    current1El.textContent=0;
    player0EL.classList.remove('player--winner');
    player1EL.classList.remove('player--winner');
    player0EL.classList.add('player--active');
    player1EL.classList.remove('player--active')
 }
init()

let switchPlayer= function(){
    document.getElementById(`current--${activePlayer}`).innerHTML=0;
        curentScore=0;
        activePlayer=activePlayer ===0? 1:0;
        player0EL.classList.toggle(`player--active`);
        player1EL.classList.toggle(`player--active`);
}


btnRoll.addEventListener('click',function(){
    if(playing){

    let dice =Math.trunc(Math.random()*6)+1; 
    diceEl.classList.remove('hidden');
    diceEl.src=`dice-${dice}.png`;
    if(dice!==1){
        curentScore+=dice;
        document.getElementById(`current--${activePlayer}`).innerHTML=curentScore;
        

    } else {
        switchPlayer()

    }
    
    }
})
btnHold.addEventListener('click',function(){
    if(playing){
    scores[activePlayer]+=curentScore;
    document.getElementById(`score--${activePlayer}`).textContent=scores[activePlayer];
    if(scores[activePlayer]>=100){
        playing=false;
        document.querySelector(`.player--${activePlayer}`).classList.add('player--winner');
        document.querySelector(`.player--${activePlayer}`).classList.remove('player--active');
    
    }else{
        switchPlayer();
    }

}
});
btnNew.addEventListener('click',init)
