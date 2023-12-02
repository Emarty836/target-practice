const start = document.querySelector('#start');
const target = document.querySelector('#target');
const scoreBoard = document.querySelector('.score');
const time = document.querySelector('#time_left');
let score = 0;
let timelimit = 8000;
let orange = false;
let countdown;

function timer(seconds) {
  clearInterval(countdown);
  const now = Date.now();
  const then = now + (seconds * 1000);
  displayTimeLeft(seconds);
  //time.textContent=`:0${seconds}`; - not needed

  countdown = setInterval(() => {
    const secondsLeft = Math.round((then - Date.now())/1000);
    console.log(secondsLeft);

    if(secondsLeft<0) {
    clearInterval(countdown);
    return;
  }

  displayTimeLeft(secondsLeft);
  }, 1000);
}

function displayTimeLeft(seconds){
  const display = `:0${seconds}`;
  time.textContent = display;
}


function gamesBegin() {
  target.addEventListener('click', second);
  timer(8);
  console.log('its begun');
  scoreBoard.textContent = 0;
  orange = false;
  score = 0;
  targetMove();
  target.classList.remove('ghost');
  var sample = setTimeout( function() {
    target.classList.add('ghost');
    orange = true;}
    , timelimit);


  start.addEventListener('click', function() {
    clearTimeout(sample);
    gamesBegin();
  });
}


function second(e){
  if(!e.isTrusted) return;
  score++;
  scoreBoard.textContent = score;
  target.classList.add('ghost');
  setTimeout( function(){
    console.log('meepo');
    if (!orange){
    target.classList.remove('ghost');
    targetMove();}}
    ,100);
}

function targetMove(){
  const x = Math.floor((Math.random() - .5) * 1.9 * (window.innerWidth * .5));
  const y = Math.floor((Math.random() - .5) * 1.9 *  (window.innerHeight * .35));
  console.log(target);
  target.style.transform = `translate(${x}px,${y}px)`;
  console.log(x,y);
  console.log(target);
}


start.addEventListener('click', gamesBegin);



/*function target(){
    let object = document.createElement("div");
    object.classList.add('circle');
    const x = Math.floor(Math.random() * (window.innerWidth * .8));
    const y = Math.floor(Math.random() * (window.innerHeight * .6));
    console.log(x,y);
    object.style.transform = `translate(${x+50}px,${y+50}px)`;
    document.body.appendChild(object);
    start.addEventListener('click', () => object.remove());
}*/

//target.addEventListener('click', second);
