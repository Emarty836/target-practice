const start = document.querySelector('#start');
const target = document.querySelector('#target');
const scoreBoard = document.querySelector('.score');
let score = 0;


function gamesBegin() {
  target.addEventListener('click', second);
  console.log('its begun');
  scoreBoard.textContent = 0;
  timeUp = false;
  score = 0;
  target.classList.remove('ghost');
  targetMove();
  var sample = setTimeout(() => target.classList.add('ghost'), 5000);
  start.addEventListener('click', function() {
    clearTimeout(sample);
    gamesBegin();
  });

  //target();
}


function second(e){
  if(!e.isTrusted) return;
  console.log('yes');
  score++;
  scoreBoard.textContent = score;
  targetMove();
}

function targetMove(){
  const x = Math.floor(Math.random() * (window.innerWidth * .8));
  const y = Math.floor(Math.random() * (window.innerHeight * .6));
  target.style.transform = `translate(${x}px,${y}px)`;
}
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

start.addEventListener('click', gamesBegin);
target.addEventListener('click', second);
