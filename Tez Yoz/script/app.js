//elements
const word = document.getElementById('word'); //h3
const text = document.getElementById('input_area'); //input
const scoreEl = document.getElementById('score'); 
const timeEl = document.getElementById('time');
const endGameEl = document.getElementById('end_game');

const words = [
     "hayot",
     "borliq",
     "men",
     "ona",
     "tabiat",
     "hujjat",
     "maktab",
     "institut",
     "prezident",
     "ota",
     "terminal",
     "do'kon",
     "kartoshka",
     "pul",
     "xola",
     "kompyuter",
     "noutbuk",
     "ofis",
     "hammom",
     "mexanizatsiya",
     "til",
     "svilizatisya",
     "podshoh",
     "kasb",
     "natija",
     "gullarning",
     "traktor",
     "kitob",
     "vayrona",  
     "mashina",
     "to'y",
     "bola-chaqa",
     "g'ildirak",
     "kalkulyator",
     "harbiy",
     "blog",
     "yer",
     "tuhum",
     "parchalangan",
     "kemiruvchilar",
     "qurilish",
     "sohibqiron",
     "payg'ambar",
     "muqaddas",
     "mezbon",   
     "yagona",
     "soat",
     "qochish",
     "pistirma",
     "pochtachi",
     "qurol",
     "otishma",
     "deraza",
     "operatsiya",
     "tug'ilish",
     "orzu",
     "qoraqalpoqlar",
     "begonalar",
     "mehmon",
     "jamoat",
     "hashar",
     "taktika",
     "himoyalanish",
     "bomba",
     "yong'in",
     "bartaraf",
     "betaraf",
     "shavqatsiz",
     "rahmdil",
     "baland",
     "chuqur",
     "posbon",
     "qutqaruvchi",
]

let randomWord;

let score= 0;

let time = 60;

function getRandomWord() { 
    return words[Math.floor(Math.random() * words.length)]
}

function addToDom() {
     randomWord = getRandomWord();
     word.innerHTML = randomWord;
}

function updateScore() {  
     score++;
     scoreEl.innerHTML = score;
}

function updateTime() {
     time--;
     timeEl.innerHTML = time + 's';

     if(time === 0) {
          clearInterval(timeInterval)
          gameOver();
     }
}
const timeInterval = setInterval(updateTime, 1000);

function gameOver() {
     endGameEl.innerHTML = `
     <h1>Vaqting tugadi</h1>
     <h3>Sening ochkoing: ${score}</h3>
     <button onClick="location.reload()">Yangilash</button>
     `
     endGameEl.style.display = "flex"
}
text.addEventListener("input", (e) => {
     const typedText = e.target.value;

     if(typedText === randomWord) {
          updateScore();
          addToDom();
          e.target.value = "";
          updateTime();
     }
})

addToDom();